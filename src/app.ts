
import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-container')
class App extends LitElement {
  static styles = css`
  app-drawer-layout:not([narrow]) [drawer-toggle] {
    display: none;
  }
  
  .navbar {
    padding: 0px;
  }
  `
  render() {
    return html`
        <!-- Cares about responsive Sidebar -->
        <app-drawer-layout fullbleed>
          <!-- Toggeling Sidebar -->
          <app-drawer slot="drawer">
            <app-sidebar></app-sidebar>
          </app-drawer>
          <!-- Header Layout -->
          <app-navbar>
            <paper-icon-button slot="toggle" icon="menu" drawer-toggle></paper-icon-button>
          </app-navbar>
          <!-- Main Content -->
          <app-main></app-main>
        </app-drawer-layout>
    `;
  }
}