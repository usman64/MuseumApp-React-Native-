import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegistry, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers/index';
import thunkMiddleware from 'redux-thunk';
import Icon from 'react-native-vector-icons/FontAwesome';

const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

import { Provider } from 'react-redux';

import CounterScreen from './containers/CounterScreen';
import Explore from './containers/Explore';
import MuseumMap from './containers/MuseumMap';
import More from './containers/More';
import About from './components/More/About';
import Settings from './components/More/Settings';
import ContactUs from './components/More/ContactUs';
import ReportProblem from './components/More/ReportProblem';
// import SplashScreen from './components/layout/SplashScreen';
import EventsScreen from './containers/EventsScreen';
import SingleEventScreen from './components/Explore/events/SingleEventScreen';
import PuppetsScreen from './containers/PuppetsScreen';
import SearchScreen from './containers/SearchScreen';
import SinglePuppetScreen from './components/Explore/puppets/SinglePuppetScreen';
import QrCodeScreen from './containers/QrCodeScreen';

import { connect } from 'react-redux';
import { changeFontScale } from './Actions/changeFontScale';
// const languageoptions = {
//   urdu: (this.props.language)?"helo":"urdu"
// }
// connect(mapStateToProps, null)(langauageoptions);

// const eventsTitle = (this.language) ? "تقریبات": "Events"
const ExploreStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      header: null
    }
  },
  QrScan: {
    screen: QrCodeScreen
  },
  Search: {
    screen: PuppetsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'maroon'
      },

      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
  SinglePuppet: {
    screen: SinglePuppetScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'maroon'
      },

      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
  CategorizedPuppets: {
    screen: PuppetsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'maroon'
      },

      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
  RegionalPuppets: {
    screen: PuppetsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'maroon'
      },

      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },
  Event: {
    screen: EventsScreen,
    navigationOptions: {
      title: 'Events',
      headerStyle: {
        backgroundColor: 'maroon'
      },

      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white'
      },
      headerTintColor: 'white'
    }
  },

  SingleEvent: {
    screen: SingleEventScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'maroon'
      },

      headerTitleStyle: {
        fontWeight: '700',
        fontSize: 25,
        color: 'white'
      },
      headerTintColor: 'white'
    }
  }
});

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More,
      navigationOptions: {
        header: null
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        title: 'About Us',
        headerStyle: {
          backgroundColor: 'maroon'
        },

        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 25,
          color: 'white'
        },
        headerTintColor: 'white'
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: 'Settings',
        headerStyle: {
          backgroundColor: 'maroon'
        },

        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 25,
          color: 'white'
        },
        headerTintColor: 'white'
      }
    },
    ContactUs: {
      screen: ContactUs,
      navigationOptions: {
        title: 'Contact Us',
        headerStyle: {
          backgroundColor: 'maroon'
        },

        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 25,
          color: 'white'
        },
        headerTintColor: 'white'
      }
    },
    ReportProblem: {
      screen: ReportProblem,
      navigationOptions: {
        title: 'Report',
        headerStyle: {
          backgroundColor: 'maroon'
        },

        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 25,
          color: 'white'
        },
        headerTintColor: 'white'
      }
    }
    //More screen here
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
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
      activeTintColor: 'maroon',
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

const AppNavigator = createSwitchNavigator(
  {
    Main: {
      screen: AppTabNavigator
    }
    // SplashScreen: {
    //   screen: SplashScreen
    // }
  },
  {
    initialRouteName: 'Main'
    // defaultNavigationOptions: {
    //   header: null
    // }
  }
);
const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont,
    language: state.toggleTranslation,
  };
};
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

// const mapDispatchToProps = dispatch => {
//   return {
//     changeFontScale: value => dispatch(changeFontScale(value))
//   }
// }
// export default connect(mapStateToProps, null)(App);
