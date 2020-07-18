import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    View,
    Alert,
    ToastAndroid
    
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';
import { Input } from 'react-native-elements';
import {post,put} from 'axios';
import styled from 'styled-components';
import Icon from 'react-native-ionicons'
import Geolocation from 'react-native-geolocation-service';
const GOOGLE_MAPS_APIKEY = 'AIzaSyB_UY8Mg65jm8F_BHOarN0wQAf1pFlqqtM';
import {ip} from '../Components/global'
export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            email:"",
            password:"",
            
            number:null,
            name:"",
            address:"",
            lng:73.047882,
            lat:33.684422,
            
            
        }
        this.handleSubmit = this.handleSubmit.bind(this)
     
    }


    componentDidMount() {
        console.log('nauman')
       
            Geolocation.getCurrentPosition((pos=>{
                this.setState({
                    lng:pos.coords.longitude,
                    lat:pos.coords.latitude
                })

                console.log("position"+pos.coords.latitude)
            })

            )
          
    }

    handleSubmit = event => {
        
    
        const data = {
            name:this.state.name,
            email:this.state.email,
            number:this.state.number,
            password:this.state.password,
           
            address:this.state.address,
            lng:this.state.lng,
            lat:this.state.lat

        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        if(this.state.name=="" || this.state.email==""||this.state.number==null || this.state.password=="" || this.state.address=="" ){
            ToastAndroid.showWithGravityAndOffset(
                "All fields are Required",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        }

        if(this.state.name!=""&&this.state.email!=""&&this.state.number!=null && this.state.password!="" && this.state.address!="" ){
        post(ip+`authentication/customer/`,  data ,config)
          .then(res => {
              
              
              
                
              this.setState({
                  redirect:true
              })
              Alert.alert(
                'Registered Successful'
             )
              this.props.navigation.push('Login')
             
          })
          console.log(this.state);
        }
      }



    render() {

        


        return <View style={styles.container}>
 
            <Text style={styles.logo}>Bazaar</Text>
            
            <View style={styles.contain}>
                <Text  style={styles.title}>Register</Text>
                <Input placeholder='Name'
                    name='name'
                    style={styles.input} 
                    onChangeText={e => this.setState({
                        name:e
                    })}
                    leftIcon={
                        <Icon
                        style={styles.icon}
                            name='person'
                            size={24}
                            color='#BDBDBD'
                         
                        />
                    }
                     
                     
                     />
                      <Input placeholder='Email'
                    name='email'
                    style={styles.input} 
                    onChangeText={e => this.setState({
                        email:e
                    })}
                    leftIcon={
                        <Icon
                        style={styles.icon}
                            name='person'
                            size={24}
                            color='#BDBDBD'
                         
                        />
                    }
                     
                     
                     />
                <Input placeholder='Contact'
                    name='number'
                    style={styles.input} 
                    type='number'
                    onChangeText={e => this.setState({
                        number:e
                    })}
                    leftIcon={
                        <Icon
                        style={styles.icon}
                            name='lock'
                            size={24}
                            color='#BDBDBD'
                         
                        />
                    }
                />
                   <Input placeholder='Address'
                    name='address'
                    style={styles.input} 
                    onChangeText={e => this.setState({
                        address:e
                    })}
                    leftIcon={
                        <Icon
                        style={styles.icon}
                            name='lock'
                            size={24}
                            color='#BDBDBD'
                         
                        />
                    }
                />
                   <Input placeholder='Password'
                    name='password'
                    style={styles.input} 
                    onChangeText={e => this.setState({
                        password:e
                    })}
                    leftIcon={
                        <Icon
                        style={styles.icon}
                            name='lock'
                            size={24}
                            color='#BDBDBD'
                         
                        />
                    }
                />
                
                 <View style={styles.btnContainer}>

                <Button style={styles.addToCart}    onPress={()=>{this.handleSubmit()} } contentStyle={styles.addToCart} mode="contained" >Login</Button>
                <Text  onPress={()=>{this.props.navigation.push('Login')} } style={styles.smallText}>Already have an account ?</Text>
            </View>
                </View>
            
               

        </View>

            

    }

}





const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
      
        
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
        height:550,
        paddingBottom:5,
        marginTop:'10%',
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
            marginTop:'10%',
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