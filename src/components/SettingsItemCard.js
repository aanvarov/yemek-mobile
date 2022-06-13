import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import { SvgCss } from 'react-native-svg';
import Styled from '../styles';
import arrowRightSecondIcon from '../assets/images/svg/arrowRightSecondIcon';

const SettingsItemCard = ({ icon, title }) => {
  const openURL = url => {
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return Linking.openURL(url);
      }
    });
  };
  return (
    <TouchableOpacity
      onPress={() => {
        openURL(
          'https://my.click.uz/services/pay/?service_id=15892&merchant_id=11435&amount=1000',
        );
      }}>
      <View style={styles.container}>
        <SvgCss xml={icon} style={styles.icon} />
        <Styled.SubTitle style={styles.title}>{title}</Styled.SubTitle>
        <SvgCss xml={arrowRightSecondIcon} style={styles.rightIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    position: 'relative',
    marginBottom: 12,
  },
  icon: {
    marginRight: 18,
  },
  rightIcon: {
    position: 'absolute',
    right: 16,
  },
});

export default SettingsItemCard;
