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
              height: 80,
              backgroundColor: 'white',
              borderBottomWidth: 1,
              borderBottomColor: '#ddd'
            }}
          >
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
                marginTop: Platform.OS === 'android' ? 30 : null
              }}
            >
              <Icon name='search' size={20} />
              <TextInput
                underlineColorAndroid='transparent'
                placeholder='Search'
                placeholderTextColor='grey'
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
              />
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
                Explore By Type
              </Text>
              <View style={{ height: 180, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    ImageUri={require('../assets/string.jpeg')}
                    name={'String'}
                  />
                  <Category
                    ImageUri={require('../assets/images.jpeg')}
                    name={'Finger'}
                  />
                  <Category
                    ImageUri={require('../assets/images.jpeg')}
                    name={'Rod'}
                  />
                  <Category
                    ImageUri={require('../assets/images.jpeg')}
                    name={'Glove'}
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
                Explore By Region
              </Text>

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
              </View> */}
              {/* </View>

            <View> */}
              <View style={{ height: 180, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    ImageUri={require('../assets/pak.jpg')}
                    name={'Pakistan'}
                  />
                  <Category
                    ImageUri={require('../assets/india.jpg')}
                    name={'India'}
                  />
                  <Category
                    ImageUri={require('../assets/burma.jpeg')}
                    name={'Burma'}
                  />
                  <Category
                    ImageUri={require('../assets/bangladesh.jpg')}
                    name={'Bangladesh'}
                  />
                </ScrollView>
              </View>
            </View>

            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20
                }}
              >
                Upcoming Events
              </Text>
              <View style={{ height: 180, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    ImageUri={require('../assets/images.jpeg')}
                    name={'Puppet Show'}
                  />
                  <Category
                    ImageUri={require('../assets/images.jpeg')}
                    name={'Literary Festival'}
                  />
                  <Category
                    ImageUri={require('../assets/images.jpeg')}
                    name={'Qawali Night'}
                  />
                </ScrollView>
              </View>
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
