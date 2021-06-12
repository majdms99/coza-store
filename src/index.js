import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Provider} from 'react-redux'
import store from './components/redux/store'

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider> ,
  document.getElementById('root')
);

