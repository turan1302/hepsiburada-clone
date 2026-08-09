import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles, { colors } from '../../screens/Favourite/styles';
import { FILTERS } from './data';

const SearchFilters = () => (
  <>
    <View style={styles.toolsRow}>
      <Pressable style={styles.searchBox}>
        <Feather
          name="search"
          size={16}
          color={colors.textMuted}
          style={styles.searchIcon}
        />
        <Text style={styles.searchPlaceholder}>Ara</Text>
      </Pressable>
      <Pressable style={styles.sortBtn}>
        <MaterialCommunityIcons
          name="swap-vertical"
          size={20}
          color={colors.text}
        />
      </Pressable>
    </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filtersWrap}
    >
      {FILTERS.map((filter) => (
        <Pressable key={filter.id} style={styles.filterChip}>
          {filter.icon ? (
            <Feather
              name={filter.icon}
              size={14}
              color={colors.text}
              style={styles.filterIcon}
            />
          ) : null}
          <Text style={styles.filterChipText}>{filter.label}</Text>
        </Pressable>
      ))}
    </ScrollView>
  </>
);

export default SearchFilters;
