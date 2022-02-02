import React from 'react';
import { View, Text } from 'react-native';
import Styled from '../../styles';
import LottieView from 'lottie-react-native';
import { SvgCss } from 'react-native-svg';
import BlackLogo from '../../assets/images/svg/blackLogo';

const AuthWelcomeScreen = ({ navigation }) => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <View style={{ alignItems: 'center' }}>
            <SvgCss xml={BlackLogo} />
          </View>
          <Styled.Title
            align={'center'}
            mb={'117px'}
            mt={'3px'}
            weight={600}
            size={'40px'}
            lineHeight={'49px'}>
            YEMEK
          </Styled.Title>
          <LottieView
            source={require('../../assets/animations/30754-food-delivery-services-animation.json')}
            autoPlay
            loop
            style={{ width: 313, height: 216 }}
          />
          <Styled.GreenButton
            mt={'100px'}
            mb={'27px'}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Styled.GreenButtonText>Register</Styled.GreenButtonText>
          </Styled.GreenButton>
          <Styled.GreenButton>
            <Styled.GreenButtonText>Login</Styled.GreenButtonText>
          </Styled.GreenButton>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

export default AuthWelcomeScreen;
