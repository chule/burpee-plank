import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import BarContainer from "../containers/BarContainer";
import CenterTextContainer from "../containers/CenterTextContainer";

const MainContentContainer = ({ timerValue, timerStarted, timerStartedHere,
    changeCurrentTimeHere, repetitonAddHere }) => {

    //changeCurrentTimeHere(timerValue)    
    let currentTimerInterval;
    let currentTimerValue;

    if (timerStarted) {
        currentTimerValue = timerValue;
        //changeCurrentTimeHere(timerValue);
        currentTimerInterval = setInterval(() => {

            currentTimerValue = currentTimerValue - 1;
            changeCurrentTimeHere(currentTimerValue);

            if (currentTimerValue < 0) {
                clearInterval(currentTimerInterval);
                changeCurrentTimeHere(timerValue);
                timerStartedHere();
                repetitonAddHere();
            }
        }, 1000)


    } else {
        if (currentTimerInterval) {
            clearInterval(currentTimerInterval);
        }
    }



    return (
        <div className="mainContent" style={{ backgroundColor: "white" }/*{ backgroundColor: bgColor }*/}>
            <div className="mainConfig">

                <div>
                    <CenterTextContainer />

                    {/* {this.state.windowWidth > 768 
                    ?
                        <Bar className="bar" width={this.state.windowWidth * 2 / 3} height="30" data={this.state.timer} timerValue={this.state.timerValue} /> 
                        :
                        <Bar className="bar" width="200" height="15" data={this.state.timer} timerValue={this.state.timerValue} />
                    } */}

                    <BarContainer className="bar" width="200" height="15"  />
                    {/* data={timerValue} timerValue={timerValue}  */}


                </div>
            </div>
            <div className="mainButton">
                <RaisedButton
                    buttonStyle={{ height: 150, width: 150 }}
                    label={timerStarted ? "Reset" : "Add one!"}
                    onClick={() => {

                        timerStartedHere();
                        console.log("start timer",timerStarted)
                        if (timerStarted) {
                            clearInterval(currentTimerInterval);
                            changeCurrentTimeHere(timerValue);
                        }

                        
                    }} // this.buttonClick
                    style={{ margin: 12 }}
                    disabled={false} //this.state.runTimer
                />
            </div>
        </div>
    )
}

export default MainContentContainer;