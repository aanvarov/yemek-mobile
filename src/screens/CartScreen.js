import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import CartItemCard from '../components/CartItemCard';
import { COLORS } from '../constants';
import Axios from '../utils/axios';

const items2 = [
  {
    id: 1,
    name: 'Puchka',
    desc: 'Lemon & Lime 500 ml',
    price: '$60',
  },
  {
    id: 2,
    name: 'Burgers',
    desc: 'Lemon & Lime 500 ml',
    price: '$20',
  },
];

const items = [
  {
    id: 1,
    name: 'Puchka',
    desc: 'Lemon & Lime 500 ml',
    price: '$6',
  },
  {
    id: 2,
    name: 'Burgers',
    desc: 'Lemon & Lime 500 ml',
    price: '$6',
  },
  {
    id: 3,
    name: 'Drinks',
    desc: 'Lemon & Lime 500 ml',
    price: '$10',
  },
];

const checkHandler = () => {
  Axios.get('/api/v1/foods').then(res => {
    // console.log('checkout', res.data);
    // console.log('checkHandler', res.headers['x-access-token']);
  });
};

const CartScreen = () => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScreenHeader title="Cart(12)" />
        <View style={styles.scrollView}>
          <Styled.Title size={'18px'}>Kawsar Food</Styled.Title>
          <ScrollView>
            {items.map(item => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.scrollView}>
          <Styled.Title size={'18px'}>Mahbuba Food</Styled.Title>
          <ScrollView>
            {items2.map(item => (
              <CartItemCard key={item.id} item={item} />
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: 19,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Styled.GreenButton onPress={checkHandler} width={'55%'}>
            <Styled.GreenButtonText>Checkout</Styled.GreenButtonText>
          </Styled.GreenButton>
          <View>
            <Styled.Text size={'15px'}>Total Price</Styled.Text>
            <Styled.Text color={COLORS.DARK_GREEN} size={'15px'}>
              $120
            </Styled.Text>
          </View>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 33,
  },
});

export default CartScreen;
