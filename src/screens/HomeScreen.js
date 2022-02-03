import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styled from '../styles';
import { SvgCss } from 'react-native-svg';
import NotificationIcon from '../assets/images/svg/notificationIcon';
import { COLORS } from '../constants';
import VictoryHandsIcon from '../assets/images/svg/victoryHandsIcon';
import AddressIcon from '../assets/images/svg/addressIcon';
import Categories from '../components/Categories';
import PopularItems from '../components/PopularItems';

const HomeScreen = () => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={styles.header}>
          <View style={styles.lineWrapper}>
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
          <View style={styles.notificationWrapper}>
            <SvgCss xml={NotificationIcon} />
            <View style={styles.notificationNumberWrapper}>
              <Text style={styles.notificationNumber}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Styled.Title
            mt={'18px'}
            style={{ width: 180 }}
            size={'25px'}
            lineHeight={'40px'}>
            Fast and Delicious{' '}
            <Text style={{ color: COLORS.DARK_GREEN }}>Food</Text>
          </Styled.Title>
          <SvgCss style={styles.victoryIcon} xml={VictoryHandsIcon} />
        </View>
        <View style={styles.address}>
          <View style={styles.addressIconWrapper}>
            <SvgCss xml={AddressIcon} />
          </View>
          <View style={styles.addressText}>
            <Styled.Text lineHeight={'22px'}>Address</Styled.Text>
            <Styled.Text lineHeight={'22px'} color={COLORS.DARK_GREEN}>
              Chouddagram 3500, Comilla
            </Styled.Text>
          </View>
        </View>
        <Categories />
        <PopularItems />
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#F3F3F3',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#D2D2D2',
    width: 45,
    height: 45,
    borderRadius: 20,
    paddingVertical: 15,
  },
  line: {
    width: 18,
    height: 2,
    backgroundColor: '#263238',
    borderRadius: 1,
  },
  notificationWrapper: {
    position: 'relative',
  },
  notificationNumberWrapper: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: COLORS.DARK_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    borderColor: COLORS.WHITE,
    borderWidth: 1,
    borderStyle: 'solid',
    top: -6,
    right: -4,
  },
  notificationNumber: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontStyle: 'normal',
    fontSize: 8,
    lineHeight: 13,
    color: COLORS.WHITE,
  },
  titleWrapper: {
    flexDirection: 'row',
  },
  victoryIcon: {
    marginTop: 66,
    marginLeft: 8,
  },
  address: {
    marginTop: 26,
    marginBottom: 34,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressIconWrapper: {
    width: 43,
    height: 43,
    borderRadius: 15,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 19,
  },
});

export default HomeScreen;
