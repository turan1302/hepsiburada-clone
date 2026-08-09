import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { colors } from '../../screens/Messages/styles';

const NotificationBanner = ({ onClose }) => (
  <View style={styles.banner}>
    <Pressable style={styles.bannerClose} onPress={onClose} hitSlop={8}>
      <Feather name="x" size={14} color={colors.textMuted} />
    </Pressable>

    <View style={styles.bannerContent}>
      <Text style={styles.bannerTitle}>Gelişmelerden haberdar ol</Text>
      <Text style={styles.bannerSubtitle}>
        Siparişlerin ve sana özel tekliflerle ilgili anında bildirim al.
      </Text>
      <Pressable>
        <Text style={styles.bannerLink}>Bildirimlere izin ver</Text>
      </Pressable>
    </View>

    <View style={styles.bannerGraphic}>
      <View style={styles.bellCard}>
        <Feather name="bell" size={26} color={colors.textSecondary} />
        <View style={styles.toggleOn}>
          <View style={styles.toggleKnob} />
        </View>
      </View>
    </View>
  </View>
);

export default NotificationBanner;
