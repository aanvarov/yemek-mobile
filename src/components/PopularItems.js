import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';
import PopularItemCard from '../components/PopularItemCard';
import { ScrollView } from 'react-native-gesture-handler';

// const items = [
//   {
//     id: 1,
//     name: 'Puchka',
//     price: '$10',
//     secondPrice: '$8',
//     image: '../assets/images/PuchkaJPG.png',
//   },
//   {
//     id: 2,
//     name: 'Drinks',
//     price: '$10',
//     secondPrice: '$8',
//     image: '../assets/images/DrinksPopular.png',
//   },
//   {
//     id: 3,
//     name: 'Kebab',
//     price: '$12',
//     secondPrice: '$10',
//     image: '../assets/images/KebabJPG.png',
//   },
//   {
//     id: 4,
//     name: 'Barget Combo',
//     price: '$12',
//     secondPrice: '$10',
//     image: '../assets/images/BergetCombo.png',
//   },
// ];

const PopularItems = ({ navigation, popularItems }) => {
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
            {popularItems.length > 0 ? (
              popularItems.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('FoodDetails', { food: item });
                  }}
                  key={item._id}>
                  <PopularItemCard item={item} />
                </TouchableOpacity>
              ))
            ) : (
              <Styled.Text color={COLORS.DARK_GREEN}>No items</Styled.Text>
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
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
  },
});

export default PopularItems;
