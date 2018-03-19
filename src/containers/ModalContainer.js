import { connect } from 'react-redux';
import { changeDrawerAction, changeModalAction, timerValueAdd, timerValueRemove } from "../actions";
import ModalComponent from "../components/ModalComponent";

const mapStateToProps = state => {
    return {
        changeDrawer: state.changeDrawer,
        changeModal: state.changeModal,
        timerValue: state.timerValue
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
        }         
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);