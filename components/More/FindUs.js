import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    Alert,
    Button
  } from 'react-native';

  import MapView, {AnimatedRegion, Animated, Marker} from 'react-native-maps'
  import MapViewDirections from 'react-native-maps-directions'
  import * as Permissions from 'expo-permissions';
  import * as Location from 'expo-location';
  import getDirections from 'react-native-google-maps-directions'

  // const API_KEY = 'AIzaSyAPQHMQjQ6y4iy7rAI6YcIRQoXSA9FaEiY'



export class FindUs extends Component {

    state = {
        location: {},
        errorMessage: null,
        coordinate: {},
        rafipeerCoordinates: {
          lat:31.411805,
          long: 74.232693,
        }
      };

      componentDidMount() {
          this._getLocationAsync()
      }

      handleGetDirections = () => {
        const data = {
          source : {
            latitude: this.state.coordinate.latitude,
            longitude: this.state.coordinate.longitude
          },

          destination: {
            latitude: this.state.rafipeerCoordinates.lat,
            longitude: this.state.rafipeerCoordinates.long
          },

          params : [
            {
              key: "travelmode",
              value: "driving"        // may be "walking", "bicycling" or "transit" as well
            },
            {
              key: "dir_action",
              value: "navigate"       // this instantly initializes navigation using the given travel mode
            }
          ],

        }

        getDirections(data);
      }

      _getLocationAsync = async () => {
        let coord = {}
        let region = {}
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          this.setState({
            errorMessage: 'Permission to access location was denied',
          });
        }
    
        Location.getCurrentPositionAsync({})
        .then(location => {
          this.setState({ location }, ()=> {
            coord.latitude=location.coords.latitude
            region.latitude=location.coords.latitude
            coord.longitude = location.coords.longitude
            this.setState({coordinate: coord});
          });
        })
        
      };

    render() {
        const { latitude, longitude } = this.state.coordinate
        const latitudeDelta= 0.122
        const longitudeDelta= 0.122

        console.log(latitude, longitude)
        console.log(latitudeDelta, longitudeDelta)
        return (
          <View style={styles.container}>
                <MapView 
                    region={{latitude: latitude ? latitude : 0,
                             longitude: longitude ? longitude : 0,
                             latitudeDelta: latitudeDelta ? latitudeDelta : 0,
                             longitudeDelta: longitudeDelta ? longitudeDelta : 0 }}
                    
                    style={styles.mapStyle}    
                >
                    <Marker coordinate={{
                        longitude: longitude ? longitude : 0,
                        latitude: latitude ? latitude : 0
                       }}
                           onCalloutPress={()=> Alert.alert('This is where you belong')} 
                    />

                    <Marker coordinate={{
                        longitude: this.state.rafipeerCoordinates.long,
                        latitude: this.state.rafipeerCoordinates.lat
                      }}
                            onCalloutPress={()=> Alert.alert('This is Rafi peer')} 
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

                <Button title='Get Directions' onPress={()=> this.handleGetDirections()}/>
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
      // width: Dimensions.get('window').width,
      // height: Dimensions.get('window').height,
      width: 500,
      height: 500,
    },
  });

export default FindUs
