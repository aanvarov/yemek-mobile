import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
import Styled from '../styles';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/svg/searchBarIcon.png')}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search Food Name"
        placeholderTextColor="#979797"
        style={styles.input}
      />
      <Styled.GreenButton
        width={'90px'}
        height={'41px'}
        style={styles.filterButton}>
        <Styled.GreenButtonText>Filter</Styled.GreenButtonText>
        <Image source={require('../assets/images/svg/filterButtonIcon.png')} />
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
