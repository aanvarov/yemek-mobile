import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import Styled from '../../styles';
import InputWrapper from '../../components/InputWrapper';
import { COLORS } from '../../constants';
import SignInWithSocials from '../../components/SignInWithSocials';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../../store/Auth/actions';
import Axios from '../../utils/axios';
import { object, string, ref } from 'yup';
import Toast from 'react-native-root-toast';

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
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  // sign up validation
  const schema = object().shape({
    password: string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    lastName: string().required('Last name is required'),
    firstName: string().required('First name is required'),
    phone: string().required('Phone is required').min(9, 'Phone is too short'),
  });

  const signUpHandler = () => {
    setLoading(true);
    schema
      .validate(data)
      .then(() => {
        // sign up handler with axios
        Axios.post('/api/v1/auth/signup', data)
          .then(res => {
            // dispatch(signInSuccess(res.data));
            // console.log('res data', { ...res });
            setLoading(false);
            if (res.status === 201) {
              navigation.navigate('SignIn', { phone: res.data.phone });
            }
          })
          .catch(err => {
            // console.log('rrrooooo', err.response.data.error);
            setLoading(false);
            Toast.show(err?.response?.data?.error, {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
              backgroundColor: 'red',
              textColor: 'white',
              textShadowColor: 'black',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 2,
              fontSize: 14,
              fontWeight: 'bold',
              padding: 20,
              borderRadius: 20,
              opacity: 1,
              textAlign: 'center',
            });
          });
      })
      .catch(err => {
        console.log('sign up error', err);
        setLoading(false);
        Toast.show(err.message, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: 'red',
          textColor: 'white',
          textStyle: { fontSize: 14 },
        });
      });
  };

  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={[styles.modal, loading && { display: 'flex' }]}>
          <ActivityIndicator size="large" color="#FFFF00" />
        </View>
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
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1,
    display: 'none',
  },
});

export default SignUpScreen;
