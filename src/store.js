import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./features/accounts/accountSlice";
import customerReduser from "./features/custumers/customerSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReduser,
    },
});

export default store;