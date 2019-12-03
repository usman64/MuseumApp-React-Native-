import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import axios from 'axios';

export class SingleEventScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: '7:00 PM',
            date: '11/12/19',
            description: 'This event is a great event because it is a beautiful event',
            relatedImages: []
        }        
    }

    async componentDidMount() {
       const data = await axios.get(
        `https://glacial-beyond-08798.herokuapp.com/events/2`
        )

        console.log(data)
    }

    render() {
        
        return (
            <View>
                <Text style ={{
                    textAlign:'center',
                    fontSize: 30,
                    fontWeight: '700',
                    paddingHorizontal: 20,
                    color: 'grey',
                    paddingTop: 20,
                }}>
                    {this.props.navigation.getParam('name')}
                </Text>

                <View style={{
                    paddingTop: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image 
                        style={{width: 300, height: 200}}
                        source={this.props.navigation.getParam('image')}>
                    </Image>

                </View>

                <View style={{
                    flexDirection: 'row',
                    paddingLeft: 27,
                }}>
                    
                    <View style={{flexDirection: 'row', paddingTop:20}}>
                        <Text style={{fontSize: 16}}>
                            <Text style={{fontWeight: 'bold'}}>Time: </Text>{this.state.time}
                        </Text>
                        <Text style={{fontSize: 16, paddingLeft: 80}}>
                            <Text style={{fontWeight: 'bold'}}>Date: </Text>{this.state.date}{'\n\n'}
                        </Text>
                    </View>
                </View>

                <Text style={{fontSize: 16, paddingLeft: 27}}>
                    <Text style={{fontWeight: 'bold'}}>Description: {'\n'}</Text>{this.state.description}
                </Text>
            </View>
        )
    }
}

export default SingleEventScreen
