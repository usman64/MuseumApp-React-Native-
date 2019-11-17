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
import Category from '../components/Explore/Category2';
import SubHeader from '../components/Explore/SubHeader';
import CategoryList from '../components/Explore/CategoryList';
// import Category2 from '../components/Explore/Category2';

const upEvents = [
  {
    name: 'Puppet Show',
    ImageUri: require('../assets/images.jpeg')
  },
  {
    name: 'Folk Festival',
    ImageUri: require('../assets/images.jpeg')
  },
  {
    name: 'Qawali Night',
    ImageUri: require('../assets/images.jpeg')
  }
];

const typesOfPuppets = [
  {
    name: 'String',
    ImageUri: require('../assets/string.jpeg')
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
    ImageUri: require('../assets/images.jpeg')
  }
];

const Regions = [
  {
    name: 'Pakistan',
    ImageUri: require('../assets/pak.jpg')
  },
  {
    name: 'Burma',
    ImageUri: require('../assets/burma.jpeg')
  },
  {
    name: 'India',
    ImageUri: require('../assets/india.jpg')
  },
  {
    name: 'Bangladesh',
    ImageUri: require('../assets/bangladesh.jpg')
  }
];

const { height, width } = Dimensions.get('window');
export class Explore extends Component {
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
              <Icon
                style={{ paddingTop: 25, marginLeft: 20 }}
                name='square'
                color='white'
                size={30}
              />
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 30,
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
                  onPress={() => Alert.alert('Qr Code Scanner')}
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
          <View
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
            <TextInput
              style={{
                fontSize: 15,
                flex: 1,
                fontWeight: '700',
                backgroundColor: 'white'
              }}
              underlineColorAndroid='transparent'
              placeholder='Search'
              placeholderTextColor='grey'
            />
          </View>

          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <SubHeader headerName={'Explore By Type'} />
              <CategoryList data={typesOfPuppets} />
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
                paddingTop: 20
                // paddingHorizontal: 20
              }}
            >
              <SubHeader headerName={'Explore By Region'} />

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
              <CategoryList data={Regions} />
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <SubHeader headerName={'Upcoming Events'} />
              <CategoryList data={upEvents} />
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
