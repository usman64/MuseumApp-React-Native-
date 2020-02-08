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
import { connect } from 'react-redux';

const { height, width } = Dimensions.get('window');

class ReportProblem extends Component {
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

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    // toggleModal = () => {
    //     console.log("here")
    //     this.setState({ isModalVisible: !this.state.isModalVisible });
    // };
    
    render() {
        const { isModalVisible } = this.state;
        const {selection} = this.state;
        const styles = StyleSheet.create({
            dropDownContainer: {
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
                // fontSize: 20,//fontScaling here
                fontSize: 20 * this.props.fontSizeScale,
            },
            subjectContainer: {
                // flex: 1,
                // flex:1,
                flex: 2,
                marginTop: 0.02 * height,
                marginLeft: 0.04 * width,
                marginRight: 0.04 * width

            },
            descriptionContainer: {
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
                paddingBottom: 0.01 * height,
                paddingLeft: 0.05 * width,
                paddingRight: 0.05 * width,
            },
            sendContainer: {
                flex: 1,
            },
            text: {
                // fontSize: 24,//fontScaling here
                fontSize: 24 * this.props.fontSizeScale,
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
            overlayItem: {
                flex: 1,
                flexDirection: 'column',
                // alignItems: 'center',
                justifyContent: 'center',
            },
            overlayText: {
                // fontSize: 0.08*width, //fontScaling here
                fontSize: 20 * this.props.fontSizeScale,
            },
            sendText: {
                color: 'rgba(59, 60, 61,0.9)',
                // fontSize: 0.07 * width,////fontScaling here
                fontSize: 20 * this.props.fontSizeScale,
            }
        })

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




const mapStateToProps = (state) => {
    return {
        fontSizeScale: state.changeFont
    };
};

export default connect(mapStateToProps, null)(ReportProblem);

