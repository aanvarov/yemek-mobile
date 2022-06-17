import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import CartItemCard from '../components/CartItemCard';
import { COLORS } from '../constants';
import Axios from '../utils/axios';
import store from '../store';
import OrderCard from '../components/OrderCard';
import socket from '../utils/socket.service';

const CartScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const getOrders = () => {
    Axios.get('/api/v1/orders/mobile')
      .then(res => {
        // console.log('res data orders errr', res.data);
        setOrders(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOrders();
  }, []);

  socket.on('order-created', () => {
    getOrders();
  });

  // sort orders by date
  const sortedOrders = orders.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={[styles.modal, loading && { display: 'flex' }]}>
          <ActivityIndicator size="large" color="#FFFF00" />
        </View>
        <ScreenHeader title="Orders" />
        {sortedOrders.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 60 }}>
            <Styled.SubTitle>Recent Orders</Styled.SubTitle>
            {orders.map((item, index) => (
              <OrderCard navigation={navigation} key={index} order={item} />
            ))}
            {/* <Styled.SubTitle>All Orders</Styled.SubTitle>
            {orders.map((item, index) => (
              <OrderCard key={index} order={item} />
            ))} */}
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
  scrollView: {
    marginTop: 33,
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
    display: 'none',
  },
});

export default CartScreen;
