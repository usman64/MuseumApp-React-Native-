import React from 'react';
import { Text } from 'react-native';

const SubHeader = (props) => {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: '700',
        paddingHorizontal: 20,
        color: 'grey'
      }}
    >
      {props.headerName}
    </Text>
  );
};

export default SubHeader;
