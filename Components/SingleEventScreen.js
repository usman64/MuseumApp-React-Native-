import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux'

export class SingleEventScreen extends Component {
    render() {
        const { reducer ={}} =this.props
        const { text= '' } = reducer
        return (
            <View style={styles.container}>
                <Text>This is a single Event Screen</Text>
        <Text>My name is: {text}</Text>
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

export default connect(({reducer}) => ({reducer}))(SingleEventScreen)
