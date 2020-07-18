import React, { Component, useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent'
import { DATA } from '../Constants/data'
import { Header, Overlay } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import ArrowIcon from "../assets/Icons/arrow.svg";
import { SvgUri } from 'react-native-svg';
import { inject, observer } from "mobx-react";
import store from "../store/TestStore";
import personIcon from '../assets/Icons/person.svg';
import DetailScreen from './DetailScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FindOrderScreen from './FindOrderScreen';
import OrderScreen from './OrderScreen';
import RecievingScreen from './RecievingScreen';
import axios from 'axios';
import sample from '../Constants/FakeApi.json';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SummaryScreen from '../Screens/SummaryScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Icon from 'react-native-ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Stack = createStackNavigator();

const routeOption = {
    headerStyle: {
        backgroundColor: '#FDFDFF',
        elevation: 0,
    },

    headerTitleAlign: 'center'
}




export function StackNav({ navigation }) {

    const Tab = createMaterialBottomTabNavigator();
    const Stack = createStackNavigator();


    const InnerNavigator = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="FindOrder" component={FindOrderScreen} options={{ headerShown: false }}
                initialParams={{ orders: sample }}
            />
            <Stack.Screen name="OrderInfo" component={DetailScreen} options={routeOption} />
            <Stack.Screen name="Order" component={OrderScreen} options={routeOption} />
            <Stack.Screen name="Order Detail" component={RecievingScreen} options={routeOption} />
        </Stack.Navigator >
        )
    }



    // GET Driver Verification
    // const hasLogged = navigation.routes.parmas.loginStatus;
    // const [isLoggedIn, SetLoggedIn] = useState(false);
    // SetLoggedIn(hasLogged)
    // GET Driver Verification


    //   STATUS MESSAGE COMPONENT
    // const StatusMessage = () => {
    //     <View style={{ flex: 1 }}>
    //         <Text style={{}}>Your'e Offline</Text>
    //         <Text style={{}}>Go to Profile change status</Text>
    //     </View>
    // }
    //   STATUS MESSAGE COMPONENT

    const TabNavigatorContainer = () => {
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
                <Tab.Screen name="Home" component={InnerNavigator} />
                <Tab.Screen name="Summary" component={SummaryScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />


            </Tab.Navigator>
        )
    }



    return (
        <InnerNavigator />
    );
}


