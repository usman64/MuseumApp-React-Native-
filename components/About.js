import React from 'react';
import { View, Text, StyleSheet, Header } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const AboutContent = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
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
    </ScrollView>
  );
};

const About = () => {
  return (
    //     <Header
    //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
    // />
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          height: 75,
          backgroundColor: 'maroon',
          borderBottomWidth: 1,
          borderBottomColor: '#ddd'
        }}
      >
        <View
          style={{
            flexDirection: 'row'
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 30,
              fontWeight: '700',
              marginLeft: 10,
              color: 'white'
            }}
          >
            About Us
          </Text>
        </View>
      </View>
      <View style={{ flex: 7 }}>
        <AboutContent />
      </View>
    </View>
  );
};

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
  }
});

export default About;