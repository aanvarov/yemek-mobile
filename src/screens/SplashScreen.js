import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native';
import LottieView from 'lottie-react-native';

import SplashLogo from '../assets/images/svg/SplashLogo';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
  });

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/images/splash-bg.png')}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          {/* <LottieView
            source={require('../assets/animations/19902-splash-screen.json')}
            autoPlay
            duration={10000}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          /> */}
          <SplashLogo width="42" height="68" />
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 40 }}>
            YEMEK
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
