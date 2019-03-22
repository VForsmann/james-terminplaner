
import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-container')
class App extends LitElement {
  static styles = css`

  app-header {
    background-color: #4285f4;
    color: #fff;
  }

  app-header paper-icon-button {
    --paper-icon-button-ink-color: #fff;
  }

  app-drawer-layout {
    --app-drawer-layout-content-transition: margin 0.2s;
  }

  app-drawer {
    --app-drawer-content-container: {
      background-color: #eee;
    }
  }

  .drawer-content {
    margin-top: 80px;
    height: calc(100% - 80px);
    overflow: auto;
  }
  `

  toggleSidebar() {
    // Das hier ist ganz ganz böse, aber Webcomponents sind so Frisch, da gibts noch einige Stoplerstellen mit TS, also geht das :)
    let drawerLayout = this.shadowRoot!.querySelector('#drawerLayout') as any;
    if (drawerLayout!.forceNarrow || !drawerLayout.narrow) {
      drawerLayout.forceNarrow = !drawerLayout.forceNarrow;
    } else {
      drawerLayout.drawer.toggle();
    }
  }

  render() {
    return html`
        <!-- Cares about responsive Sidebar -->
        <app-header-layout>
        
          <app-header fixed effects="waterfall" slot="header">
            <app-toolbar>
              <paper-icon-button @click="${() => this.toggleSidebar()}" icon="menu"></paper-icon-button>
              <div main-title>Inbox</div>
            </app-toolbar>
          </app-header>
        
          <app-drawer-layout id="drawerLayout">
        
            <app-drawer slot="drawer">
              <div class="drawer-content">
                <app-sidebar></app-sidebar>
              </div>
            </app-drawer>
        
            <app-main></app-main>
        
          </app-drawer-layout>
        
        </app-header-layout>
    `;
  }
}