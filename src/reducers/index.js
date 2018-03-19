import { combineReducers } from "redux";
import { CHANGE_DRAWER, CHANGE_MODAL, TIMER_VALUE_ADD, TIMER_VALUE_REMOVE } from "../actions";

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

const changeModal = (state = false, action) => {
    switch (action.type) {
        case CHANGE_MODAL:
            return !state;
        default:
            return state;
    }
}

const timerValue = (state = 10, action) => {
    switch (action.type) {
        case TIMER_VALUE_ADD:
            return state + 1;
        case TIMER_VALUE_REMOVE:
            return state - 1;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    otherReducer,
    changeDrawer,
    changeModal,
    timerValue
})


export default rootReducer;