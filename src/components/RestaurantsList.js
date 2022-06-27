import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';
import { useEffect } from 'react';

const RestaurantsList = ({ restaurants = [], setRestaurant, restaurant }) => {
  useEffect(() => {
    setRestaurant(restaurants[0]);
  }, [restaurants]);
  return (
    <>
      <Styled.SubTitle>Restaurants</Styled.SubTitle>
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          fadingEdgeLength={50}>
          {/* <Styled.GreenButton
          borderRadius={'7px'}
          width={'46px'}
          height={'38px'}
          bgColor={category.name === 'All' ? null : '#F6F6F6'}
          onPress={() => {
            setCategory('All');
          }}
          style={styles.allButton}>
          <Styled.GreenButtonText
            color={category.name === 'All' ? null : '#979797'}>
            All
          </Styled.GreenButtonText>
        </Styled.GreenButton> */}
          {restaurants.length > 0 ? (
            restaurants.map(item => (
              <Styled.GreenButton
                key={item._id}
                borderRadius={'7px'}
                height={'38px'}
                bgColor={restaurant?._id === item?._id ? null : '#F6F6F6'}
                onPress={() => {
                  console.log(item.name);
                  setRestaurant(item);
                }}
                style={styles.button}>
                <View style={styles.categoryIconWrapper}>
                  <Image
                    source={require('../assets/images/fastFood.png')}
                    style={styles.categoryIcon}
                  />
                </View>
                <Styled.GreenButtonText
                  color={restaurant?._id === item?._id ? null : '#979797'}>
                  {item.name}
                </Styled.GreenButtonText>
              </Styled.GreenButton>
            ))
          ) : (
            <Styled.SubTitle>Loading...</Styled.SubTitle>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 38,
    marginBottom: 20,
  },
  allButton: {
    paddingHorizontal: 14,
  },
  button: {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 9,
    marginRight: 15,
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

export default RestaurantsList;
