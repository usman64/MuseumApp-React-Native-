import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Font from 'expo-font';
import { AuthSession } from 'expo';
import theme from '../../../assets/theme'

class Category1 extends Component {

  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View>
       {this.state.fontLoaded ? 
        <TouchableWithoutFeedback
        onPress={() => {
          this.props.navigation.navigate('SingleEvent', {
            name: this.props.name,
            image: this.props.ImageUri,
            date: this.props.date,
            description: this.props.description,
            time: this.props.time
          });
        }}
        style={{
          height: 220,
          width: 180,
          marginLeft: 20,
          backgroundColor: theme.primaryColor_var2,
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.8,
          elevation: 10,
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              width: 180,
              height: 160,
              resizeMode: 'cover'
            }}
            source={{ uri: this.props.ImageUri }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                // borderRadius: 22
              }}
            >
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  textTransform: 'uppercase',
                  color: 'white',
                  //fontSize: 26,//fontScaling here
                  fontSize: 15 * this.props.fontSizeScale,
                  paddingLeft: 15,
                  paddingBottom: 15
                }}
              >
                {this.props.name}
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        </View> */}
      </TouchableWithoutFeedback>
     : null  
      } 
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor
  };
};

export default connect(mapStateToProps, null)(Category1);
