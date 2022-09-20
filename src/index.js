import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import customStore from './redux/store';
import { AppRoutes } from './routes'
ReactDOM.render(
  <Provider store={customStore}>
    <AppRoutes>
      <App />
    </AppRoutes>
  </Provider>, document.getElementById('root'));
