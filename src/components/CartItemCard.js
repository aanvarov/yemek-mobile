import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import store from '../store';
import { addedToCart, updateCounter } from '../store/Cart/actions';

const CartItemCard = ({ item, setTotalCount }) => {
  // console.log('safasfafCartIrem', item);
  // const getResName = id => {
  //   Axios.post('/api/v1/auth/sessions', data)
  //     .then(res => {
  //       console.log('res data', res);
  //       dispatch(signInSuccess(res.data));
  //     })
  //     .catch(err => {
  //       setSignInError(err.response.data.message);
  //       console.log('login error', err.response.data.message);
  //     });
  // };
  const [counter, setCounter] = React.useState(item.counter);
  const [priceTotal, setPriceTotal] = React.useState(item.price * counter);
  useEffect(() => {
    setPriceTotal(item.price * counter);
  }, [counter, item.price]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <View style={styles.info}>
        <Styled.Text size={'18px'}>{item.name}</Styled.Text>
        <Styled.SubTitle>{item.description}</Styled.SubTitle>
        <View style={styles.counter}>
          <Pressable
            onPress={() => {
              if (counter > 1) {
                setCounter(counter - 1);
                // update food counter
                store.dispatch(updateCounter(item._id, counter - 1));
                setTotalCount(counter - 1);
              }
            }}>
            <View style={styles.minus}>
              <Text style={styles.minusText}>-</Text>
            </View>
          </Pressable>
          <Text style={styles.counterText}>{counter}</Text>
          <Pressable
            onPress={() => {
              if (counter < 100) {
                setCounter(counter + 1);
                // update food counter
                store.dispatch(updateCounter(item._id, counter + 1));
                setTotalCount(counter + 1);
              }
            }}
            style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Styled.Text style={styles.price} color={COLORS.DARK_GREEN}>
            UZS {priceTotal}
          </Styled.Text>
          <Styled.Text ml={'15px'}>
            Restaurant name: {item?.restaurant?.name}
          </Styled.Text>
        </View>
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
    borderRadius: 12,
  },
  info: {
    flex: 1,
  },
  price: {
    position: 'absolute',
    bottom: 0,
    left: -65,
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
