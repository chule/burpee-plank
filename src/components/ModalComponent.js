import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

const Modal = ({ changeDrawerHere, changeModal, changeModalHere,
    timerValue, timerValueAddHere, timerValueRemoveHere, timerStartedHere, timerStarted, changeCurrentTimeHere }) => {

    const handleClose = () => {

        changeModalHere();
        changeDrawerHere();
        changeCurrentTimeHere(timerValue);
    };

    const actions = [

        <FlatButton
            label="Submit"
            primary={true}
            //keyboardFocused={true}
            onClick={handleClose}
        />,
    ];


    return (

        <div>

            <MenuItem onClick={() => changeModalHere()}>Set timer</MenuItem>

            <Dialog
                title="Set timer value"
                actions={actions}
                modal={false}
                open={changeModal}
                onRequestClose={() => changeModalHere()}
            >
                <div className="settingsContainer">
                    <div>
                        <h2> {timerValue}</h2>
                    </div>
                    <div>
                        <RaisedButton onClick={() => timerValueRemoveHere()}>Timer -</RaisedButton>
                        <RaisedButton onClick={() => timerValueAddHere()}>Timer +</RaisedButton>
                    </div>
                </div>
            </Dialog>
        </div>
    );

}

export default Modal;