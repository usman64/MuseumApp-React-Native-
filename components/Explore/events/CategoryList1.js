import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category1 from './Category1';

class CategoryList1 extends Component {
  render() {
    return (
      <View style={{ height: 180, marginTop: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {this.props.data.map((item, key) => (
            <Category1
                id={item.eventid}
                ImageUri={item.poster}
                name={item.eventname}
                day={item.eventdate.substring(5,7)}
                month={item.eventdate.substring(8,10)}
                date={item.eventdate.substring(0,10)}
                time={item.eventtime}
                description={item.eventdescription}
                key={key}
                navigation={this.props.navigation}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default CategoryList1;
