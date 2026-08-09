import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles, { PRODUCT_CARD_WIDTH } from '../../screens/Home/styles';
import ProductCard from './ProductCard';
import { RECENT_PRODUCTS } from './data';

const RecentProducts = () => (
  <View style={styles.section}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>Son gezdiğin ürünler</Text>
    </View>
    <FlatList
      data={RECENT_PRODUCTS}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.productList}
      renderItem={({ item }) => <ProductCard item={item} />}
      getItemLayout={(_, index) => ({
        length: PRODUCT_CARD_WIDTH + 10,
        offset: (PRODUCT_CARD_WIDTH + 10) * index,
        index,
      })}
    />
  </View>
);

export default RecentProducts;
