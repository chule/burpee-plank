import { connect } from 'react-redux';
import { changeDrawerAction, timerStarted } from "../actions";
import DrawerComponent from "../components/DrawerComponent";

const mapStateToProps = state => {
    return {
        changeDrawer: state.changeDrawer,
        timerStarted: state.timerStarted,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeDrawerHere: () => {
            dispatch(changeDrawerAction());
        },
        timerStartedHere: () => {
            dispatch(timerStarted());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);