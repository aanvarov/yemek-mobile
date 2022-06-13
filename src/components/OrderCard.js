import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants';
import Styled from '../styles';

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
        {order.items.map((item, index) => (
          <View key={index} style={styles.orderItem}>
            <Text style={styles.orderItemTitle}>{item.name}</Text>
            <Text style={styles.orderItemSubTitle}>
              {item.quantity} x {item.price}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.orderInfo}>
        <View style={styles.orderInfoRight}>
          <Text style={styles.orderInfoRightText}>{order.createdAt}</Text>
          <Text style={styles.orderInfoRightText}>{order.status}</Text>
        </View>
      </View>
      <Styled.Title>Order Id: {order?.orderId}</Styled.Title>
      <Styled.SubTitle>
        Total number of foods: {order.totalCount}
      </Styled.SubTitle>
      <Styled.SubTitle>
        Total price: {order.subTotal + order.fee}
      </Styled.SubTitle>
      <Styled.SubTitle>Payment Type: {order.paymentType}</Styled.SubTitle>
      <Styled.Text>Foods:</Styled.Text>
      <View style={{ flexDirection: 'row' }}>
        {/* {order?.foods?.map(food => (
          <View style={{ flexDirection: 'column' }}>
            <Text>Name: {food.name}</Text>
            <Text>Price: {food.price}</Text>
          </View>
        ))} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItems: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
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
