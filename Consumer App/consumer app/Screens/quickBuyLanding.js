import React, { Component } from 'react';
import {
    ScrollView,
    FlatList,
    StyleSheet,
    Text, Image,
    AsyncStorage, View, Modal, TouchableHighlight, TextInput
} from 'react-native';
import CartItem from '../Components/schedule/schedule'
import { Button } from 'react-native-paper';
import { get, post, put } from 'axios';
import { CreditCardInput, LiteCreditCardInput } from "react-native-input-credit-card";
import DatePicker from 'react-native-datepicker'
import {ip} from '../Components/global'
export default class QuickBuy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            emptyCart: false,
            SubTotal: 0,
            inventoryUpdated: false,
            isClose: false,
            name: "",
            date:"2016-05-15",
            uniqueValue: 1,
            user:""
        }

        
    }


    componentWillMount() {

        AsyncStorage.getItem('UserID').then(value => {
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'

                }
            }
            get(ip+'schedule/' + value, config).then((response) => {

                this.setState({
                    data: response.data,

                })


            });

        })
    }
 

    addSchedule(){

        AsyncStorage.getItem('UserID').then(value => {
            this.setState({user:value})
        const data = {
            userID:value,
            schedule:this.state.name,
            date:this.state.date
        };
        console.log(data)
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        post(ip+`schedule/add`,  data ,config)
          .then(res => {
              this.setState({isClose:false})
              this.props.navigation.navigate('QuickBuy')
          })
        })
      
    }
 




    render() {




        return <View style={styles.parent}>
            <ScrollView style={styles.container}>





                {this.state.data.map((item) =>
                    <CartItem navigation={this.props.navigation} item={item} value={item._id}></CartItem>

                )}

            </ScrollView>
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
                        <View style={styles.InputContainer}>
                        <Text>Schedule Name</Text>
                        <TextInput type="text" placeholder="Name" value={this.state.name} name="name" onChangeText={e => this.setState({ name: e})}></TextInput>
                        <Text> Date</Text>
                        {/* <DatePicker
                            onChange={this.handleChange}
                            value={this.state.startDate}


                        /> */}
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="2016-05-01"
                            
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    
                                }
                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => { this.setState({date: date}) }}
                        />


                        </View>
                        

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                this.addSchedule()
                            }}
                        >
                            <Text style={styles.textStyle}>ADD</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#BDBDBD" }}
                            onPress={() => {
                                this.setState({ isClose: false })
                            }}
                        >
                            <Text style={styles.textStyle}>Cancel</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            <Text style={styles.bottom} onPress={() => { this.setState({ isClose: true }) }} >
                <Image style={styles.prodImage} source={require('../assets/Images/addButton.png')} />
            </Text>

        </View>


    }

}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    parent: {

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
        marginLeft: '50%',


    },
    prodImage: {
        width: 80,
        height: 80,



    },
    InputContainer:{
        marginBottom:20
    },
    bottom: {
        marginLeft: 280,

        flex: 0.2
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