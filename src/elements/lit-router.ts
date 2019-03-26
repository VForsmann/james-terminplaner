import { LitElement, html, customElement, property, css, TemplateResult, supportsAdoptingStyleSheets } from 'lit-element';

@customElement('app-lit-router')
class LitRouter extends LitElement {
    @property() routings = [{ pattern: '', component: html`` }];

    constructor() {
        super();
        Router.subscribe(() => this.requestUpdate());
    }

    render() {
        let result;
        this.routings.forEach(r => {
            if (Router.path.includes(r.pattern)) {
                result = r.component;
            }
        })

        return result ? result : html`ROUTE NOT DEFINED`;
    }
}

class InnerRouter {
    private listener: Function[] = [];
    private root = "/";
    private static _instance: InnerRouter;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    get path() {
        return this.appendNoRoot(location.pathname);
    }

    subscribe(listener: Function) : Function {
        this.listener.push(listener);
        return () => {
            this.listener = this.listener.filter(other => other !== listener);
        };
    }

    navigate(relUrl: string) {
        history.pushState(null, '', this.appendRoot(relUrl));
        this.updateListener();
    }

    private updateListener() {
        const path = this.path;
        this.listener.forEach(listener => listener(path));
    }

    private appendRoot(relURL: string) {
        return relURL.startsWith(this.root) ? relURL : this.root + relURL;
    }

    private appendNoRoot(relURL: string) {
        if (relURL.startsWith(this.root)) {
            return relURL.substring(this.root.length); 
        } else {
            return relURL;
        }
    }
}
export const Router = InnerRouter.Instance;