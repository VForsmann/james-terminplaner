import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-navbar')
class Navbar extends LitElement {
    render() {
        return html`
        <app-toolbar>
        <div main-title>Name</div>
        </app-toolbar>
    `;
    }
}