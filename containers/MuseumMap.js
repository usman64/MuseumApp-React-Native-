import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

export class MuseumMap extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            // fontSize: 20//fontScaleing here
            fontSize: 20*this.props.fontSizeScale,
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
        />
      </View>
    );
  }
}

// export default MuseumMap;


const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont
  };
};

export default connect(mapStateToProps, null)(MuseumMap);
