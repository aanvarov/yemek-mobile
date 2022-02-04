import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';

const ImageCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/svg/FindBestFoodQuickly.png')}
        style={styles.image}
      />
      <Styled.Text
        size={'20px'}
        lineHeight={'32px'}
        weight={'500'}
        color={COLORS.WHITE}>
        Find
      </Styled.Text>
      <Styled.Text
        size={'20px'}
        lineHeight={'32px'}
        weight={'500'}
        color={COLORS.WHITE}>
        Best Food
        <Styled.Text
          size={'20px'}
          lineHeight={'32px'}
          weight={'500'}
          color={COLORS.DARK_GREEN}>
          {' '}
          Quickly
        </Styled.Text>
      </Styled.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 156,
    borderRadius: 12,
    position: 'relative',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'flex-end',
  },
  image: {
    top: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default ImageCard;
