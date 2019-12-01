import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QrCodeScanner from '../components/Explore/Qrcode/QrCodeScanner';

class QrCodeScreen extends Component {
  render() {
    return <QrCodeScanner navigation={this.props.navigation} />;
  }
}

export default QrCodeScreen;
