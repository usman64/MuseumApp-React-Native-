import React from 'react';
import { View, Text, StyleSheet, Header} from 'react-native';

const About = () => {
  return (
//     <Header
//   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
// />
    <View style={styles.container}>
      <Text style={styles.item}>Rafi Peer Cultural Centre is one of the most culturally 
        rich places in Pakistan. Since it's inception the centre has hosted many national and continental events, 
        such as The Asia Puppet Festival and the Literary Festival.
        {"\n\n"}
        The centre also has a multitude of attractions including the Rafi Peer Theatre and the Peeru's Cafe but arguably the most liked attraction is 
        the Museum of Puppetry, which has the honor of being Asia's largest puppet museum and is home to puppets from more than 40 different 
        countries.
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 20,
  },
  item: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 35,
    // letterSpacing: 1
  },
  listitem: {
    borderStyle: 'dashed',
    borderBottomWidth: 3,
    opacity: 1,
    borderBottomColor: '#800000'
  }
})

export default About;
