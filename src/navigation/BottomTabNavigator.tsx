import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text } from 'react-native';

import TabOneScreen from '../screens/TabOneScreen/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      
      tabBarOptions={
        { 
          activeTintColor: "white", 
          activeBackgroundColor: "#FEC044",
          style: {
            backgroundColor: '#F4EEEE',
            borderTopWidth: 0
          }
        }
      }
      >
      <BottomTab.Screen
        name="Inicio"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contato"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-contacts" color={color} />,
        }}
      />
    </BottomTab.Navigator> 
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Inicio"
        component={TabOneScreen}
        options={
          {
            headerTintColor: '#FEC044',
            headerStyle: {
              backgroundColor: "#F4EEEE",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            }, 
            headerTitle: () => (<><View></View></>),
          }
        }
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Contato"
        component={TabTwoScreen}
        options={
          {
            headerTintColor: '#FEC044',
            headerStyle: {
              backgroundColor: "#F4EEEE",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            }, 
            headerTitle: () => (<><View></View></>),
          }
        }
      />
    </TabTwoStack.Navigator>
  );
}
