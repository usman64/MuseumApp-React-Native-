import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Slider,
  Switch,
  Dimensions,
  ScrollView
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions';

const { height, width } = Dimensions.get('window');

export class More extends Component {
  constructor() {
    super();
    this.state = {
      greyScale: false,
      font: 1,
      pushNotification: false,
      langUrdu: false
    };
  }
  fontchanger(value) {
    this.setState({ font: value });
  }
  greyScaler(temp) { }
  // navigator(where) {
  //   if (where === 'About') {
  //     this.props.navigation.navigate('About');
  //   }
  //   if (where === 'Settings') {
  //     this.props.navigation.navigate('Settings');
  //   }
  //   if (where === 'Contact Us') {
  //     this.props.navigation.navigate('ContactUs');
  //   }
  // }
  urdusize(value) {
    console.log(value);
  }

  render() {
    const { greyScale } = this.state;
    const { pushNotification } = this.state;
    const { langUrdu } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topmostcontainer}>
          {/* GENERAL */}
          <View style={styles.headingItem}>
            <Text style={styles.headingText}>GENERAL</Text>
          </View>
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate('About')}
          >
            {/* <View style={{ flexDirection: 'row' }}> */}
            {/* <Icon
                style={{ marginRight: 10 }}
                name={'info-circle'}
                size={25}
              /> */}
            <Text style={styles.text}>About</Text>
            {/* </View> */}
          </TouchableOpacity>
          <View style={styles.line}></View>

          {/* Contact Us */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate('ContactUs')}
          >
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>

          {/*SETTINGS & ACCESSIBILITY*/}
          <View style={styles.headingItem}>
            <Text style={styles.headingText}>SETTINGS & ACCESSIBILITY</Text>
          </View>

          {/* Language */}
          <View style={styles.item}>
            <View>
              <Text style={styles.text}>Language</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.languageOption}>EN </Text>
              <Switch
                value={langUrdu}
                onValueChange={() => {
                  this.setState({ langUrdu: !langUrdu });
                }}
              />
              <Text
                style={styles.languageOption}
                onLayout={(value) => this.urdusize(value)}
              >
                UR
              </Text>
            </View>
          </View>

          {/* Font Size */}
          <View style={styles.line}></View>
          <View style={styles.item}>
            <Text style={styles.text}>Font Size</Text>
            <Slider
              style={{ width: 150 }}
              minimumValue={1}
              maximumValue={10}
              minimumTrackTintColor='#adad85'
              maximumTrackTintColor='#000000'
              onSlidingComplete={(value) => this.fontchanger(value)}
            />
          </View>
          <View style={styles.line}></View>

          {/* Grey Scale Mode */}
          <View style={styles.item}>
            <Text style={styles.text}>Greyscale Mode</Text>
            <Switch
              onValueChange={() => {
                this.setState({ greyScale: !greyScale });
              }}
              value={this.state.greyScale}
            />
          </View>
          <View style={styles.line}></View>

          {/* Push Notifications */}
          <View style={styles.item}>
            <Text style={styles.text}>Push Notifications</Text>
            <Switch
              // style={{ paddingRight: '14'}}

              onValueChange={() => {
                this.setState({ pushNotification: !pushNotification });
              }}
              value={this.state.pushNotification}
            />
          </View>

          {/* HELP AND SUPPORT */}
          <View style={styles.headingItem}>
            <Text style={styles.headingText}>HELP AND SUPPORT</Text>
          </View>

          {/* App Version */}
          <View style={styles.item}>
            <Text style={styles.text}>App Version</Text>
            <Text style={styles.version}>0.1.6</Text>
          </View>
          <View style={styles.line}></View>

          {/* Report a Problem */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate('ReportProblem')}
          >
            <Text style={styles.text}>Report a Problem</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>

          {/* Privacy Policy */}
          <View style={styles.item}>
            <Text style={styles.text}>Privacy Policy</Text>
          </View>
          <View style={styles.line}></View>

          {/* Terms Of Service */}
          <View style={styles.item}>
            <Text style={styles.text}>Terms of Service</Text>
          </View>
          {/* data providers software liscences */}
          <View style={styles.line}></View>

          {/* Rate Us */}
          <View style={styles.item}>
            <Text style={styles.text}>Rate Us</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topmostcontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 0.05 * height,

    paddingBottom: 0.07 * width
  },
  container: {
    flex: 1
    // paddingTop: 20
  },
  headingText: {
    fontSize: 0.05 * width,
    color: 'maroon',
    fontWeight: '500',
    marginLeft: 0.04 * width,
    marginRight: 0.04 * width
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(64, 64, 64, 0.1)',
    //  alignItems: 'center',
  },
  headingItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',

    flexGrow: 4
    // borderTopWidth: 1,
    // borderTopColor: 'maroon',
    // borderBottomWidth: 3,

    // borderBottomColor: 'maroon',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // justifyContent: 'center',
    flexGrow: 3,
    marginLeft: 0.06 * width,
    marginRight: 0.06 * width
    // borderTopWidth: 1,
    // borderTopColor: 'rgba(64, 64, 64, 0.1)',

    // height = 10,
  },
  line: {
    flex: 0,
    borderTopWidth: 1,
    marginLeft: 0.06 * width,
    marginRight: 0.06 * width,
    borderTopColor: 'rgba(64, 64, 64, 0.1)'
  },
  text: {
    fontSize: 0.05 * width
    // marginLeft: 10,
    // padding: 10,
    // height: 50,
  },
  languageOption: {
    color: 'grey',
    fontSize: 0.025 * width
  },
  version: {
    color: 'grey',
    alignItems: 'flex-end',
    fontSize: 0.05 * width
  }
});

export default More;