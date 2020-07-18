import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Categories';

import Icon from 'react-native-ionicons'
import Cart from './Cart';

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


export function categoryStack() {

    const Stack = createStackNavigator();


    return <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={Categories} options={routeOption} />
        <Stack.Screen name="Cart" component={Cart} options={routeOption} />

    </Stack.Navigator>




}