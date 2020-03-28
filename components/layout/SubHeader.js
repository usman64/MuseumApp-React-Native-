import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import * as Font from 'expo-font';


class SubHeader extends Component {
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
    const moreEventsText = this.props.language ? "< مزید واقعات" : "More >";
   
    if (this.props.type === "Event") {
      return (
        <View>
          {this.state.fontLoaded ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text
                style={{
                  // fontSize: 17,//fontScaling here
                  // paddingRight: 60,
                  fontFamily: "Montserrat-Bold",
                  fontSize: 24 * this.props.fontSizeScale,
                  // fontWeight: "700",
                  paddingHorizontal: 20,
                  color: "grey"
                }}
              >
                {this.props.headerName}
              </Text>
              <View
                style={{
                  paddingRight: 20
                }}
              >
                <TouchableOpacity onPress={this.props.onPress}>
                  <Text
                    style={{
                      color: "#07B5AE",
                      fontFamily: "Montserrat-Medium",
                      fontSize: 20 * this.props.fontSizeScale
                    }}
                  >
                    {" "}
                    {moreEventsText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
        </View>
      );
    }

    return (
      <View>
        {this.state.fontLoaded ? (
          <View
            style={{
              backgroundColor: "#251F35",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start"
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Bold",
                fontSize: 24 * this.props.fontSizeScale,
                paddingHorizontal: 20,
                color: "grey"
              }}
            >
              {this.props.headerName}
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 24 * this.props.fontSizeScale,
                marginLeft: -10,

                // paddingHorizontal: 20,
                color: "#07B5AE"
              }}
            >
              {this.props.type}
            </Text>
          </View>
        ) : null}
      </View>
    );
  }
}

// export default SubHeader;

const mapStateToProps = (state) => {
  return {
    fontSizeScale: state.changeFont,
    language: state.toggleTranslation,
  };
};



export default connect(mapStateToProps, null)(SubHeader);


