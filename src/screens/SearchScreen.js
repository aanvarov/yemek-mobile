import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import SearchBar from '../components/SearchBar';
import SearchPopularItems from '../components/SearchPopularItems';
import ImageCard from '../components/ImageCard';
import Axios from '../utils/axios';

const SearchScreen = ({ navigation }) => {
  const [popularItems, setPopularItems] = useState([]);
  const [searched, setSearched] = useState([]);
  // getting all foods from axios

  useEffect(() => {
    Axios.get('/api/v1/foods/mobile')
      .then(res => {
        console.log('res data foods search', res.data);
        setSearched(res.data);
        setPopularItems(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScreenHeader title="Search" />
        <SearchBar
          popularItems={popularItems}
          searched={searched}
          setSearched={setSearched}
        />
        <SearchPopularItems searched={searched} navigation={navigation} />
        <ImageCard />
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

export default SearchScreen;
