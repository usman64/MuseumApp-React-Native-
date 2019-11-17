import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category from './Category2';

export class CategoryList extends Component {
  render() {
    return (
      <View style={{ height: 180, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.props.data.map((item, key) => (
            <Category ImageUri={item.ImageUri} name={item.name} key={key} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CategoryList;
