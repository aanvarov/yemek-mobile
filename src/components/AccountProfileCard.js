import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styled from '../styles';
import { SvgCss } from 'react-native-svg';
import arrowRight from '../assets/images/svg/arrowRight';

const AccountProfileCard = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/svg/ProfilePic.png')}
          style={styles.image}
        />
        <View style={styles.cardInfo}>
          <Styled.Text>Abror Anvarov</Styled.Text>
          <Styled.SubTitle>Software Engineer</Styled.SubTitle>
        </View>
        <SvgCss xml={arrowRight} style={styles.icon} />
      </View>
    </TouchableOpacity>
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
