import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import {
  CartHeader,
  EmptyCart,
  LikedSection,
  RecentSection,
} from '../../components/Cart';
import styles from './styles';

const Cart = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <CartHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <EmptyCart />
        <LikedSection />
        <RecentSection />
      </ScrollView>
    </View>
  );
};

export default Cart;
