import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-card')
class Card extends LitElement {
    @property() message = '';
    static styles = css`
    `

    render() {
        const routings = [
            {
                pattern: "59399",
                component: html`<div>${this.message}</div>`
            }
        ]

        return html`
        <app-lit-router .routings=${routings}></app-lit-router>
    `;
    }
}