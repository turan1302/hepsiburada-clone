import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourite from '../screens/Favourite';

const Stack = createNativeStackNavigator();

const FavouriteNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Favourite"
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                animation: 'slide_from_left',
            }}
        >
            <Stack.Screen name="Favourite" component={Favourite} />
        </Stack.Navigator>
    );
};

export default FavouriteNavigator;