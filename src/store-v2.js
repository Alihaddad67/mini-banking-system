import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import accountReducer from "./features/accounts/accountSlice";
import custumerReduser from "./features/custumers/customerSlice";

const rootReducer = combineReducers({
    account: accountReducer,
    customer: custumerReduser,
});

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;