import { LitElement, html, customElement, property, css } from 'lit-element';
export var bla = "test";

@customElement('app-navbar')
class Navbar extends LitElement {
    static styles = css`
    `

    render() {
        return html`
        <div main-title>Inbox</div>
    `;
    }
}