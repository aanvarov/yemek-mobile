import { View, Text } from 'react-native';
import React from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import SearchBar from '../components/SearchBar';
import SearchPopularItems from '../components/SearchPopularItems';
import ImageCard from '../components/ImageCard';

const SearchScreen = () => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScreenHeader title="Search" />
        <SearchBar />
        <SearchPopularItems />
        <ImageCard />
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

export default SearchScreen;
