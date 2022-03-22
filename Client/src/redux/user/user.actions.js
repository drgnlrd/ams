import { STORE_USER_DATA, RESET_USER } from "./user.types";

export const storeUserData = (data) => {
    return {
        type: STORE_USER_DATA,
        payload: data,
    };
};

export const resetUser = () => {
    return {
        type: RESET_USER,
    };
};
