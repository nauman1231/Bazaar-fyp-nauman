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
import { CheckBox, Button } from 'react-native-elements';
import { Header, Overlay } from 'react-native-elements';
import PersonIcon from '../assets/Icons/person.svg';
import { DATA } from '../Constants/data'
import { ip } from "../config"

export default class RecievingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRetailer: {},
      showConfirmOrder: false,
      orderAccepted: false,
    }
  }

  componentWillMount() {
    this.setState({ selectedRetailer: this.props.route.params.selectedRetailer })
  }


  render() {

    const { navigation } = this.props;
    const retailer = this.state.selectedRetailer

    console.log(retailer)


    const ItemCard = ({ showCheckbox }) => {
      return <View style={styles.itemCard}>
        <PersonIcon width={60} height={60} />
        <View style={styles.cardInfoContainer}>
          <Text style={styles.itemText}>{retailer.name}</Text>
          <Text style={styles.itemExtraText}>{retailer.address}</Text>
          <Text style={styles.itemText}>{retailer.itemsNum} Items</Text>
        </View>

        {showCheckbox &&
          <CheckBox checked={true} />
        }

      </View>
    }

    const ConfirmOrderDialog = () => {
      return <View style={styles.confirmOrderDialog}>
        <Text style={styles.confirmOrderText}>Please Confirm that you accept the order</Text>
        <View style={styles.confirmOrderBtnContainer}>
          <Button title="Cancel" containerStyle={{ width: "40%", marginRight: 10 }} buttonStyle={{ backgroundColor: "#757575" }}
            onPress={() => { this.setState({ showConfirmOrder: false }) }} />
          <Button title="Confirm" containerStyle={{ width: "40%", marginLeft: 10 }} onPress={() => {
            this.setState({ showConfirmOrder: false })
            this.setState({ orderAccepted: true })
          }} />
        </View>
      </View>
    }

    return (<ScrollView style={styles.container}>
      <View style={styles.container} >



        <View style={styles.contentContainer}>
          <ItemCard />

          <View style={styles.retailerSection}>
            <Text style={styles.retailerSection_name}>Item List</Text>
            <View style={styles.cardListContainer}>
              <FlatList
                style={styles.cardList}
                data={retailer.items}
                renderItem={({ item }) => <View style={styles.productItemCard}>
                  <Image style={styles.productItemImg} source={{ uri: ip + 'images/' + item.img }} />
                  <Text style={styles.productItemText}>{item.name}</Text>
                  <Text style={styles.productItemText}>{item.qty}</Text>
                </View>
                }
                horizontal
              />
            </View>

          </View>



          <View style={styles.priceContainer}>
            <Text style={styles.Totaltxt}>Total</Text>
            <Text style={styles.TotalPrice}>{retailer.totalPrice}</Text>
          </View>



          {!this.state.orderAccepted &&

            <View style={styles.RecieveBtnContainer}>
              <TouchableOpacity style={styles.acceptOrderBtn} activeOpacity={1} onPress={() => {
                this.setState({ showConfirmOrder: true })
              }}>
                <Text style={styles.acceptBtnText}>Complete Order</Text>
              </TouchableOpacity></View>

          }


          {this.state.orderAccepted &&

            <View style={styles.RecieveBtnContainer}>
              <TouchableOpacity style={styles.OrderCompletedBtn} disabled activeOpacity={1} onPress={() => {
              }}>
                <Text style={styles.acceptBtnText}>Order Completed</Text>
              </TouchableOpacity></View>

          }

        </View>


        <Overlay isVisible={this.state.showConfirmOrder} borderRadius={16} onBackdropPress={() => { this.setState({ showConfirmOrder: false }) }}
          height={200} >
          <ConfirmOrderDialog />
        </Overlay>





      </View>
    </ScrollView>
    );

  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD'
  },
  contentContainer: {
    padding: 20,

  },
  itemCard: {
    flexDirection: "row",
    margin: 10,
    marginTop: 20,
    alignItems: "center"
  },
  itemCard_image: {
    width: 60,
    height: 60,
  },
  cardInfoContainer: {
    marginLeft: 15,
    flexBasis: "70%",
  },
  ItemList: {

    marginTop: 20,
  },
  ItemListTitle: {
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  TotalPrice: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#4D7CFE',
  },
  RecieveBtnContainer: {
    marginTop: 130,
    paddingBottom: 20,
    alignItems: "center",
    alignContent: "flex-end"
  },
  ItemCardList: {
    height: "55%"
  },
  itemText: {
    color: '#343847',
    fontWeight: "700",
    fontSize: 16
  },
  itemExtraText: {
    color: '#69718F'
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
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  retailerSection: {
    marginTop: 24,
    marginBottom: 16
  },
  retailerSection_name: {
    marginBottom: 16,
    fontSize: 18,
  },
  retailerSection_detail: {
    marginBottom: 4,
    color: '#69718F',
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
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30
  },
  Totaltxt: {
    fontSize: 22,
    fontWeight: "bold",
    color: '#343847'
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
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  OrderCompletedBtn:{
    backgroundColor: '#4CAF50',
    width: 240,
    paddingVertical: 15,
    borderRadius: 16
  }

})