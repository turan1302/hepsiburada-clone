import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Cart/styles';

const ProductCard = ({ item }) => (
  <Pressable style={styles.card}>
    <View style={styles.imageWrap}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
    </View>

    <Text style={styles.productTitle} numberOfLines={2}>
      <Text style={styles.brandBold}>{item.brand} </Text>
      {item.title}
    </Text>

    <View style={styles.ratingRow}>
      <MaterialCommunityIcons name="star" size={14} color={colors.star} />
      <Text style={styles.ratingScore}>{item.rating}</Text>
      <Text style={styles.ratingCount}>({item.reviewCount})</Text>
    </View>

    <View style={styles.installmentBadge}>
      <Text style={styles.installmentText}>{item.installmentLabel}</Text>
      <Text style={styles.installmentPrice}>{item.installmentPrice}</Text>
    </View>

    <View style={styles.priceRow}>
      <Text style={styles.price}>{item.price}</Text>
      <Pressable style={styles.cartBtn} hitSlop={8}>
        <MaterialCommunityIcons
          name="cart-plus"
          size={18}
          color={colors.text}
        />
      </Pressable>
    </View>
  </Pressable>
);

export default ProductCard;
