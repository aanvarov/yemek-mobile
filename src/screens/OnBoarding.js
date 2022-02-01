import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Styled from '../styles';
import { COLORS } from '../constants';
import { SvgCss } from 'react-native-svg';
import onBoardingOne from '../assets/images/svg/onBoardingOne';
import onBoardingTwo from '../assets/images/svg/onBoardingTwo';
import onBoardingThree from '../assets/images/svg/onBoardingThree';

const onBoardingData = [
  {
    id: 1,
    title: 'Made With Love',
    description:
      'We Prepare all dishes with love and passional Especially for you!',
    image: onBoardingOne,
  },
  {
    id: 2,
    title: 'Deliver With Care',
    description:
      'Our couriers take care of all their packages and they care about your health!',
    image: onBoardingTwo,
  },
  {
    id: 3,
    title: 'Pick up delivery',
    description: 'Pick up delivery at your door and enjoy groceries',
    image: onBoardingThree,
  },
];

const OnBoarding = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const nextStepButton = () => {
    if (index < onBoardingData.length - 1) {
      setIndex(index + 1);
    }
    if (index === 2) {
      navigation.navigate('AuthWelcome');
    }
  };
  const skipButton = () => {
    navigation.navigate('AuthWelcome');
  };
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingHorizontal: 10,
          }}>
          <SvgCss xml={onBoardingData[index].image} />
          <Styled.Title mt={'58px'}>{onBoardingData[index].title}</Styled.Title>
          <Styled.Text>{onBoardingData[index].description}</Styled.Text>
          <View style={styles.sliderDots}>
            <Pressable onPress={() => setIndex(0)}>
              <View
                style={[
                  styles.sliderDot,
                  index === 0 ? styles.sliderActiveDot : null,
                ]}
              />
            </Pressable>
            <Pressable onPress={() => setIndex(1)}>
              <View
                style={[
                  styles.sliderDot,
                  index === 1 ? styles.sliderActiveDot : null,
                ]}
              />
            </Pressable>
            <Pressable onPress={() => setIndex(2)}>
              <View
                style={[
                  styles.sliderDot,
                  index === 2 ? styles.sliderActiveDot : null,
                ]}
              />
            </Pressable>
          </View>

          <View style={styles.buttonsContainer}>
            <Styled.GreenButton width={'50%'} onPress={nextStepButton}>
              <Styled.Text
                color={COLORS.WHITE}
                weight={500}
                lineHeight={'20px'}
                letterSpacing={'-0.24px'}>
                {index === 2 ? 'Get Started' : 'Next'}
              </Styled.Text>
            </Styled.GreenButton>
            <Styled.Pressable
              onPress={skipButton}
              width={'50%'}
              alignItems={'flex-end'}>
              <Styled.Text
                size={'18px'}
                lineHeight={'20px'}
                letterSpacing={'-0.24px'}>
                Skip
              </Styled.Text>
            </Styled.Pressable>
          </View>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 60,
    flexDirection: 'row',
    width: '100%',
  },
  sliderDots: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 14,
    // position: 'absolute',
    // bottom: 20,
  },
  sliderDot: {
    width: 10,
    height: 5,
    borderRadius: 5,
    marginRight: 4,
    backgroundColor: COLORS.GREEN,
  },
  sliderActiveDot: {
    width: 18,
    height: 5,
    borderRadius: 5,
    marginRight: 4,
    backgroundColor: COLORS.DARK_GREEN,
  },
});

export default OnBoarding;
