import React, { Component } from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text,View,
  AsyncStorage,Image,Modal,TouchableHighlight,Alert
} from 'react-native';
import CartItem from '../Components/CartItem/CartItem'
import { Input } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import AddItem from '../Components/quickBuyItems/card.js'
import { Button } from 'react-native-paper';
import { get, post, put } from 'axios';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";
import {ip} from '../Components/global'
export default class QuickBuy extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      emptyCart: false,
      SubTotal: 0,
      inventoryUpdated: false,
      isClose:false,
      products:[],
      search:""
    }
    this.pay = this.pay.bind(this)
    this.onScreenFocus = this.onScreenFocus.bind(this)
  }


  componentWillMount() {

    this.getallProducts().then((res)=>{
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
  
        }
      }
      for (let i = 0; i < res.data.length; i++) {

        get(ip+`product/getPros/`+res.data[i]._id,config).then(res=>{
            console.log(res.data)
            this.setState({ products: this.state.products.concat(res.data) })
            // this.setState(prevState => ({
            //     products: [
            //         ...prevState.products, 
            //         res.data
            //     ]
            // })

              
            
          console.log(this.state.products)
        })
    }
    })
    
    AsyncStorage.getItem('UserID').then(value => {
      const config = {
        headers: {
          'content-type': 'multipart/form-data'

        }
      }
      get(ip+`quickbuy/list?id=${value}&&schedule=${this.props.route.params.id}`, config).then((response) => {

        this.setState({
          data: response.data,

        }, () => {
          var people = 0;
          var products = {}
          const config = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': '***'
            }
          }


          for (let i = 0; i < this.state.data.length; i++) {
            people += parseInt(this.state.data[i].products.Seller_price * this.state.data[i].quantity, 10);
            console.log(people)
          }


          this.setState({
            SubTotal: people,


          })
        });


      });

    })
  }
  onScreenFocus = () => {
    // Screen was focused, our on focus logic goes here
    console.log("aona ")
  }


  pay() {
    console.log('auman')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': '***'
      }
    }
    const token = {
      number: this.state.card,
      cvc: this.state.cvc,
      date: this.state.exp_date,
      year: this.state.exp_year
    }
    console.log(token)

    post(ip+`payment/v1/tokens`, token, config)
      .then(res => {
        console.log(res);
        console.log(res.data);
        const product = this.state.SubTotal
        const token = res.data
        post(ip+`payment/checkout`, { token, product }, config)
          .then(res => {
            const orderID = res.data.orderID


            const { status } = res.data;

            if (status === "success") {

              const paymentDetails = {
                orderID: orderID,
                amount: this.state.SubTotal,
                date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
              }
              post(ip+`payment/details`, paymentDetails, config)
                .then(res => {
                  console.log(res.data)
                })



              for (let i = 0; i < this.state.data.length; i++) {
                const pro = {

                  stores: this.state.data[i].products.stores,
                  products: this.state.data[i].products,
                  userID: this.state.data[i].userID,
                  quantity: this.state.data[i].quantity,
                  userName: 'naumanshk4@gmail',
                  shipping: res.data.address,
                  bill: this.state.SubTotal,
                  orderID: orderID,

                  payment: true,
                  date: new Date().toISOString().slice(0, 10).split('-').reverse().join('/'),
                  delivery: false,
                  checkout: false

                }
                const qty = this.state.data[i].products.quantity - this.state.data[i].quantity


                post(ip+`order/add`, pro, config)
                  .then(res => {

                    console.log(res.data)
                  })

              }

              get(ip+`quickbuy/qty`, config).then(res => {
                console.log(res.data)
                console.log(res.data.length)

                for (let i = 0; i < res.data.length; i++) {

                  const detect = {
                    qty: res.data[i].total
                  }
                  console.log(detect.qty);
                  put(ip+`product/updateQty/` + res.data[i]._id, detect, config).then(res => {
                    console.log('quantity updted' + res.data)
                    console.log('quantity updted' + res)
                    console.log('qty update')
                   
                  })

                  //   if(i==res.data.length-1){

                  //     // console.log("chalagaya" +inventory+this.state.emptyCart)
                  //     axios.delete('http://192.168.100.64:4000/shoppingcart/delete/'+this.state.data[0].userID,config).then(res=>{
                  //         Alert.alert(
                  //             'Payment Successful'
                  //          )
                  //        this.props.navigation.navigate('Cart')


                  //       console.log('deleted')



                  //   })
                  //   }
                }

                Alert.alert(
                  'Payment Successful'
               )

              })


            } else {
              console.log('something went wrong')
            }
          })

      })
  }

  cancel(){
    this.setState({ isClose: false })
    this.props.navigation.navigate('Inside' ,{id:this.props.route.params.id})
  

  }

  getallProducts() {
    const url = 'http://192.168.100.64:4000/store/location';
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return get(url, config)
  }

  search(search){
        
    
    const url = ip+'product/search/'+search;
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        get(url,config).then(res=>{
            this.setState({ products: res.data})
        })

console.log("in search "+search)


}

  render() {




    return <View style={styles.parent}>
      <View style={styles.headingContainer}>

      <Text  style={styles.MianText}>{this.props.route.params.id}
     
      </Text>

    
      <Text style={styles.bottom} onPress={() => { this.setState({ isClose: true }) }} >
              <Image style={styles.prodImage} source={require('../assets/Images/addButton.png')} /> 
            </Text>

      <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.isClose}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Schedule Grocery</Text>

                        <View style={styles.searchContainer}>
                <Input
                    placeholder='Search Products'
                    name='search'
                    containerStyle={styles.searchInputContainer}
                    inputContainerStyle={styles.search}
                    onChangeText={e => this.setState({
                        search:e
                    })}

                    
                    rightIcon={
                        <View style={{flexDirection:"row"}}>
                         
                        <Icon
                            name='search'
                            size={24}
                            color='#BDBDBD'
                            onPress={()=>{
                                this.search(this.state.search)
                            }}
                        />
                        </View>
                    }
                />

            </View>
           
                        <ScrollView style={styles.insideContainer}>
                        {this.state.products.map((item) =>
                              <AddItem navigation={this.props.navigation} item={item} value={item._id} schedule={this.props.route.params.id}></AddItem>

                            )}
                


<<<<<<< HEAD
                        </ScrollView>
                        

                     
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                               this.cancel()
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

      </View>
     
=======
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
       
        post(`http://192.168.100.64:4000/payment/v1/tokens`, token ,config)
        .then(res => {
          console.log(res);
          console.log(res.data);
          const product=this.state.SubTotal
          const token=res.data
          post(`http://192.168.100.64:4000/payment/checkout`,  {token,product} ,config)
            .then(res => {
                const orderID=res.data.orderID
      
       
                const { status } = res.data;
        
        if (status === "success") {
         
            const paymentDetails={
                orderID:orderID,
                amount:this.state.SubTotal,
                date:new Date().toISOString().slice(0, 10).split('-').reverse().join('/')
              }
              post(`http://192.168.100.64:4000/payment/details`,  paymentDetails ,config)
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
               
              
              post(`http://192.168.100.64:4000/order/add`,  pro ,config)
              .then(res => {
    
                console.log(res.data)
              })
            
            }
    
            get(`http://192.168.100.64:4000/quickbuy/qty`,config).then(res=>{
                  console.log(res.data)
                  console.log(res.data.length)
                  
                  for (let i = 0; i < res.data.length; i++) {
    
                    const detect={
                      qty:res.data[i].total
                    }
                    console.log(detect.qty);
                  put(`http://192.168.100.64:4000/product/updateQty/`+res.data[i]._id,  detect ,config).then(res=>{
                  console.log('quantity updted'+res.data)
                  console.log('quantity updted'+res)
                    console.log('qty update')
               
                })
    
            //   if(i==res.data.length-1){
              
            //     // console.log("chalagaya" +inventory+this.state.emptyCart)
            //     axios.delete('http://192.168.100.64:4000/shoppingcart/delete/'+this.state.data[0].userID,config).then(res=>{
            //         Alert.alert(
            //             'Payment Successful'
            //          )
            //        this.props.navigation.navigate('Cart')
                   
    
            //       console.log('deleted')
                  
                
                
            //   })
            //   }
              }
            
                
            })
        
         
          } else {
            console.log('something went wrong')
          }
        })
    
        })
    }

    render() {

       
        return <ScrollView style={styles.container}>
>>>>>>> 09c95928d8eaaccc5c1e05210d1288b4b8aab23f

      <ScrollView style={styles.container}>

        {this.state.data.map((item) =>
          <CartItem navigation={this.props.navigation} item={item} value={item._id}></CartItem>

        )}

        <Text style={styles.text}> Total: {this.state.SubTotal}</Text>

        < CreditCardInput onChange={form => this.setState({
          card: form.values.number,
          exp_date: Number(form.values.expiry.split('/')[0]),
          exp_year: Number("20" + (form.values.expiry.split('/')[1])),
          cvc: form.values.cvc

        })

        } />
        <Button style={styles.addToCart} onPress={this.pay} contentStyle={styles.addToCart} mode="contained" >Pay</Button>
      </ScrollView>
    </View>



  }

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
},
search: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
},
searchInputContainer: {
    backgroundColor: '#FAFAFA',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
},
  insideContainer:{
    backgroundColor: 'white',
    flex: 1,
  },
  parent:{
    
    backgroundColor: 'white',
    flex: 1,

  },
  title: {
    fontSize: 36,
    marginTop: 20
  },
  text: {

    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 20,
    marginLeft: '50%'

  },
  MianText:{
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 20,
    marginLeft:'15%'
   
   
  },
headingContainer:{
 
  marginVertical:16,
  padding:10,
  paddingHorizontal:30,
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  height:'15%',
  
  height:100
},
  prodImage:{
    width:50,
    height:50,
   


},


InputContainer:{
  marginBottom:20
},
bottom: {
  marginRight:'10%',
  marginBottom:'4%',
height:'100%'
 
},
centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  marginBottom:10
},
textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  width:100
  
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
}
})