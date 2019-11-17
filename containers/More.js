import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Switch  } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export class More extends Component {
  constructor(){
    super();
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // };
  }
  navigator(where){
    if (where === 'About'){
      this.props.navigation.navigate('About')
    }
  }
  state = {
    isSwitchOn: false,
  };
  render() {
    const { isSwitchOn } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
         <View style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <FlatList
          data={[
            {key: 'About'},
            {key: 'Contact Us'},
            {key: 'Find Us'},
            {key: 'Language'},
            {key: 'Settings'},
            {key: 'Help'},
          ]}
          renderItem={
            ({item}) =>{ 
              if(item.key === "Language"){
                return (
                  <View
                  style={{flex:1,
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',}}
                  onPress={() => this.navigator(item.key)}>
                  <Switch
                  // style={{justifyContent: 'flex-end',}}
                  value={isSwitchOn}
                  onValueChange={() =>
                    { this.setState({ isSwitchOn: !isSwitchOn }); }
                  }
                  />                  
                  <Text style={styles.item}>{item.key}
                  </Text>

                  </View>
                )
              }
              else{
                return (
                  <TouchableOpacity style={{flex:1}}
                  // style={styles.listitem}
                  onPress={() => this.navigator(item.key)}>
                  <Text style={styles.item}>{item.key}</Text>
                  </TouchableOpacity>
                )
              }
            } 
          }
        />
      </View>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 20
  },
  item: {
    marginLeft: 10,
    padding: 10,
    fontSize: 24,
    height: 50,
    justifyContent: 'flex-start',
  }
})

export default More;
