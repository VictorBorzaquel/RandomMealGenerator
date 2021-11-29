import React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { MealDetails } from '../screens/MealDetails';

type RootParamList = {
  Home: undefined;
  MealDetails: { category: string };
};

export type RootNavigationProps<Screen extends keyof RootParamList> = NativeStackNavigationProp<RootParamList, Screen>
export type RootRouteProps<Screen extends keyof RootParamList> = RouteProp<RootParamList, Screen>

const Stack = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Selecione uma categoria' }}
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
