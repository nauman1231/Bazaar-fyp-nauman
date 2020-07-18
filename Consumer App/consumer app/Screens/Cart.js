import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    View,
    Alert
} from 'react-native';
import { Input } from 'react-native-elements';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';
import {get,post,put} from 'axios';
import axios from 'axios';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";
import Dialog, {  DialogFooter, DialogButton, DialogContent} from 'react-native-popup-dialog';
import { TabRouter } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
import {ip} from '../Components/global'
export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            emptyCart:false,
            SubTotal:0,
            inventoryUpdated:false,
            card:"",
            exp_date:0,
            exp_year:0,
            cvc:"",
            visible:false
        }
        
        this.pay=this.pay.bind(this)
    
        
    }

    close(){
        this.setState({
            visible:false,
            userID:null
        })
        this.props.navigation.navigate('Cart')
    }
 


    componentWillMount() {
 
      AsyncStorage.getItem('UserID').then((value) => {
        const config = {
          headers: {
              'content-type': 'multipart/form-data'
              
          }
        }
      get(ip+'shoppingCart/'+value,config).then(response=>{

        this.setState({
          data:response.data,
          
        },() => {
          var people = 0;
          var products={}
          const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization': '***'
            }
        }
        
          
          for (let i = 0; i < this.state.data.length; i++) {
              people+=parseInt(this.state.data[i].products.Seller_price*this.state.data[i].quantity,10);
              console.log(people)
          }

          this.setState({
            SubTotal:people,
            
           
          })
      });
      
      //  
      

      })
    })

 
        // this.getProducts().then((response)=>{
        
        //     this.setState({
        //       data:response.data,
              
        //     },() => {
        //       var people = 0;
        //       var products={}
        //       const config = {
        //         headers: {
        //             'Content-Type':'application/json',
        //             'Authorization': '***'
        //         }
        //     }
            
              
        //       for (let i = 0; i < this.state.data.length; i++) {
        //           people+=parseInt(this.state.data[i].products.Seller_price*this.state.data[i].quantity,10);
        //           console.log(people)
        //       }
    
        //       this.setState({
        //         SubTotal:people,
                
               
        //       })
        //   });
          
        //   //  
        //   });
    }

    pay(){
        console.log('auman')
        const config = {
            headers: {
                'Content-Type':'application/json',
                'Authorization': '***'
            }
        }
        const token={
            number:this.state.card,
            cvc:this.state.cvc,
            date:this.state.exp_date,
            year:this.state.exp_year
        }
        console.log(token)
       
        post(ip+`payment/v1/tokens`, token ,config)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const product=this.state.SubTotal
          const token=res.data
          post(ip+`payment/checkout`,  {token,product} ,config)
            .then(res => {
                const orderID=res.data.orderID
      
       
                const { status } = res.data;
        
        if (status === "success") {
         
            const paymentDetails={
                orderID:orderID,
                amount:this.state.SubTotal,
                date:new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
              }
              post(ip+`payment/details`,  paymentDetails ,config)
                .then(res => {
                  console.log(res.data)
                })
    
            
              
              for (let i = 0; i < this.state.data.length; i++) {
                const pro={
                  
                  stores:this.state.data[i].products.stores,
                  products:this.state.data[i].products,
                  userID:this.state.data[i].userID,
                  quantity:this.state.data[i].quantity,
                  userName: 'naumanshk4@gmail',
                  shipping:res.data.address,
                  bill:this.state.SubTotal,
                  orderID:orderID,
                 
                  payment:true,
                  date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/'),
                  delivery:false,
                  checkout:false
    
                }
                const qty=this.state.data[i].products.quantity-this.state.data[i].quantity
               
              
              post(ip+`order/add`,  pro ,config)
              .then(res => {
    
                console.log(res.data)
              })
            
            }
    
            get(ip+`shoppingCart/qty`,config).then(res=>{
                  console.log(res.data)
                  console.log(res.data.length)
                  
                  for (let i = 0; i < res.data.length; i++) {
    
                    const detect={
                      qty:res.data[i].total
                    }
                    console.log(detect.qty);
                  put(ip+`product/updateQty/`+res.data[i]._id,  detect ,config).then(res=>{
                  console.log('quantity updted'+res.data)
                  console.log('quantity updted'+res)
                    console.log('qty update')
               
                })
    
              if(i==res.data.length-1){
              
                // console.log("chalagaya" +inventory+this.state.emptyCart)
                axios.delete(ip+'shoppingcart/delete/'+this.state.data[0].userID,config).then(res=>{
                    Alert.alert(
                        'Payment Successful'
                     )
                   this.props.navigation.navigate('Cart')
                   
    
                  console.log('deleted')
                  
                
                
              })
              }
              }
            
                
            })
        
         
          } else {
            console.log('something went wrong')
          }
        })
    
        })
    }
    
    //  _retrieveData = async () => {
    //   try {
    //     const value = await AsyncStorage.getItem('@UserID');
    //     if (value !== null) {
    //       // We have data!!
    //       console.log("Async"+value);
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };
   
//5ee0c874322e6c19e8ed4440
    getProducts(){
     
     
      AsyncStorage.getItem('UserID').then((value) => {
        console.log(value)
        const url = ip+'shoppingCart/5ee0c874322e6c19e8ed4440';
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
                
            }
          }
    
        return  get(url,config)
     
    })
        
    }

    render() {

       



        return <ScrollView style={styles.container}>

                {this.state.data.map((item) => 
                      <CartItem navigation={this.props.navigation} item={item} value={item._id}></CartItem>
                      
                      )
                      
                            }
            
            

            <Text style={styles.text}> Total: {this.state.SubTotal}</Text>
            
            {/* <Stripe /> */}
          < CreditCardInput onChange={form =>  this.setState({
            card:form.values.number,
            exp_date:Number(form.values.expiry.split('/')[0]),
            exp_year:Number("20"+(form.values.expiry.split('/')[1])),
            cvc:form.values.cvc,
            
        })
        
        }/>
              
        <Button style={styles.addToCart} onPress={ this.pay}   contentStyle={styles.addToCart} mode="contained" >Pay</Button>

              

        



        </ScrollView>

            

    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    addToCart:{
        backgroundColor:"#3F51B5",
        height:50,
        //marginTop:10
    },
    text:{
      
        fontWeight: 'bold',
        fontSize: 18,
        paddingTop:10,
        paddingBottom:20,
        marginLeft:'50%'
      
    },
    dialog:{
        paddingTop:10
      },

})