import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Profile/styles';
import { MENU_ITEMS } from './data';

const MenuIcon = ({ item }) => {
  if (item.family === 'material') {
    return (
      <MaterialCommunityIcons name={item.icon} size={22} color={colors.icon} />
    );
  }
  return <Feather name={item.icon} size={20} color={colors.icon} />;
};

const MenuList = () => (
  <>
    {MENU_ITEMS.map((item) => (
      <Pressable key={item.id} style={styles.menuItem}>
        <View style={styles.menuIcon}>
          <MenuIcon item={item} />
        </View>
        <Text style={styles.menuLabel}>{item.label}</Text>
        <Feather name="chevron-right" size={18} color={colors.textMuted} />
      </Pressable>
    ))}
  </>
);

export default MenuList;
