import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
//import { auth, database, googleAuthProvider } from '../components/firebase';
import React from "react";

const AppBarComponent = ({ changeDrawerHere, authState, signIn, signOut, startListeningToAuthChanges }) => {
    //console.log(authState)
    return (
        
        <AppBar
            title="Burpee plank timer"
            titleStyle={{ textAlign: "left" }}
            onLeftIconButtonClick={() => { changeDrawerHere()}}
            iconElementRight={
                authState.status === "SIGNED_IN"
                    ? <FlatButton label={"Sign Out " + authState.displayName.split(" ")[0]} onClick={() => signOut()} />

                    : <FlatButton label="Sign in" onClick={() => signIn()} />
            }
        />
    )
}

export default AppBarComponent;