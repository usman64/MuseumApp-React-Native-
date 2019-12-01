import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Alert,
  Platform,
  TextInput
} from 'react-native';
import PuppetList from '../components/Explore/puppets/PuppetList';
import CategoryItem from '../components/Explore/CategoryItem';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native-gesture-handler';
import PuppetGridViewCard from '../components/Explore/puppets/PuppetGridViewCard';

const ITEM_WIDTH = Dimensions.get('window').width;

export class PuppetsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title:
        navigation.getParam('filterType') === 'CategorizedPuppets'
          ? `${navigation.getParam('filterOn')} Puppets`
          : `${navigation.getParam('filterOn')}'s Puppets`
    };
  };

  state = {
    searchValue: '',
    filteredData: [],
    data: [
      {
        puppetid: 1,
        puppetname: 'Stickman',
        category: 'string',
        puppetyear: 1975,
        region: 'India',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 2,
        puppetname: 'Batman',
        category: 'string',
        puppetyear: 1999,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 3,
        puppetname: 'Jack',
        category: 'string',
        puppetyear: 2003,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 4,
        puppetname: 'Stickman',
        category: 'string',
        puppetyear: 1975,
        region: 'India',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 5,
        puppetname: 'Badman',
        category: 'string',
        puppetyear: 1999,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 6,
        puppetname: 'Jack',
        category: 'string',
        puppetyear: 2003,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 7,
        puppetname: 'Superman',
        category: 'rod',
        puppetyear: 2012,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 8,
        puppetname: 'Bapuman',
        category: 'rod',
        puppetyear: 2000,
        region: 'Uzbekistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 9,
        puppetname: 'DonMan',
        category: 'rod',
        puppetyear: 2012,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 10,
        puppetname: 'Bapuman',
        category: 'rod',
        puppetyear: 2000,
        region: 'Uzbekistan',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 11,
        puppetname: 'Flash',
        category: 'rod',
        puppetyear: 2019,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 12,
        puppetname: 'Reverse ',
        category: 'rod',
        puppetyear: 2019,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 13,
        puppetname: 'Bablu',
        category: 'glove',
        puppetyear: 2010,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 14,
        puppetname: 'Sarmu',
        category: 'glove',
        puppetyear: 2005,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 15,
        puppetname: 'Flash',
        category: 'glove',
        puppetyear: 2019,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 16,
        puppetname: 'Bablu',
        category: 'glove',
        puppetyear: 2010,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 17,
        puppetname: 'Sarmu',
        category: 'glove',
        puppetyear: 2005,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 18,
        puppetname: 'Bob',
        category: 'glove',
        puppetyear: 2019,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 19,
        puppetname: 'Flash',
        category: 'finger',
        puppetyear: 2019,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 20,
        puppetname: 'Master',
        category: 'finger',
        puppetyear: 2019,
        region: 'India',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 21,
        puppetname: 'Kaltu',
        category: 'finger',
        puppetyear: 2019,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      },
      {
        puppetid: 22,
        puppetname: 'Raven',
        category: 'finger',
        puppetyear: 2019,
        region: 'China',
        imagelink:
          'https://drive.google.com/uc?id=1Rdlxol-hX0-uK-6cuUC-KqT0ozWKEHBz'
      },
      {
        puppetid: 23,
        puppetname: 'Annu',
        category: 'finger',
        puppetyear: 2019,
        region: 'India',
        imagelink:
          'https://drive.google.com/uc?id=1w8hS5bCYZWqHwnVRhJTRDzN173z4jGGP'
      },
      {
        puppetid: 24,
        puppetname: 'Altu',
        category: 'finger',
        puppetyear: 2019,
        region: 'Pakistan',
        imagelink:
          'https://drive.google.com/uc?id=1bHVPiN7IH96t4sFQ8gUW_xVW2W7vI7dK'
      }
    ]
  };

  componentWillMount() {
    if (this.props.navigation.getParam('filterType') === 'CategorizedPuppets') {
      const filteredData = this.state.data.filter(
        (item) =>
          item.category.toLowerCase() ===
          this.props.navigation.getParam('filterOn').toLowerCase()
      );
      this.setState({ data: filteredData });
    } else if (
      this.props.navigation.getParam('filterType') === 'RegionalPuppets'
    ) {
      const filteredData = this.state.data.filter(
        (item) =>
          item.region.toLowerCase() ===
          this.props.navigation.getParam('filterOn').toLowerCase()
      );
      this.setState({ data: filteredData });
    }
  }

  onChange = (text) => {
    this.setState((prevState) => ({
      searchValue: text,
      filteredData:
        prevState.data.filter(
          (item) =>
            item.category.toLowerCase().includes(text.toLowerCase()) ||
            item.puppetname.toLowerCase().includes(text.toLowerCase()) ||
            item.puppetyear
              .toString()
              .toLowerCase()
              .includes(text.toLowerCase())
        ) || item.region.toLowerCase().includes(text.toLowerCase())
    }));
  };

  render() {
    return this.state.data.length === 0 ? (
      <Text> No Puppets Found!</Text>
    ) : (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            backgroundColor: 'white',
            marginHorizontal: 20,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            elevation: 1,
            marginTop: Platform.OS === 'android' ? 10 : null,
            borderRadius: 10,
            marginBottom: 5,
            flex: 0.5
          }}
        >
          <Icon
            color='grey'
            style={{ marginRight: 10 }}
            name='search'
            size={20}
          />
          {/* <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => this.props.navigation.navigate('Search')}
            > */}
          <TextInput
            style={{
              fontSize: 15,
              flex: 1,
              fontWeight: '700',
              backgroundColor: 'white'
            }}
            underlineColorAndroid='transparent'
            placeholder='Search'
            placeholderTextColor='grey'
            onChangeText={(text) => this.onChange(text)}
            value={this.state.searchValue}
            maxLength={20}
          />
          {/* </TouchableOpacity> */}
        </View>

        <View style={{ flex: 10 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={
              this.state.searchValue.length > 0
                ? this.state.filteredData
                : this.state.data
            }
            renderItem={({ item }) => (
              //   <PuppetGridViewCard
              //     ITEM_WIDTH={ITEM_WIDTH}
              //     item={item}
              //     navigation={this.props.navigation}
              //   />
              <TouchableWithoutFeedback
                style={{
                  flex: 1,
                  height: 180,
                  width: ITEM_WIDTH / 2 - 20,
                  margin: 10,
                  borderWidth: 1,
                  borderColor: '#ddd'
                  // borderBottomRightRadius: 10
                }}
                onPress={() =>
                  this.props.navigation.navigate('SinglePuppet', {
                    puppetData: item
                  })
                }
              >
                <View style={{ flex: 2 }}>
                  <Image
                    style={{
                      // borderTopLeftRadius: 10,
                      // borderTopRightRadius: 10,
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'cover'
                    }}
                    source={{ uri: item.imagelink }}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
                    {item.puppetname}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 12, color: 'grey' }}>
                      {this.props.navigation.getParam('filterType') ===
                      'CategorizedPuppets'
                        ? item.region
                        : item.category}
                    </Text>
                    <Text
                      style={{
                        marginLeft: 'auto',
                        marginRight: 10,
                        fontSize: 12,
                        color: 'grey'
                      }}
                    >
                      {item.puppetyear}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

export default PuppetsScreen;
