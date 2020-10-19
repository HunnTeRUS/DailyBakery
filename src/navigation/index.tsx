import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, StatusBar, View, Image, Animated, Easing } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import MapScreen from '../screens/MapScreen/MapScreen'
import BeNotified from '../screens/BeNotified/BeNotified'
import Login from '../screens/LoginScreen/Login'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'
import ChangePassword from '../screens/ForgotPassword/ChangePassword/ChangePassword'
import PersonalData from '../screens/BakeryRegister/PersonalData/PersonalData'
import AccesData from '../screens/BakeryRegister/AccessData/AcessData'
import ConfirmationScreen from "../screens/BakeryRegister/ConfirmationScreen/Confirmation"
import Profile from '../screens/ProfileScreen/Profile'
import ChangeProfilePassword from '../screens/ChangeProfilePasswordScreen/ChangeProfilePassword'
import HelpMe from '../screens/HelpMeScreen/HelpMe'
import ChangeContactInfo from '../screens/ChangeContactInfoScreen/ChangeContactInfo'
import Walkthrough from '../screens/Walkthrough/Walkthrough'
import WalkthroughTutorial from '../screens/WalkthroughTutorial/WalkthroughTutorial'

export default function Navigation() {
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
        header:() => (<></>),
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
            headerTitle: () => (<View style={{alignItems: "center", justifyContent: "center"}}><Image resizeMode="contain"  style={{width: 170, alignSelf: "flex-end"}} source={require("../../assets/images/headerImageDailyBakery.png")}/></View>),
          }
        } component={BeNotified} />
      <Stack.Screen options={{
        header: () =>(<></>), 
        headerTitle: () => (<></>),
      }}  name="BottomTabNavigator" component={BottomTabNavigator} />
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
      }}  name="ForgotPassword" component={ForgotPassword} />
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
      }}  name="ChangePasswordForgot" component={ChangePassword} />
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
      }}  name="PersonalData" component={PersonalData} />
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
      }}  name="AccesData" component={AccesData} />
       <Stack.Screen options={{
        headerShown: true,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: "#FEC044",
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        }, 
        headerTitle: () => (<></>),
      }}  name="Profile" component={Profile} />
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
      }}  name="ConfirmationScreen" component={ConfirmationScreen} />
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
      }}  name="ChangeProfilePasswordScreen" component={ChangeProfilePassword} />
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
      }}  name="HelpMe" component={HelpMe} />
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
      }}  name="ChangeContactInfo" component={ChangeContactInfo} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen options={{
        header: () => (<></>),
      }}  name="Walkthrough" component={Walkthrough} />
      <Stack.Screen options={{
        header: () => (<></>),
      }}  name="WalkthroughTutorial" component={WalkthroughTutorial} />
    </Stack.Navigator>
  );
}
