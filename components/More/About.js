import React from 'react';
import { View, Text, StyleSheet, Header, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
const AboutContent = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/rafifestival.jpg')}
          style={{
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height/3,
            borderRadius: 2,
            resizeMode: 'contain',
          }}
        />
        <View style={{
          flex: 6
        }}
          >

        <Text style={styles.item}>
          Rafi Peer Cultural Centre is one of the most culturally rich places in
          Pakistan. Since it's inception the centre has hosted many national and
          continental events, such as The Asia Puppet Festival and The Literary
          Festival.
          {'\n\n'}
          The centre also has a multitude of attractions including the Rafi Peer
          Theatre and the Peeru's Cafe but arguably the most liked attraction is
          the Museum of Puppetry, which has the honor of being Asia's largest
          puppet museum and is home to puppets from more than 40 different
          countries.
        </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const About = () => {
  return (
    //     <Header
    //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    // />
    <View style={{ flex: 1 }}>
   
        <View style={{ flex: 7 }}>
        <AboutContent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingLeft: .03*width,
    paddingRight: .03*width,
    paddingTop: .02*height,
    paddingBottom: .03*height,
  },
  item: {
    fontSize: 0.05*width,
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

export default About;
