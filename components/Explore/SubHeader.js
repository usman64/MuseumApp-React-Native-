import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SubHeader extends Component {
  render() {
    if (this.props.type === 'Event') {
      return (
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: '700',
              paddingHorizontal: 20,
              color: 'grey'
            }}
          >
            {this.props.headerName}
          </Text>
          <View
            style={{
              marginLeft: 120
            }}
          >
            <TouchableOpacity onPress={this.props.onPress}>
              <Text style={{ color: 'maroon', fontWeight: '700' }}>
                {' '}
                more >>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <Text
        style={{
          fontSize: 17,
          fontWeight: '700',
          paddingHorizontal: 20,
          color: 'grey'
        }}
      >
        {this.props.headerName}
      </Text>
    );
  }
}

export default SubHeader;
