import { StyleSheet } from 'react-native';

export const colors = {
  brandOrange: '#FF6000',
  premiumMagenta: '#C2185B',
  // sağ-üst → sol-alt: şeftali / pembe / mor / açık cyan
  gradient: ['#FFE8D6', '#F8C4D8', '#E8B8E0', '#D4E8F5'],
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brand: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandName: {
    color: colors.brandOrange,
    fontSize: 44,
    fontWeight: '700',
    letterSpacing: -0.8,
    includeFontPadding: false,
  },
  premium: {
    color: colors.premiumMagenta,
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: 7.5,
    marginTop: 2,
    includeFontPadding: false,
  },
});
