import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList,
    StyleSheet,
    Platform,
    TouchableOpacity
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
import DropdownIcon from '../assets/Icons/dropdown.svg';
import MoneyIcon from '../assets/Icons/money.svg';
import CircleDotIcon from '../assets/Icons/circledot.svg';


export default class SummaryScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: 'Summary'
        }

    }

    componentDidMount() {

    }

    render() {

        const SummaryDetailCard = () => {
            return <View style={styles.cardContainer}>

                <View style={styles.cardDetail}>
                    <View style={styles.cardDetailSection}>
                        <Text style={styles.cardSubText}>Total Distance</Text>
                        <Text style={styles.cardMainText}>4.6 Km</Text>
                    </View>

                    <View style={styles.cardDetailSection}>
                        <Text style={styles.cardSubText}>Total Distance</Text>
                        <Text style={[styles.cardMainText, styles.moneyText]}>Rs 5000</Text>
                    </View>

                </View>

                <View style={styles.cardImageContainer}>
                    <MoneyIcon />
                </View>


            </View>
        }

        const RouteCard = () => {
            return <View style={styles.routeCard}>

                <View style={styles.routeCardHeader}>
                    <Text style={[styles.dateText, styles.routeCardText]}>18 Jul, 3:30PM</Text>
                    <Text style={[styles.priceText, styles.routeCardText]}>Rs 5000</Text>
                </View>

                <View style={styles.routeCardDetail}>


                    <View style={styles.routesContainer}>

                        <CircleDotIcon />
                        <View style={styles.routes}>
                            <Text style={styles.routeText}>Saddar Chandni Chowk</Text>
                            <Text style={styles.routeText}>Punjab Cash n Carry Rwp</Text>
                        </View>
                    </View>

                    <ArrowIcon width={42} height={42} />


                </View>

            </View>
        }



        const { navigation } = this.props;



        return (<ScrollView style={styles.scrollContainer}>
            <View style={styles.container} >


                <Header
                    centerComponent={{ text: 'SUMMARY', style: { color: '#69718F', fontSize: 18 } }}
                    statusBarProps={{ translucent: true }}
                    containerStyle={Platform.select({
                        android: Platform.Version <= 20 ? { paddingTop: 0, height: 56, backgroundColor: "#FAFAFA" } : {},
                    })}
                    backgroundColor="#FAFAFA"
                />




                <View style={styles.section}>

                    <View style={[styles.sectionRow, styles.expenseCard, styles.sectionFix]}>

                        <Text style={styles.sectionHeading}>Total</Text>
                        <Text style={styles.sectionSubHeading}>Today <DropdownIcon width={8} height={8} /></Text>

                    </View>

                    <View style={styles.sectionRow}>
                        <SummaryDetailCard />
                    </View>



                </View>



                <View style={styles.section}>


                    <View style={[styles.sectionRow, styles.sectionFix]}>

                        <Text style={styles.sectionHeading}>Orders</Text>




                    </View>
                    <View style={styles.sectionRow}>
                        <RouteCard />
                    </View>

                </View>




            </View >
        </ScrollView>
        );

    }



}

const styles = StyleSheet.create({
    scrollContainer: {
        height: "100%",
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    container: {
        flex: 1,
        backgroundColor: "#FAFAFA"
    },
    section: {
        paddingHorizontal: 20,

    },
    sectionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 10,
    },
    sectionHeading: {
        fontSize: 22,
        color: '#343847',
        marginBottom: 6,
        // marginTop:20,

    },
    sectionSubHeading: {
        fontSize: 14,
        color: '#69718F'
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 22,
        paddingVertical: 24,
        flex: 1,
        elevation: 4,
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 16
    },
    cardDetailSection: {
        marginBottom: 10,
    },
    cardSubText: {
        color: "#69718F",
        fontSize: 16
    },
    cardMainText: {
        color: "#343847",
        fontSize: 20
    },
    moneyText: {
        color: '#4D7CFE'
    },
    expenseCard: {

        paddingTop: 30
    },
    sectionFix: {
        marginHorizontal: 14,
    },
    routeCard: {
        padding: 22,
        paddingVertical: 26,
        flex: 1,
        elevation: 4,
        marginHorizontal: 10,
        marginVertical: 6,
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
    },
    routeCardHeader: {
        // flexDirection: "row",
        // justifyContent: "space-between",
        marginBottom: 10

    },
    routeCardDetail: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    routeCardText: {
        fontSize: 18,
        color: "#343847",
    },
    routesContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    routes: {
        marginLeft: 10
    },
    routeText: {
        color: "#69718F",
        fontWeight: "300"
    }





})