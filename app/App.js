// @flow
'use strict';
import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import reducer from './reducers';
import {  AppRegistry } from 'react-native';
import AppContainer from './containers/AppContainer';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState){
  /* An ehancer is a way of composing a bunch of middleware functions
  that run in each transformation of state of your application. */
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );

  return createStore(reducer, initialState, enhancer);
}

class App extends Component {
  store : typeof createStore

  constructor(props){
    super(props);
    this.store = configureStore({});
  }

  render(){
    return (
      <Provider store={this.store}>
        <AppContainer/>
      </Provider>
    );
  }

}

AppRegistry.registerComponent('TemplateApp', () => App);
