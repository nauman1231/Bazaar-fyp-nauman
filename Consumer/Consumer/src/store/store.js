import { createStore,applyMiddleware } from "redux";
import rootReducer from "../reducers/indexReducer";
import retailerReducer from "../reducers/retailersReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk,)

export default createStore(retailerReducer,middleware);
