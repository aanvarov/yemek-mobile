import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';
import Styled from '../styles';

const InputWrapper = props => {
  return (
    <View style={styles.container}>
      <Styled.SubTitle lineHeight={'20px'} style={styles.label}>
        {props.labelText}
      </Styled.SubTitle>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER_COLOR,
    borderRadius: 12,
    position: 'relative',
    paddingHorizontal: 29,
    justifyContent: 'center',
    marginBottom: 24,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 23,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
});

export default InputWrapper;
