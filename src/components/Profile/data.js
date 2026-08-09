export const USER_NAME = 'test kullanıcı';

export const MENU_ITEMS = [
  { id: 'orders', label: 'Siparişlerim', icon: 'package', family: 'feather' },
  { id: 'coupons', label: 'Kuponlarım', icon: 'gift', family: 'feather' },
  {
    id: 'worldcard',
    label: 'Premium Worldcard',
    icon: 'credit-card',
    family: 'feather',
  },
  {
    id: 'hepsipay',
    label: 'Hepsipay',
    icon: 'wallet-outline',
    family: 'material',
  },
  { id: 'favourites', label: 'Favorilerim', icon: 'heart', family: 'feather' },
  {
    id: 'requests',
    label: 'Soru ve Taleplerim',
    icon: 'hand-back-right-outline',
    family: 'material',
  },
  {
    id: 'reviews',
    label: 'Değerlendirmelerim',
    icon: 'star',
    family: 'feather',
  },
  { id: 'settings', label: 'Ayarlarım', icon: 'sliders', family: 'feather' },
  {
    id: 'language',
    label: 'Dil Seçimi (Beta)',
    icon: 'flag-variant-outline',
    family: 'material',
  },
  { id: 'addresses', label: 'Adreslerim', icon: 'map-pin', family: 'feather' },
];

export const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
