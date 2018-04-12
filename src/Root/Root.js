// @flow
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import {
  Router,
} from 'react-router-dom';

import i18nInstance from './i18next';

import AppRoute from '../AppRoute';

import history from './history';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18nextProvider i18n={i18nInstance}>
        <Router history={history}>
          <AppRoute />
        </Router>
      </I18nextProvider>
    </ConnectedRouter>
  </Provider>
);

export default Root;
