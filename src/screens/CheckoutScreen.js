import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import store from '../store';
import { SvgCss } from 'react-native-svg';
import AddressIcon from '../assets/images/svg/addressIcon';
import { COLORS } from '../constants';
import { useDispatch } from 'react-redux';
import { saveOrder } from '../store/Order/actions';
import { io } from 'socket.io-client'

const CheckoutScreen = ({ navigation }) => {
  const socket = io('http://localhost:3001');
  const dispatch = useDispatch();
  // getting user name from store
  const firstName = store.getState().auth?.user?.firstName;
  const lastName = store.getState().auth?.user?.lastName;
  const { foods } = store.getState().cart;
  const [subTotal, setSubTotal] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [paymentType, setPaymentType] = useState('Cash');
  const cartFoods = store.getState().cart.foods;
  const cartFoodsCount = cartFoods.reduce((acc, food) => {
    return acc + food.counter;
  }, 0);

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
          <ScreenHeader title="Checkout" />
        </View>
        <View style={styles.checkoutContainer}>
          <View style={styles.checkoutInfo}>
            <Text style={styles.checkoutInfoText}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.checkoutInfoTextItems}>
              Total ordered items: {cartFoodsCount} items
            </Text>
          </View>
          <View style={styles.checkoutTotal}>
            <Text style={styles.totalPrice}>
              UZS {(subTotal + 5000).toLocaleString()}
            </Text>
          </View>
          <View style={styles.address}>
            <View style={styles.addressIconWrapper}>
              <SvgCss xml={AddressIcon} />
            </View>
            <View style={{ width: 270 }}>
              <Styled.Text lineHeight={'22px'}>Address</Styled.Text>
              <Styled.Text lineHeight={'22px'} color={COLORS.DARK_GREEN}>
                2 Abdulla Qahhor Street, Tashkent, Uzbekistan
              </Styled.Text>
            </View>
          </View>
          <View style={styles.paymentTypes}>
            <TouchableOpacity
              onPress={() => {
                setPaymentType('Cash');
              }}>
              <View style={styles.paymentType}>
                <View style={styles.iconWrapper}>
                  <Image
                    style={styles.paymentTypeIconCash}
                    source={require('../assets/images/cash.png')}
                  />
                </View>
                <Styled.Text lineHeight={'22px'}>Cash on Delivery</Styled.Text>
                {paymentType === 'Cash' ? (
                  <Image source={require('../assets/images/checkedType.png')} />
                ) : (
                  <Image source={require('../assets/images/unchecked.png')} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPaymentType('Uzcard');
              }}>
              <View style={styles.paymentType}>
                <View style={styles.iconWrapper}>
                  <Image
                    style={styles.paymentTypeIconUzcard}
                    source={require('../assets/images/uzcard.png')}
                  />
                </View>
                <Styled.Text lineHeight={'22px'}>UZCARD</Styled.Text>
                {paymentType === 'Uzcard' ? (
                  <Image source={require('../assets/images/checkedType.png')} />
                ) : (
                  <Image source={require('../assets/images/unchecked.png')} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPaymentType('GooglePay');
              }}>
              <View style={styles.paymentType}>
                <View style={styles.iconWrapper}>
                  <Image
                    style={styles.paymentTypeIcon}
                    source={require('../assets/images/googlepay.png')}
                  />
                </View>
                <Styled.Text lineHeight={'22px'}>Google Pay</Styled.Text>
                {paymentType === 'GooglePay' ? (
                  <Image source={require('../assets/images/checkedType.png')} />
                ) : (
                  <Image source={require('../assets/images/unchecked.png')} />
                )}
              </View>
            </TouchableOpacity>
            <Styled.GreenButton
              onPress={() => {
                // navigation.navigate('Complete');
                // save order details to store
                // create random order id
                // const orderId = Math.floor(Math.random() * 1000000);
                // dispatch(
                //   saveOrder({
                //     orderId,
                //     foods,
                //     paymentType,
                //     subTotal,
                //     totalCount: cartFoodsCount,
                //     fee: 5000,
                //   }),
                // );
                // clear cart
                // store.dispatch({
                //   type: 'CLEAR_CART',
                // });
                // store.dispatch({
                //   type: 'SAVE_ORDER',
                //   payload: {
                //     foods,
                //     subTotal,
                //     fee: 5000,
                //     totalCount,
                //     paymentType,
                //   },
                // });
                socket.emit("otsimon", 'salom otcha donkacha');
                socket.on("connect", () => {
                  console.log(socket.id);
                });
                socket.on("connect_error", (err) => {
                  console.log(err instanceof Error);
                  console.log(err.message);
                });
                console.log('salom');
              }}>
              <Styled.Text color={COLORS.WHITE}>Order Now</Styled.Text>
            </Styled.GreenButton>
          </View>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  paymentTypeIconCash: {
    width: 25,
    height: 25,
  },
  paymentTypeIconUzcard: {
    width: 25,
    height: 25,
  },
  iconWrapper: {
    width: 32,
    height: 20,
  },
  paymentType: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  address: {
    marginTop: 16,
    marginBottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderStyle: 'solid',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 6,
  },
  addressIconWrapper: {
    width: 43,
    height: 43,
    borderRadius: 15,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  totalPrice: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#09B44D',
  },
  checkoutContainer: {
    marginTop: 30,
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
  checkoutInfoTextItems: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 17,

    textAlign: 'center',

    color: '#979797',
    marginBottom: 20,
  },
  checkoutInfoText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 24,

    textAlign: 'center',

    color: '#979797',
    marginBottom: 20,
  },
});

export default CheckoutScreen;
