import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Alert,
  Button
} from 'react-native';

import MapView, { AnimatedRegion, Animated, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import getDirections from 'react-native-google-maps-directions';

// const API_KEY = API_KEY

export class FindUs extends Component {
  state = {
    location: {},
    errorMessage: null,
    coordinate: {},
    rafipeerCoordinates: {
      latitude: 31.411805,
      longitude: 74.232693
    }
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  handleGetDirections = () => {
    const data = {
      source: {
        latitude: this.state.coordinate.latitude,
        longitude: this.state.coordinate.longitude
      },

      destination: {
        latitude: this.state.rafipeerCoordinates.latitude,
        longitude: this.state.rafipeerCoordinates.longitude
      },

      params: [
        {
          key: 'travelmode',
          value: 'driving' // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate' // this instantly initializes navigation using the given travel mode
        }
      ]
    };

    getDirections(data);
  };

  _getLocationAsync = async () => {
    let coord = {};
    let region = {};
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }

    Location.getCurrentPositionAsync({}).then((location) => {
      this.setState({ location }, () => {
        coord.latitude = location.coords.latitude;
        coord.longitude = location.coords.longitude;
        this.setState({ coordinate: coord });
      });
    });
  };

  render() {
    const { latitude, longitude } = this.state.rafipeerCoordinates;
    const latitudeDelta = 0.012;
    const longitudeDelta = 0.012;

    console.log(this.state.coordinate.latitude, this.state.coordinate.longitude);
    console.log(latitudeDelta, longitudeDelta);
    return (
      <View style={styles.container}>
        <MapView
          region={{
            latitude: latitude ? latitude : 0,
            longitude: longitude ? longitude : 0,
            latitudeDelta: latitudeDelta ? latitudeDelta : 0,
            longitudeDelta: longitudeDelta ? longitudeDelta : 0
          }}
          style={styles.mapStyle}
        >
          <Marker
            coordinate={{
              longitude: this.state.coordinate.longitude ? this.state.coordinate.longitude : 0,
              latitude: this.state.coordinate.latitude ? this.state.coordinate.latitude : 0,
              
            }}
            onPress={() => Alert.alert('This is where you belong')}
          />

          <Marker
            coordinate={{
              longitude: longitude,
              latitude: latitude
            }}
            onPress={() => Alert.alert('This is Rafi peer')}
          />

          {/* <MapViewDirections 
                      origin={{latitude: latitude, longitude:longitude}}
                      destination={{latitude: this.state.rafipeerCoordinates.lat,
                                    longitude: this.state.rafipeerCoordinates.long}}
                      apikey={API_KEY}
                      strokeWidth={2}
                      strokeColor='hotpink'
                    /> */}
        </MapView>

        <View style={{ margin: 20 }}>
          <Button
            style={{ borderRadius: 10 }}
            title='Get Directions'
            color='maroon'
            onPress={() => this.handleGetDirections()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2
    // width: 50,
    // height: 500,
  }
});

export default FindUs;
