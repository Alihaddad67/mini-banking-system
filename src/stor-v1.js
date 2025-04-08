import { combineReducers, createStore } from "redux";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
}

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
};

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload
            };
        case "account/withdraw":
            return {
                ...state,
                balance: state.balance - action.payload
            };
        case "account/requestLoan":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: action.payload.amount,
            };
        case "account/payLoan":
            return { ...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan, };

        default:
            return state;
    }
}

function custumerReduser(state = initialStateCustomer, action) {
    switch (action.type) {
        case "createCustumer":
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalID: action.payload.nationalID,
                createAt: action.payload.createAt,
            }
        case 'customer/updateName':
            return {
                ...state,
                fullName: action.payload,
            };
        default:
        
            return state;
    }

}


const rootReducer = combineReducers({
    account: accountReducer,
    custumer: custumerReduser,
});

const store = createStore(rootReducer);



function deposit(amount) {
    return {
        type: "account/deposit",
        payload: amount,
    }

}
function withdraw(amount) {
    return {
        type: "account/withdraw",
        payload: amount,
    };

}
function requestLoan(amount, purpose) {
    return {
        type: "account/requestLoan",
        payload: { amount, purpose },
    };
}

function payLoan() {
    return { type: "account/payLoan" };

}

store.dispatch(deposit(500))
store.dispatch(withdraw(300))


console.log(store.getState());

function createCustumer(fullName, nationalID) {
    return {
        type: "custumer/createCustumer",
        payload: { fullName, nationalID, createAt: new Date().toISOString(), }
    }

}

function updateName(fullName) {
    return { type: "customer/updateName", payload: fullName };
}