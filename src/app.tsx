import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Home from './views/home/home.component';
import { RootStackParamList } from './models/navigation/root-stack-param-list'
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";
import Watch from "./views/watch/watch.component";
import Search from "./views/search/search.component";
import { SearchResult } from "./views/search/search-result.component";
import { Image, SafeAreaView, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const logo =  require('./assets/images/logo.png');

function CustomHeader()  {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}}>
    <View
      style={{
        margin: 10,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Image resizeMode="contain" style={{width:150, height: 35}} source={logo} />

        <View style={{flexDirection: 'row', width: 150,  justifyContent: 'space-between'}}>
          <Feather name="cast" size={28} color="black" />
          <AntDesign name="bells" size={28} color="black" />
          <AntDesign name="search1" size={28} color="black" />
          <FontAwesome name="user-circle-o" size={28} color="black" />
        </View>
    </View>
  </SafeAreaView>
  );
};

const Stack = createStackNavigator<RootStackParamList>();

function AppRouting() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" 
      screenOptions={{
        header: () => <CustomHeader />,
        gestureEnabled: true,
        gestureResponseDistance: {
          horizontal: 500
        },
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
        <Stack.Screen name="Home" component={Home} options={{ title: 'My home' }} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouting;