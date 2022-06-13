import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { SvgCss } from 'react-native-svg';
import arrowRight from '../assets/images/svg/arrowRight';
import store from '../store';

const AccountProfileCard = () => {
  const storeUser = store.getState().auth.user;
  // console.log('storeUser', storeUser);
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/svg/ProfilePic.png')}
          style={styles.image}
        />
        <View style={styles.cardInfo}>
          <Styled.Text>
            {storeUser.firstName} {storeUser.lastName}
          </Styled.Text>
          <Styled.SubTitle>{storeUser.phone}</Styled.SubTitle>
        </View>
        {/* <SvgCss xml={arrowRight} style={styles.icon} /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    height: 93,
    borderRadius: 12,
    backgroundColor: '#F6F6F6',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    marginRight: 17,
  },
  icon: {
    position: 'absolute',
    right: 16,
    top: 43,
  },
});

export default AccountProfileCard;
