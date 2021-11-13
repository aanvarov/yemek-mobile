import React from 'react';
import {useSelector} from 'react-redux';
import {SignedInStack, SignedOutStack} from './navigation';

const AuthNavigation = () => {
  const currentUser = useSelector(state => state.auth);
  return <>{currentUser.token ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
