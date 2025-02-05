import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'
import {Provider} from 'react-redux'
import {createStore} from 'redux'


// add imports and code

//passing in manageUsers reducer to the store
const store = createStore(manageUsers)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
