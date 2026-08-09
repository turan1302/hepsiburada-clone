import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Profile/styles';

const PremiumBanner = () => (
  <Pressable style={styles.premiumBanner}>
    <View style={styles.premiumLeft}>
      <View style={styles.premiumIcon}>
        <MaterialCommunityIcons
          name="package-variant-closed"
          size={16}
          color={colors.white}
        />
      </View>
      <Text style={styles.premiumLeftText} numberOfLines={1}>
        Her siparişte kargo bedava
      </Text>
    </View>
    <View style={styles.premiumRight}>
      <Text style={styles.premiumRightText}>
        1 TL'ye <Text style={styles.premiumHighlight}>PREMIUM</Text>'a geç
      </Text>
      <Feather name="chevron-right" size={16} color={colors.premiumPink} />
    </View>
  </Pressable>
);

export default PremiumBanner;
