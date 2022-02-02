import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Styled from '../../styles';
import InputWrapper from '../../components/InputWrapper';
import { COLORS } from '../../constants';
import SignInWithSocials from '../../components/SignInWithSocials';

const SignUpScreen = ({ navigation }) => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Styled.Title>Getting Started</Styled.Title>
          <Styled.SubTitle mt={'22px'} mb={'48px'}>
            Create an account to continue!
          </Styled.SubTitle>
          <InputWrapper labelText={'Your Email'}>
            <TextInput
              textContentType="emailAddress"
              keyboardType="email-address"
              style={styles.input}
              value="Kawsarui.ux@gmail.com"
            />
          </InputWrapper>
          <InputWrapper labelText={'Your Name'}>
            <TextInput
              textContentType="name"
              keyboardType="default"
              style={styles.input}
              value="Kawsarui.ux@gmail.com"
            />
          </InputWrapper>
          <InputWrapper labelText={'Password'}>
            <TextInput
              textContentType="password"
              secureTextEntry
              keyboardType="default"
              style={styles.input}
              value="Kawsaruidfdfsf"
            />
          </InputWrapper>
          <Styled.GreenButton mb={'26px'}>
            <Styled.GreenButtonText>Create Account</Styled.GreenButtonText>
          </Styled.GreenButton>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Styled.Text mr={'5px'} align={'center'} letterSpacing={'-0.24px'}>
              Already have an account?
            </Styled.Text>
            <Pressable
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Styled.Text color={COLORS.DARK_GREEN} weight={500}>
                Sign In
              </Styled.Text>
            </Pressable>
          </View>
          <SignInWithSocials />
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    color: COLORS.TEXT_COLOR,
    // backgroundColor: 'yellow',
  },
});

export default SignUpScreen;
