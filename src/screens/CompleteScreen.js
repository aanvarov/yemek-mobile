import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import Styled from '../styles';

const CompleteScreen = ({ navigation }) => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={styles.image}
            source={require('../assets/images/doneIcon.png')}
          />
          <Text style={styles.text}>Order Completed Successfully!</Text>
          <Text style={styles.text}>Thank your and see you soon</Text>
        </View>
        <Styled.GreenButton
          onPress={() => {
            navigation.navigate('BottomTabNavigation', { screen: 'Orders' });
          }}>
          <Styled.GreenButtonText>My Orders</Styled.GreenButtonText>
        </Styled.GreenButton>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    marginBottom: 22,
  },
  text: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 30,
    textAlign: 'center',
    color: '#979797',
  },
});

export default CompleteScreen;
