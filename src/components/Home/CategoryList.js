import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Home/styles';
import { CATEGORIES } from './data';

const CategoryIcon = ({ item }) => {
  const color = item.first ? colors.brandOrange : colors.text;
  if (item.family === 'material') {
    return <MaterialCommunityIcons name={item.icon} size={28} color={color} />;
  }
  return <Feather name={item.icon} size={26} color={color} />;
};

const CategoryList = () => (
  <View style={styles.categoriesWrap}>
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable style={styles.categoryItem}>
          <View
            style={[
              styles.categoryIconBox,
              item.first && styles.categoryIconBoxFirst,
            ]}
          >
            <CategoryIcon item={item} />
          </View>
          <Text style={styles.categoryLabel}>{item.label}</Text>
        </Pressable>
      )}
    />
  </View>
);

export default CategoryList;
