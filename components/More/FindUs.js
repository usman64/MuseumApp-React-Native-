import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
  } from 'react-native';

  import MapView, {AnimatedRegion, Animated, Marker} from 'react-native-maps'
  import * as Permissions from 'expo-permissions';
  import * as Location from 'expo-location';


export class FindUs extends Component {

    state = {
        location: {},
        errorMessage: null,
        initialRegion: {
            latitude: 31.4698962,
            longitude: 74.4117526,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
        coordinate: {},
      };

      componentDidMount() {
          this._getLocationAsync()
      }

      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
        let coord = {}
        coord.latitude=location.coords.latitude
        coord.longitude = location.coords.longitude
        this.setState({coordinate: coord});
        console.log(this.state.coordinate)
      };

    render() {
        return (
          <View style={styles.container}>
                <MapView 
                    region={this.state.initialRegion}
                    style={styles.mapStyle}    
                >
                    <Marker coordinate={{
                        longitude: this.state.coordinate.longitude ? this.state.coordinate.longitude : 0,
                        latitude: this.state.coordinate.latitude ? this.state.coordinate.latitude : 0
                    }}/>
                </MapView>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default FindUs
