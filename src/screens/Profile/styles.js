import { StyleSheet } from 'react-native';

export const colors = {
  brandOrange: '#FF6000',
  white: '#FFFFFF',
  text: '#1A1A1A',
  textSecondary: '#666666',
  textMuted: '#8A8A8A',
  border: '#EEEEEE',
  avatarBg: '#F0F0F0',
  avatarText: '#8A8A8A',
  premiumBg: '#FFF0F6',
  premiumBorder: '#F7C2DD',
  premiumPink: '#E6007E',
  icon: '#333333',
};

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.brandOrange,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 28,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.avatarBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.avatarText,
  },
  greeting: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 2,
  },
  userName: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '800',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  premiumBanner: {
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: colors.premiumBg,
    borderWidth: 1,
    borderColor: colors.premiumBorder,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumIcon: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: colors.premiumPink,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  premiumLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  premiumLeftText: {
    flex: 1,
    fontSize: 12,
    color: colors.text,
    fontWeight: '600',
  },
  premiumRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumRightText: {
    fontSize: 12,
    color: colors.premiumPink,
    fontWeight: '600',
  },
  premiumHighlight: {
    fontWeight: '800',
    color: colors.premiumPink,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  menuIcon: {
    width: 28,
    marginRight: 12,
    alignItems: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
    fontWeight: '500',
  },
});
