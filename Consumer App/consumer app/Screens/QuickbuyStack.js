import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./HomeScreen";
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import QuickBuy from './quickBuyLanding';
import Inside from './QuickBuy'


const routeOption = ({ route, navigation }) => {

    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
        },
        headerTitleAlign: 'center',
        headerRight: (props) => {
            return <Icon name={'cart'} size={26} color={'#000000'} onPress={() => {navigation.push('Cart') }} />
        },
        headerRightContainerStyle: {
            paddingRight: 40
        }
    }
}






export function QuickbuyStack() {

    const Tab = createMaterialBottomTabNavigator();
    const Stack = createStackNavigator();


    const InnerNavigator = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="QuickBuy" component={QuickBuy} options={routeOption} />
            <Stack.Screen name="Inside" component={Inside} options={routeOption} />
            
            <Stack.Screen name="Cart" component={Cart} options={routeOption} />
        </Stack.Navigator >
        )
    }




    return (
        <InnerNavigator />
    );
}


