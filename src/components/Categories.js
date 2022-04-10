import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';

var kitob = 23 - 20;

// const categories = [
//   {
//     id: 1,
//     name: 'Fast Food',
//     icon: '../assets/images/fastFood.png',
//   },
//   {
//     id: 2,
//     name: 'Drinks',
//     icon: '../assets/images/drinks.png',
//   },
//   {
//     id: 3,
//     name: 'Snacks',
//     icon: '../assets/images/snacks.png',
//   },
//   {
//     id: 4,
//     name: 'Desserts',
//     icon: '../assets/images/drinks.png',
//   },
// ];

const Categories = ({ categories, setCategory, category }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        fadingEdgeLength={50}>
        <Styled.GreenButton
          borderRadius={'7px'}
          width={'46px'}
          height={'38px'}
          bgColor={category.name === 'All' ? null : '#F6F6F6'}
          onPress={() => {
            setCategory({ name: 'All', id: null });
          }}
          style={styles.allButton}>
          <Styled.GreenButtonText
            color={category.name === 'All' ? null : '#979797'}>
            All
          </Styled.GreenButtonText>
        </Styled.GreenButton>
        {categories.map(item => (
          <Styled.GreenButton
            key={item._id}
            borderRadius={'7px'}
            height={'38px'}
            bgColor={category.name === item.name ? null : '#F6F6F6'}
            onPress={() => {
              console.log(item.name);
              setCategory({
                name: item.name,
                _id: item._id,
              });
            }}
            style={styles.button}>
            <View style={styles.categoryIconWrapper}>
              <Image
                source={require('../assets/images/fastFood.png')}
                style={styles.categoryIcon}
              />
            </View>
            <Styled.GreenButtonText
              color={category.name === item.name ? null : '#979797'}>
              {item.name}
            </Styled.GreenButtonText>
          </Styled.GreenButton>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    marginBottom: 33,
  },
  allButton: {
    paddingHorizontal: 14,
  },
  button: {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 9,
    marginLeft: 15,
    flexDirection: 'row',
  },
  categoryIconWrapper: {
    width: 28,
    height: 27,
    backgroundColor: COLORS.WHITE,
    borderRadius: 6,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Categories;
