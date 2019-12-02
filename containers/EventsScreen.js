import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CategoryList from '../components/Explore/CategoryList'
import CategoryList3 from '../components/Explore/events/CategoryList3'


const { height, width } = Dimensions.get('window');

const WeeklyEvents = [
  {
    name: 'Puppet Show',
    ImageUri: require('../assets/puppetShow.jpeg')
  },
  {
    name: 'Folk Festival',
    ImageUri: require('../assets/folkFestival.jpg')
  },
  {
    name: 'Qawali Night',
    ImageUri: require('../assets//qawali.jpeg')
  },
  {
    name: 'Qawali Night',
    ImageUri: require('../assets//qawali.jpeg')
  }
];

const UpcomingEvents = [
  {
    name: 'Puppet Show',
    ImageUri: require('../assets/puppetShow.jpeg'),
    day: 14,
    month: 'DEC',
    time: '7:30 PM'
  },
  {
    name: 'Folk Festival',
    ImageUri: require('../assets/folkFestival.jpg'),
    day: 14,
    month: 'DEC',
    time: '7:30 PM'
  },
  {
    name: 'Qawali Night',
    ImageUri: require('../assets//qawali.jpeg'),
    day: 12,
    month: 'DEC',
    time: '7:30 PM'
  },
  {
    name: 'Qawali Night',
    ImageUri: require('../assets//qawali.jpeg'),
    day: 11,
    month: 'DEC',
    time: '7:30 PM'
  }
];

export class EventsScreen extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
    console.log('Hello');
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 1200 }}> 
      <View>
        <View>
          <View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                  color: 'grey'
                }}
              >
                Weekly Events
              </Text>
              <CategoryList
                data={WeeklyEvents}
                type={''}
                navigation={this.props.navigation}
              />
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: 30
                // paddingHorizontal: 20
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20,
                  color: 'grey',
                  paddingTop
                  : 20,
                }}
              >
                Upcoming Events
              </Text>
                <CategoryList3
                  data={UpcomingEvents}
                  type={''}
                  navigation={this.props.navigation}
                />

            </View>
          </View>
        </View>
        </View>  
      </ScrollView>
    );
  }
}

export default EventsScreen;
