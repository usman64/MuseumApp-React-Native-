import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export class More extends Component {
  render() {
    return (
      <View>
        <Text> More </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('About')}
        >
          <Text>Go To About</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default More;
