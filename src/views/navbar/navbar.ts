import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-navbar')
class Navbar extends LitElement {
    static styles = css`
    `

    render() {
        return html`
        <app-header-layout>
            <app-header slot="header">
                <app-toolbar class="navbar">
                    <slot name="toggle"></slot>
                    <div main-title>Name</div>
                    <paper-button raised>
                        <iron-icon icon="perm-identity"></iron-icon>Login
                    </paper-button>
                </app-toolbar>
            </app-header>
        </app-header-layout>
    `;
    }
}