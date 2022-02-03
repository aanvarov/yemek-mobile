import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';

const PopularItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Styled.Title size={'18px'}>Popular Items</Styled.Title>
        <Pressable>
          <Styled.Text color={COLORS.DARK_GREEN}>See all</Styled.Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PopularItems;
