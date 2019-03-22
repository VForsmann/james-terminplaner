import { LitElement, html, customElement, property } from 'lit-element';

@customElement('app-sidebar')
class Sidebar extends LitElement {
    render() {
        return html`
        <paper-icon-item>
            <iron-icon icon="inbox" slot="item-icon"></iron-icon> <span>Inbox</span>
        </paper-icon-item>
        <paper-icon-item>
            <iron-icon icon="query-builder" slot="item-icon"></iron-icon> <span>Snoozed</span>
        </paper-icon-item>
        <paper-icon-item>
            <iron-icon icon="done" slot="item-icon"></iron-icon> <span>Done</span>
        </paper-icon-item>
        <paper-icon-item>
            <iron-icon icon="drafts" slot="item-icon"></iron-icon> <span>Drafts</span>
        </paper-icon-item>
        <paper-icon-item>
            <iron-icon icon="send" slot="item-icon"></iron-icon> <span>Sent</span>
        </paper-icon-item>
        <paper-icon-item>
            <iron-icon icon="delete" slot="item-icon"></iron-icon> <span>Trash</span>
        </paper-icon-item>
        <paper-icon-item>
            <iron-icon icon="report" slot="item-icon"></iron-icon> <span>Spam</span>
        </paper-icon-item>
    `;
    }
}