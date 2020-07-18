import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from "./login";
import ProductDetail from './ProductDetail';
import Signup from './signup';
import { StackNav } from './StackNav';


const routeOption = ({ route, navigation }) => {

    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
        },
        headerTitleAlign: 'center',
       
        headerRightContainerStyle: {
            paddingRight: 40
        }
    }
}


const routeOptionProdDetail = ({ route, navigation }) => {
    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
        },
        headerTitleAlign: 'center',
       
        headerRightContainerStyle: {
            paddingRight: 40
        },
   
    }
}




export function LoginStack() {

    const Tab = createMaterialBottomTabNavigator();
    const Stack = createStackNavigator();


    const InnerNavigator = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={routeOption} />
            <Stack.Screen name="Main" component={StackNav} options={routeOption} />
            
            
        </Stack.Navigator >
        )
    }




    return (
        <InnerNavigator />
    );
}


