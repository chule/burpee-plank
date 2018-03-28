import { combineReducers } from "redux";
import {
    CHANGE_DRAWER, CHANGE_MODAL, TIMER_VALUE_ADD, TIMER_VALUE_REMOVE,
    TIMER_CHANGE, CHANGE_CURRENT_TIME, REPETITION_ADD, REPETITION_RESET
} from "../actions";


import authReducer from "./auth.js";

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


const timerStarted = (state = false, action) => {
    switch (action.type) {
        case TIMER_CHANGE:
            return !state;

        default:
            return state;
    }
}

const changeCurrentTime = (state = "not_set", action) => {
    switch (action.type) {
        case CHANGE_CURRENT_TIME:
            return action.payload;
        default:
            return state;
    }
}

const repetitions = (state = 0, action) => {
    switch (action.type) {
        case REPETITION_ADD:
            return state + 1;
        case REPETITION_RESET:
            return 0;
        default:
            return state;
    }
}



// const loggedValue = (state = false, action) => {
//     switch (action.type) {
//         case LOGGED_IN:
//             return true;
//         case LOGGED_OUT:
//             return false;
//         default:
//             return state;
//     }
// } 

const rootReducer = combineReducers({
    otherReducer,
    changeDrawer,
    changeModal,
    timerValue,
    authReducer,
    timerStarted,
    changeCurrentTime,
    repetitions
})


export default rootReducer;