import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import { COLORS } from '../constants';
import Toast from 'react-native-root-toast';
import { useDispatch } from 'react-redux';
import { clearCart, addedToCart, getTotalCount } from '../store/Cart/actions';
import store from '../store';

const FoodDetailsScreen = ({ navigation, route }) => {
  // getting data from route
  const food = route?.params?.food;
  // console.log('food', food);

  const dispatch = useDispatch();
  const [counter, setCounter] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSameRes, setIsSameRes] = useState(true);

  const checkingFoodsRestaurant = () => {
    const cartFoods = store.getState().cart.foods;
    cartFoods.forEach(item => {
      if (item.restaurant._id === food?.restaurant._id) {
        setIsSameRes(true);
      } else {
        setIsSameRes(false);
      }
    });
  };

  useEffect(() => {
    checkingFoodsRestaurant();
  }, []);

  return (
    // <Styled.SafeAreaView>
    <Styled.Container>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('BottomTabNavigation')}>
          <Image
            style={styles.backIcon}
            source={require('../assets/images/Back.png')}
          />
        </Pressable>
        <ScreenHeader title="Details" />
        <Pressable
          onPress={() => {
            setIsFavorite(!isFavorite);
            if (isFavorite) {
              Toast.show('Removed from favorite', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
            } else {
              Toast.show('Added to favorite', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
            }
          }}>
          {isFavorite ? (
            <Image
              style={styles.favoriteIcon}
              source={require('../assets/images/Favorite.png')}
            />
          ) : (
            <Image
              style={styles.favoriteIcon}
              source={require('../assets/images/isnotFavorite.png')}
            />
          )}
        </Pressable>
      </View>
      <View style={styles.foodImageContainer}>
        <Image style={styles.foodImage} source={{ uri: food.img }} />
      </View>
      <View style={styles.counter}>
        <Pressable
          onPress={() => {
            if (counter > 1) {
              setCounter(counter - 1);
            }
          }}>
          <View style={styles.minus}>
            <Text style={styles.minusText}>-</Text>
          </View>
        </Pressable>
        <Text style={styles.counterText}>{counter}</Text>
        <Pressable
          onPress={() => {
            if (counter < 10) {
              setCounter(counter + 1);
            }
          }}>
          <View style={styles.plus}>
            <Text style={styles.plusText}>+</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.foodPreparing}>
        <View style={styles.starCon}>
          <Image
            style={styles.starIcon}
            source={require('../assets/images/StarFoodDetails.png')}
          />
          <Text style={styles.foodStars}>4.9</Text>
        </View>
        <View style={styles.foodTimeCon}>
          <Image
            style={styles.timeIcon}
            source={require('../assets/images/timer.png')}
          />
          <Text style={styles.foodTimeText}>30 Min</Text>
        </View>
        <View style={styles.shipping}>
          <Text style={styles.shippingText}>$ Free Shipping</Text>
        </View>
      </View>
      <View style={styles.foodInfoContainer}>
        <Styled.Text mb={'5px'} size={'18px'}>
          {food.name}
        </Styled.Text>
        <Styled.SubTitle>{food.description}</Styled.SubTitle>
      </View>
      {food.status == 'outofstock' && (
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
              marginTop: 10,
              textAlign: 'center',
              color: 'red',
            }}>
            Out of stock
          </Text>
        </View>
      )}
      <View style={styles.resInfo}>
        <View style={styles.resImageCon}>
          <Image
            style={styles.resImage}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <View style={styles.restaurant}>
          <Text style={styles.resName}>{food?.restaurant?.name}</Text>
          <Styled.SubTitle>1.6 Km from you</Styled.SubTitle>
        </View>
        <View style={styles.stars}>
          <Image
            style={styles.starIcon}
            source={require('../assets/images/goldStar.png')}
          />
          <Image
            style={styles.starIcon}
            source={require('../assets/images/goldStar.png')}
          />
          <Image
            style={styles.starIcon}
            source={require('../assets/images/goldStar.png')}
          />
          <Image
            style={styles.starIcon}
            source={require('../assets/images/goldStar.png')}
          />
        </View>
      </View>
      <View style={styles.addToCartCon}>
        <View style={styles.addToCartTotal}>
          <Text style={styles.addToCartText}>Total Price</Text>
          <Text style={styles.addToCartTotalText}>
            UZS {food.price * counter}
          </Text>
        </View>
        <Styled.GreenButton
          disabled={food.status == 'outofstock' && true}
          onPress={() => {
            checkingFoodsRestaurant();
            console.log('clicked', isSameRes);
            if (food?.status == 'outofstock') {
              Toast.show('This food is out of stock', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.BOTTOM,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
            } else if (isSameRes) {
              dispatch(addedToCart({ ...food, counter }));
              Toast.show('Added to cart', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.TOP,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
              });
              // navigation.navigate('MyCart');
              dispatch(getTotalCount());
            } else {
              Toast.show(
                'Please add foods from same restaurant or first clear cart',
                {
                  duration: Toast.durations.SHORT,
                  position: Toast.positions.BOTTOM,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 0,
                },
              );
            }
          }}
          width={'50%'}>
          <Styled.GreenButtonText>Add to Cart</Styled.GreenButtonText>
        </Styled.GreenButton>
      </View>
    </Styled.Container>
    // </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  resImage: {
    width: 20,
    height: 30,
  },
  addToCartTotalText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: '#09B44D',
  },
  addToCartText: {
    fontSize: 18,
    lineHeight: 22,
  },
  addToCartCon: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resName: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 22,
    color: '#263238',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resImageCon: {
    width: 52,
    height: 52,
    backgroundColor: '#F6F6F6',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resInfo: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shippingText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
  },
  timeIcon: {
    marginTop: 5,
    marginRight: 5,
    width: 12,
    height: 12,
  },
  foodTimeText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
  },
  foodTimeCon: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 14,
    height: 14,
  },
  header: {
    // backgroundColor: '#dede23',
    paddingTop: Platform.OS === 'android' ? 34 : 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  foodImageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F6F6F6',
    paddingTop: Platform.OS === 'android' ? 100 : 150,
    paddingBottom: 27,
    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },
  foodImage: {
    height: 263,
    width: 304,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 45,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    width: 118,
    borderRadius: 18,
    // position: 'absolute',
    marginTop: Platform.OS === 'android' ? 290 : 305,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 1,
  },
  counterText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    color: COLORS.TEXT_COLOR,
    marginHorizontal: 7,
  },
  minus: {
    width: 40,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 40,
    height: 40,
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.DARK_GREEN,
  },
  plusText: {
    fontSize: 20,
    color: '#626262',
  },
  minusText: {
    fontSize: 20,
    color: '#626262',
  },
  foodPreparing: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#F6F623',
    width: '100%',
    marginBottom: 25,
  },
  starCon: {
    width: 62,
    height: 26,
    backgroundColor: COLORS.DARK_GREEN,
    borderRadius: 6,
    flexDirection: 'row',
    paddingHorizontal: 9,
    paddingVertical: 5,
  },
  foodStars: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 16,
    color: '#FFFFFF',
    marginLeft: 4,
  },
});

export default FoodDetailsScreen;
