import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Styled from '../styles';
import { SvgCss } from 'react-native-svg';
import NotificationIcon from '../assets/images/svg/notificationIcon';
import { COLORS } from '../constants';
import VictoryHandsIcon from '../assets/images/svg/victoryHandsIcon';
import AddressIcon from '../assets/images/svg/addressIcon';
import Categories from '../components/Categories';
import PopularItems from '../components/PopularItems';
import Axios from '../utils/axios';
import { useDispatch } from 'react-redux';
import store from '../store';
import RestaurantsList from '../components/RestaurantsList';
import socket from '../utils/socket.service';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [popularItems, setPopularItems] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fakeCounter, setFakeCounter] = useState(0);
  // calculate all counts of foods in cart from store
  const cartFoods = store.getState().cart.foods;
  const [foods, setFoods] = useState(cartFoods);
  useEffect(() => {
    store.subscribe(() => {
      setFoods(store.getState().cart.foods);
    });
  }, []);

  const [category, setCategory] = useState('All');
  const [restaurant, setRestaurant] = useState({});

  const getData = () => {
    setLoading(true);
    Axios.get('/api/v1/restaurants/mobile')
      .then(res => {
        console.log('res data restaurants errr', res?.data);
        setRestaurants(res?.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [fakeCounter]);

  socket.on('updateFoodStatus', () => {
    console.log('updateFood');
    setFakeCounter(fakeCounter + 1);
  });

  useEffect(() => {
    console.log('resssss mobile id', restaurant?._id);
    if (restaurant?._id) {
      Axios.get(`/api/v1/categories/mobile/${restaurant?._id}`)
        .then(res => {
          console.log('res data categories errr', res.data);
          setCategories(res.data);
          setCategory('All');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [restaurant]);

  useEffect(() => {
    if (restaurant?._id) {
      Axios.get(`/api/v1/foods/mobile/${restaurant?._id}`)
        .then(res => {
          console.log('res data foods', res.data);
          setPopularItems(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    return () => {
      setPopularItems([]);
    };
  }, [category, restaurant]);

  useEffect(() => {
    if (category === 'All') {
      setFilteredFoods(popularItems);
    } else {
      const filtered = popularItems.filter(
        item => item.category[0].name === category,
      );
      setFilteredFoods(filtered);
    }
  }, [category, popularItems]);

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={[styles.modal, loading && { display: 'flex' }]}>
          <ActivityIndicator size="large" color="#FFFF00" />
        </View>
        <View style={styles.header}>
          {/* <View style={styles.lineWrapper}>
            <View style={styles.line} />
            <View style={styles.line} />
          </View> */}
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ width: 30, height: 45 }}
              source={require('../assets/images/logo.png')}
            />
            <Styled.Title mt={'9px'} ml={'10px'} size={'18px'}>
              Y E M E K
            </Styled.Title>
          </View>
          <Pressable
            onPress={() => navigation.navigate('MyCart')}
            style={styles.notificationWrapper}>
            {/* <SvgCss xml={NotificationIcon} /> */}
            <Image
              style={{ width: 35, height: 35 }}
              source={require('../assets/images/shopping_cart.jpeg')}
            />
            <View style={styles.notificationNumberWrapper}>
              <Text style={styles.notificationNumber}>
                {foods.reduce((acc, food) => acc + food.counter, 0)}
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.titleWrapper}>
          <Styled.Title
            mt={'18px'}
            style={{ width: '100%' }}
            size={'25px'}
            lineHeight={'40px'}>
            Fast and Delicious{' '}
            <Text style={{ color: COLORS.DARK_GREEN }}>Food</Text>
          </Styled.Title>
          <SvgCss style={styles.victoryIcon} xml={VictoryHandsIcon} />
        </View>
        <View style={styles.address}>
          <View style={styles.addressIconWrapper}>
            <SvgCss xml={AddressIcon} />
          </View>
          <View style={{ width: 270 }}>
            <Styled.Text lineHeight={'22px'}>Address</Styled.Text>
            <Styled.Text lineHeight={'22px'} color={COLORS.DARK_GREEN}>
              2 Abdulla Qahhor Street, Tashkent, Uzbekistan
            </Styled.Text>
          </View>
        </View>

        <RestaurantsList
          setRestaurant={setRestaurant}
          restaurant={restaurant}
          restaurants={restaurants}
        />
        <Categories
          setCategory={setCategory}
          category={category}
          categories={categories}
        />
        <PopularItems navigation={navigation} popularItems={filteredFoods} />
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
    display: 'none',
  },
  header: {
    // backgroundColor: '#F3F3F3',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#D2D2D2',
    width: 45,
    height: 45,
    borderRadius: 20,
    paddingVertical: 15,
  },
  line: {
    width: 18,
    height: 2,
    backgroundColor: '#263238',
    borderRadius: 1,
  },
  notificationWrapper: {
    position: 'relative',
  },
  notificationNumberWrapper: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: COLORS.DARK_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderStyle: 'solid',
    top: -6,
    right: -4,
  },
  notificationNumber: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 12,
    lineHeight: 15,
    color: COLORS.WHITE,
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  victoryIcon: {
    marginTop: 25,
    marginLeft: -30,
  },
  address: {
    marginTop: 16,
    marginBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressIconWrapper: {
    width: 43,
    height: 43,
    borderRadius: 15,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
});

export default HomeScreen;
