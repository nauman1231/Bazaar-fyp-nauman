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
import MapComponent from '../Components/MapComponent/MapComponent'
import { DATA } from '../Constants/data'
import { Header, Overlay } from 'react-native-elements';
import PersonIcon from '../assets/Icons/person.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import sample from '../Constants/FakeApi.json';
import { ip } from '../config';


export default class DetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showConfirmOrder: false,
      order: {},
      orderLoaded: false
    }
  }


  componentWillMount() {

    let orderId = this.props.route.params.orderId;

    let filteredOrder = sample.filter((order) => {
      return order.id == orderId
    })

    this.setState({ order: filteredOrder[0] })
    this.setState({ orderLoaded: true })

  }

  render() {

    const { navigation } = this.props;
  


    const ConfirmOrderDialog = () => {
      return <View style={styles.confirmOrderDialog}>
        <Text style={styles.confirmOrderText}>Please Confirm that you accept the order</Text>
        <View style={styles.confirmOrderBtnContainer}>
          <Button title="Cancel" containerStyle={{ width: "40%", marginRight: 10 }} buttonStyle={{ backgroundColor: "#757575" }}
            onPress={() => { this.setState({ showConfirmOrder: false }) }} />
          <Button title="Confirm" containerStyle={{ width: "40%", marginLeft: 10 }} onPress={() => {
            navigation.push('Order', {
              selectedOrder: this.state.order
            })
            this.setState({ showConfirmOrder: false })
          }} />
        </View>
      </View>
    }

    const stopsLength = this.state.order.stops.length;
    


    const RetailerSection = ({ name, address, itemsNum, items }) => {
      return <View style={styles.retailerSection}>
        <Text style={styles.retailerSection_name}>{name}</Text>
        <Text style={styles.retailerSection_detail}>{address}</Text>
        <Text style={styles.retailerSection_detail}><Text style={styles.consumerCard_boldText}>{itemsNum}</Text> Items</Text>
        <View style={styles.cardListContainer}>
          <FlatList
            style={styles.cardList}
            data={items}
            renderItem={({ item }) => <View style={styles.productItemCard}>
              <Image style={styles.productItemImg} source={{uri:ip+"images/"+item.img}} />
              <Text style={styles.productItemText}>{item.name}</Text>
              <Text style={styles.productItemText}>{item.qty}</Text>
            </View>
            }
            horizontal
          />
        </View>

      </View>



    }

    const retailers = this.state.order.retailers.map((retailer) => {
      return <RetailerSection name={retailer.name} address={retailer.address} itemsNum={retailer.itemsNum} items={retailer.items} />
    });


    return (<ScrollView>
      <View style={styles.container} >

      


        <View style={styles.orderDetails}>


          <View style={styles.consumerCard}>
            <View style={styles.iconContainer}>
              <PersonIcon width={70} height={70} />
            </View>
            <View style={styles.consumerCard_detail}>
              <Text style={styles.consumerCard_title}>{this.state.order.name}</Text>
              <Text style={styles.consumerCard_detail1}>{this.state.order.address}</Text>
              <Text style={styles.consumerCard_detail2}>
                <Text style={styles.consumerCard_boldText}>{this.state.order.items} Items</Text>
                <Text style={styles.consumerCard_boldText}>     {stopsLength}</Text> Stops
                       <Text style={styles.consumerCard_boldText}>     {this.state.order.totalDistance}</Text>
              </Text>
              <Text style={styles.consumerCard_mainInfoText}>{this.state.order.totalPrice}</Text>
            </View>


          </View>

          <View style={styles.orderBreakdown}>
            <Text style={styles.orderBreakdown_title}>Order BreakDown</Text>


            {retailers}


            <View style={styles.acceptOrderBtnContainer}>
              <TouchableOpacity style={styles.acceptOrderBtn} activeOpacity={1} onPress={() => {
                this.setState({ showConfirmOrder: true })
              }}>
                <Text style={styles.acceptBtnText}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>



        </View>



        <Overlay isVisible={this.state.showConfirmOrder} borderRadius={16} onBackdropPress={() => { this.setState({ showConfirmOrder: false }) }}
          height={200} >
          <ConfirmOrderDialog />
        </Overlay>

      </View>
    </ScrollView>);

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD"
  },
  map: {
    height: "30%",
    width: "100%"
  },
  orderDetails: {
    height: "70%",
    marginTop: 30,
    marginLeft: 30,
    paddingVertical: 10,
    paddingBottom: 20,
  },
  consumerCard: {
    width: "100%",
    flexDirection: "row",
  },
  consumerCard_image: {
    width: 80,
    height: 80,
    marginRight: 20
  },
  consumerCard_detail: {
    flex: 1,
    flexDirection: "column",
  },
  consumerCard_boldText: {
    fontWeight: "bold"
  },
  consumerCard_title: {
    marginBottom: 4,
    fontWeight: "bold",
    color: '#343847',
    fontSize: 16
  },
  consumerCard_detail1: {
    marginBottom: 4,
    color: '#69718F'
  },
  consumerCard_detail2: {
    marginBottom: 4,
    color: '#69718F'
  },
  consumerCard_mainInfoText: {
    marginTop: 8,
    fontWeight: "bold",
    color: '#343847',
    fontSize: 16
  },
  orderBreakdown: {
    marginTop: 24,
  },
  orderBreakdown_title: {
    fontSize: 20,
    color: "#343847",
  },
  retailerSection: {
    marginTop: 24,
    marginBottom: 16
  },
  retailerSection_name: {
    marginBottom: 4,
    fontSize: 18,
  },
  retailerSection_detail: {
    marginBottom: 4,
    color: '#69718F',
  },
  cardListContainer: {
  },
  cardList: {
    marginTop: 20,
    width: "100%",
  },
  cardImage: {
    width: 100,
    height: 100,
    margin: 10,
    marginLeft: 0
  },
  acceptOrderBtnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 15,
  },
  acceptOrderBtn: {
    backgroundColor: '#4D7CFE',
    width: 240,
    paddingVertical: 15,
    borderRadius: 16
  },
  acceptBtnText: {
    textAlign: "center",
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmOrderDialog: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  confirmOrderText: {
    fontSize: 16,
    textAlign: "center"
  },
  confirmOrderBtnContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  iconContainer: {
    marginRight: 18
  },
  productItemCard: {
    zIndex: 10,
    elevation: 1.5,
    marginRight: 14,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16

  },
  productItemText: {},
  productItemImg: {
    width:100,
    height:100,
    resizeMode: 'contain',
  }
})