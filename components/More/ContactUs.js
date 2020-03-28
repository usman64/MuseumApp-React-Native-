import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, Switch, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FindUs from './FindUs'
const { height, width } = Dimensions.get('window');
import { connect } from 'react-redux';
import * as Font from "expo-font";

class ContactUs extends Component {
    constructor() {
      super();
      this.state = {
        fontLoaded: false
      };
    }
  async componentDidMount() {
    await Font.loadAsync({ 
      // "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }

    render() {
        const { greyScale } = this.state;
        const { pushNotification } = this.state;
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 20
        },
        item: {
          // fontSize: 20,//fontScaling here
          fontSize: 20 * this.props.fontSizeScale,
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
          // fontSize: 24,//fontScaling here
          fontSize: 24 * this.props.fontSizeScale,
          marginLeft: 10,
          padding: 10,
          height: 50,
        },
      });
        return (
          <ScrollView style={{ backgroundColor: "#352D46" }}>
            <View style={{ flex: 1, backgroundColor: "#352D46" }}>
              <FindUs />

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20
                }}
              >
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
                    style={{
                      fontSize: this.props.fontSizeScale * 18,
                      fontFamily: "Montserrat-Medium",
                      color: "white"
                    }}
                  >
                    Email: rafipeer@gmail.com
                  </Text>
                  <Text
                    style={{
                      fontSize: this.props.fontSizeScale * 18,
                      fontFamily: "Montserrat-Medium",
                      color: "white"
                    }}
                  >
                    Phone: +92 333 4797423
                  </Text>
                  <Text
                    style={{
                      fontSize: this.props.fontSizeScale * 18,
                      fontFamily: "Montserrat-Medium",
                      color: "white"
                    }}
                  >
                    Address: 1 Green Acres Main Rd, Green Acres Housing Society,
                    Lahore, Punjab
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        );
    }
}


const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont
  };
};

export default connect(mapStateToProps, null)(ContactUs);

