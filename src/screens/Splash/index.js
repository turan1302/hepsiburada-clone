import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as NavigationService from '../../common/NavigationService';
import { BrandLogo } from '../../components/Splash';
import styles, { colors } from './styles';

const Splash = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigationService.reset();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient
      colors={colors.gradient}
      locations={[0, 0.35, 0.65, 1]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <BrandLogo />
    </LinearGradient>
  );
};

export default Splash;
