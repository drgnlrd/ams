import { STORE_USER_DATA, RESET_USER } from "./user.types";

const initialState = {
    user:{
        name: '',
        email: '',
        phone: '',
        type: '',
        loggedIn: false,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                user: action.payload,
            };

        case RESET_USER:
            return {
                ...state,
                user: {
                    name: '',
                    email: '',
                    phone: '',
                    type: '',
                    loggedIn: false,
                },
            };
        default:
            return state;
    }
};

export default reducer;