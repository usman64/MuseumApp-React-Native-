import React from 'react';
import { Text } from 'react-native';

const SubHeader = (props) => {
  return (
    <Text
      style={{
        fontSize: 17,
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
