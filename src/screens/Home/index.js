import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import {
  SearchHeader,
  BannerCarousel,
  CategoryList,
  RecentProducts,
  PremiumSection,
} from '../../components/Home';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <SearchHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <BannerCarousel />
        <CategoryList />
        <RecentProducts />
        <PremiumSection />
      </ScrollView>
    </View>
  );
};

export default Home;
