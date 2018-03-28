export const CHANGE_DRAWER = "CHANGE_DRAWER";
export const CHANGE_MODAL = "CHANGE_MODAL";
export const TIMER_VALUE_ADD = "TIMER_VALUE_ADD";
export const TIMER_VALUE_REMOVE = "TIMER_VALUE_REMOVE";

export const TIMER_CHANGE = "TIMER_CHANGE";
export const CHANGE_CURRENT_TIME = "CHANGE_CURRENT_TIME";
export const REPETITION_ADD = "REPETITION_ADD";
export const REPETITION_RESET = "REPETITION_RESET";

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

export const timerStarted = () => {
    return {
        type: TIMER_CHANGE
    }
}

export const currentTime = (time) => {
    return {
        type: CHANGE_CURRENT_TIME,
        payload: time
    }
}

export const repetitonAdd = () => {
    return {
        type: REPETITION_ADD
    }
}

export const repetitonReset = () => {
    return {
        type: REPETITION_RESET
    }
}


// let timer = null;
// const start = () => (dispatch) => {
//   clearInterval(timer);
//   timer = setInterval(() => dispatch(tick()), 1000);
//   dispatch({ type: TIMER_START });
//   dispatch(tick())
// }
// const tick = () => { type: TIMER_TICK };
// const stop = () => {
//   clearInterval(timer);
//   return { type: TIMER_STOP };
// }