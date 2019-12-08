import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, Switch, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FindUs from './FindUs'
const { height, width } = Dimensions.get('window');
export default class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const { greyScale } = this.state;
        const { pushNotification } = this.state;
        return (
          <ScrollView>
            <View style={{ flex: 1 }}>
              <FindUs />

              <View style={{ 
                  flexDirection: "row",
               marginLeft: 20, }}>
                {/* <View style={{ padding: 10, width: 100, height: 100 }}>
                  <Image
                    source={require("../../assets/facebook.png")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      borderRadius: 10,
                      resizeMode: "cover"
                    }}
                  />
                </View> */}
                <View
                  style={{
                    marginTop: 20,
                    marginRight: "auto",
                    marginLeft: "auto"
                  }}
                >
                  <Text
                  //   style={{ fontSize: 20 }}
                  >
                    Email: rafipeer@gmail.com
                  </Text>
                  <Text
                  //    style={{ fontSize: 20 }}
                  >
                    Phone: +92 333 4797423
                  </Text>
                  <Text>
                  Address: 1 Green Acres Main Rd, 
                  Green Acres Housing Society, Lahore, Punjab
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    item: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 35
        // letterSpacing: 1
    },
    listitem: {
        borderStyle: 'dashed',
        borderBottomWidth: 3,
        opacity: 1,
        borderBottomColor: '#800000'
    },
    text: {
        fontSize: 24,
        marginLeft: 10,
        padding: 10,
        height: 50,
    },
});
