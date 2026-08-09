import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../../screens/Cart/styles';
import ProductCard from './ProductCard';
import { RECENT_PRODUCTS } from './data';

const RecentSection = () => (
  <View style={styles.section}>
    <View style={styles.recentHeader}>
      <Text style={styles.recentTitle}>Son gezdiğin ürünler</Text>
    </View>

    <FlatList
      data={RECENT_PRODUCTS}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productList}
      renderItem={({ item }) => <ProductCard item={item} />}
    />
  </View>
);

export default RecentSection;
