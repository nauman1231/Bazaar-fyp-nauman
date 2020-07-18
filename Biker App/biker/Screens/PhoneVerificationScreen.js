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
import { Surface, Shape } from '@react-native-community/art';
import * as Progress from 'react-native-progress';
import { StackActions, NavigationActions } from 'react-navigation';


export default class PhoneVerificationScreen extends Component {

    constructor(props) {
        super(props)
        this.unsubscribe = null;
        this.state = {
            verificationCode: '',
            verified: false,
            enteredCode: "",
            verifying: false,
        }
        this.verifiyNumber = this.verifiyNumber.bind(this)
    }


    componentDidMount() {
        const { navigation } = this.props;
        let phoneNumber = this.props.route.params.number
        firebase.auth().signInWithPhoneNumber(phoneNumber)
            .then(confirmResult => this.setState({ verificationCode: confirmResult }))
            .catch(error => console.log(error));
    }









    render() {

        const { navigation } = this.props;
        let phoneNumber = this.props.route.params.number
 
        return (
            <View style={styles.container}>

                <Text style={styles.loginText}>Verify Phone Number</Text>
                <View style={styles.inpContainer}>
                    <Input containerStyle={styles.inp} placeholder="Enter Verification Code"
                        onChangeText={(val) => this.setState({ enteredCode: val })}
                        value={this.state.enteredCode}
                    />
                </View>

                <Button
                    title="VERIFY"
                    containerStyle={styles.loginBtn}
                    buttonStyle={{ backgroundColor: '#343847', padding: 14 }}
                    onPress={() => {
                        this.setState({ verifying: true })
                        // this.verifiyNumber(phoneNumber)
                        navigation.replace('Main')



                    }}
                />



            </View>

        )
    }

    componentWillUnmount() {
        if (this.unsubscribe) this.unsubscribe();
    }


    verifiyNumber(phoneNumber) {

        this.state.verificationCode.confirm(this.state.enteredCode)
            .then(() => {
                this.setState({ verified: true })
                AsyncStorage.setItem("isLoggedIn", "true")
                this.props.navigation.replace('Main')
            })
            .catch((err) => {
                this.setState({ verified: false })
                ToastAndroid.show("Invalid Code", ToastAndroid.LONG);
                console.log(err)
            })



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
        fontSize: 30
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