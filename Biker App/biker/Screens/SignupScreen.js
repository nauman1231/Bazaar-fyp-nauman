import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
    ToastAndroid
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ip } from "../config.js"
import Axios from 'axios';

export default class SignupScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            phoneNumber: "",
            lisenceNumber: "",
            city: "",
            address: "",
        }
        this.verifiyInputs = this.verifiyInputs.bind(this)
    }


    render() {

        const { navigation } = this.props;

        return (
            <View style={styles.container}>

                <Text style={styles.loginText}>Signup</Text>
                <View style={styles.inpContainer}>
                    <Input containerStyle={styles.inp} placeholder="Name" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }}
                        onChangeText={(val) => this.setState({ name: val })}
                        value={this.state.name}
                    />
                    <Input containerStyle={styles.inp} keyboardType={"phone-pad"} placeholder="Phone Number" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }}
                        onChangeText={(val) => this.setState({ phoneNumber: val })}
                        value={this.state.phoneNumber}
                    />
                    <Input containerStyle={styles.inp} placeholder="Lisence Number" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }}
                        onChangeText={(val) => this.setState({ lisenceNumber: val })}
                        value={this.state.lisenceNumber}
                    />

                    <Input containerStyle={styles.inp} placeholder="City" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }}
                        onChangeText={(val) => this.setState({ city: val })}
                        value={this.state.city}
                    />

                    <Input containerStyle={styles.inp} placeholder="Address" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }}
                        onChangeText={(val) => this.setState({ address: val })}
                        value={this.state.address}
                    />


                </View>
                <Button
                    title="REGISTER"
                    containerStyle={styles.loginBtn}
                    buttonStyle={{ backgroundColor: '#343847', padding: 14 }}
                    onPress={() => {
                        if (this.verifiyInputs()) {



                            let tempBiker = {
                                lisenceNumber: this.state.lisenceNumber,
                                name: this.state.name,
                                phoneNumber: this.state.phoneNumber,
                                city: this.state.city,
                                address: this.state.address,
                            }

                            this.setState({ biker: tempBiker })
                            navigation.navigate('PersonalInfo', {
                                biker: tempBiker,
                                mydata: 'Usama'
                            })

                        }
                        else {
                            ToastAndroid.show("Invalid  Check your Inputs", ToastAndroid.LONG);
                        }
                    }}
                />
                <View style={styles.linkContainer}>
                    <TouchableOpacity
                        onPress={() => { navigation.pop() }}
                    >
                        <Text style={styles.link}>Already Have an Account ?</Text>
                    </TouchableOpacity>
                </View>



            </View>

        )
    }

    verifiyInputs() {

        if (this.state.name != '' && this.state.address != '' && this.state.city != '' && this.state.lisenceNumber != '' && this.state.phoneNumber.length >= 13 && this.state.phoneNumber.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)) {
            return true
        }
        else {
            return false
        }
    }


}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDFDFF',
        padding: 40,
        paddingTop: 60
    },
    loginText: {
        marginLeft: 10,
        fontSize: 40
    },
    inpContainer: {
        marginTop: 40
    },
    inp: {
        marginBottom: 20
    },
    loginBtn: {
        marginTop: 20,
    },
    linkContainer: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "center",
        color: "#69718F",
    },
    link: {
        fontSize: 16,
        textAlign: "center"
    }

});