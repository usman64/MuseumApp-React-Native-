import axios from 'axios';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation-stack';
import {Dimensions } from "react-native";


import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Image,
  ImageBackground
} from 'react-native';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const width = Dimensions.get('window').width

export class SingleEventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('name').toUpperCase(),
    headerStyle: {backgroundColor: '#251F35'},
    headerTitleStyle: {
      fontWeight: '700',
      fontSize: 25,
      color: 'white'
    },
    headerTintColor:'white'
  });

  // static navigationOptions = ({ navigation }) => ({

  // })
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      time: this.props.navigation.getParam('time'),
      date: this.props.navigation.getParam('date'),
      description: this.props.navigation.getParam('description'),
      image:this.props.navigation.getParam('image'),
      relatedImages: []
    };
  }
  render() {
  

    return (
      <View style={{backgroundColor: '#251F35', flex:1}}>
        <ImageBackground 
            style = {{
              height: 280,
              width: width,
              resizeMode: 'cover',

            }}

            source = {{uri: this.state.image}}
        >

        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover'
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: 'white',
    fontSize: 18
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor
  };
};

export default connect(mapStateToProps, null)(SingleEventScreen);
