import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPuppet, updatePuppet} from '../Actions/puppetActions'

export class puppetScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is puppet Screen</Text>
                <Button title='Go to Events'
                        onPress={()=> {
                          this.props.dispatch(addPuppet('Hello'))
                          this.props.navigation.navigate('Events')} 
                        }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
    },
})  

export default connect(({dispatch}) => ({dispatch}))(puppetScreen)
