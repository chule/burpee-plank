import { connect } from 'react-redux';
import {
    changeDrawerAction, changeModalAction,
    timerValueAdd, timerValueRemove, timerStarted
} from "../actions";
import Bar from "../components/Bar";



const mapStateToProps = state => {

    return {
        changeDrawer: state.changeDrawer,
        changeModal: state.changeModal,
        timerValue: state.timerValue,
        timerStarted: state.timerStarted,
        currentTime: state.changeCurrentTime
    };
};



const mapDispatchToProps = dispatch => {
    return {
        changeDrawerHere: () => {
            dispatch(changeDrawerAction());
        },
        changeModalHere: () => {
            dispatch(changeModalAction());
        },
        timerValueAddHere: () => {
            dispatch(timerValueAdd());
        },
        timerValueRemoveHere: () => {
            dispatch(timerValueRemove());
        },
        timerStartedHere: () => {
            dispatch(timerStarted());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bar);