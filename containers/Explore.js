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
  Alert
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SubHeader from '../components/layout/SubHeader';
import CategoryList from '../components/Explore/CategoryList';

import axios from 'axios';

const upEvents = [
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
  }
];

const typesOfPuppets = [
  {
    name: 'String',
    ImageUri: require('../assets/string.jpg')
  },
  {
    name: 'Glove',
    ImageUri: require('../assets/images.jpeg')
  },
  {
    name: 'Rod',
    ImageUri: require('../assets/rod.jpeg')
  },
  {
    name: 'Finger',
    ImageUri: require('../assets/finger.jpg')
  },
  {
    name: 'View All',
    ImageUri: require('../assets/string.jpeg')
  }
];

const Regions = [
  {
    name: 'Pakistan',
    ImageUri: require('../assets/pak.jpg')
  },
  {
    name: 'India',
    ImageUri: require('../assets/india.jpg')
  },
  {
    name: 'Burma',
    ImageUri: require('../assets/burma.jpeg')
  },
  {
    name: 'Bangladesh',
    ImageUri: require('../assets/bangladesh.jpg')
  }
];

const { height, width } = Dimensions.get('window');
export class Explore extends Component {
  async componentDidMount() {
    try {
      // const resp = await axios.get(
      //   'https://glacial-beyond-08798.herokuapp.com/allpuppets'
      // );
      // console.warn(resp.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 75,
              backgroundColor: 'maroon',
              borderBottomWidth: 1,
              borderBottomColor: '#ddd'
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              {/* <Icon
                name='square'
                style={{ paddingTop: 25, marginLeft: 20 }}
                color='white'
                size={30}
              /> */}
              <Image
                source={require('../assets/RF_logo.png')}
                style={{
                  height: 35,
                  width: 35,
                  // tintColor: 'white',
                  // backgroundColor: 'maroon',
                  marginTop: 25,
                  marginLeft: 20,
                  borderRadius: 10
                }}
              />
              <Text
                style={{
                  marginTop: 22,
                  fontSize: 25,
                  fontWeight: '700',
                  marginLeft: 10,
                  color: 'white'
                }}
              >
                Rafi Peer
              </Text>
              <View
                style={{ marginLeft: 'auto', marginRight: 20, marginTop: 25 }}
              >
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('QrScan')}
                >
                  <Image
                    source={require('../assets/scan.png')}
                    style={{ height: 26, width: 26, tintColor: 'white' }}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10,
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  >
                    Scan
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS === 'android' ? 10 : null,
              borderRadius: 10,
              marginBottom: 5
            }}
          >
            <Icon
              color='grey'
              style={{ marginRight: 10 }}
              name='search'
              size={20}
            />
            // <TouchableOpacity
            //   onPress={() => this.props.navigation.navigate('Search')}
            // >
              <TextInput
                style={{
                  fontSize: 15,
                  height: 30,
                  flex: 1,
                  fontWeight: '700',
                  backgroundColor: 'white'
                }}
                onTouchStart={() => this.props.navigation.navigate('Search')}
                editable={false}
                underlineColorAndroid='transparent'
                placeholder='Search'
                placeholderTextColor='grey'
              />
            // </TouchableOpacity>
          </View> */}

          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <SubHeader headerName={'Explore By Type'} type={' '} />
              <CategoryList
                data={typesOfPuppets}
                type={'CategorizedPuppets'}
                navigation={this.props.navigation}
              />
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: 20
                // paddingHorizontal: 20
              }}
            >
              <SubHeader headerName={'Explore By Region'} type={' '} />

              {/* <View
                                                                                              style={{
                                                                                                width: width - 40,
                                                                                                height: 200,
                                                                                                marginTop: 20
                                                                                              }}
                                                                                            >
                                                                                              <Image
                                                                                                style={{
                                                                                                  flex: 1,
                                                                                                  height: null,
                                                                                                  width: null,
                                                                                                  resizeMode: 'cover',
                                                                                                  borderRadius: 5,
                                                                                                  borderWidth: 1,
                                                                                                  borderColor: 'grey'
                                                                                                }}
                                                                                                source={require('../assets/global.jpg')}
                                                                                              />
                                                                                            </View> 
                                                                                            </View>

                                                                                          <View> */}
              <CategoryList
                data={Regions}
                type={'RegionalPuppets'}
                navigation={this.props.navigation}
              />
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <SubHeader
                headerName={'Upcoming Events'}
                type={'Event'}
                onPress={() => this.props.navigation.navigate('Event')}
              />
              <CategoryList
                data={upEvents}
                type={'Event'}
                navigation={this.props.navigation}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  horizontallyCenter: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  headings: { fontSize: 30, fontWeight: 'bold' }
});
