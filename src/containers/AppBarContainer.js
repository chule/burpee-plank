import { connect } from 'react-redux';
import { changeDrawerAction } from "../actions";
import { signIn, signOut, startListeningToAuthChanges } from "../actions/auth.js";
import AppBarComponent from  "../components/AppBarComponent";



const mapStateToProps = state => {
    // console.log(state)
    return {
        changeDrawer: state.changeDrawer,
        authState: state.authReducer
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeDrawerHere: () => {
            dispatch(changeDrawerAction());
        },
        signIn: () => {
            dispatch(signIn());
        },
        signOut: () => {
            dispatch(signOut());
        },
        startListeningToAuthChanges: () => {
            dispatch(startListeningToAuthChanges());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);