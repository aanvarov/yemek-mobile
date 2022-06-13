import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const OrderCardFoodCard = ({ foods }) => {
  const items = {};
  foods.forEach(food => {
    if (!items[food._id]) {
      items[food._id] = {
        id: food._id,
        name: food.name,
        price: food.price,
        quantity: 0,
      };
    }
    items[food._id].quantity += 1;
  });
  const foodItems = Object.values(items);
  //   console.log('items', foodItems);
  return (
    <View style={styles.foodsContainer}>
      {foodItems.map(food => (
        <View key={food.id} style={styles.foodContainer}>
          <View style={styles.foodInfo}>
            <Text style={styles.text}>
              {food.quantity} X {food.name}
            </Text>
            <Text style={[styles.text, { fontWeight: '700', fontSize: 14 }]}>
              {food.quantity * food.price} UZS
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  foodsContainer: {
    marginTop: 5,
    marginBottom: 10,
  },
  foodInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#3C4D56',
  },
});

export default OrderCardFoodCard;
