import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/Auth/SignInScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import AuthWelcomeScreen from '../screens/Auth/AuthWelcomeScreen';
import SplashScreen from '../screens/SplashScreen';
import OnBoarding from '../screens/OnBoarding';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';
import MyCart from '../screens/MyCart';

import BottomTabNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  screenInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
};

export const SignedInStack = () => (
  <Stack.Navigator screenOptions={screenOptions}>
    <Stack.Screen name="AuthWelcome" component={SplashScreen} />
    <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
    <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
    <Stack.Screen name="MyCart" component={MyCart} />
  </Stack.Navigator>
);

export const SignedOutStack = () => (
  <Stack.Navigator screenOptions={screenOptions} initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
    <Stack.Screen name="AuthWelcome" component={AuthWelcomeScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);
