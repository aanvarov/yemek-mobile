import { View, Text } from 'react-native';
import React from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import AccountProfileCard from '../components/AccountProfileCard';
import Settings from '../components/Settings';

const AccountScreen = () => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScreenHeader title="Account" />
        <AccountProfileCard />
        <Settings />
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

export default AccountScreen;
