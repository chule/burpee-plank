import { connect } from 'react-redux';
import {
    changeDrawerAction, changeModalAction,
    timerValueAdd, timerValueRemove, timerStarted, repetitonAdd
} from "../actions";
import CenterTextComponent from "../components/CenterTextComponent";

const mapStateToProps = state => {

    return {
        changeDrawer: state.changeDrawer,
        changeModal: state.changeModal,
        timerValue: state.timerValue,
        timerStarted: state.timerStarted,
        currentTime: state.changeCurrentTime,
        repetitions: state.repetitions
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
        },
        repetitonAddHere: () => {
            dispatch(repetitonAdd());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CenterTextComponent);