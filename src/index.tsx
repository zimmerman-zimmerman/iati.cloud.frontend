import React from 'react';
import { hydrate, render } from 'react-dom';
import 'index.css';
import App from 'app';
import * as serviceWorker from 'serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement != null) {
  console.log('so this is slower then the serviceworker ');
  if (rootElement.hasChildNodes()) {
    hydrate(<App openSnackbar={serviceWorker.update} />, rootElement);
  } else {
    render(<App openSnackbar={serviceWorker.update} />, rootElement);
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (process.env.REACT_APP_NODE_ENV === 'development') {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
