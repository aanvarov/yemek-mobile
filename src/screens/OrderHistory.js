import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import Axios from '../utils/axios';
import OrderCard from '../components/OrderCard';

const OrderHistory = ({ navigation }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    Axios.get('/api/v1/orders/mobile')
      .then(res => {
        // console.log('res data orders errr', res.data);
        setOrders(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
          <ScreenHeader title="Order History" />
        </View>
        {orders.length > 0 ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: 40, marginTop: 20 }}>
            {orders.map((item, index) => (
              <OrderCard navigation={navigation} key={index} order={item} />
            ))}
          </ScrollView>
        ) : (
          <View style={styles.emptyCart}>
            <Text style={styles.emptyCartText}>
              Your order history is empty
            </Text>
          </View>
        )}
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 1,
  },
});

export default OrderHistory;
