import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text,
    View,
    _ScrollView,
    ToastAndroid
    
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Button } from 'react-native-paper';
import { Input } from 'react-native-elements';
import styled from 'styled-components';
import Icon from 'react-native-ionicons'
import {post,put} from 'axios';
import { AsyncStorage } from 'react-native';
import {ip} from '../Components/global'
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
             email:"",
             password:""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentWillMount() {
       console.log( this.props.navigation)
       AsyncStorage.getItem('UserID').then(value=>{
           console.log(value)
       })
      

    }
    // _storeData = async () => {
    //     try {
    //       await AsyncStorage.setItem(
    //         '@UserID',
    //         id.toString()
           
    //       );
    //       console.log("saved"+id)
          
    //     } catch (error) {
    //       console.log("aysnc"+error)
    //     }
    //   }

    handleSubmit = event => {
        event.preventDefault();
    
        const data = {
            
            email:this.state.email,
            password:this.state.password
        }
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(ip+`authentication/customer/login`,  data ,config)
          .then(res => {
              if(res.status==500){
                  console.log('err')
              }
              
              console.log(res.data.user)
              AsyncStorage.setItem('UserID', res.data.user._id);
              AsyncStorage.setItem('login', 'login');
            //   reactLocalStorage.set('UserID', res.data.user._id);
            //   reactLocalStorage.set('UserName', res.data.user.name);
            //   reactLocalStorage.set('login', true);
            //   localStorage.setItem('UserTime', new Date().getTime())
                
              this.setState({
                  redirect:true
              })
            //   const { navigation } = this.props;
            //   this.navigation.
            this.props.navigation.push('Main')
             
          }).catch(function (error) {
            console.log(error.response.status)
            if (error.response.status === 422) {
                console.log('failed');
                ToastAndroid.showWithGravityAndOffset(
                    "*Email or Password are Required",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
             
  
              }
              if (error.response.status === 500) {
                console.log('failed');
                ToastAndroid.showWithGravityAndOffset(
                    "Wrong Email or Password",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
           
  
              }
          });
          console.log(this.state);
      }

    render() {
      

        


        return <View style={styles.container}>
 
            <Text style={styles.logo}>Bazaar</Text>
            
            <View style={styles.contain}>
                <Text  style={styles.title}>Login</Text>
                <Input placeholder='Username'
                    name='email'
                    type='email'
                    style={styles.input} 
                    autoCapitalize = "none"
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
                <Input placeholder='Password'
                    name='password'
                    type='Password'
                    secureTextEntry={true}
                    autoCapitalize = "none"
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

                <Button style={styles.addToCart}  onPress={this.handleSubmit}  contentStyle={styles.addToCart} mode="contained" >Login</Button>
                <Text  onPress={()=>{this.props.navigation.push('Signup')} } style={styles.smallText}>Dont have an account ?</Text>
            </View>
                </View>
            
               

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