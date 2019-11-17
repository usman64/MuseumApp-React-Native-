import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers/index';
import thunkMiddleware from 'redux-thunk';
import Icon from 'react-native-vector-icons/FontAwesome';

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

import { Provider } from 'react-redux';

import CounterScreen from './containers/CounterScreen';
import Explore from './containers/Explore';
import MuseumMap from './containers/MuseumMap';
import More from './containers/More';
import About from './components/About';
import SplashScreen from './components/SplashScreen';

const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      header: null
    }
  },
  Search: { screen: CounterScreen },
  CategorizedPuppets: { screen: CounterScreen },
  RegionalPuppets: { screen: CounterScreen },
  Events: { screen: CounterScreen }
});

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More
    },
    About: {
      screen: About
    }
    //More screen here
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
    Explore: {
      screen: ExploreStack,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='search' color={tintColor} size={24} />
        )
      }
    },
    Map: {
      screen: MuseumMap,
      navigationOptions: {
        tabBarLabel: 'MAP',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='map' color={tintColor} size={24} />
        )
      }
    },
    More: {
      screen: MoreStack,
      navigationOptions: {
        tabBarLabel: 'MORE',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='ellipsis-h' color={tintColor} size={24} />
        )
      }
    }
  },
  {
    // tabBarOptions: ({ navigation }) => {
    //   const { routeName } = navigation.state.routes[navigation.state.index];
    //   return {
    //     headerTitle: routeName
    //   };
    // }
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elavation: 5
      }
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
