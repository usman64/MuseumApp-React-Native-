import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native';

class PuppetGridViewCard extends Component {
  render() {
    const { ITEM_WIDTH, item } = this.props;
    return (
      <TouchableWithoutFeedback
        style={{
          flex: 1,
          height: 180,
          width: ITEM_WIDTH / 2 - 20,
          margin: 10,
          borderWidth: 1,
          borderColor: '#ddd'
          // borderBottomRightRadius: 10
        }}
        onPress={() =>
          this.props.navigation.navigate('SinglePuppet', {
            puppetData: item
          })
        }
      >
        <View style={{ flex: 3 }}>
          <Image
            style={{
              // borderTopLeftRadius: 10,
              // borderTopRightRadius: 10,
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
            source={{ uri: item.imagelink }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            {item.puppetname}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 12, color: 'grey' }}>
              {this.props.navigation.getParam('filterType') ===
              'CategorizedPuppets'
                ? item.region
                : item.category}
            </Text>
            <Text
              style={{
                marginLeft: 'auto',
                marginRight: 10,
                fontSize: 12,
                color: 'grey'
              }}
            >
              {item.puppetyear}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default PuppetGridViewCard;
