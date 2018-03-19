export const CHANGE_DRAWER = "CHANGE_DRAWER";
export const CHANGE_MODAL = "CHANGE_MODAL";
export const TIMER_VALUE_ADD = "TIMER_VALUE_ADD";
export const TIMER_VALUE_REMOVE = "TIMER_VALUE_REMOVE";

export const changeDrawerAction = () => {
    return {
        type: CHANGE_DRAWER
    }
}

export const changeModalAction = () => {
    return {
        type: CHANGE_MODAL
    }
}

export const timerValueAdd = () => {
    return {
        type: TIMER_VALUE_ADD
    }
}

export const timerValueRemove = () => {
    return {
        type: TIMER_VALUE_REMOVE
    }
}