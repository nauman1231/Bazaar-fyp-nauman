import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Retailer from './Retailer';

import Icon from 'react-native-ionicons'
import Cart from './Cart';
import Store from './storesProduct'

const routeOption = ({ route, navigation }) => {

    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
        },
        headerTitleAlign: 'center',
        headerRight: (props) => {
            return <Icon name={'cart'} size={26} color={'#000000'} onPress={() => { navigation.push('Cart') }} />
        },
        headerRightContainerStyle: {
            paddingRight: 40
        }
    }
}


export function retailerStack() {

    const Stack = createStackNavigator();


    return <Stack.Navigator initialRouteName="Retailer">
        <Stack.Screen name="Retailer" component={Retailer} options={routeOption} />
        <Stack.Screen name="Cart" component={Cart} options={routeOption} />
        <Stack.Screen name="Store" component={Store} options={routeOption} />
        
    </Stack.Navigator>




}