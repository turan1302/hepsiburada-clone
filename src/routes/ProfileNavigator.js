import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;