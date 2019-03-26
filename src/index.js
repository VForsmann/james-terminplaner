import './app.ts';
import './styles.scss';

const views = require.context('./views', true, /\.ts$/);
views.keys().forEach(views);

const elements = require.context('./elements', true, /\.ts$/);
elements.keys().forEach(elements);

import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-swipeable-container/iron-swipeable-container.js';
import '@polymer/paper-card/paper-card.js';


/* import '@polymer/font-roboto/roboto.js'; */
import '@polymer/paper-item/paper-icon-item.js';