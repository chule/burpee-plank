import React from "react";

const CenterText = ({ timerValue, timerStarted, currentTime, repetitions }) => {
    return (
        <p style={{ color: "#55585a" }}>
            Repetitions today: {repetitions}
        {/* {this.state.number + this.state.serverRepetitions} */}
            <br />
            Timer duration: {timerValue}
            <br />
            Timer: {currentTime === "not_set" ? timerValue : currentTime}
            {/* {this.state.timer} */}
        </p>
    )
}

export default CenterText;