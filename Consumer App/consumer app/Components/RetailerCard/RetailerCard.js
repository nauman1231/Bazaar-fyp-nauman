import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-ionicons'
import RetailerIcon from '../../assets/Icons/store.svg';
import LinearGradient from 'react-native-linear-gradient';
 
export default class ReatilerCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentWillMount() {

    }

    render() {
        return <LinearGradient  style={styles.container}    colors={['#3F51B5', '#3949AB']}>
            <View style={styles.retailerInfo}>
                <Text  onPress={()=>{this.props.stackNavigation.navigate('Store' ,{id:this.props.item._id})}} style={styles.retailerName}>{this.props.item.name}</Text>
                <Text  onPress={()=>{this.props.stackNavigation.navigate('Store' ,{id:this.props.item._id})}} style={styles.retailerLocation}>{this.props.item.address}</Text>
            </View>
            <View onPress={()=>{this.props.stackNavigation.navigate('Store' ,{id:this.props.item._id})}} style={styles.retailerImageContainer}>
                <Image style={styles.retailerImage} source={require('../../assets/Images/arrow.png')}/>
            </View>


        </LinearGradient >

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: '#3F51B5',
        width: '100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:'center',
        marginVertical:6,
        borderRadius:16
    },
    retailerName:{
        fontSize:24,
        color:'white'
    },
    retailerLocation:{
        fontSize:16,
        marginTop:6,
        color:'#BDBDBD'
    }

})