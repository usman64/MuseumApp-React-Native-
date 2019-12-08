import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Category3 from './Category3';

class CategoryList3 extends Component {

  checkmonth = month => {
    month = Number(month)
    if(month === 1) return 'JAN'
    else if(month === 2) return 'FEB'
    else if(month === 3) return 'MAR'
    else if(month === 4) return 'APR'
    else if(month === 5) return 'MAY'
    else if(month === 6) return 'JUN'
    else if(month === 7) return 'JUL'
    else if(month === 8) return 'AUG'
    else if(month === 9) return 'SEP'
    else if(month === 10) return 'OCT'
    else if(month === 11) return 'NOV'
    else if(month === 12) return 'DEC'
  }

  changeTime = time => {
    let hour = Number(time.substring(0,2));
    let min = Number(time.substring(3,5));
    let dn = '';

    if(hour >=0 && hour < 12) dn='AM'
    else {
      dn='PM'
      hour=hour-12; 
    }

    let thetime = `${hour.toString()}:${min.toString()} ${dn}`
    return thetime;

  }

  render() {
    return (
      <View style={{ height: 240, marginTop: 20 }}>
        <View>
          {this.props.data.map((item, key) => {
            let month = item.eventdate.substring(5,7);
            let themonth = this.checkmonth(month);

            let time = item.eventtime;
            let thetime = this.changeTime(time)
            return (
              <View key={key} style={{paddingTop: 20}}>
              <Category3
                id={item.eventid}
                ImageUri={item.poster}
                name={item.eventname}
                day={item.eventdate.substring(8,10)}
                month={themonth}
                date={item.eventdate.substring(0,10)}
                time={thetime}
                description={item.eventdescription}
                key={key}
                navigation={this.props.navigation}
              />
              </View>

            )
      })}
        </View>
      </View>
    );
  }
}

export default CategoryList3;
