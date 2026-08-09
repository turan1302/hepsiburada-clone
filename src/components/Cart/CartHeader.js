import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from '../../screens/Cart/styles';

const CartHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: Math.max(insets.top, 12) }]}>
      <Text style={styles.headerTitle}>Sepetim</Text>
    </View>
  );
};

export default CartHeader;
