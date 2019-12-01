import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider, Switch, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Settings extends Component {
    constructor() {
        super();
        this.state = {
            greyScale: false,
            font: 1,
            pushNotification: false,
            langUrdu:false,
        }
    }
    fontchanger(value){
        this.setState({ font: value})
    }
    greyScaler(temp){

    }
    // toggleSwitch(value){
    //     //onValueChange of the switch this function will be called
    //     this.setState({ greyScale: true })
    //     //state changes according to switch
    //     //which will result in re-render the text
    // }
    render() {
        const { greyScale } = this.state;
        const {pushNotification} = this.state;
        const {langUrdu} = this.state;
        return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, margin:10}}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                            height: 50,
                            borderBottomWidth: 1,
                            borderColor: 'rgba(214, 215, 218, 0.5)', }}>
                        <Text style={styles.text}>
                        Font Size
                        </Text>
                        <Slider
                            style={{ width: 100, height: 40 }}
                            minimumValue={1}
                            maximumValue={10}
                            minimumTrackTintColor="#adad85"
                            maximumTrackTintColor="#000000"
                            onSlidingComplete={(value) => this.fontchanger(value)}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                            height: 50,
                            borderBottomWidth: 1,
                            borderColor: 'rgba(214, 215, 218, 0.5)', }}>
                        <Text style={styles.text}>
                        Greyscale Mode
                        </Text>
                        <Switch
                                style={{marginRight:10}}
                                onValueChange={() => {
                                    this.setState({ greyScale: !greyScale });
                                }}
                                value={this.state.greyScale}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between',
                            height: 50,
                            borderBottomWidth: 1,
                            borderColor: 'rgba(214, 215, 218, 0.5)', }}>
                        <Text style={styles.text}>
                        Push Notifications
                        </Text>
                        <Switch
                            style={{ marginRight: 10 }}
                            onValueChange={() => {
                                this.setState({ pushNotification: !pushNotification });
                            }}
                            value={this.state.pushNotification}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: 50,
                            borderBottomWidth: 1,
                            borderColor: 'rgba(214, 215, 218, 0.5)',}}
                    >
                        <View>
                            <Text style={styles.text}>Language</Text>
                        </View>
                        <View style={{ flexDirection: 'row'}}>
                            <Text style={styles.languageOption}>EN</Text>
                            <Switch
                                // style={{justifyContent: 'flex-end',}}
                                value={langUrdu}
                                onValueChange={() => {
                                    this.setState({ langUrdu: !langUrdu });
                                }}
                            />
                            <Text style={styles.languageOption}>UR</Text>
                        </View>
                    </View>
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
languageOption: {
    color: 'grey',
    fontSize: 10
}
});
