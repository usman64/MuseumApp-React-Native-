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
import Category from '../components/Explore/Category';
import Category3 from '../components/Explore/Category3';


const { height, width } = Dimensions.get('window');

export class EventsScreen extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80;
        if (Platform.OS === 'android') {
          this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View>

              <View
                style={{
                    height: 75,
                    backgroundColor: 'maroon',
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <Text style={{
                       marginTop: 20,
                       fontSize: 30,
                       fontWeight: '700',
                       marginLeft: 10,
                       color: 'white'
                  }}>
                        Events
                 </Text>
                </View>
              </View>
              <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
              >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: '700',
                      paddingHorizontal: 20
                    }}
                  >
                    Weekly Events
                  </Text>
                  <View style={{ height: 180, marginTop: 20 }}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <Category
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Weekly Puppet Show'}
                      />
                      <Category
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Dramafest'}
                      />
                      <Category
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Food Street'}
                      />
                      <Category
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Weekly Concert'}
                      />
                    </ScrollView>
                  </View>
                </View>
    
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'white',
                    paddingTop: 20
                    // paddingHorizontal: 20
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      fontWeight: '700',
                      paddingHorizontal: 20
                    }}
                  >
                    Upcoming Events
                  </Text>
    
                  <View style={{ height: 280, marginTop: 20 }}>
                    <ScrollView
                    >
                      <Category3
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Rock Concert'}
                        navigation={this.props.navigation}
                      />
                      <Category3
                        ImageUri={require('../assets/images.jpeg')}
                        name={'International Film Festival'}
                        navigation={this.props.navigation}
                      />
                      <Category3
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Puppet Show 2k19'}
                        navigation={this.props.navigation}
                      />
                      <Category3
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Atif Aslam Concert'}
                        navigation={this.props.navigation}
                      />
                    </ScrollView>
                  </View>
                </View>
    
              </ScrollView>
            </View>
          </SafeAreaView>
        )
    }
}

export default EventsScreen
