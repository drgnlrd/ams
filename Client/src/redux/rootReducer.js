import { combineReducers } from "redux";
import reducer from "./user/user.reducer";

const rootReducer = combineReducers({
    user: reducer,
});

export default rootReducer;