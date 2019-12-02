import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category3 from './Category3';

class CategoryList3 extends Component {
  render() {
    return (
      <View style={{ height: 240, marginTop: 20 }}>
        <View>
          {this.props.data.map((item, key) => (
            <View key={key} style={{paddingTop: 20}}>
            <Category3
              ImageUri={item.ImageUri}
              name={item.name}
              day={item.day}
              month={item.month}
              time={item.time}
              key={key}
              navigation={this.props.navigation}
            />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default CategoryList3;
