import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, StatusBar, View, Image, Animated, Easing } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import MapScreen from '../screens/MapScreen/MapScreen'
import BeNotified from '../screens/BeNotified/BeNotified'
import Login from '../screens/LoginScreen/Login'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  //StatusBar.setBackgroundColor("#7D40E7", true);
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Root" component={Login} options={{
        headerShown: true,
        headerTintColor: '#FEC044',
        headerStyle: {
          backgroundColor: "#F4EEEE",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        }, 
        headerTitle: () => (<></>),
      }}  />
      <Stack.Screen name="MapScreen"  options={
          {
            headerShown: false
          }
        } component={MapScreen} />
      <Stack.Screen name="BeNotified" options={
          {
            headerTintColor: '#FEC044',
            headerStyle: {
              backgroundColor: "#F4EEEE",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            }, 
            headerTitle: () => (<><Image resizeMode="contain"  style={{width: 170, alignSelf: "flex-end"}} source={require("../assets/images/headerImageDailyBakery.png")}/></>),
          }
        } component={BeNotified} />
      <Stack.Screen options={{
        headerShown: true,
        headerTintColor: '#FEC044',
        headerStyle: {
          backgroundColor: "#F4EEEE",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        }, 
        headerTitle: () => (<></>),
      }}  name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
