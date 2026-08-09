import React, { useRef, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles, { BANNER_WIDTH } from '../../screens/Home/styles';
import { BANNERS } from './data';

const BannerCarousel = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerRef = useRef(null);

  const onBannerScroll = (event) => {
    const x = event.nativeEvent.contentOffset.x;
    const index = Math.round(x / (BANNER_WIDTH + 10));
    if (index !== bannerIndex) {
      setBannerIndex(index);
    }
  };

  return (
    <View style={styles.bannerWrap}>
      <FlatList
        ref={bannerRef}
        data={BANNERS}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={BANNER_WIDTH + 10}
        showsHorizontalScrollIndicator={false}
        onScroll={onBannerScroll}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => (
          <View style={[styles.banner, { backgroundColor: item.color }]}>
            <View style={styles.bannerAccent} />
            <View style={styles.bannerAccentSmall} />
            <View style={styles.bannerInner}>
              <View>
                <Text style={styles.bannerTitle}>{item.title}</Text>
                <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
              </View>
              <View style={styles.bannerMeta}>
                <Text style={styles.bannerPage}>
                  {index + 1}/{BANNERS.length}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BannerCarousel;
