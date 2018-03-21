import React from "react";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ModalContainer from "../containers/ModalContainer";

const DrawerComponent = ({changeDrawer, changeDrawerHere}) => {
    return (
        <Drawer
            docked={false}
            open={changeDrawer}
            onRequestChange={ () => {
                changeDrawerHere() 
            }}
        >
            {/* <Modal
                onClick={this.appBarClick}
                handler={this.handler}
                //reset={this.buttonClickReset}
                timerValue={this.state.timerValue}
                closeDrawer={this.handleClose}
            /> */}
            <ModalContainer />

            {/* <MenuItem onClick={this.buttonClickReset}>Reset repetitions</MenuItem> */}
            <MenuItem onClick={() => changeDrawerHere()}>Close drawer</MenuItem> 
        </Drawer>
    );
}

export default DrawerComponent;