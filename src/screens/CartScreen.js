import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import CartItemCard from '../components/CartItemCard';
import { COLORS } from '../constants';
import Axios from '../utils/axios';
import store from '../store';

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

// const checkHandler = () => {
//   Axios.get('/api/v1/foods').then(res => {
//     // console.log('checkout', res.data);
//     // console.log('checkHandler', res.headers['x-access-token']);
//   });
// };

// getting orders from store

const CartScreen = () => {
  const storeOrders = store.getState().orders.orders;
  const [orders, setOrders] = useState(storeOrders);
  // update orders when orders in store changes
  useEffect(() => {
    store.subscribe(() => {
      setOrders(store.getState().orders.orders);
    });
  }, []);

  // useEffect(() => {
  //   let ordersFromStore = store.getState().orders.orders;
  //   setOrders(ordersFromStore);
  // }, [storeOrders]);
  // console.log(orders);
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScreenHeader title="Orders" />
        {orders.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 60 }}>
            {orders.map(item => (
              <View style={styles.orderContainer} key={item.orderId}>
                <Styled.Title>Order Id: {item.orderId}</Styled.Title>
                <Styled.SubTitle>
                  Total number of foods: {item.totalCount}
                </Styled.SubTitle>
                <Styled.SubTitle>
                  Total price: {item.subTotal + item.fee}
                </Styled.SubTitle>
                <Styled.SubTitle>
                  Payment Type: {item.paymentType}
                </Styled.SubTitle>
                <Styled.Text>Foods:</Styled.Text>
                <View style={{ flexDirection: 'row' }}>
                  {item.foods.map(food => (
                    <View style={{ flexDirection: 'column' }} key={food._id}>
                      <Text>Name: {food.name}</Text>
                      <Text>Price: {food.price}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>Your orders is empty</Text>
          </View>
        )}
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.DARK_GREEN,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginTop: 33,
  },
});

export default CartScreen;
