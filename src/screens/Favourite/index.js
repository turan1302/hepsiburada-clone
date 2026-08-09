import React, { useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import {
  FavouriteHeader,
  SearchFilters,
  FavouriteCard,
  FAVOURITES,
} from '../../components/Favourite';
import styles from './styles';

const Favourite = () => {
  const [activeTab, setActiveTab] = useState('liked');

  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <FavouriteHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <FlatList
        data={FAVOURITES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={<SearchFilters />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <FavouriteCard item={item} />}
      />
    </View>
  );
};

export default Favourite;
