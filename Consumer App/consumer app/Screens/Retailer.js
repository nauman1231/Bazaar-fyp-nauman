import React, { Component } from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-ionicons'
import Product from '../Components/Product/Product';
import ReatilerCard from '../Components/RetailerCard/RetailerCard';
import {get} from 'axios';
import {ip} from '../Components/global'
export default class Retailer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stores:[]
        }
    }


    componentWillMount() {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        
        get(ip+'store/location', config)
        .then((response) => {
            console.log(response.data)
            this.setState({
                stores:response.data
            })
          
        })

    }

    render() {

        const { navigation } = this.props;



        return <ScrollView style={styles.container}>

                    {this.state.stores.map((item) => 
                      <View style={styles.retailers}>
                    
                    <ReatilerCard stackNavigation={navigation} item={item} value={item._id}  />
                    
                      </View>)
                            }

            {/* <View style={styles.retailers}>
                <ReatilerCard />
                
            </View> */}
        </ScrollView>

            ;

    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: '#FAFAFA',
        flex: 1,
    },
    retailers:{
        marginVertical:20
    }
})