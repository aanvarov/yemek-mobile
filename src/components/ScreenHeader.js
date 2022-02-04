import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Styled from '../styles';

const ScreenHeader = props => {
  return (
    <View style={styles.container}>
      <Styled.Title align={'center'} lineHeight={'40px'}>
        {props.title}
      </Styled.Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
});

export default ScreenHeader;
