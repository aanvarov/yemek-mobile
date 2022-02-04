import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';
import SearchPopularItemCard from './SearchPopularItemCard';

const items = [
  {
    id: 1,
    name: 'Puchka',
    image: '../assets/images/PuchkaJPG.png',
    description: 'Soft corn tacos of achiote rubbed mahi',
  },
  {
    id: 2,
    name: 'Drinks',
    image: '../assets/images/DrinksPopular.png',
    description: 'Soft corn tacos of achiote rubbed mahi',
  },
  {
    id: 3,
    name: 'Burgers',
    image: '../assets/images/DrinksPopular.png',
    description: 'Soft corn tacos of achiote rubbed mahi',
  },
];

const SearchPopularItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Styled.Title size={'18px'}>Popular Items</Styled.Title>
        <Pressable>
          <Styled.Text color={COLORS.DARK_GREEN}>See All</Styled.Text>
        </Pressable>
      </View>
      <View style={styles.items}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollView}>
            {items.map(item => (
              <SearchPopularItemCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    marginTop: 34,
    // backgroundColor: COLORS.GREEN,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  items: {
    marginTop: 22,
    maxHeight: 290,
  },
});

export default SearchPopularItems;
