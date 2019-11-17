import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export class Category extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => Alert.alert(`${this.props.name} pressed!`)}
        style={{
          height: 150,
          width: 200,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: '#ddd'
        }}
      >
        <View style={{ flex: 1 }}>
          <ImageBackground
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
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
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 26,
                  paddingLeft: 10,
                  paddingBottom: 10
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
    );
  }
}

export default Category;
