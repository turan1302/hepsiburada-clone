import { StyleSheet } from 'react-native';

export const colors = {
  brandOrange: '#FF6000',
  background: '#FFFFFF',
  pageBg: '#F7F7F7',
  white: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#666666',
  textMuted: '#8A8A8A',
  border: '#E8E8E8',
  divider: '#EEEEEE',
  purple: '#6C2DB9',
  purpleDark: '#5A1FA0',
  star: '#FF6000',
};

export const PRODUCT_CARD_WIDTH = 160;

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.divider,
    paddingBottom: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  scrollContent: {
    paddingBottom: 28,
  },
  emptyWrap: {
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 36,
    paddingBottom: 28,
  },
  emptyIconWrap: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#FFF3EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
    textAlign: 'center',
  },
  section: {
    marginTop: 8,
  },
  tabRow: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  tabLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    alignSelf: 'flex-start',
    paddingBottom: 8,
  },
  tabUnderline: {
    height: 3,
    backgroundColor: colors.brandOrange,
    borderRadius: 2,
    width: 118,
  },
  productList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  card: {
    width: PRODUCT_CARD_WIDTH,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 8,
    marginRight: 10,
  },
  imageWrap: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    backgroundColor: '#F0F0F0',
    marginBottom: 8,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productTitle: {
    fontSize: 12,
    color: colors.text,
    lineHeight: 16,
    minHeight: 32,
    marginBottom: 6,
  },
  brandBold: {
    fontWeight: '800',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingScore: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
    marginLeft: 3,
  },
  ratingCount: {
    fontSize: 12,
    color: colors.textMuted,
    marginLeft: 3,
  },
  installmentBadge: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: colors.purple,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  installmentText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '600',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  installmentPrice: {
    backgroundColor: colors.purpleDark,
    color: colors.white,
    fontSize: 10,
    fontWeight: '700',
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.text,
    flex: 1,
  },
  cartBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recentHeader: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
  },
  recentTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
});
