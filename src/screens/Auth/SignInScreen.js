import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ScrollView,
} from 'react-native';
import Styled from '../../styles';
import InputWrapper from '../../components/InputWrapper';
import { COLORS } from '../../constants';
import { SvgCss } from 'react-native-svg';
import SignInWithSocials from '../../components/SignInWithSocials';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../store/Auth/actions';
import Axios from '../../utils/axios';

const SignInScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [signInError, setSignInError] = useState('');

  console.log('signInError', route?.params?.phone);
  const [data, setData] = useState({
    phone: route?.params?.phone || '',
    password: '',
  });

  const signInHandler = () => {
    console.log('Sign in');
    // dispatch(
    //   signInSuccess({
    //     user: {
    //       name: 'Abror Anvarov',
    //       email: 'anvarov2295@gmail.com',
    //     },
    //     accessToken: '123456789',
    //   }),
    // );
    Axios.post('/api/v1/auth/sessions', data)
      .then(res => {
        console.log('res data', res);
        dispatch(signInSuccess(res.data));
      })
      .catch(err => {
        setSignInError(err.response.data.message);
        console.log('login error', err.response.data.message);
      });
  };
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginTop: 50 }}>
          <Styled.Title>Let’s Sign You In</Styled.Title>
          <Styled.SubTitle
            color={signInError ? 'red' : null}
            mt={'22px'}
            mb={'48px'}>
            {signInError ? signInError : 'Welcome Back, You’ve been missed!'}
          </Styled.SubTitle>
          <InputWrapper labelText={'Phone Number'}>
            <TextInput
              textContentType="telephoneNumber"
              keyboardType="default"
              style={styles.input}
              placeholder="998991234567"
              value={data.phone}
              onChangeText={text => setData({ ...data, phone: text })}
            />
          </InputWrapper>
          <InputWrapper labelText={'Password'}>
            <TextInput
              textContentType="password"
              secureTextEntry
              keyboardType="default"
              style={styles.input}
              value={data.password}
              placeholder="********"
              onChangeText={text => setData({ ...data, password: text })}
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
        </ScrollView>
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
