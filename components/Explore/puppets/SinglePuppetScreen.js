import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'

export class SinglePuppetScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            puppetName: 'Usman',
            year: 1997,
            region: 'Pakistan',
            description: 'Usman is a wonderful puppet made in Pakistan.',
            images: [
                'https://www.youlinmagazine.com/articles/rafi-peer-international-puppet-festival-2018-5.jpg',
                'https://photo-cdn.urdupoint.com/media/2018/12/_3/730x425/pic_1543839460.jpg',
                'https://www.youlinmagazine.com/articles/rafi-peer-international-puppet-festival-2018-4.jpg'
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>{this.state.puppetName}</Text>
                <SliderBox images={this.state.images}
                />

                <View style={{flexDirection: 'row', paddingTop:20}}>
                    <Text style={{fontSize: 20}}>
                        <Text style={{fontWeight: 'bold'}}>Year: </Text>{this.state.year}
                    </Text>
                    <Text style={{fontSize: 20, paddingLeft: 50}}>
                        <Text style={{fontWeight: 'bold'}}>Region: </Text>{this.state.region}{'\n\n'}
                    </Text>
                </View>
                <Text style={{fontSize: 20}}>
                    <Text style={{fontWeight: 'bold'}}>Description: {'\n'}</Text>{this.state.description}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingTop: 80,
    },
  });

export default SinglePuppetScreen
