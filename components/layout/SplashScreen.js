import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';


export class SplashScreen extends Component {
  componentDidMount() {
    this.time = setTimeout(() => this.props.navigation.navigate('Main'), 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.time);
  }

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', backgroundColor: 'maroon' }}
      >
        <Image
          source={require('../../assets/RF_logo.png')}
          style={{
            width: 150,
            height: 150,
            resizeMode: 'cover',
            marginRight: 'auto',
            marginLeft: 'auto',
            borderRadius: 20
          }}
        />
        <Text
          style={{
            marginTop: 22,
            // fontSize: 25,//fontScaling here
            fontSize: 25 * this.props.fontSizeScale, 
            fontWeight: '700',
            marginLeft: 10,
            color: 'white',
            marginRight: 'auto',
            marginLeft: 'auto'
          }}
        >
          RAFI PEER
        </Text>
      </View>
    );
  }
}

// export default SplashScreen;

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont
  };
};

export default connect(mapStateToProps, null)(SplashScreen);

