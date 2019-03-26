import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-main')
class Main extends LitElement {
  static styles = css`
      `

  render() {
    const routings = [
      {
        pattern: "test",
        component: html`<div>Mein Main Test</div>`
      },
      {
        pattern: "demo",
        component: html`<app-card message="test"></app-card>`
      }
    ];
    return html`
        <app-lit-router .routings=${routings}></app-lit-router>
    `;
  }
}