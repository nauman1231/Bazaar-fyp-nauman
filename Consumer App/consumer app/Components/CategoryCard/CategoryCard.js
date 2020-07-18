import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-ionicons'


export default class CategoryCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {




        return <View style={styles.container}>

            <Icon name={'cart'} size={48} color={'#4CAF50'} onPress={() => { navigation.push('Cart') }} />
            <Text style={styles.categoryName}>Vegetables</Text>
            <Text style={styles.categoryItems}>189 Items</Text>


            
        </View>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        padding:20,
        backgroundColor:'white',
        width:'100%',
        alignItems:'center'
    },
    categoryName:{
        marginTop:10,
        fontSize:22,
        color: '#66BB6A'
    },
    categoryItems:{
        marginTop:10,
        fontSize:16,
        color:'#BDBDBD'
    }

})