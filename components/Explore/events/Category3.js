import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Alert,
  ImageBackground,
  Dimensions
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import theme from '../../../assets/theme'
import * as Font from 'expo-font'


const ITEM_WIDTH = Dimensions.get('window').width;
export class Category3 extends Component {
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
      
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.navigation.navigate('SingleEvent', {
            name: this.props.name,
            image: this.props.ImageUri,
            date: this.props.date,
            description: this.props.description,
            time: this.props.time
          })
        }
        style={{
          height: 270,
          width: ITEM_WIDTH - 40,
          marginLeft: 20,
          backgroundColor: theme.primaryColor_var2,
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.8,
          //shadowRadius: 5,
          elevation: 10
          //borderRadius: 22,
        }}
      >
        {this.state.fontLoaded ? (
        <View
          style={{
            flex: 1
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              width: null,
              height: 180,
              resizeMode: 'cover'
            }}
            // imageStyle={{ borderRadius: 22 }}
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
                backgroundColor: 'rgba(0, 0, 0, 0)'
                // borderRadius: 22
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  paddingBottom: 30,
                  paddingTop: 20
                }}
              >
                <View
                  style={{
                    paddingLeft: 20,
                    alignItems: 'center',
                    paddingTop: 3
                  }}
                >
                  <Text
                    style={{
                      fontFamily: 'Montserrat-Medium',
                        color: theme.secondaryColor,//red
                      // fontSize: 15//fontScaling here
                      fontSize: 15 * this.props.fontSizeScale
                    }}
                  >
                    {this.props.month}
                  </Text>
                  <Text
                    style={{
                      color: theme.secondaryColor,//used to be black
                      fontFamily: 'Montserrat-Medium',
                      fontSize: 20 * this.props.fontSizeScale
                    }}
                  >
                    {this.props.day}
                  </Text>
                </View>
                <View style={{ paddingLeft: 25 }}>
                  <Text
                    style={{
                      // fontWeight: 'bold',
                      fontFamily: 'Montserrat-Bold',
                      color: 'white',
                        textTransform: 'capitalize',
                      //fontSize: 22//fontScaling here
                      fontSize: 22 * this.props.fontSizeScale
                    }}
                  >
                    {this.props.name}
                  </Text>
                    <Text style={{ color: 'grey', fontFamily: 'Montserrat-Medium' }}>{this.props.time}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          </View>) : (<View></View>)}
        {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        </View> */}
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor
  };
};

export default connect(mapStateToProps, null)(Category3);
