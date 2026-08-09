import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Cart/styles';

const EmptyCart = () => (
  <View style={styles.emptyWrap}>
    <View style={styles.emptyIconWrap}>
      <MaterialCommunityIcons
        name="cart-outline"
        size={44}
        color={colors.brandOrange}
      />
    </View>
    <Text style={styles.emptyTitle}>Sepetin şu an boş</Text>
    <Text style={styles.emptySubtitle}>
      Sepetini Hepsiburada’nın fırsatlarla dolu dünyasından doldurmak için
      aşağıdaki ürünleri incelemeye başlayabilirsin.
    </Text>
  </View>
);

export default EmptyCart;
