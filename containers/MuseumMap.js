import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import theme from '../assets/theme';
import { ScrollView } from 'react-native-gesture-handler';

const FloorInfo = (props) => {
  let puppetType = 'String';
  if (props.currFloor === 'First') {
    puppetType = 'Rod';
  } else if (props.currFloor === 'Second') {
    puppetType = 'Glove';
  }
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <Text
        style={{
          fontSize: 36,
          fontWeight: 'bold',
          color: theme.secondaryColor,
        }}
      >
        {props.currFloor} Floor
      </Text>
      <Text
        style={{
          fontSize: 23,
          color: 'grey',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        {puppetType} Puppets
      </Text>
    </View>
  );
};

export class MuseumMap extends Component {
  state = {
    floors: ['Ground', 'First', 'Second'],
    currentFloor: 'Ground',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: theme.primaryColor_var2,
        }}
      >
        {/* <Text
          style={{
            // fontSize: 20//fontScaleing here
            fontSize: 20 * this.props.fontSizeScale,
            fontWeight: '900',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          Development In Progress...
        </Text>
        <Image
          style={{
            width: 200,
            height: 200,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          source={require('../assets/map.gif')}
        /> */}
        <FloorInfo currFloor={this.state.currentFloor} />
        <ScrollView horizontal={true}>
          <View style={{ flex: 1, paddingTop: 50 }}>
            <Image
              style={{ width: 350, height: 500 }}
              source={require('../assets/groundFloor.jpg')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default MuseumMap;

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont.fontScalefactor,
  };
};

export default connect(mapStateToProps, null)(MuseumMap);
