import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  Platform
} from 'react-native';
import { Button } from 'react-native-elements';
import MapComponent from '../Components/MapComponent/MapComponent';
import { Header } from 'react-native-elements';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RouteIcon from "../assets/Icons/route.svg";
import ArrowIcon from "../assets/Icons/arrow.svg";
import sample from '../Constants/FakeApi.json';
import Geolocation from 'react-native-geolocation-service';


export default class OrderScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.bottomSheetRef = React.createRef();
    this.state = {
      driver: {},
      retailers: [],
      selectedOrder: {},
      routes: []
    }
  }


  async componentWillMount() {
    this.setState({ selectedOrder: this.props.route.params.selectedOrder })
    await Geolocation.getCurrentPosition((pos) => {

      console.log(pos.coords)
      
      let tempArr = [
        {
          latitude: 33.650092799999996,
          longitude: 73.1556511,

        },
        {
          latitude: 33.84994,
          longitude: 77.1011,

        },
        {
          latitude: 33.14994,
          longitude: 77.1011,

        },
    
      ]

      this.setState({ routes: tempArr })


    })



  }


  render() {

    console.log(this.state.routes)

    const { navigation } = this.props;
    const InfoContainer = ({ order }) => {

      let driver = order.driver;
      let retailers = order.retailers;
      const retailerCard = retailers.map((retailer, index) => {
        return <TouchableOpacity activeOpacity={1}>
          <BottomSheetCard title={retailer.name} description={retailer.address} currIndex={index} />
        </TouchableOpacity>
      })


      return (<View style={styles.routeInfoContainer}>
        <BottomSheetCard title={driver.name} description={driver.location} showbutton={false} nav={navigation} driver={true} />

        {retailerCard}

      </View>)
    }

    const BottomSheetCard = ({ title, description, showbutton = true, nav, driver = false, currIndex }) => {
      return <TouchableOpacity activeOpacity={1} onPress={() => {
        if (!driver)
          navigation.push('Order Detail', {
            selectedRetailer: this.state.selectedOrder.retailers[currIndex]
          })

      }}>
        <View style={styles.BSCardContainer}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.BSCard_titleText}>{title}</Text>
            <Text style={styles.BSCard_extraText}>{description}</Text>
          </View>
          {showbutton &&
            <View style={styles.cardIconContainer}>
              <ArrowIcon />
            </View>
          }

        </View>
      </TouchableOpacity>
    }





    const renderInner = () => {
      return <View style={styles.panel}>
        <ScrollView>
          <View style={styles.bottemsheetContent}>
            <View style={styles.routeIconContainer}>
              <RouteIcon />
            </View>
            <InfoContainer order={this.state.selectedOrder} />
          </View>
        </ScrollView>
      </View>
    }

    const directions = [

      {
        latitude: 27.4038,
        longitude: 77.1011,

      },
      {
        latitude: 26.4038,
        longitude: 77.1011,

      },
      {
        latitude: 26.9038,
        longitude: 77.1011,

      },




    ]



    return (<View style={styles.container} >


      <View style={styles.map}>
        <MapComponent coordinates={this.state.routes} showDirection={true} />
      </View>


      <BottomSheet
        enabledContentGestureInteraction={false}
        snapPoints={[350, 70]}
        renderHeader={this.renderHeader}
        renderContent={renderInner}
        ref={this.bottomSheetRef}
        initialSnap={0}
      />


    </View>);

  }



  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle} />
          <Text style={styles.sheetHeaderText}>Route</Text>
        </View>
      </View>

    );
  }




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    height: "50%",
    width: "100%"
  },
  bottemsheetContent: {
    flexDirection: "row"
  },
  routeInfoContainer: {
    marginLeft: 20,
    marginBottom: 20,
    paddingBottom: 40
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  panel: {
    height: "100%",
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#f7f5eee8',
  },
  header: {
    backgroundColor: '#f7f5eee8',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  BSCardContainer: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    width: "85%"
  },
  BSCard_titleText: {
    fontWeight: "bold",
  },
  BSCard_extraText: {
    marginTop: 8,
  },
  sheetHeaderText: {
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },
  map: {
    flex: 1,
    width: "100%"
  },
  panelContainer: {
    position: 'absolute',
    top: 0,
    bottom: 500,
    left: 0,
    right: 0,
  },
  panel: {
    height: 700,
    padding: 20,
    paddingHorizontal: 40,
    backgroundColor: '#ffffff',

  },
  header: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 500
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  sheetHeaderText: {
    fontSize: 18,

  }
})