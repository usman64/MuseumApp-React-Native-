import React, { Component } from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export class Category extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        style={{
          height: 180,
          width: 200,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: '#ddd'
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
            source={this.props.ImageUri}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{this.props.name}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Category;
