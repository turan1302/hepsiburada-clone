import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styles, { colors } from '../../screens/Home/styles';

const ProductCard = ({ item, showCampaign }) => (
  <Pressable style={styles.productCard}>
    <View style={styles.productImageWrap}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      {item.avantajli ? (
        <View style={styles.avantajBadge}>
          <Text style={styles.avantajBadgeText}>AVANTAJLI</Text>
        </View>
      ) : null}
      <Pressable style={styles.heartBtn} hitSlop={8}>
        <Feather name="heart" size={14} color={colors.textMuted} />
      </Pressable>
      {showCampaign && item.campaign ? (
        <View style={styles.campaignBadge}>
          <Text style={styles.campaignBadgeText}>BÜYÜK AĞUSTOS İNDİRİMLERİ</Text>
        </View>
      ) : null}
    </View>
    <Text style={styles.productTitle} numberOfLines={2}>
      {item.title}
    </Text>
    {item.sepeteOzel ? <Text style={styles.sepeteOzel}>Sepete özel</Text> : null}
    <Text style={styles.productPrice}>{item.price}</Text>
    {item.premiumPrice ? (
      <View style={styles.premiumPriceRow}>
        <Text style={styles.premiumPriceLabel}>
          Premium ile {item.premiumDiscount}
        </Text>
        <Text style={styles.premiumPrice}>{item.premiumPrice}</Text>
      </View>
    ) : null}
  </Pressable>
);

export default ProductCard;
