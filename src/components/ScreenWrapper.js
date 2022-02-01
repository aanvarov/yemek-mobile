import React from 'react';
import { View, SafeAreaView } from 'react-native';

const ScreenWrapper = props => {
  return (
    <SafeAreaView style={{ minHeight: 700, flex: 1 }}>
      <View
        style={{ flex: 1, paddingHorizontal: 25, backgroundColor: 'white' }}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
