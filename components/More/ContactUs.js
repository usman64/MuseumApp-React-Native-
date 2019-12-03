import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, Switch } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import FindUs from './FindUs'

export default class ContactUs extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        const { greyScale } = this.state;
        const { pushNotification } = this.state;
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 7 }}>
                    
                        <FindUs />
                       
                        <Text>
                            Social Media, Email, Phone
                       </Text>
                        <Text>
                            Anonymous
                       </Text>

                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    item: {
        fontSize: 20,
        textAlign: 'center',
        lineHeight: 35
        // letterSpacing: 1
    },
    listitem: {
        borderStyle: 'dashed',
        borderBottomWidth: 3,
        opacity: 1,
        borderBottomColor: '#800000'
    },
    text: {
        fontSize: 24,
        marginLeft: 10,
        padding: 10,
        height: 50,
    },
});
