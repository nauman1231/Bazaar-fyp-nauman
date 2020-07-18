import { ADD_RETAILER, GET_RETAILER } from "../actions/Retailer/retailerActionTypes";

const initialState = { loading: true, user: [] };

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
                loading: true,
                user:[]
            }
        }

        default:
            return state;
    }
}

export default retailerReducer;