import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../../screens/Profile/styles';
import { USER_NAME, getInitials } from './data';

const ProfileHeader = () => {
  const insets = useSafeAreaInsets();
  const initials = getInitials(USER_NAME);

  return (
    <View style={[styles.header, { paddingTop: Math.max(insets.top, 12) }]}>
      <Text style={styles.headerTitle}>Hesabım</Text>

      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <View>
          <Text style={styles.greeting}>Merhaba,</Text>
          <Text style={styles.userName}>{USER_NAME}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;
