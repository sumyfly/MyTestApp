global.__DEV__ && Object.assign(global, { self: global, this: global }); //fix for whatwg-fetch@dev
import React, { Component } from 'react';
import App from './containers/App';

export default class AppContainer extends Component {
  render() {
    return (
        <App />
    );
  }
}

