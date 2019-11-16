import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers/index';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

import { Provider } from 'react-redux';

import CounterScreen from './containers/CounterScreen';
import Home from './containers/Home';

const AppNavigator = createStackNavigator(
  {
    Counter: {
      screen: CounterScreen
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Counter'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
