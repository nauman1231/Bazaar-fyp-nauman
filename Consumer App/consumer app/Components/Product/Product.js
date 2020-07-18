import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Button,
    AsyncStorage
} from 'react-native';
import Icon from 'react-native-ionicons'
import {get,post} from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ip} from '../global'
// import img from 'http://192.168.100.64:4000/images/monaLisa.jpg'

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            store:[],
            isAdded:false,
            isAddedToQuick:false,
            qty:1,
            img:null,
            outOfStock:false
        }
        this.addToCart = this.addToCart.bind(this);
    }


    componentDidMount() {
        if(this.props.item.quantity<0){
            console.log(this.props.item.name+" "+this.props.item.quantity)
            this.setState(
                {
                    outOfStock:true
                }
            )
        }
    
        // console.logg('muth'+require('http://192.168.100.64:4000/image/monaLisa.jpg'))
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        // get(`http://192.168.100.64:4000/retailer/product/image`, config,{responseType: 'blob'})
        // .then(res => {
        //  this.setState({
        //      img:res.data
        //  })
        //  console.log("keal"+this.state.img)
        // })
       
    }

        // addToCard = event => {
            addToCart(id) {
                AsyncStorage.getItem('UserID').then(value=>{
                    
                    this.setState({
                        isAdded:true
                      });
            
                      const carts={
                          addedToCart:true,
                          quantity:this.state.qty,
                          products:id,
                          userID:value
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
                    userID:value
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
       
            <TouchableOpacity onPress={()=>{this.props.stackNavigation.navigate('ProductDetail' ,{id:this.props.item._id,name:this.props.item.name})}}>
                <View style={styles.imageContainer}>
                    <Image source={{uri:ip+`uploads/${this.props.item.fileName}`}} style={styles.productImage} />
                </View>
            </TouchableOpacity>

            <View style={styles.productDetails}>
    <Text style={styles.productName}>{this.props.item.name}</Text>
                <Text style={styles.productPrice}> Rs.{this.props.item.Seller_price}</Text>

            </View>

           
            {/* <View  style={styles.actionContainer}>
               
                </View>} */}
                
             
            <View style={styles.actionContainer} >
            {this.state.outOfStock &&
                     <Text  >
                     Out of Stock
                    </Text>   }

            {!this.state.isAdded && !this.state.outOfStock &&
                <Icon name={'add-circle-outline'}  onPress={() => this.addToCart(this.props.item._id)} size={26} color={'#BDBDBD'} />
            } 
             {this.state.isAdded && 
               <Icon name={'md-checkmark-circle'}  size={26} color={'#BDBDBD'} />
             }
             {/* {!this.state.isAddedToQuick &&  !this.state.outOfStock &&
        <Icon name={'rocket'}  size={26} color={'#BDBDBD'}   onPress={() => this.addToQuickBuy(this.props.item._id)} style={{marginBottom:10}}/>
           }
           
           {this.state.isAddedToQuick && 
        <Icon name={'rocket'}  size={26} color={'red'}  style={{marginBottom:10}}/>
           } */}


            </View>
                

        </View>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFAFA',
        
        padding: 20,
        borderRadius: 16,
        marginHorizontal: 2,
    },
    productImage: {
        width: 90,
        height: 90,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    productDetails: {
        marginTop: 20,
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 18,
        flexShrink:1,
        flexWrap:"wrap"
    },
    productPrice: {
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#4CAF50'
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 16,
        paddingTop: 10,
        borderTopWidth: 2,
        borderTopColor: '#E0E0E0',
    }

})