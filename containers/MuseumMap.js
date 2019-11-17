import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export class MuseumMap extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '900',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Development In Progress...
        </Text>
        <Image
          style={{
            width: 200,
            height: 200,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          source={require('../assets/map.gif')}
        />
      </View>
    );
  }
}

export default MuseumMap;
