import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import store from '../store';
import CartItemCard from '../components/CartItemCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/Cart/actions';
import Toast from 'react-native-root-toast';

const MyCart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { foods } = store.getState().cart;
  const [subTotal, setSubTotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // when foods counter changes, update subtotal
  useEffect(() => {
    let total = 0;
    foods.forEach(food => {
      total += food.price * food.counter;
    });
    setSubTotal(total);
  }, [foods]);

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
        {foods.length ? (
          <ScrollView
            style={styles.cartItems}
            showsVerticalScrollIndicator={false}>
            {foods.length &&
              foods.map(item => (
                <CartItemCard
                  setTotalCount={setTotalCount}
                  key={item._id}
                  item={item}
                />
              ))}
          </ScrollView>
        ) : (
          <View style={{ marginTop: 10 }}>
            <Styled.Title align={'center'} style={styles.emptyCartText}>
              Your cart is empty
            </Styled.Title>
          </View>
        )}
        <View style={styles.pricing}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={styles.totalText}>Subtotal:</Text>
            <Text style={styles.totalText}>UZS {subTotal}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <Text style={styles.totalText}>Fee and Delivery:</Text>
            <Text style={styles.totalText}>UZS 5000</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalText}>UZS {subTotal + 5000}</Text>
          </View>
        </View>
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
          <Styled.GreenButton
            onPress={() => {
              if (foods.length) {
                navigation.navigate('Checkout', {});
              } else {
                Toast.show('Cart is empty', {
                  duration: Toast.durations.SHORT,
                  position: Toast.positions.TOP,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 0,
                });
              }
            }}
            width={'48%'}>
            <Styled.GreenButtonText>Checkout</Styled.GreenButtonText>
          </Styled.GreenButton>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  totalText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 20,
    color: '#979797',
  },
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
    marginBottom: 10,
    height: 110,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

export default MyCart;
