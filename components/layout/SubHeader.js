import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';


class SubHeader extends Component {
  render() {
    const moreEventsText = (this.props.language) ? "<< مزید واقعات" : "more >>"

    if (this.props.type === 'Event') {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              // fontSize: 17,//fontScaling here
              // paddingRight: 60,
              fontSize: 17 * this.props.fontSizeScale, 
            fontWeight: '700',
            paddingHorizontal: 20,
            color: 'grey'
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
              <Text style={{ color: 'maroon', fontWeight: '700' }}>
                {' '}
                {moreEventsText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <Text
        style={{
          // fontSize: 17,//fontScaling here
          fontSize: 17 * this.props.fontSizeScale, 
          fontWeight: '700',
          paddingHorizontal: 20,
          color: 'grey'
        }}
      >
        {this.props.headerName}
      </Text>
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


