import './app.ts';
import './styles.scss';

const views = require.context('./views', true, /\.ts$/);
views.keys().forEach(views);

const elements = require.context('./elements', true, /\.ts$/);
elements.keys().forEach(elements);


import '@polymer/app-layout/'
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icons/iron-icons.js';
