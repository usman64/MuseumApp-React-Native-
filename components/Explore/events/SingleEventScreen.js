import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import axios from 'axios';
import { connect } from 'react-redux';


export class SingleEventScreen extends Component {
    constructor(props) {
        super(props);
        this.state={
            time: this.props.navigation.getParam('time'),
            date: this.props.navigation.getParam('date'),
            description: this.props.navigation.getParam('description'),
            relatedImages: []
        }        
    }

    render() {
        
        return (
            <View>
                <Text style ={{
                    textAlign:'center',
                    // fontSize: 30,//fontScaling here
                    fontSize: 30 * this.props.fontSizeScale,
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
                        source={{uri: this.props.navigation.getParam('image')}}>
                    </Image>

                </View>

                <View style={{
                    flexDirection: 'row',
                    paddingLeft: 27,
                }}>
                    
                    <View style={{flexDirection: 'row', paddingTop:20}}>
                        <Text style={{
                            // fontSize: 16//fontScaling here
                            fontSize: 16 * this.props.fontSizeScale,
                            }}>
                            <Text style={{fontWeight: 'bold'}}>Time: </Text>{this.state.time}
                        </Text>
                        <Text style={{
                            // fontSize: 16, //fontScaling here
                            fontSize: 16 * this.props.fontSizeScale,
                            paddingLeft: 80}}>
                            <Text style={{fontWeight: 'bold'}}>Date: </Text>{this.state.date}{'\n\n'}
                        </Text>
                    </View>
                </View>

                <Text style={{
                    // fontSize: 16,//fontScaling here
                    fontSize: 16 * this.props.fontSizeScale, 
                    paddingLeft: 27}}>
                    <Text style={{fontWeight: 'bold'}}>Description: {'\n'}</Text>{this.state.description}
                </Text>
            </View>
        )
    }
}

// export default SingleEventScreen
const mapStateToProps = (state) => {
    return {
        fontSizeScale: state.changeFont
    };
};

export default connect(mapStateToProps, null)(SingleEventScreen);

