import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles, { PRODUCT_CARD_WIDTH } from '../../screens/Cart/styles';
import ProductCard from './ProductCard';
import { LIKED_PRODUCTS } from './data';

const LikedSection = () => (
  <View style={styles.section}>
    <View style={styles.tabRow}>
      <Text style={styles.tabLabel}>Beğendiklerim</Text>
      <View style={styles.tabUnderline} />
    </View>

    <FlatList
      data={LIKED_PRODUCTS}
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

export default LikedSection;
