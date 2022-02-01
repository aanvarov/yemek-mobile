import React from 'react';
import { View, Text } from 'react-native';
import Styled from '../../styles';

const AuthWelcomeScreen = () => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <Text>Hello</Text>
        <Styled.GreenButton>
          <Styled.Text>Register</Styled.Text>
        </Styled.GreenButton>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

export default AuthWelcomeScreen;
