import { combineReducers } from "redux";
import { CHANGE_DRAWER } from "../actions";

const otherReducer = (state = [], action) => {
    return state;
};

const changeDrawer = (state = false, action) => {
    switch (action.type) {
        case CHANGE_DRAWER:
            return !state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    otherReducer,
    changeDrawer
})


export default rootReducer;