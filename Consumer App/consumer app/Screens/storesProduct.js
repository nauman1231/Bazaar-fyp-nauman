import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    AsyncStorage} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import Product from '../Components/Product/Product';
import { RNCamera } from 'react-native-camera';
import Camera from './camera'
import {get} from 'axios';
import {ip} from '../Components/global'
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
            products:[],
            search:"",
            camera:false
          }
          this.search = this.search.bind(this);
    }


     componentDidMount(){

        
       
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const store=this.props.route.params.id;
        get(ip+'product/storeProducts/'+store, config)
        .then((response) => {
            console.log(response.data)
            this.setState({
                products:response.data
            })
        
            
        })
        
     }


    // getProducts(){
    //     const url = 'http://localhost:4000/store/location';
    //         const config = {
    //             headers: {
    //                 'content-type': 'multipart/form-data'
    //             }
    //         }
    //         return  get(url,config)
    // }
    search(search){
        
    
        const url = ip+'product/search/'+search;
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
            get(url,config).then(res=>{
                this.setState({ products: res.data,camera:false})
            })
    
    console.log("in search "+search)
   

}

    render() {

        const { navigation } = this.props;



        if(this.state.camera){
           return <View style={styles.container}>
                <Camera action={this.search}/>
            </View>
            

        }
     
if(!this.state.camera)
{
        return <ScrollView style={styles.container}>

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
                            name='camera'
                            
                            size={24}
                            color='#BDBDBD'
                            style={{paddingRight:10}}
                            onPress={()=>{
                                // this.props.navigation.navigate('Camera')
                                this.setState({
                                    camera:true
                                })
                            }}
                        />
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
           


            <View style={styles.categoriesList}>

                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>

                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>


                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>


                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>

                <View style={styles.category}>
                    <Icon
                        name='apps'
                        size={32}
                        color='#5C6BC0'
                    />
                </View>



            </View>
{/* 
            <View style={styles.quickBuy}>
            <Text style={styles.titleText}>Filters</Text>

            <View style={styles.chips}>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
                <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
                 <View style={styles.chip}>
                    <Text style={styles.chipText}>Chip Text</Text>
                </View>
            </View>


            </View> */}



            <View style={styles.productList}>

            {this.state.products.map((item) => 
                      <View style={styles.row} >
                    <Product stackNavigation={navigation} item={item} value={item._id}  />
                    
                      </View>)
                            }
                {/* <View style={styles.row}>
                    <Product stackNavigation={navigation} item={item} value={item._id}  />
                    <Product />
                </View>

                    
                <View style={styles.row}>
                    <Product />
                    <Product />
                </View>

                
                <View style={styles.row}>
                    <Product />
                    <Product />
                </View>

                
                <View style={styles.row}>
                    <Product />
                    <Product />
                </View> */}


            </View>


        </ScrollView>

            ;

    }

}
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    titleText:{
        marginTop:16,
        fontSize:32,
        fontWeight:'bold'
    },
    quickBuy:{
        marginVertical:16
    },
    chips:{
        marginTop:0,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    chip:{
        marginRight:10,
        marginTop:10,
        backgroundColor:'#42A5F5',
        padding:10,
        borderRadius:16
    },
    chipText:{
        color:'#ffffff',
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
    categoriesList: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: 'space-between'
    },
    category: {
        padding: 0,
    },
    productList: {
        marginTop: 40,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        
    },
    row:{
        marginLeft:15,
        justifyContent:'space-between',
        marginVertical:12,
    }
})