import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import axios from 'axios';

const { height } = Dimensions.get('window');

const percentageAreaCovered = (
  heightOfScreen,
  PercentageHeightNeededToCover
) => {
  return (PercentageHeightNeededToCover * heightOfScreen) / 100;
};

class SinglePuppetScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('puppetData').puppetname
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      puppetid: this.props.navigation.getParam('puppetData').puppetid,
      puppetname: this.props.navigation.getParam('puppetData').puppetname,
      category: this.props.navigation.getParam('puppetData').category,
      puppetyear: this.props.navigation.getParam('puppetData').puppetyear,
      region: this.props.navigation.getParam('puppetData').region,
      images: [...this.props.navigation.getParam('puppetData').imagelink],
      description: ''
    };
  }

  async componentWillMount() {
    // const { puppetid } = this.props.navigation.getParam('puppetData');
    // console.warn(this.props.navigation.getParam('puppetData').puppetid);
    // try {
    axios
      .all([
        axios.get(
          `https://glacial-beyond-08798.herokuapp.com/puppetimage/${
            this.props.navigation.getParam('puppetData').puppetid
          }`
        ),
        axios.get(
          `https://glacial-beyond-08798.herokuapp.com/puppets/${
            this.props.navigation.getParam('puppetData').puppetid
          }`
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
      <View style={styles.container}>
        {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          {this.props.navigation.getParam('puppetData').puppetname}
        </Text> */}
        <SliderBox
          SliderBoxHeight={percentageAreaCovered(height, 50)}
          style={{ margin: null }}
          images={this.state.images}
        />

        <View style={{ flexDirection: 'row', paddingTop: 20, padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Year: </Text>
          <Text style={{ fontSize: 18, color: 'grey' }}>
            {this.props.navigation.getParam('puppetData').puppetyear}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 'auto',
              marginRight: 20
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Region: </Text>
            <Text style={{ fontSize: 18, color: 'grey' }}>
              {this.props.navigation.getParam('puppetData').region}
            </Text>
          </View>
        </View>
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Description:</Text>

          {this.state.description === '' ? (
            <ActivityIndicator size='large' color='#ddd' />
          ) : (
            <Text style={{ fontSize: 18, color: 'grey' }}>
              {this.state.description}
            </Text>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});

export default SinglePuppetScreen;
