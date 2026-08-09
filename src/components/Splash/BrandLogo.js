import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../screens/Splash/styles';

const BrandLogo = () => (
  <View style={styles.brand}>
    <Text style={styles.brandName}>hepsiburada</Text>
    <Text style={styles.premium}>PREMIUM</Text>
  </View>
);

export default BrandLogo;
