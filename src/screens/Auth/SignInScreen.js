import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import Styled from '../../styles';
import InputWrapper from '../../components/InputWrapper';
import { COLORS } from '../../constants';
import { SvgCss } from 'react-native-svg';
import SignInWithSocials from '../../components/SignInWithSocials';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../store/Auth/actions';

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const signInHandler = () => {
    console.log('Sign in');
    dispatch(
      signInSuccess({
        user: {
          name: 'Abror Anvarov',
          email: 'anvarov2295@gmail.com',
        },
        token: '123456789',
      }),
    );
  };
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Styled.Title>Let’s Sign You In</Styled.Title>
          <Styled.SubTitle mt={'22px'} mb={'48px'}>
            Welcome Back, You’ve been missed!
          </Styled.SubTitle>
          <InputWrapper labelText={'Email'}>
            <TextInput
              textContentType="emailAddress"
              keyboardType="email-address"
              style={styles.input}
              value="anvrov2295@gmail.com"
            />
          </InputWrapper>
          <InputWrapper labelText={'Password'}>
            <TextInput
              textContentType="password"
              secureTextEntry
              keyboardType="default"
              style={styles.input}
              value="123456789"
            />
          </InputWrapper>
          <Styled.GreenButton onPress={signInHandler} mt={'120px'} mb={'26px'}>
            <Styled.GreenButtonText>Login</Styled.GreenButtonText>
          </Styled.GreenButton>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Styled.Text mr={'5px'} align={'center'} letterSpacing={'-0.24px'}>
              Don’t have an account?
            </Styled.Text>
            <Pressable
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Styled.Text color={COLORS.DARK_GREEN} weight={500}>
                Sign Up
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

export default SignInScreen;
