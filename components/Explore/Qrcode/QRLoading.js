import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export class QRLoading extends Component {
  state = {
    puppetData: {}
  };

  async componentDidMount() {
    axios
      .all([
        axios.get(
          `https://glacial-beyond-08798.herokuapp.com/puppetimage/${this.props.navigation.getParam(
            'puppetid'
          )}`
        ),
        axios.get(
          `https://glacial-beyond-08798.herokuapp.com/puppets/${this.props.navigation.getParam(
            'puppetid'
          )}`
        )
      ])
      .then(
        axios.spread((ImagesRes, DescriptionRes) => {
          const imageLinks = ImagesRes.data.map((item) => item.imagelink);
          this.setState({
            images: imageLinks,
            description: DescriptionRes.data[0].description
          });
        })
      )
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <View>
        <ActivityIndicator size='large' color='#ddd' />
      </View>
    );
  }
}

export default QRLoading;
