import { ADD_RETAILER, GET_RETAILER } from "../../actions/Retailer/retailerActionTypes";
import Axios from "axios";


export const addRetailer = value => ({
  type: ADD_RETAILER,
  payload: value
});

export const fetchingRetailer = () => ({
  type: GET_RETAILER,
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




