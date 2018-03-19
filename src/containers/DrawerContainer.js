import { connect } from 'react-redux';
import { changeDrawerAction } from "../actions";
import DrawerComponent from "../components/DrawerComponent";

const mapStateToProps = state => {
    return {
        changeDrawer: state.changeDrawer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeDrawerHere: () => {
            dispatch(changeDrawerAction());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);