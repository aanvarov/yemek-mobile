import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';

const PopularItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/DrinksPopular.png')}
        style={styles.image}
      />
      <Styled.Text
        lineHeight={'20px'}
        weight={'500'}
        color={COLORS.DARK_GREEN}
        size={'18px'}>
        {item.name}
      </Styled.Text>
      <View style={styles.prices}>
        <Text style={styles.priceText}>{item.price}</Text>
        <View style={styles.secondPriceWrapper}>
          <Text style={styles.secondPrice}>{item.secondPrice}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 13,
    paddingVertical: 11,
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
    marginBottom: 17,
    alignItems: 'center',
    minWidth: 155,
  },
  image: {
    marginBottom: 4,
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  secondPriceWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DARK_GREEN,
    width: 49,
    height: 22,
    borderRadius: 8,
    marginLeft: 15,
  },
  priceText: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 19,
    color: '#979797',
  },
  secondPrice: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});

export default PopularItemCard;
