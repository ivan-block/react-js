import React from "react";

function Heading() {
    const date = new Date();
    const time = date.getHours();
    let greeting;

    const colour = {
    color: ""
    };

    if (time >= 0 && time < 12) {
    greeting = "Good Morning";
    colour.color = "red";
    } else if (time >= 12 && time <= 18) {
    greeting = "Good Afternoon";
    colour.color = "green";
    } else {
    greeting = "Good Evening";
    colour.color = "blue";
    }

    return (
        <h1 className="heading" style={colour}>
        {greeting}
        </h1>
    );

}

export default Heading;