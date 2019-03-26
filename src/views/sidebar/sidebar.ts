import { LitElement, html, customElement, property } from 'lit-element';
import { Router } from '../../elements/lit-router';

@customElement('app-sidebar')
class Sidebar extends LitElement {

    routings = [
        {
            pattern: "test",
            component:
                html`
                <paper-icon-item @click=${() => Router.Instance.navigate("demo")}>
                    <iron-icon icon="inbox" slot="item-icon"></iron-icon>
                    <span>Inbox</span>
                </paper-icon-item>`
        },
        {
            pattern: "demo",
            component: html`
            <paper-icon-item @click=${() => Router.Instance.navigate("test")}>
                <iron-icon icon="query-builder" slot="item-icon"></iron-icon> <span>Snoozed</span>
            </paper-icon-item>`
        }
    ]
    render() {

        return html`
        <app-lit-router .routings=${this.routings}></app-lit-router>
        
    `;
    }
}