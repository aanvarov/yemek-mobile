import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import Styled from '../../styles';
import InputWrapper from '../../components/InputWrapper';
import { COLORS } from '../../constants';
import SignInWithSocials from '../../components/SignInWithSocials';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../store/Auth/actions';
import Axios from '../../utils/axios';

// dispatch(
//   signInSuccess({
//     user: {
//       name: 'Abror Anvarov',
//       email: 'anvarov2295@gmail.com',
//     },
//     accessToken: '123456789',
//   }),
// );

const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const signUpHandler = () => {
    // sign up handler with axios
    Axios.post('/api/v1/auth/signup', data)
      .then(res => {
        // dispatch(signInSuccess(res.data));
        // console.log('res data', { ...res });
        if (res.status === 201) {
          navigation.navigate('SignIn', { phone: res.data.phone });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginTop: 50 }}>
          <Styled.Title>Getting Started</Styled.Title>
          <Styled.SubTitle mt={'22px'} mb={'38px'}>
            Create an account to continue!
          </Styled.SubTitle>
          <InputWrapper labelText={'Your Phone'}>
            <TextInput
              textContentType="telephoneNumber"
              keyboardType="number-pad"
              style={styles.input}
              placeholder="998991234567"
              onChangeText={text => setData({ ...data, phone: text })}
            />
          </InputWrapper>
          <InputWrapper labelText={'First Name'}>
            <TextInput
              textContentType="name"
              keyboardType="default"
              style={styles.input}
              placeholder="Abror"
              onChangeText={text => setData({ ...data, firstName: text })}
            />
          </InputWrapper>
          <InputWrapper labelText={'Last Name'}>
            <TextInput
              textContentType="name"
              keyboardType="default"
              style={styles.input}
              placeholder="Anvarov"
              onChangeText={text => setData({ ...data, lastName: text })}
            />
          </InputWrapper>
          <InputWrapper labelText={'Password'}>
            <TextInput
              textContentType="password"
              secureTextEntry
              keyboardType="default"
              style={styles.input}
              placeholder="********"
              onChangeText={text => setData({ ...data, password: text })}
            />
          </InputWrapper>
          <Styled.GreenButton mb={'26px'} onPress={signUpHandler}>
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

export default SignUpScreen;
