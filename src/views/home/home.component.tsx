import React, { useEffect } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShortsTab from "./tabs/ShortsTab";
import HomeTab from "./tabs/home.tab";
import Library from "./tabs/library.tab";
import { HomeScreenNavigationProp, HomeScreenRouteProp } from "../../models/navigation/type";
import { StyleSheet, View } from "react-native";

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const Tab = createBottomTabNavigator();

export default function Home({ navigation }: Props) {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: '#ff4c4c' }}>
      <Tab.Screen name="Home" component={HomeTab}
        options={{
          tabBarLabel: 'Inicío',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="explore" component={ShortsTab}
        options={{
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaterialCommunityIcons name={focused ? 'compass' : 'compass-outline'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Add"
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={styles.button_plus}>
              <MaterialCommunityIcons name="plus" color="#fff" size={45} />
            </View>
          )
        }}
        component={Library} />
      <Tab.Screen name="subscriptions" component={Library}
        options={{
          tabBarLabel: 'Inscrições',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaterialCommunityIcons name={focused ? 'account-box-multiple' : 'account-box-multiple-outline'} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen name="biblioteca" component={Library}
        options={{
          tabBarLabel: 'Biblioteca',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaterialCommunityIcons name={focused ? 'play-box-multiple' : 'play-box-multiple-outline'} size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  button_plus: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 68,
    width: 68,
    backgroundColor: "#ff4c4c",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#fff',
  },
});