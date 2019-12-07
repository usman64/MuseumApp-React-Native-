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

const ITEM_WIDTH = Dimensions.get('window').width;
export class Category3 extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          this.props.navigation.navigate('SingleEvent', {
            name: this.props.name,
            image: this.props.ImageUri
          })
        }
        style={{
          height: 270,
          width: ITEM_WIDTH - 40,
          marginLeft: 20,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.8,
          //shadowRadius: 5,
          elevation: 10
          //borderRadius: 22,
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
              width: null,
              height: 180,
              resizeMode: 'cover'
            }}
            // imageStyle={{ borderRadius: 22 }}
            source={this.props.ImageUri}
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
                  <Text style={{ color: 'red', fontSize: 15 }}>
                    {this.props.month}
                  </Text>
                  <Text style={{ color: 'black', fontSize: 20 }}>
                    {this.props.day}
                  </Text>
                </View>
                <View style={{ paddingLeft: 25 }}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 22
                    }}
                  >
                    {this.props.name}
                  </Text>
                  <Text style={{ color: 'grey' }}>{this.props.time}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        </View> */}
      </TouchableWithoutFeedback>
    );
  }
}

export default Category3;
