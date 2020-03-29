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
import CategoryList1 from '../components/Explore/events/CategoryList1';
import CategoryList3 from '../components/Explore/events/CategoryList3';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

export class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Weekly: [],
      Upcoming: []
    };
  }

  handleData = (data) => {
    let Weekly = [];
    let Upcoming = [];
    data.forEach((item) => {
      if (item.eventcategory === 'regular') {
        Weekly.push(item);
      } else if (item.eventcategory === 'special') {
        Upcoming.push(item);
      }
    });

    this.setState({ Weekly, Upcoming });
  };

  async componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }

    // try {
    //   await AsyncStorage.removeItem("puppets");
    // }
    // catch(exception) {
    //     return false;
    // }

    try {
      let data = await AsyncStorage.getItem('puppets');
      console.log('local');
      console.log(JSON.parse(data));

      if (data != null) this.handleData(JSON.parse(data));
      else {
        try {
          data = await axios.get(
            `https://glacial-beyond-08798.herokuapp.com/allevents`
          );

          console.log('fetched');
          console.log(data);
          await AsyncStorage.setItem('puppets', JSON.stringify(data.data));
          this.handleData(data.data);
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          paddingBottom: this.state.Upcoming.length * 280,
          backgroundColor: '#251F35'
        }}
      >
        <View>
          <View>
            <View>
              <View
                style={{ flex: 1, paddingTop: 30 }}
              >
                <Text
                  style={{
                    //fontSize: 24,//fontscaling here
                    fontSize: 24 * this.props.fontSizeScale,
                    fontWeight: '700',
                    paddingHorizontal: 20,
                    color: 'grey'
                  }}
                >
                  Weekly Events
                </Text>
                {this.state.Weekly.length ? (
                  <CategoryList1
                    data={this.state.Weekly}
                    type={''}
                    navigation={this.props.navigation}
                  />
                ) : (
                  <ActivityIndicator size='large' color='#ddd' />
                )}
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
                    //fontSize: 24,//fontscaling here
                    fontSize: 24 * this.props.fontSizeScale,
                    fontWeight: '700',
                    paddingHorizontal: 20,
                    color: 'grey',
                    paddingTop: 20
                  }}
                >
                  Upcoming Events
                </Text>
                {this.state.Weekly.length ? (
                  <CategoryList3
                    data={this.state.Upcoming}
                    type={''}
                    navigation={this.props.navigation}
                  />
                ) : (
                  <ActivityIndicator size='large' color='#ddd' />
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor
  };
};

export default connect(mapStateToProps, null)(EventsScreen);
