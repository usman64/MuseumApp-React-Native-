import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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
import MuseumMap from './containers/MuseumMap';
import More from './containers/More';
import About from './components/About';
import SplashScreen from './components/SplashScreen';

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More
    },
    About: {
      screen: About
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    Map: {
      screen: MuseumMap
    },
    More: {
      screen: MoreStack
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: AppTabNavigator
    },
    SplashScreen: {
      screen: SplashScreen
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      header: null
    }
  }
);

// const PuppetsStack = createStackNavigator()

// const EventsStack = createStackNavigator()

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
