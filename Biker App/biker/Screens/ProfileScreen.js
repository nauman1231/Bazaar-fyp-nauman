import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
    TouchableOpacity,
    Switch,
    PermissionsAndroid,
    AsyncStorage
} from 'react-native';
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent'
import { DATA } from '../Constants/data'
import { Header, Overlay } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import ArrowIcon from "../assets/Icons/arrow.svg";
import { SvgUri } from 'react-native-svg';
import { inject, observer } from "mobx-react";
import store from "../store/TestStore";
import personIcon from '../assets/Icons/person.svg';
import ProfileImage from '../assets/Icons/userplaceholder.svg';
import Axios from 'axios';
import Contacts from 'react-native-contacts';
import {ip} from "../config"

inject('store')
@observer
export default class ProfileScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Find Order',
            isActive: true,
        }

    }


    componentWillMount(){
        
    }


    render() {


        const { navigation } = this.props;

        return (<View style={styles.container} >
            <Header
                centerComponent={{ text: 'PROFILE', style: { color: '#69718F', fontSize: 18 } }}
                statusBarProps={{ translucent: true }}
                containerStyle={Platform.select({
                    android: Platform.Version <= 20 ? { paddingTop: 0, height: 56, backgroundColor: "#FAFAFA" } : {},
                })}
                backgroundColor="#FAFAFA"
            />




            <View style={styles.profileDetailContainer}>
                <ProfileImage width={80} height={80} style={{ marginVertical: 30 }} />
                <Text style={[styles.profileDetailText, styles.nameText]}>Ahmed</Text>
                <Text style={[styles.profileDetailText, styles.infoText]}>Metro Bike 125</Text>
                <Text style={[styles.profileDetailText, styles.infoText]}>PND-420</Text>
                <Switch
                    onValueChange={() => {
                        Axios.put(ip+"deliverer/update/+923025699794",{availability:this.state.isActive}).then((resp)=>{

                        })

                        this.setState({ isActive: !this.state.isActive })


                    }}
                    value={!this.state.isActive}
                />
                <View style={styles.reportContainer}>

                    <View style={styles.reportRow}>
                        <Text style={styles.reportText}>Distance</Text>
                        <Text style={styles.reportText}>Total Earnings</Text>
                        <Text style={styles.reportText}>Rating</Text>
                    </View>

                    <View style={styles.reportRow}>
                        <Text style={styles.reportInfoText}>4.6 km</Text>
                        <Text style={styles.reportInfoText}>5000 PKR</Text>
                        <Text style={styles.reportInfoText}>4.5</Text>
                    </View>

                    <View style={styles.reportRow}>
                        <Button title="Logout" containerStyle={{ width: "80%", marginTop: 60 }}
                            buttonStyle={{ padding: 15, backgroundColor: "#343847" }}
                            onPress={() => {
                                this.LogOut(navigation)
                            }}
                        />
                    </View>


                </View>

            </View>




        </View>);

    }

    LogOut(navigation) {
        AsyncStorage.setItem("isLoggedIn", "false").then(() => {
            console.log(this.props)
            this.props.navigation.popToTop();
            this.props.navigation.goBack(null);
        })
    }

}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA",
        paddingHorizontal: 20
    },
    profileDetailContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    reportRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginVertical: 8
    },
    reportContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    reportInfoText: {
        color: '#343847'
    },
    reportText: {
        color: '#69718F'
    },
    profileDetailText: {
        marginVertical: 4
    },
    infoText: {
        color: '#69718F'
    },
    nameText: {
        color: '#343847'
    }
})