import { ADD_RETAILER, GET_RETAILER,GET_CART,ADD_CART } from "../../actions/Retailer/retailerActionTypes";
import Axios from "axios";


export const addRetailer = value => ({
  type: ADD_RETAILER,
  payload: value
});

export const fetchingRetailer = () => ({
  type: GET_RETAILER,
});


export const addToCart = value => ({
  type: ADD_CART,
  payload: value
});



export const getCart = () => ({
  type: GET_CART,
});





export const getRetailer = () => {

  return (dispatch) => {
    dispatch(fetchingRetailer())
    Axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      //  console.log(response.data)
      dispatch(addRetailer(response.data))
    })
  }
}




