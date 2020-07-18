import { ADD_RETAILER, GET_RETAILER,ADD_CART,GET_CART } from "../actions/Retailer/retailerActionTypes";

const initialState = { loading: true, user: [],cartItems:[] };

const retailerReducer = function (state = initialState, action) {
    switch (action.type) {

        case ADD_RETAILER: {
            return {
                loading: false,
                user: action.payload
            }
        }

        case GET_RETAILER: {
            return {
                loading: false,
                user:[]
            }
        }

        case GET_CART: {
            return {
                cart:[]
            }
        }

        case ADD_CART: {
            return {
                cart:action.payload
            }
        }



        default:
            return state;
    }
}

export default retailerReducer;