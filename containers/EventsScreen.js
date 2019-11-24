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
import CategoryItem from '../components/Explore/Category';
import Category3 from '../components/Explore/Category3';


const { height, width } = Dimensions.get('window');

export class EventsScreen extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80;
        if (Platform.OS === 'android') {
          this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }
    }

    static navigationOptions = {
      header:null,
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View>

              <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
              >
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
                  <View style={{ height: 180, marginTop: 20 }}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <CategoryItem
                        ImageUri={require('../assets/puppetShow.jpeg')}
                        name={'Weekly Puppet Show'}
                        navigation={this.props.navigation}
                      />
                      <CategoryItem
                        ImageUri={require('../assets/qawali.jpeg')}
                        name={'Dramafest'}
                        navigation={this.props.navigation}
                      />
                      <CategoryItem
                        ImageUri={require('../assets/folkFestival.jpg')}
                        name={'Food Street'}
                        navigation={this.props.navigation}
                      />
                      <CategoryItem
                        ImageUri={require('../assets/images.jpeg')}
                        name={'Weekly Concert'}
                        navigation={this.props.navigation}
                      />
                    </ScrollView>
                  </View>
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
                      color: 'grey'
                    }}
                  >
                    Upcoming Events
                  </Text>
    
                  <View style={{ height: 280, marginTop: 20 }}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <Category3
                        ImageUri={require('../assets/qawali.jpeg')}
                        name={'Rock Concert'}
                        navigation={this.props.navigation}
                      />
                      <Category3
                        ImageUri={require('../assets/folkFestival.jpg')}
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
