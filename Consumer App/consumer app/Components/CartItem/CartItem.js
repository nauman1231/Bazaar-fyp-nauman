import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import Icon from 'react-native-ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Dialog, {  DialogFooter, DialogButton, DialogContent} from 'react-native-popup-dialog';
import axios from 'axios';
import {ip} from '../global'
export default class CartItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible:false,
            delete:false
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
        axios.delete(ip+'shoppingcart/deleteCartItem/'+id,config).then(res=>{
  
          console.log(res.data)
          this.setState({
              deleted:true,
              visible:false
          })
          this.props.navigation.navigate('Cart')
          })
      }

    render() {


        return <View style={styles.container}>

            <Image style={styles.prodImage} source={{uri:ip+`uploads/${this.props.item.products.fileName}`}}/>
            <Text  style={styles.prodName}>{this.props.item.products.name}</Text>
            <Text  style={styles.prodPrice}>RS. {this.props.item.products.Seller_price}</Text>
            <Icon name={'trash'} size={24} color={'red'} onPress={this.dialog}></Icon>

                        <View style={styles.dialog}>

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
                        onPress={() => {this.deleteCartItem(this.props.item._id)}}
                        />
                    </DialogFooter>
                    }
                >
                    <DialogContent>
                    <Text style={styles.dialog}>Are you sure, you want to delete this item from the cart</Text>
                    </DialogContent>
                </Dialog>


                        </View>
                
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
        color: '#4CAF50'
    },
    prodName: {
        fontWeight: 'bold',
        fontSize: 18
    },

})