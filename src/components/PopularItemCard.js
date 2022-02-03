import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const PopularItemCard = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 13,
    paddingVertical: 11,
    backgroundColor: '#F6F6F6',
    borderRadius: 25,
  },
});

export default PopularItemCard;
