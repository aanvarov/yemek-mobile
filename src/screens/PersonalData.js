import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import store from '../store';
import InputWrapper from '../components/InputWrapper';
import { COLORS } from '../constants';
import { object, string, ref } from 'yup';
import Toast from 'react-native-root-toast';
import Axios from '../utils/axios';

const PersonalData = ({ navigation }) => {
  const storeUser = store.getState().auth.user;
  const [loading, setLoading] = useState(false);

  console.log('storeUser', storeUser);
  const [data, setData] = useState({
    phone: storeUser.phone,
    firstName: storeUser.firstName,
    lastName: storeUser.lastName,
    email: storeUser.email,
  });
  const schema = object().shape({
    lastName: string().required('Last name is required'),
    firstName: string().required('First name is required'),
    phone: string().required('Phone is required').min(9, 'Phone is too short'),
    email: string().required('Email is required'),
  });
  const signUpHandler = () => {
    setLoading(true);
    schema
      .validate(data)
      .then(() => {
        // sign up handler with axios
        Axios.put('/api/v1/auth/update', data)
          .then(res => {
            // dispatch(signInSuccess(res.data));
            console.log('res data', { ...res });
            setLoading(false);
            // if (res.status === 201) {
            //   navigation.navigate('SignIn', { phone: res.data.phone });
            // }
            Toast.show('Successfully updated', {
              duration: Toast.durations.LONG,
              position: Toast.positions.BOTTOM,
              shadow: true,
              animation: true,
              hideOnPress: true,
              delay: 0,
              backgroundColor: 'green',
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
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/BackGrey.png')}
            />
          </Pressable>
          <ScreenHeader title="Personal Data" />
        </View>
        <View style={styles.content}>
          <View style={styles.profile}>
            <View style={styles.profileImgCon}>
              <Image
                style={{ width: 104, height: 96 }}
                source={require('../assets/avatar.png')}
              />
            </View>
            <View style={styles.profileInfo}>
              <InputWrapper labelText={'First Name'}>
                <TextInput
                  textContentType="name"
                  keyboardType="default"
                  style={styles.input}
                  value={data.firstName}
                  onChangeText={text => setData({ ...data, firstName: text })}
                />
              </InputWrapper>
              <InputWrapper labelText={'Last Name'}>
                <TextInput
                  textContentType="name"
                  keyboardType="default"
                  style={styles.input}
                  value={data.lastName}
                  onChangeText={text => setData({ ...data, lastName: text })}
                />
              </InputWrapper>
              <InputWrapper labelText={'Phone Number'}>
                <TextInput
                  textContentType="telephoneNumber"
                  keyboardType="default"
                  style={styles.input}
                  value={data.phone}
                  onChangeText={text => setData({ ...data, phone: text })}
                />
              </InputWrapper>
              <InputWrapper labelText={'Email'}>
                <TextInput
                  textContentType="name"
                  keyboardType="default"
                  style={styles.input}
                  value={data.email}
                  onChangeText={text => setData({ ...data, email: text })}
                />
              </InputWrapper>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Styled.GreenButton
            width={'48%'}
            onPress={() => {
              navigation.goBack();
            }}>
            <Styled.GreenButtonText>Cancel</Styled.GreenButtonText>
          </Styled.GreenButton>
          <Styled.GreenButton width={'48%'} onPress={signUpHandler}>
            <Styled.GreenButtonText>Save</Styled.GreenButtonText>
          </Styled.GreenButton>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileImgCon: {
    marginVertical: 20,
    alignItems: 'center',
  },
  header: {
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 1,
  },
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

export default PersonalData;
