import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Switch
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

export class More extends Component {
  constructor() {
    super();
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.state = {
    //   dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    // };
  }
  navigator(where) {
    if (where === 'About') {
      this.props.navigation.navigate('About');
    }
  }
  state = {
    isSwitchOn: false
  };
  render() {
    const { isSwitchOn } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: 40, paddingLeft: 10, paddingRight: 30 }}>
          
          <View style={styles.container}>
            <FlatList
              data={[
                { key: 'About' },
                { key: 'Contact Us' },
                { key: 'Find Us' },
                { key: 'Language' },
                { key: 'Settings' },
                { key: 'Help' }
              ]}
              renderItem={({ item }) => {
                if (item.key === 'Language') {
                  return (
                    <View 
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 50,
                        borderBottomWidth: 1,
                        borderColor: 'rgba(214, 215, 218, 0.5)',
                      }}
                      onPress={() => this.navigator(item.key)}
                    >
                      <TouchableOpacity 
                        >
                        <Text style={styles.text}>{item.key}</Text>
                      </TouchableOpacity>
                      <View style={{ flexDirection: 'row', marginRight: 5 }}>
                        <Text style={styles.languageOption}>EN</Text>
                        <Switch
                          // style={{justifyContent: 'flex-end',}}
                          value={isSwitchOn}
                          onValueChange={() => {
                            this.setState({ isSwitchOn: !isSwitchOn });
                          }}
                        />
                        <Text style={styles.languageOption}>UR</Text>
                      </View>
                    </View>
                  );
                } else {
                  return (
                    <View>
                      <TouchableOpacity 
                      style={{
                        flex: 1, 
                        height: 50,
                        borderBottomWidth: 1,
                        borderColor: 'rgba(214, 215, 218, 0.5)',
                      }}
                      // style={styles.listitem}
                      onPress={() => this.navigator(item.key)}
                    >
                      <Text style={styles.text}>{item.key}</Text>
                    </TouchableOpacity>
                    </View>
                  );
                }
              }}
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
    // paddingTop: 20
  },
  item: {
    justifyContent: 'flex-start',
   
  },
  text:{
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

export default More;
