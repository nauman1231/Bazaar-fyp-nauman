import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,AsyncStorage
} from 'react-native';
import { get, post, put } from 'axios';
import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Dialog, {  DialogFooter, DialogButton, DialogContent} from 'react-native-popup-dialog';
import axios from 'axios';
import {ip } from '../global'
export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            delete:false,
            isAddedToQuick:false
        }
        this.dialog=this.dialog.bind(this)
        this.deleteCartItem=this.deleteCartItem.bind(this)
    }


    componentWillMount() {
        console.log(this.props.item)
    }

    dialog(){
        this.setState({
            visible:true
        })
    }
    deleteCartItem(id){
        const config = {
          headers: {
             
              'Authorization': '***'
          }
      }
        axios.delete(ip+'quickbuy/deleteCartItem/'+id,config).then(res=>{
  
          console.log(res.data)
          this.setState({
              deleted:true,
              visible:false
          })
          this.props.navigation.navigate('Cart')
          })
      }


      addToQuickBuy(id) {
        AsyncStorage.getItem('UserID').then(value=>{
       
        this.setState({
            isAddedToQuick:true
          });

          const quickbuy={
            addedToCart:true,
            quantity:1,
            products:id,
            userID:value,
            schedule:this.props.schedule.toLowerCase()
          }

          const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(ip+`quickbuy/add`, quickbuy ,config)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          console.log(this.state.addedToQuick);
        })
    
    }


    render() {


        return <View style={styles.container}>

            <Image style={styles.prodImage} source={{uri:ip+`uploads/${this.props.item.fileName}`}}/>
            <Text  style={styles.prodName}>{this.props.item.name}</Text>
            <Text  style={styles.prodPrice}>RS. {this.props.item.Seller_price}</Text>
            {!this.state.isAddedToQuick &&
                <Icon name={'add-circle-outline'}  onPress={() => this.addToQuickBuy(this.props.item._id)} size={26} color={'#BDBDBD'} />
            } 
             {this.state.isAddedToQuick && 
               <Icon name={'md-checkmark-circle'}  size={26} color={'#BDBDBD'} />
             }

                
        </View>


    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',  
        marginVertical:16,
        padding:10,
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:16,
       
    },
    dialog:{
      paddingTop:10
    },

    prodImage:{
        width:50,
        height:50
    },
    prodPrice: {
        marginTop: 0,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4CAF50',
        padding:3,
       
    },
    prodName: {
        fontWeight: 'bold',
        fontSize: 18,
        padding:4
    },

})