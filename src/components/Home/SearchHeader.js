import React from 'react';
import { Pressable, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import styles, { colors } from '../../screens/Home/styles';

const SearchHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={[colors.brandOrange, '#FF8A3D', '#FFF5EE']}
      locations={[0, 0.55, 1]}
      style={[styles.header, { paddingTop: Math.max(insets.top, 10) }]}
    >
      <Pressable style={styles.searchBar}>
        <Feather
          name="search"
          size={18}
          color={colors.searchPlaceholder}
          style={styles.searchIcon}
        />
        <Text style={styles.searchPlaceholder} numberOfLines={1}>
          Ürün, kategori veya marka ara
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

export default SearchHeader;
