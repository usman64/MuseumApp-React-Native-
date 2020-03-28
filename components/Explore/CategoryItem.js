import React, { Component } from 'react';
import { Text, View, ScrollView, Alert, ImageBackground,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Font from "expo-font";
import { AuthSession } from 'expo';

class CategoryItem extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    // console.log(this.props.ImageUri)
    const { type } = this.props;
    return (
      <View>
        {this.state.fontLoaded ? (
          <View style={{ flex: 1, flexDirection: "column" }}>
            <TouchableWithoutFeedback
              onPress={() => {
                if (type === "CategorizedPuppets") {
                  this.props.navigation.navigate("CategorizedPuppets", {
                    filterOn: this.props.name,
                    filterType: type
                  });
                } else if (type === "RegionalPuppets") {
                  this.props.navigation.navigate("RegionalPuppets", {
                    filterOn: this.props.name,
                    filterType: type
                  });
                } else {
                  this.props.navigation.navigate("SingleEvent", {
                    name: this.props.name,
                    image: this.props.ImageUri,
                    date: this.props.date,
                    description: this.props.description,
                    time: this.props.time
                  });
                }
              }}
              style={{
                height: 140,
                width: 190,
                marginLeft: 20,
                backgroundColor: "white",
                // shadowColor: "black",
                // shadowOffset: { width: 5, height: 5 },
                // shadowOpacity: 0.8,
                // shadowRadius: 5,
                elevation: 10
                // flex: 2
                // borderRadius: 22
              }}
            >
              <View
                style={{
                  flex: 1
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    width: null,
                    height: null,
                    resizeMode: "cover"
                  }}
                  // imageStyle={{ borderRadius: 22 }}
                  source={
                    typeof this.props.ImageUri === "number"
                      ? this.props.ImageUri
                      : { uri: this.props.ImageUri }
                  }
                ></Image>
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // justifyContent: "flex-end",
                    // alignContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)"
                    // borderRadius: 22
                  }}
                >
                  {/* <Text
                    style={{
                      fontFamily: "Montserrat-Bold",
                      // fontWeight: "bold",
                      color: "white",
                      // fontSize: 20,//fontScaling here
                      fontSize: 20 * this.props.fontSizeScale,
                      paddingLeft: 15,
                      paddingBottom: 15
                    }}
                  >
                    {this.props.name}
                  </Text> */}
                </View>
              </View>
              {/* <View>
                <Text
                  style={{
                    fontFamily: "Montserrat-Bold",
                    // fontWeight: "bold",
                    color: "black",
                    // fontSize: 20,//fontScaling here
                    fontSize: 15 * this.props.fontSizeScale,
                    paddingLeft: 15,
                    paddingBottom: 15
                  }}
                >
                  {this.props.name}
                </Text>
              </View> */}

              {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
        </View> */}
            </TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: "#352D46",
                width: 190,
                marginLeft: 20,
                flexDirection: "column",
                // alignItems: "center",
                alignSelf: "center",
                // justifyContent: "space-around"
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  // fontWeight: "bold",
                  textAlign: "center",
                  textTransform: "uppercase",
                  color: "white",
                  alignSelf: "center",
                  // fontSize: 20,//fontScaling here
                  fontSize: 20 * this.props.fontSizeScale,
                  marginTop:10,
                  paddingLeft: 15,
                  paddingBottom: 15
                }}
              >
                {this.props.name}
              </Text>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

// export default CategoryItem;

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont
  };
};

export default connect(mapStateToProps, null)(CategoryItem);

