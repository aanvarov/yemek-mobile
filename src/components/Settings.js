import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Styled from '../styles';
import SettingsItemCard from './SettingsItemCard';
import setAccountIcon from '../assets/images/svg/setAccountIcon';
import setNotificationIcon from '../assets/images/svg/setNotificationIcon';
import setTrackingIcon from '../assets/images/svg/setTrackingIcon';
import setStatusIcon from '../assets/images/svg/setStatusIcon';
import setLangIcon from '../assets/images/svg/setLangIcon';
import setFaqIcon from '../assets/images/svg/setFaqIcon';
import { useDispatch } from 'react-redux';
import { signOutSuccess } from '../store/Auth/actions';

const Settings = () => {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    console.log('Sign out');
    dispatch(signOutSuccess());
  };

  return (
    <View style={styles.container}>
      <Styled.Title weight={'400'} mb={'15px'}>
        Settings
      </Styled.Title>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SettingsItemCard icon={setAccountIcon} title={'Personal Data'} />
        <SettingsItemCard icon={setNotificationIcon} title={'Notification'} />
        <SettingsItemCard icon={setTrackingIcon} title={'Tracking Order'} />
        <SettingsItemCard icon={setStatusIcon} title={'Order Status'} />
        <SettingsItemCard icon={setLangIcon} title={'Language'} />
        <SettingsItemCard icon={setFaqIcon} title={'FAQs'} />
        <Styled.GreenButton onPress={signOutHandler}>
          <Styled.GreenButtonText>Logout</Styled.GreenButtonText>
        </Styled.GreenButton>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default Settings;