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
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default CategoryList3;
