import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';

const CartItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/DrinksPopular.png')}
        style={styles.image}
      />
      <View style={styles.info}>
        <Styled.Text size={'18px'}>{item.name}</Styled.Text>
        <Styled.SubTitle>{item.desc}</Styled.SubTitle>
        <View style={styles.counter}>
          <Pressable>
            <View style={styles.minus}>
              <Text style={styles.minusText}>-</Text>
            </View>
          </Pressable>
          <Text style={styles.counterText}>1</Text>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </View>
        <Styled.Text style={styles.price} color={COLORS.DARK_GREEN}>
          {item.price}
        </Styled.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    paddingRight: 15,
  },
  image: {
    width: 62,
    height: 53,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  price: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 5,
    right: 0,
  },
  counterText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 13,
    color: COLORS.TEXT_COLOR,
    marginHorizontal: 7,
  },
  minus: {
    width: 20,
    height: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 20,
    height: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 15,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.DARK_GREEN,
  },
  plusText: {
    fontSize: 10,
    color: '#626262',
  },
  minusText: {
    fontSize: 10,
    color: '#626262',
  },
});

export default CartItemCard;
