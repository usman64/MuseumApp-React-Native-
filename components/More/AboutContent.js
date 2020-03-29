import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Header,
  Dimensions,
  Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Font from 'expo-font';

const { height, width } = Dimensions.get('window');
// const AboutContent = () =>
class AboutContent extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    const aboutText1 = this.props.language
      ? `رفیع پیر ثقافتی مرکز یہاں کے سب سے زیادہ ثقافتی لحاظ سے امیر مقام ہے
            پاکستان۔ اس کے آغاز کے بعد سے ہی اس مرکز میں بہت سے قومی اور
            براعظم ایونٹس ، جیسے ایشیاء پپیٹ فیسٹیول اور دی لٹریری
            میلہ۔`
      : ` Rafi Peer Cultural Centre is one of the most culturally rich places in Pakistan. Since it's inception the centre has hosted many national and continental events, such as The Asia Puppet Festival and The Literary Festival.`;
    const aboutText2 = this.props.language
      ? `
            اس مرکز میں رافیر پیر سمیت متعدد پرکشش مقامات ہیں
            تھیٹر اور پیرو کا کیفے لیکن سب سے زیادہ پسند کی جانے والی توجہ ہے
            پپیٹری کا میوزیم جسے ایشیاء کا سب سے بڑا مقام ہونے کا اعزاز حاصل ہے
            کٹھ پتلی میوزیم اور 40 سے زیادہ مختلف کٹھ پتلیوں کا گھر ہے
            ممالک.`
      : ` The centre also has a multitude of attractions including the Rafi Peer Theatre and the Peeru's Cafe but arguably the most liked attraction is the Museum of Puppetry, which has the honor of being Asia's largest puppet museum and is home to puppets from more than 40 different countries.`;

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 0.03 * width,
        paddingRight: 0.03 * width,
        // paddingTop: .02*height,
        paddingBottom: 0.03 * height
      },
      item: {
        // fontSize: 0.05 * width,//fontScaling here need to test font sizes
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        fontSize: 18 * this.props.fontSizeScale,
        textAlign: 'center',
        lineHeight: 35
        // letterSpacing: 1
      },
      listitem: {
        borderStyle: 'dashed',
        borderBottomWidth: 3,
        opacity: 1,
        borderBottomColor: '#800000'
      }
    });
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {this.state.fontLoaded ? (
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 3,
                marginBottom: 20
              }}
            >
              <Image
                source={require('../../assets/rafifestival.jpg')}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'cover'
                }}
              />
            </View>

            <View
              style={{
                flex: 6
              }}
            >
              <Text style={styles.item}>
                {aboutText1}
                {'\n\n'}
                {aboutText2}
              </Text>
            </View>
          </View>
        ) : null}
      </ScrollView>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor,
    language: state.toggleTranslation.lang1_toggle
  };
};

export default connect(mapStateToProps, null)(AboutContent);
