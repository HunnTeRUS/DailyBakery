import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import TabOneScreen from '../screens/TabOneScreen/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../../types';
import { useRoute } from '@react-navigation/native';
import BakeryInterface from '../Interfaces/BakeryInterfaceDAO';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const route = useRoute();
  const routeParams: BakeryInterface = route.params as BakeryInterface
  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={
        {
          activeTintColor: "#FEC044",
          activeBackgroundColor: "white",
          style: {
            backgroundColor: 'white',
            borderTopWidth: 0
          }
        }
      }
    >
      <BottomTab.Screen
        name="Inicio"
        component={TabOneNavigator}
        initialParams={routeParams}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Contato"
        initialParams={routeParams}
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
  const [isFavorite, setFavorite] = React.useState(false);
  const route = useRoute();
  const routeParams: BakeryInterface = route.params as BakeryInterface

  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Inicio"
        component={TabOneScreen}
        initialParams={routeParams}
        options={
          {
            headerShown: true,
            headerTintColor: '#FEC044',
            headerStyle: {
              backgroundColor: "#ff6678",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitle: () => (<></>),
          }
        }
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  const route = useRoute();
  const routeParams: BakeryInterface = route.params as BakeryInterface
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Contato"
        component={TabTwoScreen}
        initialParams={routeParams}
        options={
          {
            headerShown: true,
            headerTintColor: '#FEC044',
            headerStyle: {
              backgroundColor: "#ff6678",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTitle: () => (<></>),
          }
        }
      />
    </TabTwoStack.Navigator>
  );
}