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
import * as Font from 'expo-font';

import { connect } from 'react-redux';
import { requestAllPuppets } from '../Actions/puppetActions';
import { toggleTranslationAction } from '../Actions/toggleTranslation';

import axios from 'axios';

const mapStateToProps = (state) => {
  console.log(state.requestAllPuppets.puppets.length);
  return {
    puppets: state.requestAllPuppets.puppets,
    isPending: state.requestAllPuppets.isPending,
    error: state.requestAllPuppets.error,
    fontSizeScale: state.changeFont.fontScalefactor,
    language: state.toggleTranslation.lang1_toggle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestPuppets: () => dispatch(requestAllPuppets()),
    // toggleTranslationAction: () => dispatch(toggleTranslationAction())
  };
};

const upEvents = [
  {
    name: 'Puppet Show',
    ImageUri:
      'https://drive.google.com/uc?id=1reZVUDgpRa0n5U_7LnJ9bEjZkZFKUuN9',
    time: '7:30 PM',
    description: 'This is the best event!',
    date: '15/12/2019'
  },
  {
    name: 'Folk Festival',
    ImageUri:
      'https://drive.google.com/uc?id=1reZVUDgpRa0n5U_7LnJ9bEjZkZFKUuN9',
    time: '7:30 PM',
    description: 'This is the best event!',
    date: '15/12/2019'
  },
  {
    name: 'Qawali Night',
    ImageUri:
      'https://drive.google.com/uc?id=1reZVUDgpRa0n5U_7LnJ9bEjZkZFKUuN9',
    time: '7:30 PM',
    description: 'This is the best event!',
    date: '15/12/2019'
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

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  componentWillMount() {
    this.props.onRequestPuppets();
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf')
    });
    this.setState({ fontLoaded: true });
    console.log('set ');
  }

  render() {
    const rafiPeerText = this.props.language ? 'رفی پیر' : 'Rafi Peer';
    const exploreByTypeText = this.props.language
      ? 'قسم سے دریافت کریں'
      : 'Explore By Type';
    const exploreByRegionText = this.props.language
      ? 'خطے کے لحاظ سے دریافت کریں'
      : 'Explore By Region';
    const upcomingEventsText = this.props.language
      ? 'انے والی تقریبات'
      : 'Upcoming Events';
    const exploreByText = this.props.language
      ? 'کے ذریعے دریافت کریں'
      : 'Explore By';
    const exploreText = this.props.language ? 'دریافت کریں' : 'Explore';
    const scanText = this.props.language ? 'اسکین' : 'scan';
    const typeText = this.props.language ? 'قسم' : 'Type';
    const regionText = this.props.language ? 'خطہ' : 'Region';
    const styles = StyleSheet.create({
      horizontallyCenter: {
        marginLeft: 'auto',
        marginRight: 'auto'
      }
      // headings: {
      //   // fontSize: 30,//fontscaling here
      //   fontSize: 30 * this.props.fontSizeScale,
      //   fontWeight: 'bold'
      // }
    });
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#251F35' }}>
        {this.state.fontLoaded ? (
          <View style={{ flex: 1, backgroundColor: '#251F35' }}>
            <View
              style={{
                height: 75,
                backgroundColor: '#251F35'
                // borderBottomWidth: 1,
                // borderBottomColor: "#ddd"
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                {/* <Icon
                name='square'
                style={{ paddingTop: 25, marginLeft: 20 }}
                color='white'
                size={30}
              /> */}
                {/* RAFI PEER Image at top */}
                {/* <Image
                source={require("../assets/RF_logo.png")}
                style={{
                  height: 35,
                  width: 35,
                  // tintColor: 'white',
                  // backgroundColor: 'maroon',
                  marginTop: 25,
                  marginLeft: 20,
                  borderRadius: 10
                }}
              /> */}
                {/* RAFI PEER Heading at Top */}
                <Text
                  style={{
                    marginTop: 22,
                    // fontSize: 25,// font scaling here
                    fontFamily: 'Montserrat-Bold',
                    // fontWeight: "bold",
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    fontSize: 35 * this.props.fontSizeScale,
                    // fontWeight: "700",
                    marginLeft: 30,
                    color: 'white'
                  }}
                >
                  {/* {rafiPeerText}
                   */}
                  {exploreText}
                </Text>
                {/* QR Code */}
                <View
                  style={{ marginLeft: 'auto', marginRight: 20, marginTop: 25 }}
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('QrScan')}
                  >
                    <Image
                      source={require('../assets/scanicon.png')}
                      style={{ height: 50, width: 50, tintColor: 'white' }}
                    />
                    {/* <Text
                      style={{
                        color: "white",
                        //fontSize: 10,//fontScaling here
                        fontSize: 10 * this.props.fontSizeScale,
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    >
                      {scanText}
                    </Text> */}
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
              style={{
                backgroundColor: '#251F35'
              }}
              scrollEventThrottle={16}
              showsVerticalScrollIndicator={false}
            >
              {/* EXPLORE BY TYPE */}
              <View
                style={{ flex: 1, backgroundColor: '#251F35', paddingTop: 20 }}
              >
                <SubHeader headerName={exploreByText} type={typeText} />
                <CategoryList
                  data={typesOfPuppets}
                  type={'CategorizedPuppets'}
                  navigation={this.props.navigation}
                />
              </View>

              {/* EXPLORE BY REGION */}
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#251F35',
                  paddingTop: 20
                  // paddingHorizontal: 20
                }}
              >
                <SubHeader headerName={exploreByText} type={regionText} />

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
              {/* UPCOMING EVENTS */}
              <View
                style={{ flex: 1, backgroundColor: '#251F35', paddingTop: 20 }}
              >
                <SubHeader
                  headerName={upcomingEventsText}
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
        ) : (
          <View></View>
        )}
      </SafeAreaView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
// export default Explore;
