import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class CategoryItem extends Component {
  render() {
    // console.log(this.props.ImageUri)
    const { type } = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (type === 'CategorizedPuppets') {
            this.props.navigation.navigate('CategorizedPuppets', {
              filterOn: this.props.name,
              filterType: type
            });
          } else if (type === 'RegionalPuppets') {
            this.props.navigation.navigate('RegionalPuppets', {
              filterOn: this.props.name,
              filterType: type
            });
          } else {
            this.props.navigation.navigate('SingleEvent', {
              name: this.props.name,
              image: this.props.ImageUri,
              date: this.props.date,
              description: this.props.description,
              time: this.props.time
            });
          }
        }}
        style={{
          height: 125,
          width: 150,
          marginLeft: 20,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 5,
          elevation: 10,
          borderRadius: 22
        }}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <ImageBackground
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
            imageStyle={{ borderRadius: 22 }}
            source={
              typeof this.props.ImageUri === 'number'
                ? this.props.ImageUri
                : { uri: this.props.ImageUri }
            }
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: 22
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: 20,
                  paddingLeft: 15,
                  paddingBottom: 15
                }}
              >
                {this.props.name}
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        </View> */}
      </TouchableWithoutFeedback>
    );
  }
}

export default CategoryItem;
