import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import ScreenHeader from '../components/ScreenHeader';
import Styled from '../styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const OrderTracking = ({ route, navigation }) => {
  const { order } = route.params;
  console.log('tracking order', order?.restaurant?.geoLocation);
  const [lat, long] = order.deliveryLocation.split(',');
  const [resLat, resLong] = order?.restaurant?.geoLocation.split(',');
  console.log('latitude', lat, long);
  const [min, setMin] = useState(0);
  const [kilo, setKilo] = useState(0);
  const mapRef = useRef();
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={styles.header}>
          <View style={styles.overlay}></View>
          <TouchableOpacity
            onPress={() => {
              console.log('orqaga');
              navigation.goBack();
            }}
            style={styles.backBtn}>
            <Image
              style={styles.backIcon}
              source={require('../assets/images/BackGrey.png')}
            />
          </TouchableOpacity>
          <ScreenHeader title="Tracking Order" />
        </View>
        <MapView
          zoomEnabled={true}
          zoomControlEnabled={true}
          scrollEnabled={true}
          showsMyLocationButton={true}
          showsUserLocation={true}
          showsScale={true}
          zoomTapEnabled={true}
          showsCompass={true}
          ref={mapRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: parseFloat(lat),
            longitude: parseFloat(long),
            // latitude: 41.3065038,
            // longitude: 69.2838429,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: parseFloat(lat),
              longitude: parseFloat(long),
            }}
            title="Your Location"
            description="Your Location">
            <View
              style={{
                width: 60,
                height: 60,
                position: 'relative',
                // backgroundColor: 'red',
              }}>
              <Image
                style={{ width: 60, height: 60, zIndex: 99, top: 0, left: 0 }}
                source={require('../assets/mapmarker.png')}
              />
            </View>
          </Marker>
          <Marker
            coordinate={{
              latitude: parseFloat(resLat),
              longitude: parseFloat(resLong),
            }}
            title="Your Location"
            description="Your Location">
            <View
              style={{
                width: 60,
                height: 60,
                position: 'relative',
                // backgroundColor: 'red',
              }}>
              <Image
                style={{ width: 60, height: 60, zIndex: 99, top: 0, left: 0 }}
                source={require('../assets/mapmarker.png')}
              />
            </View>
          </Marker>
          <MapViewDirections
            origin={{
              latitude: parseFloat(lat),
              longitude: parseFloat(long),
            }}
            destination={{
              latitude: parseFloat(resLat),
              longitude: parseFloat(resLong),
            }}
            apikey={'AIzaSyB_Ok8MTJKLjZUSJqXDcGMSPGIH1Vd6nmE'}
            strokeWidth={4}
            strokeColor="#00AAFF"
            mode="DRIVING"
            onReady={result => {
              console.log('distance km', result.distance);
              console.log('duration min', result.duration);
              setMin(result.duration);
              setKilo(result.distance);
              mapRef.current.fitToCoordinates(result.coordinates, {
                edgePadding: { top: 20, right: 20, bottom: 20, left: 20 },
                animated: true,
              });
            }}
          />
        </MapView>
        <View style={styles.orderInfo}>
          <View style={styles.orderInfoHeader}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}>
              <Text style={styles.orderInfoHeaderText}>Tracking Order</Text>
              <Text style={styles.orderInfoBodyItemText}>
                Order No. {order.orderId}
              </Text>
            </View>
            <Text style={styles.arrived}>
              Arrived In {parseInt(min)}:00 Min
            </Text>
          </View>
          <Styled.GreenButton
            onPress={() => {
              console.log('orqaga');
              navigation.goBack();
            }}>
            <Styled.GreenButtonText>Done</Styled.GreenButtonText>
          </Styled.GreenButton>
        </View>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  orderInfoBodyItemText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#263238',
  },
  arrived: {
    color: '#09B44D',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
  },
  orderInfoHeaderText: {
    // font-family: 'Poppins';
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 15,
    color: '#000000',
  },
  orderInfoHeader: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  orderInfo: {
    backgroundColor: '#fff',
    bottom: 30,
    width: 330,
    position: 'absolute',
    left: '50%',
    marginLeft: -135,
    borderRadius: 12,
  },
  header: {
    position: 'relative',
    zIndex: 99,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: '#ffffff',
    opacity: 0.7,
    width: 450,
    height: 65,
    top: 0,
    left: -50,
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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default OrderTracking;
