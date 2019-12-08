import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CategoryList1 from '../components/Explore/events/CategoryList1'
import CategoryList3 from '../components/Explore/events/CategoryList3'
import axios from 'axios'


const { height, width } = Dimensions.get('window');

export class EventsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Weekly: [],
      Upcoming: []
    }
  }

  handleData = (data) => {
    let Weekly = []
    let Upcoming = []
    data.forEach(item => {
      if(item.eventcategory === "regular") {
        Weekly.push(item);
      }

      else if(item.eventcategory === "special") {
        Upcoming.push(item)
      }
    });

    this.setState({ Weekly, Upcoming });

  }

  async componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }

    const data = await axios.get(
      `https://glacial-beyond-08798.herokuapp.com/allevents`
      )

    this.handleData(data.data);
    console.log(this.state.Upcoming.length);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: this.state.Upcoming.length * 280 }}> 
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
              <CategoryList1
                data={this.state.Weekly}
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
                  data={this.state.Upcoming}
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
