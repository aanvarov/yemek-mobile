import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { COLORS } from '../constants';

const SearchPopularItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/DrinksPopular.png')}
        style={styles.image}
      />
      <View style={styles.info}>
        <Styled.Text
          mb={'5px'}
          lineHeight={'24px'}
          weight={'500'}
          size={'20px'}>
          {item.name}
        </Styled.Text>
        <Styled.SubTitle size={'14px'} lineHeight={'20px'}>
          {item.description}
        </Styled.SubTitle>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    marginBottom: 17,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '100%',
  },
  image: {
    // marginRight: 8,
  },
  info: {
    marginLeft: 10,
    maxWidth: 188,
  },
});

export default SearchPopularItemCard;
