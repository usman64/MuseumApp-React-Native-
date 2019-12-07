import React, { Component } from 'react';
import {
    Picker,
    Text,
    View, 
    TextInput,
    StyleSheet,
    SafeAreaView,
    Button,
    Dimensions,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    KeyboardAvoidingView
} from 'react-native';
import { Overlay } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Dropdown } from 'react-native-material-dropdown';
// import ModalDropdown from 'react-native-modal-dropdown';

// import SafeAreaView from 'react-native-safe-area-view';
const { height, width } = Dimensions.get('window');


export default class ReportProblem extends Component {
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            Quertype: "Query Type",
            subject: null,
            description: null,
            language: 'hello',
            selection:"Please Select An Option"
        }
    }
    // const[value, onChangeText] = React.useState('Useless Placeholder');

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    // toggleModal = () => {
    //     console.log("here")
    //     this.setState({ isModalVisible: !this.state.isModalVisible });
    // };
    
    render() {
        const { isModalVisible } = this.state;
        const {selection} = this.state

    return (
    < KeyboardAvoidingView style={{flex:1}}> 
        <View style={{ flex: 1 }}>
            <View style={styles.dropDownContainer}>
                    <TouchableOpacity onPress={() => {
                        this.setState({ isModalVisible: !isModalVisible });
                    }}>
                        <Text style={styles.text}>
                            {selection}
                        </Text>
                    </TouchableOpacity >
                    <Overlay 
                        isVisible={this.state.isModalVisible}
                        onBackdropPress={() => this.setState({ isModalVisible: false })}
                        >
                        <View style={styles.overlay}>

                        <TouchableOpacity style={styles.overlayItem}
                        onPress={() => {
                            this.setState({selection:"Events"})
                            this.setState({ isModalVisible: !isModalVisible });
                        }}>
                            <Text style={styles.overlayText}>
                                Events
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.line}></View>

                        <TouchableOpacity 
                        style={styles.overlayItem}
                        onPress={() => {
                            this.setState({ selection: "Museum" })
                            this.setState({ isModalVisible: !isModalVisible });
                        }}>
                            <Text style={styles.overlayText}>
                                Museum
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.line}></View>

                        <TouchableOpacity 
                        style={styles.overlayItem}
                        onPress={() => {
                            this.setState({ selection: "Concert" })
                            this.setState({ isModalVisible: !isModalVisible });
                        }}>
                            <Text style={styles.overlayText}>
                                Concert
                            </Text>
                        </TouchableOpacity>

                        <View style={styles.line}></View>

                        <TouchableOpacity 
                        style={styles.overlayItem}
                        onPress={() => {
                            this.setState({ selection: "Application Error" })
                            this.setState({ isModalVisible: !isModalVisible });
                        }}>
                            <Text style={styles.overlayText}>
                                Application Error
                            </Text>
                        </TouchableOpacity>
                        
                        <View style={styles.line}></View>
                        
                        <TouchableOpacity 
                        style={styles.overlayItem}
                        onPress={() => {
                            this.setState({ selection: "Rafi Peer Service" })
                            this.setState({ isModalVisible: !isModalVisible });
                        }}>
                        <Text style={styles.overlayText}>
                                Rafi Peer Service
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </Overlay>
                                                            
            </View> 
      
            <View style={styles.line}></View>
            <View style={styles.subjectContainer}>
                <TextInput 
                    style={styles.text}
                    underlineColorAndroid="transparent"
                    placeholder="Subject"
                    placeholderTextColor="rgba(64, 64, 64, 0.5)',"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ subject:text })} />
            </View>
            <View style={styles.line}></View>
            <View style={styles.descriptionContainer}>
                <TextInput
                    style={styles.text}

                    underlineColorAndroid="transparent"
                    placeholder="Description"
                    placeholderTextColor="rgba(64, 64, 64, 0.5)"
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ description: text})} />
            </View>
            <View style={{flex:1}}>
                <TouchableOpacity style={{ alignItems:'center',
                        backgroundColor: 'rgba(93, 97, 102, 0.4)',
                            marginLeft: 0.04 * width,
                            marginRight: 0.04 * width,}}>
                <Text style={styles.sendText}>SEND</Text>
                </TouchableOpacity>
            </View>
        </View>      
    </KeyboardAvoidingView>
    );
  }
}


const styles = StyleSheet.create({
    dropDownContainer:{
        // flex: 1,
        // flex: 1,
        flex: 1,
        flexDirection: 'column',
        // alignItems:'center',
        justifyContent: 'center',
        // marginTop:0.02*height,
        marginLeft: 0.04 * width,
        marginRight: 0.04 * width
    },
    picker: {
        width: 300,
        height: 44,
        // backgroundColor: '#FFF0E0',
        // borderColor: 'red',
        // borderBottomWidth: 2,
        // flex: 90
    },

    pickerItem: {
        height: 44,
        color: 'grey',
        fontSize: 20,
    },
    subjectContainer :{
        // flex: 1,
            // flex:1,
        flex: 2,
        marginTop: 0.02 * height,
        marginLeft: 0.04 * width,
        marginRight: 0.04 * width

    },
    descriptionContainer:{
        // flexGrow: 1,
        marginTop: 0.02 * height,
        marginLeft: 0.04 * width,
        marginRight: 0.04 * width,
        flex: 6,
        
    },
    topmostcontainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 0.01 * height,
        paddingBottom: 0.01* height,
        paddingLeft: 0.05* width,
        paddingRight: 0.05* width,
    },
    sendContainer:{
        flex: 1,
    },
    text:{
        fontSize: 24,
    },
    line: {
        flex: 0,
        borderTopWidth: 1,
        // marginLeft: 0.06 * width,
        // marginRight: 0.06 * width,
        borderTopColor: 'rgba(64, 64, 64, 0.1)',
    },
    overlay: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    overlayItem:{
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
    },
    overlayText: {
        fontSize: 0.08*width,
    },
    sendText: {
        color: 'rgba(59, 60, 61,0.9)',
        fontSize: 0.07 * width,
    }
})


{/* <Picker 
                style={[styles.picker]} 
                // itemStyle={styles.pickerItem}
                // style={{ height: 100, width: 200 }}

                selectedValue={this.state.Quertype}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ Quertype: itemValue })
                }
                // itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily: "Ebrima", fontSize: 17 }}
                >
                        <Picker.Item label="Lag In Application" value="Application Lag" />
                        <Picker.Item   label="Event" value="Event" />
                        <Picker.Item  label="Service" value="Service" />
                        <Picker.Item  label="Peeru's Cafe" value="Peeru's Cafe" />
                        <Picker.Item   label="Puppet Museum" value="Puppet Museum" />
                        <Picker.Item   label="Event Managment" value="Event Managment" />
                        <Picker.Item  label="Compatibiltiy Issues" value="Compatibiltiy Issues" />
                        <Picker.Item  label="Other" value="Other" />
            </Picker> */}
{/* <Dropdown 
                        size='60'
                        label='Favorite Fruit'
                        data={data}












                        // let data = [{
                            //     value: 'Banana',
                            // }, {
                            //     value: 'Mango',
                            // }, {
                            //     value: 'Pear',
                            // }];
                    /> */}


                    /*       <View style={styles.dropDownContainer}>
                <Picker
                    selectedValue={this.state.language}
                    style={{ flex:1 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View> */