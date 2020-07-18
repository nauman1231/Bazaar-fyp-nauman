import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    View,
    _ScrollView,
    
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';
import { Input } from 'react-native-elements';
import styled from 'styled-components';
import Icon from 'react-native-ionicons'
import {post,put} from 'axios';
import { AsyncStorage } from 'react-native';
import Dialog, {  DialogFooter, DialogButton, DialogContent} from 'react-native-popup-dialog';
import {NavigationActions,StackActions} from 'react-navigation'
export default class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
  
    }


    componentWillMount() {
        AsyncStorage.getItem('UserID').then((token) => {
            var mainPage

            if(token!=null){
                 mainPage='Main'
                 this.props.navigation.navigate('Main')
            }
            else{
                mainPage='Login'
                this.props.navigation.navigate('Login')
                
            }
       
          });

    }


    render() {
      

        


        return   <View style={styles.dialog}>

        <Dialog
    visible={this.state.visible}
    width={300}

    footer={
    <DialogFooter>
        <DialogButton
        text="CANCEL"
        onPress={() => {this.setState({
            visible: false
        })}}
        />
        <DialogButton
        text="OK"
        onPress={() => {}}
        />
    </DialogFooter>
    }
>
    <DialogContent>
    <Text style={styles.dialog}>Are you sure, you want to delete this item from the cart</Text>
    </DialogContent>
</Dialog>


        </View>
            

    }

}

// const Logincontainer=styled.View`
// width:300px;
// background-color:#FDFDFF;
// border:solid 0 #707070;
// padding-left:2%;
// padding-right:2%;
// height:384.5px;
// padding-bottom:5px;
// margin-top:50%;
// border-radius:20px;
// margin-left:4%;
// padding:10px;
// margin-bottom:20px;
// align-self:center;


// `



const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
      
        
    },
    dialog:{
        paddingTop:10
      },
    btnContainer:{
        marginTop:70,
        flex:1,
    },
    addToCart:{
        backgroundColor:"#3F51B5",
        height:50,
    },
    contain: {
        width:300,
        backgroundColor:'#FDFDFF',
        
        paddingLeft:30,
        paddingRight:30,
        height:400,
        paddingBottom:5,
        marginTop:'30%',
        borderRadius:20,
        marginLeft:'4%',
        padding:20,
        marginBottom:20,
        elevation:5,
        alignContent:'center'
        

         },
         logo:{
            color:'#343847',
            fontSize:34,
           fontFamily:'Poppins',
           fontWeight:"bold",
            marginTop:'20%',
            textAlign:"center"
         },
         smallText:{
             textAlign:"center",
             marginTop:20

         },
    title:{
        fontSize:36,
        marginTop:20,
        marginBottom:20
    },
    input:{
        
        
        borderBottomColor:'#BDBDBD',
        
        
        height:30,
        textAlign:"center",
    },
    icon:{
        paddingRight:20,
        
    }
    
})