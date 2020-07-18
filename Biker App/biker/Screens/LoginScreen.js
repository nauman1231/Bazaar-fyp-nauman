import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'react-native-firebase';



export default class LoginScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            phoneNumberInp: '+',
            isLoggedIn: false,
        }
        this.checkInput = this.checkInput.bind(this)
    }


    componentWillMount() {

        AsyncStorage.getItem("isLoggedIn")
            .then((val) => {
                console.log(val)
                if (val !== null) {
                    if (val == "true") {
                        this.setState({ isLoggedIn: true })
                    }
                    else {
                        this.setState({ isLoggedIn: false })
                    }
                }
                else {
                    this.setState({ isLoggedIn: false })
                }

            })


    }


    render() {

        const { navigation } = this.props;

        if (!this.state.isLoggedIn) {
            return (
                <View style={styles.container}>

                    <Text style={styles.loginText}>Login</Text>
                    <View style={styles.inpContainer}>
                        <Input style={styles.inp} keyboardType={"phone-pad"} placeholder="Phone Number" leftIcon={{ type: 'material', name: 'person', color: '#BDBDBD' }}
                            onChangeText={val => this.setState({ phoneNumberInp: val })}
                        />
                    </View>
                    <Button
                        title="LOGIN"
                        containerStyle={styles.loginBtn}
                        buttonStyle={{ backgroundColor: '#343847', padding: 14 }}
                        onPress={() => {
                            if (this.checkInput(this.state.phoneNumberInp))
                                navigation.push('PhoneVerify', {
                                    number: this.state.phoneNumberInp
                                })
                            else
                                ToastAndroid.show("Invalid Phone Number", ToastAndroid.SHORT)
                        }}
                    />
                    <View style={styles.linkContainer}>
                        <TouchableOpacity
                            onPress={() => { navigation.push('Signup') }}
                        >
                            <Text style={styles.link}>Create an Account</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            )
        }
        else {
            navigation.push('Main')
            return <View></View>
        }



    }

    checkInput(val) {

     


        if (val === '' || val.length < 13 || !val.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)) {
            return false
        }
        else {
            return true
        }
    }

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FDFDFF',
        justifyContent: 'center',
        padding: 40,
    },
    loginText: {
        marginLeft: 10,
        fontSize: 40
    },
    inpContainer: {
        marginTop: 40
    },
    inp: {
        marginTop: 20
    },
    loginBtn: {
        marginTop: 40,
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