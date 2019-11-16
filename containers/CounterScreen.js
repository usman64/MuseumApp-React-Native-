import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../Actions/countActions';
import Counter from '../components/Counter';

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch(incrementCount()),
    decreaseCount: () => dispatch(decrementCount())
  };
};

export class CounterScreen extends Component {
  render() {
    const { increaseCount, decreaseCount, count } = this.props;
    return <Counter {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
