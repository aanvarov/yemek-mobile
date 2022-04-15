import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Styled from '../styles';
import Toast from 'react-native-root-toast';

const SearchBar = ({ searched, setSearched, popularItems }) => {
  const [search, setSearch] = useState('');
  const searchHandler = () => {
    if (search === '') {
      Toast.show('Please enter food name', {
        duration: Toast.durations.SHORT,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    } else {
      //search foods from popularItems
      const searchedFoods = popularItems.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase()),
      );
      setSearched(searchedFoods);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/svg/searchBarIcon.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search Food Name"
        placeholderTextColor="#979797"
        value={search}
        onChangeText={text => setSearch(text)}
        style={styles.input}
      />
      <Styled.GreenButton
        width={'85px'}
        height={'41px'}
        onPress={searchHandler}
        style={styles.filterButton}>
        <Styled.GreenButtonText>Search</Styled.GreenButtonText>
        {/* <Image source={require('../assets/images/svg/filterButtonIcon.png')} /> */}
      </Styled.GreenButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    height: 55,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingLeft: 14,
    paddingRight: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 9,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 22,
    color: '#979797',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
});

export default SearchBar;
