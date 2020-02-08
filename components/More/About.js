import React, { Component }from 'react';
import { View, Text, StyleSheet, Header, Dimensions, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import AboutContent from './AboutContent'

const { height, width } = Dimensions.get('window');


class About extends Component {
  render() {
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
}}


const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont
  };
};

// export default About;
export default connect(mapStateToProps, null)(About);





// import React, { Component } from 'react'

// export default class About extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
