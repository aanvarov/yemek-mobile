import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import store from '../store';
import CartItemCard from '../components/CartItemCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../store/Cart/actions';
import Toast from 'react-native-root-toast';
import Axios from '../utils/axios';
import { COLORS } from '../constants';

const AllItem = ({ navigation }) => {
  // const dispatch = useDispatch();
  // const { foods } = store.getState().cart;
  const [foods, setFoods] = useState([]);
  // getting all foods from axios
  useEffect(() => {
    Axios.get('/api/v1/foods/mobile')
      .then(res => {
        console.log('res data foods', res.data);
        setFoods(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/BackGrey.png')}
            />
          </Pressable>
          <ScreenHeader title="All Popular Foods" />
        </View>
        {foods.length ? (
          <ScrollView
            style={styles.cartItems}
            showsVerticalScrollIndicator={false}>
            {foods.length &&
              foods.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate('FoodDetails', {
                      food: item,
                    });
                  }}>
                  <View key={item._id} style={styles.container}>
                    <Image source={{ uri: item.img }} style={styles.image} />
                    <View style={styles.info}>
                      <Styled.Text size={'18px'}>{item.name}</Styled.Text>
                      <Styled.SubTitle>{item.description}</Styled.SubTitle>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <Styled.Text
                          style={styles.price}
                          color={COLORS.DARK_GREEN}>
                          UZS {item.price}
                        </Styled.Text>
                        <Styled.Text ml={'15px'}>
                          Restaurant name: {item?.restaurant?.name}
                        </Styled.Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        ) : (
          <View style={{ marginTop: 10 }}>
            <Styled.Title align={'center'} style={styles.emptyCartText}>
              No foods found
            </Styled.Title>
          </View>
        )}
        {/* <View style={styles.pricing}></View> */}
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    paddingRight: 15,
  },
  image: {
    width: 62,
    height: 53,
    marginRight: 10,
    borderRadius: 12,
  },
  info: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 1,
  },
  cartItems: {
    marginTop: 10,
    flex: 1,
    // backgroundColor: '#23ed23',
  },
  pricing: {
    marginTop: 25,
    height: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
  },
});

export default AllItem;
