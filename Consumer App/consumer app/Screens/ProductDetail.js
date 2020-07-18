import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,AsyncStorage
} from 'react-native';
import {get,post} from 'axios';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {ip} from '../Components/global'
export default class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            store:[],
            isAdded:false,
            qty:1,
            user:""
        }
        this.addToCart = this.addToCart.bind(this);
    }


    componentDidMount() {
        AsyncStorage.getItem('UserID').then(value=>{
            this.setState({
                user:value
            })
        })
        const  id = this.props.route.params.id;
        console.log("detail props"+id)
        this.getProducts().then((response)=>{
            
            this.setState({
              data:response.data,
              store:response.data.stores
            });
            console.log(this.state.store)
            if(this.state.data.quantity<0){
                this.setState(
                    {
                        outOfStock:true
                    }
                )
            }
           
          });
    }
    getProducts(){
        const id=this.props.route.params.id;
        const url = ip+'product/'+id;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            return  get(url,config)
    }
    addToCart(id) {
        console.log(id);
        this.setState({
            isAdded:true
          });

          const carts={
              addedToCart:true,
              quantity:this.state.qty,
              products:id,
              userID:this.state.user
          }

          const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(ip+`shoppingCart/add`, carts ,config)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          console.log(carts);
      }


    render() {


        return <ScrollView style={styles.container}>

            <View style={styles.imageContainer}>
                <Image style={styles.prodImage} source={{uri:ip+`uploads/${this.state.data.fileName}`}} />
            </View>
            <View style={styles.prodDetails}>
                <Text style={styles.prodTitle}>{this.state.data.name}</Text>
                <Text style={styles.prodPrice}>Rs.{this.state.data.Seller_price}</Text>
                <Text style={styles.prodDescription}>{this.state.data.details}</Text>
            </View>

            {this.state.outOfStock && 
            <View style={styles.btnContainer}>
                <Button style={styles.added}  mode="contained"  disbaled  >Out of Stock</Button>
            </View>
    }

            {this.state.isAdded && 
            <View style={styles.btnContainer}>
                <Button style={styles.added}  mode="contained"  disbaled  >ADDED</Button>
            </View>
    }


            {!this.state.isAdded &&  !this.state.outOfStock && 
            <View style={styles.btnContainer}>
                <Button style={styles.addToCart}    contentStyle={styles.addToCart} mode="contained" onPress={() => this.addToCart(this.state.data._id)} >ADD TO CART</Button>
            </View>
    }
        </ScrollView >

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 30
    },
    prodImage: {
        width: 160,
        height: 160
    },
    prodTitle: {
        marginTop: 30,
        fontSize: 28,
        fontWeight: 'bold'
    },
    prodPrice: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4CAF50'
    },
    prodDescription: {
        marginTop: 10,
        lineHeight: 30,
        fontSize: 16
    },
    prodDetails:{

    },
    btnContainer:{
        marginTop:70,
        flex:1,
    },
    addToCart:{
        backgroundColor:"#3F51B5",
        height:50,
    },
    added:{
        backgroundColor:"#BDBDBD",
        height:50,
        paddingTop:5

    }


})