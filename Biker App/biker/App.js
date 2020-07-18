import React, { useRef } from 'react';
// import { Header } from 'react-native-elements';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  Platform,
  FlatList
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-ionicons'
import SummaryScreen from './Screens/SummaryScreen';
import { StackNav } from './Screens/StackNav';
import ProfileScreen from './Screens/ProfileScreen';
import LoginScreen from './Screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './Screens/SignupScreen';
import PersonalInfoScreen from './Screens/PersonalInfoScreen';
import PhoneVerificationScreen from './Screens/PhoneVerificationScreen';
import RecievingScreen from './Screens/RecievingScreen';
import sample from './Constants/FakeApi.json';
import DetailScreen from './Screens/DetailScreen';
import FindOrderScreen from './Screens/FindOrderScreen';
import NewComp from './Components/MapComponent/MapComponent'
import { StackActions, NavigationActions } from 'react-navigation';



export default function App() {


  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator();

  const MainNavigator = () => {
    return (

      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneVerify" component={PhoneVerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Recieving" component={RecievingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={DrawerNavigatorContainer} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={NewComp} options={{ headerShown: false }} />

      </Stack.Navigator>
    )
  }



  const DrawerNavigatorContainer = ({ navigation }) => {
   
   
   
    


    return (
      <Tab.Navigator
        barStyle={{ backgroundColor: '#ffffff', elevation: 10, }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Summary') {
              iconName = 'compass'
            }
            else if (route.name === 'Profile') {
              iconName = 'person'
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={26} color={color} />;
          },
        })}
        activeColor='#4D7CFE'
        inactiveColor='#BDBDBD'

        tabBarOptions={{

        }}

      >
        <Tab.Screen name="Home" component={StackNav} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />


      </Tab.Navigator>
    )
  }





  return (

    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>

  );
}


