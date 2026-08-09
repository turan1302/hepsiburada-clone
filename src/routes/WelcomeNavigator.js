import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Platform, Text, StyleSheet } from 'react-native';
import HomeNavigator from './HomeNavigator';
import FavouriteNavigator from './FavouriteNavigator';
import CartNavigator from './CartNavigator';
import ProfileNavigator from './ProfileNavigator';
import MessagesNavigator from './MessagesNavigator';

const Tab = createBottomTabNavigator();

const TAB_COLOR_ACTIVE = '#FF6000';
const TAB_COLOR_INACTIVE = '#7A7A7A';
const TAB_LABEL_ACTIVE = '#FF6000';
const TAB_BAR_BG = '#FFFFFF';

const TAB_CONFIG = {
    HomeNavigator: { label: 'Ana Sayfam', icon: 'home', iconFamily: 'feather' },
    FavouriteNavigator: { label: 'Favorilerim', icon: 'heart', iconFamily: 'feather' },
    CartNavigator: { label: 'Sepetim', icon: 'shopping-cart', iconFamily: 'feather' },
    ProfileNavigator: { label: 'Hesabım', icon: 'user', iconFamily: 'feather' },
    MessagesNavigator: { label: 'Mesajlarım', icon: 'message-circle', iconFamily: 'feather', badge: 87 },
};

const PlaceholderTab = ({ title }) => (
    <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>{title}</Text>
    </View>
);

const CreatePostTab = () => <PostNavigator />;
const NotificationsTab = () => <NotificationNavigator />;
const JobsTab = () => <JobsNavigator />;

const renderTabIcon = (tabConfig, color) => {
    if (tabConfig?.isSpecial) {
        return (
            <View
                style={{
                    width: 24,
                    height: 24,
                    borderWidth: 1.5,
                    borderColor: color,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Feather name="plus" size={16} color={color} />
            </View>
        );
    }

    const iconName = tabConfig?.icon ?? 'circle';
    const size = 22;

    if (tabConfig?.iconFamily === 'material') {
        return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
        );
    }

    return <Feather name={iconName} size={size} color={color} />;
};

const WelcomeNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNavigator"
            screenOptions={({ route }) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                const tabBarHidden = ['Menu', 'CreatePost'];
                const tabConfig = TAB_CONFIG[route.name];

                return {
                    headerShown: false,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarActiveTintColor: TAB_COLOR_ACTIVE,
                    tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
                    tabBarLabel: ({ focused }) => (
                        <Text
                            style={{
                                fontSize: 10,
                                fontWeight: focused ? '700' : '500',
                                color: focused ? TAB_LABEL_ACTIVE : TAB_COLOR_INACTIVE,
                                marginTop: 2,
                            }}
                            numberOfLines={1}
                        >
                            {tabConfig?.label}
                        </Text>
                    ),
                    tabBarIcon: ({ focused }) => {
                        const color = focused ? TAB_COLOR_ACTIVE : TAB_COLOR_INACTIVE;

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                {renderTabIcon(tabConfig, color)}
                                {tabConfig?.badge ? (
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: -4,
                                            right: -10,
                                            minWidth: 16,
                                            height: 16,
                                            borderRadius: 8,
                                            backgroundColor: '#E53935',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingHorizontal: 3,
                                        }}
                                    >
                                        <Text style={{ color: '#fff', fontSize: 9, fontWeight: '700' }}>
                                            {tabConfig.badge}
                                        </Text>
                                    </View>
                                ) : null}
                            </View>
                        );
                    },
                    tabBarStyle: tabBarHidden.includes(routeName)
                        ? { display: 'none' }
                        : {
                            backgroundColor: TAB_BAR_BG,
                            borderTopWidth: StyleSheet.hairlineWidth,
                            borderTopColor: '#E5E5E5',
                            height: Platform.OS === 'ios' ? 88 : 68,
                            paddingTop: 8,
                            paddingBottom: Platform.OS === 'ios' ? 26 : 10,
                            elevation: 8,
                            shadowColor: '#000',
                            shadowOpacity: 0.06,
                            shadowRadius: 4,
                            shadowOffset: { width: 0, height: -2 },
                        },
                    tabBarItemStyle: {
                        paddingVertical: 2,
                    },
                };
            }}
        >
            <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
            <Tab.Screen name="FavouriteNavigator" component={FavouriteNavigator} />
            <Tab.Screen name="CartNavigator" component={CartNavigator} />
            <Tab.Screen name="ProfileNavigator" component={ProfileNavigator} />
            <Tab.Screen name="MessagesNavigator" component={MessagesNavigator} />
        </Tab.Navigator>
    );
};

export default WelcomeNavigator;