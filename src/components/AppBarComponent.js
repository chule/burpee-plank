import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { auth, database, googleAuthProvider } from '../components/firebase';
import React from "react";

const AppBarComponent = ({ changeDrawerHere }) => {
    var user = false;

    return (
        <AppBar
            title="Burpee plank timer"
            titleStyle={{ textAlign: "left" }}
            onLeftIconButtonClick={() => { changeDrawerHere()}}
            iconElementRight={
                user
                    ? <FlatButton label={"Sign Out " + user.displayName.split(" ")[0]} onClick={this.signOut} />

                    : <FlatButton label="Sign in" onClick={() => auth.signInWithPopup(googleAuthProvider)} />
            }
        />
    )
}

export default AppBarComponent;