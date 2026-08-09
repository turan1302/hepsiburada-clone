import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import styles from '../../screens/Home/styles';
import ProductCard from './ProductCard';
import { PREMIUM_PRODUCTS } from './data';

const PremiumSection = () => (
  <View style={styles.premiumSection}>
    <View style={styles.premiumHeader}>
      <Text style={styles.premiumHeaderTitle}>
        Premium'a özel %10 Hepsipara
      </Text>
      <Text style={styles.premiumHeaderAll}>Tümü ›</Text>
    </View>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.premiumBody}
    >
      <Pressable style={styles.premiumPromoCard}>
        <View style={styles.premiumPromoIcon}>
          <Text style={{ color: '#fff', fontWeight: '800', fontSize: 11 }}>
            PREMIUM
          </Text>
        </View>
        <Text style={styles.premiumPromoTitle}>Premium'a özel</Text>
        <Text style={styles.premiumPromoSubtitle}>%10 Hepsipara fırsatı</Text>
      </Pressable>
      {PREMIUM_PRODUCTS.map((item) => (
        <ProductCard key={item.id} item={item} showCampaign />
      ))}
    </ScrollView>
  </View>
);

export default PremiumSection;
