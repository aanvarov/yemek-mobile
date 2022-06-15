import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import Styled from '../styles';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const OrderTracking = ({ route, navigation }) => {
  const { order } = route.params;
  console.log('tracking order', order);
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/BackGrey.png')}
            />
          </Pressable>
          <ScreenHeader title="Tracking Order" />
        </View>
        <View style={styles.container}>
          <Text>Order tracklash</Text>
        </View>
        <View style={styles.container}>
          {/* <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView> */}
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 0,
    top: 10,
    zIndex: 1,
  },
  container: {
    marginTop: 10,
  },

  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default OrderTracking;
