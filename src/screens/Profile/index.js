import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import {
  ProfileHeader,
  PremiumBanner,
  MenuList,
} from '../../components/Profile';
import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ProfileHeader />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <PremiumBanner />
          <MenuList />
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
