import { LitElement, html, customElement, property, css } from 'lit-element';

@customElement('app-main')
class Main extends LitElement {
    static styles = css`demo-snippet {
        --demo-snippet-demo: {
          background: var(--paper-grey-200);
          padding: 16px;
        };
        --demo-snippet-code: {
          max-height: 300px;
        }
      }

      .vertical-section-container {
        max-width: 400px;
      }

      paper-card {
        width: 100%;
      }

      .horizontal {
        @apply --layout-horizontal;
      }

      .flex {
        @apply --layout-flex;
      }

      .justified {
        @apply --layout-justified;
      }

      .amber {
        background: var(--paper-amber-900);
      }

      .lime {
        background: var(--paper-lime-500);
      }

      .cyan {
        background: var(--paper-cyan-500);
      }

      .dark {
        background: var(--paper-blue-grey-500);
      }
      paper-card.dark, paper-card.amber, paper-card.lime, paper-card.cyan {
        color: white;
        --paper-card-header-color: white;
      }

      paper-checkbox {
        display: block;
        margin-bottom: 4px;
        --paper-checkbox-label-color: white;
        --paper-checkbox-unchecked-color: white;
      }

      paper-icon-button {
        color: var(--paper-grey-600);
      }

      paper-icon-button.white {
        color: white !important;
      }

      iron-swipeable-container {
          margin-top: 10px;
          margin-left: 10px;
          margin-right: 10
          px;
      }
      `

    render() {

        return html`
    <iron-swipeable-container swipe-style="curve">
        <paper-card heading="Top western road trips" alt="Sailboat Harbor" class="white">
            <div class="card-content">1,000 miles of wonder</div>
            <div class="card-actions">
                <paper-button>Share</paper-button>
                <paper-button>Explore</paper-button>
                <paper-icon-button icon="expand-more" title="more info" onclick="_toggle()" style="float:right;">
                </paper-icon-button>
                <iron-collapse id="more-info" style="width:100%;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ante, tempus eget volutpat ac,
                    cursus ac ante. Nulla facilisi. Praesent sed lacinia ligula. Donec malesuada nisl eget quam iaculis,
                    vel placerat justo cursus.
                </iron-collapse>
            </div>
        </paper-card>
    </iron-swipeable-container>
    <iron-swipeable-container swipe-style="curve">
        <paper-card heading="Top western road trips" alt="Sailboat Harbor" class="white">
            <div class="card-content">1,000 miles of wonder</div>
            <div class="card-actions">
                <paper-button>Share</paper-button>
                <paper-button>Explore</paper-button>
                <paper-icon-button icon="expand-more" title="more info" onclick="_toggle()" style="float:right;">
                </paper-icon-button>
                <iron-collapse id="more-info" style="width:100%;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ante, tempus eget volutpat ac,
                    cursus ac ante. Nulla facilisi. Praesent sed lacinia ligula. Donec malesuada nisl eget quam iaculis,
                    vel placerat justo cursus.
                </iron-collapse>
            </div>
        </paper-card>
    </iron-swipeable-container>
    <iron-swipeable-container swipe-style="curve">
        <paper-card heading="Top western road trips" alt="Sailboat Harbor" class="white">
            <div class="card-content">1,000 miles of wonder</div>
            <div class="card-actions">
                <paper-button>Share</paper-button>
                <paper-button>Explore</paper-button>
                <paper-icon-button icon="expand-more" title="more info" onclick="_toggle()" style="float:right;">
                </paper-icon-button>
                <iron-collapse id="more-info" style="width:100%;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim ante, tempus eget volutpat ac,
                    cursus ac ante. Nulla facilisi. Praesent sed lacinia ligula. Donec malesuada nisl eget quam iaculis,
                    vel placerat justo cursus.
                </iron-collapse>
            </div>
        </paper-card>
    </iron-swipeable-container>
    `;
    }
}