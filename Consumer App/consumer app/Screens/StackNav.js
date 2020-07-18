import React, { } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./HomeScreen";
import ProductDetail from './ProductDetail';
import Cart from './Cart';
import {
    View,
    ScrollView,
    Text,
    Alert,
    AsyncStorage,
    StyleSheet} from 'react-native';
import Login from './login';
import Logout from './logout';
import Camera from './camera';
const routeOption = ({ route, navigation }) => {

    return {
        headerStyle: {
            backgroundColor: '#FDFDFF',
            elevation: 0,
            display:'flex'
        },
        headerTitleAlign: 'center',
        headerRight: (props) => {
           
            return (
                <View style={{flexDirection:"row"}}>
                <Icon style={{marginRight:20}} name={'cart'} size={26} color={'#000000'} navigation={props} onPress={() => {navigation.push('Cart') }} />
                <Icon name={'log-out'} size={26} color={'#000000'} visible={true} onPress={() => {
                    AsyncStorage.clear().then(res=>{
                        navigation.navigate('Login')
                    })
                   
                   
                
                }} 
                    
                    />

                    
               </View>
            )
        },
       
        headerRightContainerStyle: {
            paddingRight: 40,
           
            width:200
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
        headerRight: (props) => {
            return <Icon name={'cart'} size={26} color={'#000000'} onPress={() => { navigation.push('Cart') }} />
        },
       
        headerRightContainerStyle: {
            paddingRight: 40
        },
        title: route.params.name,
    }
}




export function StackNav() {

    const Tab = createMaterialBottomTabNavigator();
    const Stack = createStackNavigator();


    const InnerNavigator = () => {
        return (<Stack.Navigator>
            <Stack.Screen name="Baazar" component={HomeScreen} options={routeOption} />
            <Stack.Screen name="ProductDetail"  component={ProductDetail} options={routeOptionProdDetail} />
            <Stack.Screen name="Cart" component={Cart} options={routeOption} />
            <Stack.Screen name="Camera" component={Camera}  />
          
            <Stack.Screen name="Logout" component={Logout} options={routeOption} />
        </Stack.Navigator >
        )
    }




    return (
        <InnerNavigator />
        
    );
}


