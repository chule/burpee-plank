import { connect } from 'react-redux';
import { timerValueAdd, timerValueRemove, timerStarted, currentTime } from "../actions";
import MainContentComponent from "../components/MainContentComponent";

const mapStateToProps = state => {
    return {
        timerValue: state.timerValue,
        timerStarted: state.timerStarted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        timerValueAddHere: () => {
            dispatch(timerValueAdd());
        },
        timerValueRemoveHere: () => {
            dispatch(timerValueRemove());
        },
        timerStartedHere: () => {
            dispatch(timerStarted());
        },
        changeCurrentTimeHere: (time) => {
            dispatch(currentTime(time));
        }         
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContentComponent);