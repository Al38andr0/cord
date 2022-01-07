import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import * as serviceWorker from './serviceWorkerRegistration'

serviceWorker.register();
ReactDOM.render(<App />, document.getElementById('root'));
