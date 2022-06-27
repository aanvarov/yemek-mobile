import React from 'react';
import Styled from '../styles';
import ScreenHeader from '../components/ScreenHeader';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';

const Notifications = ({ navigation }) => {
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
          <ScreenHeader title="Order History" />
        </View>
        <ScrollView style={{ marginTop: 20 }}>
          <View style={styles.notification}>
            <View style={styles.notificationHeader}>
              <View style={styles.notificationHeaderLeft}>
                <View style={styles.notificationHeaderLeftText}>
                  <Text style={styles.notificationHeaderLeftTextTitle}>
                    Notification
                  </Text>
                  <Text style={styles.notificationHeaderLeftTextSubtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </View>
              <View style={styles.notificationHeaderRight}>
                <Text style={styles.notificationHeaderRightText}>12:00 PM</Text>
              </View>
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationBodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationHeader}>
              <View style={styles.notificationHeaderLeft}>
                <View style={styles.notificationHeaderLeftText}>
                  <Text style={styles.notificationHeaderLeftTextTitle}>
                    Notification
                  </Text>
                  <Text style={styles.notificationHeaderLeftTextSubtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </View>
              <View style={styles.notificationHeaderRight}>
                <Text style={styles.notificationHeaderRightText}>12:00 PM</Text>
              </View>
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationBodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationHeader}>
              <View style={styles.notificationHeaderLeft}>
                <View style={styles.notificationHeaderLeftText}>
                  <Text style={styles.notificationHeaderLeftTextTitle}>
                    Notification
                  </Text>
                  <Text style={styles.notificationHeaderLeftTextSubtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Text>
                </View>
              </View>
              <View style={styles.notificationHeaderRight}>
                <Text style={styles.notificationHeaderRightText}>12:00 PM</Text>
              </View>
            </View>
            <View style={styles.notificationBody}>
              <Text style={styles.notificationBodyText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </View>
          </View>
          <View style={styles.notification}>
            <View style={styles.notificationHeader}>
              <View style={styles.notificationHeaderLeft}>
                <View style={styles.notificationHeaderLeftText}>
                  <Text style={styles.notificationHeaderLeftTextTitle}>
                    Notification
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
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
});

export default Notifications;
