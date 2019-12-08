import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  render() {
    return (
      <View style={{ height: 180, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.props.data.map((item, key) => (
            <CategoryItem
              type={this.props.type}
              ImageUri={item.ImageUri}
              name={item.name}
              time= {item.time}
              description = {item.description}
              date={item.date}
              key={key}
              navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CategoryList;
