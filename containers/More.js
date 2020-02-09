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

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const { height, width } = Dimensions.get('window');

import { connect } from 'react-redux';
import { changeFontScale } from '../Actions/changeFontScale';
import { toggleTranslationAction } from '../Actions/toggleTranslation';


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
    // this.props.dispatch(changeFontScale(value));
    this.props.changeFontScale(value)
    // console.log(this.props.fontSizeScale);
  }
  greyScaler(temp) {}
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
  languageChange(value) {
    console.log("value", value);
    this.props.toggleTranslationAction();
    console.log(this.props.language);
  }

  render() {
    const { greyScale } = this.state;
    const { pushNotification } = this.state;
    const { langUrdu } = this.state;
    const generalText = (this.props.language) ?"عام":"GENERAL"
    const fontSizeText = (this.props.language) ? "حرف کا سائز": "Font Size";
    const langText = (this.props.language) ? "زبان":"Language";
    const settingText = (this.props.language) ? "ترتیبات اور رسائی":"SETTINGS AND ACCESSIBILITY"
    const contactText = (this.props.language) ? "ہم سے رابطہ کریں":"Contact Us"
    const aboutText = (this.props.language) ? "ھمارے بارے میں": "About"
    const notificationsText = (this.props.language) ? "اطلاعات":"Push Notification"
    const appVersionText = (this.props.language) ? "ورژن":"App Version"
    const reportText=(this.props.language)?"مسئلے کے بارے میں بتائیے":"Report a Problem"
    const helpAndSupportText = (this.props.language) ?"مدد اور حمایت":"HELP AND SUPPORT"
    const rateUsText = (this.props.language) ?"درجہ بندی":"Rate Us"
    const termsOfService = (this.props.language) ?"سروس کی شرائط":"Terms of Service"
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
        fontSize: this.props.fontSizeScale * 20,
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
        fontSize: this.props.fontSizeScale * 20
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
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.topmostcontainer}>
          {/* GENERAL */}
          <View style={styles.headingItem}>
            <Text style={styles.headingText}>{generalText}</Text>
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
            <Text style={styles.text}>{aboutText}</Text>
            {/* </View> */}
          </TouchableOpacity>
          <View style={styles.line}></View>

          {/* Contact Us */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate('ContactUs')}
          >
            <Text style={styles.text}>{contactText}</Text>
          </TouchableOpacity>

          {/*SETTINGS & ACCESSIBILITY*/}
          <View style={styles.headingItem}>
            <Text style={styles.headingText}>{settingText}</Text>
          </View>

          {/* Language */}
          <View style={styles.item}>
            <View>
              <Text style={styles.text}>{langText}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.languageOption}>EN </Text>
              <Switch
                value={this.props.language}
                // onValueChange={() => {
                //   this.setState({ langUrdu: !langUrdu });
                // }}
                onValueChange={(value) => this.languageChange(value)}

              />
              <Text
                style={styles.languageOption}
                onLayout={(value) => this.languageChange(value)}
              >
                اردو
              </Text>
            </View>
          </View>

          {/* Font Size */}
          <View style={styles.line}></View>
          <View style={styles.item}>
            <Text style={styles.text}>
              {fontSizeText}
            </Text>
            <Slider
              value={this.props.fontSizeScale}
              style={{ width: 250 }}
              minimumValue={0.8}
              maximumValue={1.5}
              minimumTrackTintColor='#adad85'
              maximumTrackTintColor='#000000'
              onSlidingComplete={(value) => this.fontchanger(value)}
            />
          </View>
          <View style={styles.line}></View>

          {/* Push Notifications */}
          <View style={styles.item}>
            <Text style={styles.text}>{notificationsText}</Text>
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
            <Text style={styles.headingText}>{helpAndSupportText}</Text>
          </View>

          {/* App Version */}
          <View style={styles.item}>
            <Text style={styles.text}>{appVersionText}</Text>
            <Text style={styles.version}>0.1.6</Text>
          </View>
          <View style={styles.line}></View>

          {/* Report a Problem */}
          <TouchableOpacity
            style={styles.item}
            onPress={() => this.props.navigation.navigate('ReportProblem')}
          >
            <Text style={styles.text}>{reportText}</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>

          {/* Terms Of Service */}
          <View style={styles.item}>
            <Text style={styles.text}>{termsOfService}</Text>
          </View>
          {/* data providers software liscences */}
          <View style={styles.line}></View>

          {/* Rate Us */}
          <View style={styles.item}>
            <Text style={styles.text}>{rateUsText}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont,
    language: state.toggleTranslation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFontScale: value => dispatch(changeFontScale(value)),
    toggleTranslationAction: () => dispatch(toggleTranslationAction()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(More);
