import { View, Text, SafeAreaView, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SvgCss } from 'react-native-svg';
import HomeIconTab from '../assets/images/svg/homeIconTab';
import SearchIconTab from '../assets/images/svg/searchIconTab';
import CartIconTab from '../assets/images/svg/cartIconTab';
import AccountIconTab from '../assets/images/svg/accountIconTab';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  // tabBarShowLabel: false,
  tabBarActiveTintColor: 'white',
  tabBarActiveBackgroundColor: COLORS.DARK_GREEN,
  tabBarStyle: {
    elevation: 2,
    backgroundColor: '#fff',
    height: Platform.OS === 'android' ? 60 : 80,
    paddingTop: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopColor: COLORS.DARK_GREEN,
    borderLeftColor: COLORS.DARK_GREEN,
    borderRightColor: COLORS.DARK_GREEN,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarItemStyle: {
    // backgroundColor: COLORS.DARK_GREEN,
    borderRadius: 8,
    height: 45,
    paddingHorizontal: 9,
    paddingVertical: 8,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },
  tabBarIconStyle: {
    width: 18,
    height: 18,
  },
  tabBarLabelStyle: {
    fontFamily: 'Poppins',
    color: COLORS.WHITE,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: -5,
    // position: 'absolute',
    // top: 6,
    // right: 8,
  },
};

const BottomTabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <HomeIconTab color={color} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => <SearchIconTab color={color} />,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={CartScreen}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ color, size }) => <CartIconTab color={color} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => <AccountIconTab color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
