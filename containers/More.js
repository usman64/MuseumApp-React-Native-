import React, { Component } from 'react';
import * as Font from 'expo-font';
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

import { sendEmail } from './send-email';
import { Linking } from 'expo';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const { height, width } = Dimensions.get('window');

import { connect } from 'react-redux';
import { changeFontScale } from '../Actions/changeFontScale';
import { toggleTranslationAction } from '../Actions/toggleTranslation';

class More extends Component {
  constructor() {
    super();
    this.state = {
      greyScale: false,
      font: 1,
      pushNotification: false,
      langUrdu: false,
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf')
    });
    this.setState({ fontLoaded: true });
    console.log('set ');
  }

  fontchanger(value) {
    this.props.changeFontScale(value);
  }

  greyScaler(temp) {}

  emailSender() {
    sendEmail(
      'SRPdocumentclassification@gmail.com',
      'App Error!',
      'error'
    ).then(() => {
      console.log('Our email successful provided to device mail ');
    });
  }
  languageChange(value) {
    this.props.toggleTranslationAction();
  }

  render() {
    const { greyScale } = this.state;
    const { pushNotification } = this.state;
    const { langUrdu } = this.state;
    const generalText = this.props.language ? 'عام' : 'GENERAL';
    const fontSizeText = this.props.language ? 'حرف کا سائز' : 'Font Size';
    const langText = this.props.language ? 'زبان' : 'Language';
    const settingText = this.props.language
      ? 'ترتیبات اور رسائی'
      : 'SETTINGS AND ACCESSIBILITY';
    const contactText = this.props.language ? 'ہم سے رابطہ کریں' : 'Contact Us';
    const aboutText = this.props.language ? 'ھمارے بارے میں' : 'About';
    const notificationsText = this.props.language
      ? 'اطلاعات'
      : 'Push Notification';
    const appVersionText = this.props.language ? 'ورژن' : 'App Version';
    const reportText = this.props.language
      ? 'مسئلے کے بارے میں بتائیے'
      : 'Report a Problem';
    const helpAndSupportText = this.props.language
      ? 'مدد اور حمایت'
      : 'HELP AND SUPPORT';
    const rateUsText = this.props.language ? 'درجہ بندی' : 'Rate Us';
    const termsOfService = this.props.language
      ? 'سروس کی شرائط'
      : 'Terms of Service';
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
      },
      headingText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: this.props.fontSizeScale * 22,
        color: '#07B5AE',
        marginLeft: 0.04 * width,
        marginRight: 0.04 * width
      },
      headingItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 4
      },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 3,
        marginLeft: 0.06 * width,
        marginRight: 0.06 * width
      },
      line: {
        flex: 0,
        borderTopWidth: 1,
        marginLeft: 0.06 * width,
        marginRight: 0.06 * width,
        borderTopColor: '#352D46',
        opacity: 0.8
      },
      text: {
        fontFamily: 'Montserrat-Medium',
        fontSize: this.props.fontSizeScale * 20,
        color: 'white'
      },
      languageOption: {
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        fontSize: this.props.fontSizeScale * 15
      },
      version: {
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        alignItems: 'flex-end',
        fontSize: this.props.fontSizeScale * 20
      }
    });
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#251F35' }}>
        {this.state.fontLoaded ? (
          <View style={styles.topmostcontainer}>
            {/* GENERAL */}
            <View style={styles.headingItem}>
              <Text style={styles.headingText}>{generalText}</Text>
            </View>
            <TouchableOpacity
              style={styles.item}
              onPress={() => this.props.navigation.navigate('About')}
            >
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
                  thumbColor='#07B5AE'
                  onValueChange={(value) => this.languageChange(value)}
                />
                <Text
                  style={styles.languageOption}
                  // onLayout={(value) => this.languageChange(value)}
                >
                  اردو
                </Text>
              </View>
            </View>

            {/* Font Size */}
            <View style={styles.line}></View>
            <View style={styles.item}>
              <Text style={styles.text}>{fontSizeText}</Text>
              <Slider
                value={this.props.fontSizeScale}
                style={{ width: 150 }}
                minimumValue={0.8}
                maximumValue={1.5}
                thumbTintColor='#07B5AE'
                minimumTrackTintColor='white'
                maximumTrackTintColor='white'
                onValueChange={(value) => this.fontchanger(value)}
              />
            </View>
            <View style={styles.line}></View>

            {/* Push Notifications */}
            <View style={styles.item}>
              <Text style={styles.text}>{notificationsText}</Text>
              <Switch
                // style={{ paddingRight: '14'}}
                thumbColor='#07B5AE'
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
              // onPress={() => this.props.navigation.navigate('ReportProblem')}
              onPress={() => this.emailSender()}
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
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                Linking.openURL(
                  'https://play.google.com/store/apps/topic?id=editors_choice'
                );
              }}
            >
              <Text style={styles.text}>{rateUsText}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor,
    language: state.toggleTranslation.lang1_toggle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFontScale: (value) => dispatch(changeFontScale(value)),
    toggleTranslationAction: () => dispatch(toggleTranslationAction())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(More);
