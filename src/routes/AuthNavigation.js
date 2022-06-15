import React from 'react';
import { useSelector } from 'react-redux';
import { SignedInStack, SignedOutStack } from './navigation';
import { enableLatestRenderer } from 'react-native-maps';

const AuthNavigation = () => {
  enableLatestRenderer();
  const currentUser = useSelector(state => state.auth);
  // console.log('currentUser', currentUser);
  return (
    <>{currentUser.accessToken ? <SignedInStack /> : <SignedOutStack />}</>
  );
};

export default AuthNavigation;
