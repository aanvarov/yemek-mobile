import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import Styled from '../styles';
import OrderCardFoodCard from './OrderCardFoodCard';

const OrderCard = ({ order }) => {
  console.log('order', order.items);
  return (
    <View style={styles.orderContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.orderTitle}>Order No.: </Text>
          <Text style={styles.orderSubTitle}>{order.orderId}</Text>
        </View>
        <View>
          <Text style={styles.orderTitle}>Total to pay: </Text>
          <Text
            style={[
              styles.orderSubTitle,
              {
                color: '#09B44D',
                fontSize: 22,
                textAlign: 'center',
                marginTop: 6,
              },
            ]}>
            {order.total}{' '}
            <Text style={{ color: '#09B44D', fontSize: 12 }}>UZS</Text>
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{ width: 67, height: 67 }}
          source={require('../assets/images/resImage.png')}
        />
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={styles.resTitle}>{order.restaurant.name}</Text>
          <Text style={styles.phone}>Tel: {order.restaurant.phone}</Text>
          <Text style={styles.phone}>{order.restaurant.address}</Text>
        </View>
      </View>
      <View style={styles.orderItems}>
        <Text style={styles.foodsTitle}>Items</Text>
        <OrderCardFoodCard foods={order.items} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <View>
          <Text style={styles.title}>Ordered at:</Text>
          <Text style={styles.subtitle}>
            {order.createdAt.split('T')[1].slice(0, 5)}{' '}
          </Text>
          {/* <Text>{order.createdAt.split('T')[0]}</Text> */}
        </View>
        <View>
          <Text style={styles.title}>Est.Time Delivery</Text>
          <Text style={styles.subtitle}>15 min</Text>
        </View>
        <View>
          <Text style={styles.title}>Status:</Text>
          <Text
            style={[
              styles.subtitle,
              { textTransform: 'capitalize', color: '#09B44D' },
            ]}>
            {order.status}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.title}>Payment Type:</Text>
          <Text style={styles.subtitle}>{order.paymentType}</Text>
        </View>
        <View>
          <Text style={styles.title}>Driver:</Text>
          <Text style={styles.subtitle}>Not Assigned</Text>
        </View>
        <View>
          <Text style={styles.title}>Delivered at:</Text>
          <Text style={styles.subtitle}>
            {/* {order.createdAt.split('T')[1].slice(0, 5)} */}
            Not Delivered
          </Text>
        </View>
      </View>
      <View style={styles.orderFooter}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#12ff1299',
    borderRadius: 5,
  },
  buttonText: {
    color: '#282B2E',
    fontSize: 16,
    fontWeight: '700',
  },
  orderFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  subtitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#282B2E',
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 18,
    color: '#A5AAB0',
  },
  foodsTitle: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: '#797979',
    textTransform: 'uppercase',
  },
  orderItems: {
    marginTop: 10,
  },
  resTitle: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    alignItems: 'center',
    color: '#374058',
  },
  phone: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 21,
    alignItems: 'center',
    color: '#797979',
  },
  orderContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 18,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
  },
  orderTitle: {
    // font-family: 'Poppins';
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    alignItems: 'center',
    color: '#A5AAB0',
    letterSpacing: 2,
  },
  orderSubTitle: {
    // font-family: 'Poppins'
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 21,
    color: '#263238',
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  orderInfoLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  orderInfoLeftText: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 2,
  },
  orderInfoRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  orderInfoRightText: {
    fontSize: 14,
    color: COLORS.text,
    marginBottom: 2,
  },
});

export default OrderCard;
