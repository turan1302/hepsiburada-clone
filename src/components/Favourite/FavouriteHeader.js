import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Favourite/styles';
import { TABS } from './data';

const FavouriteHeader = ({ activeTab, onTabChange }) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#FF7A1A', colors.brandOrange, '#FF5500']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.header, { paddingTop: Math.max(insets.top, 12) }]}
    >
      <MaterialCommunityIcons
        name="heart"
        size={120}
        color="#FFFFFF"
        style={styles.heartDecorLarge}
      />
      <MaterialCommunityIcons
        name="heart"
        size={48}
        color="#FFFFFF"
        style={styles.heartDecorSmall}
      />

      <Text style={styles.headerTitle}>Favorilerim</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsRow}
      >
        {TABS.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <Pressable
              key={tab.id}
              onPress={() => onTabChange?.(tab.id)}
              style={[styles.tabChip, active && styles.tabChipActive]}
            >
              <Text
                style={[styles.tabChipText, active && styles.tabChipTextActive]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </LinearGradient>
  );
};

export default FavouriteHeader;
