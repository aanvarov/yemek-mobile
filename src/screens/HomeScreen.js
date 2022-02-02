import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styled from '../styles';
import { SvgCss } from 'react-native-svg';
import NotificationIcon from '../assets/images/svg/notificationIcon';
import { COLORS } from '../constants';

const HomeScreen = () => {
  return (
    <Styled.SafeAreaView>
      <Styled.Container>
        <View style={styles.header}>
          <View style={styles.lineWrapper}>
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
          <SvgCss xml={NotificationIcon} />
        </View>
        <Styled.Title
          mt={'18px'}
          style={{ width: 180 }}
          size={'25px'}
          lineHeight={'40px'}>
          Fast and Delicious{' '}
          <Text style={{ color: COLORS.DARK_GREEN }}>Food</Text>
        </Styled.Title>
      </Styled.Container>
    </Styled.SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F3F3F3',
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
});

export default HomeScreen;
