import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Styled from '../styles';
import GoogleIcon from '../assets/images/svg/googleIcon';
import TwitterIcon from '../assets/images/svg/twitterIcon';
import InstagramIcon from '../assets/images/svg/instagramIcon';
import { SvgCss } from 'react-native-svg';

const SignInWithSocials = () => {
  return (
    <View style={styles.socialAccounts}>
      <View style={styles.socialsTitle}>
        <Styled.SubTitle>Or sign in with social account</Styled.SubTitle>
        <View style={styles.border}></View>
      </View>
      <View style={styles.socialIcons}>
        <View style={styles.icon}>
          <SvgCss xml={GoogleIcon} />
        </View>
        <View style={styles.icon}>
          <SvgCss xml={TwitterIcon} />
        </View>
        <View style={styles.icon}>
          <SvgCss xml={InstagramIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialAccounts: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
  socialsTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIcons: {
    flexDirection: 'row',
    marginTop: 12,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
  border: {
    width: 95,
    height: 2,
    backgroundColor: '#E8E8E8',
    marginTop: 12,
  },
});

export default SignInWithSocials;
