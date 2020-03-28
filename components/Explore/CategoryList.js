import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem';

class CategoryList extends Component {
  render() {
    return (
      <View style={{ height: 130, marginTop: 20, backgroundColor: "#352D46" }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.props.data.map((item, key) => (
            <CategoryItem
              type={this.props.type}
              ImageUri={item.ImageUri}
              name={item.name}
              time={item.time}
              description={item.description}
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
