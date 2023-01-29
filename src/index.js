import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import store from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  
);


