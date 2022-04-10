import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import store from '../store';
import CartItemCard from '../components/CartItemCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/Cart/actions';
import Toast from 'react-native-root-toast';

const MyCart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cart } = store.getState().cart;
  console.log('cart', cart);
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/BackGrey.png')}
            />
          </Pressable>
          <ScreenHeader title="My Cart" />
        </View>
        <ScrollView
          style={styles.cartItems}
          showsVerticalScrollIndicator={false}>
          {cart.length &&
            cart.map(item => <CartItemCard key={item.id} item={item} />)}
        </ScrollView>
        <View style={styles.pricing}></View>
        <View style={styles.buttons}>
          <Styled.GreenButton
            onPress={() => {
              Toast.show('Cart cleared', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              dispatch(clearCart());
              navigation.navigate('Home');
            }}
            width={'48%'}>
            <Styled.GreenButtonText>Clear Cart</Styled.GreenButtonText>
          </Styled.GreenButton>
          <Styled.GreenButton width={'48%'}>
            <Styled.GreenButtonText>Checkout</Styled.GreenButtonText>
          </Styled.GreenButton>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 1,
  },
  cartItems: {
    marginTop: 10,
    flex: 1,
    // backgroundColor: '#23ed23',
  },
  pricing: {
    marginTop: 25,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
  },
});

export default MyCart;
