"use strict";
exports.__esModule = true;
var React = require("react");
var Box_1 = require("@mui/material/Box");
var Card_1 = require("@mui/material/Card");
var CardActions_1 = require("@mui/material/CardActions");
var CardContent_1 = require("@mui/material/CardContent");
var CustomButton_1 = require("../CustomButton/CustomButton");
var Typography_1 = require("@mui/material/Typography");
var buttonStyles = {
    fontSize: "1.2rem",
    width: {
        sm: 200
    },
    marginTop: 2,
    padding: 1,
    "&:hover": {
        backgroundColor: "#00690B"
    }
};
function CustomCard() {
    return (React.createElement(Card_1["default"], { sx: { minWidth: 275 } },
        React.createElement(CardContent_1["default"], null,
            React.createElement(Typography_1["default"], { sx: { fontSize: 14 } }, "We are pleased to show you the key functionalities of AppsTest - This tour takes about 5 minutes - you'll be a pro in no time")),
        React.createElement(CardActions_1["default"], null,
            React.createElement(CustomButton_1["default"], { type: "submit", color: "transparent", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true },
                React.createElement(Typography_1["default"], null,
                    React.createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Take the produt tour"))),
            React.createElement(CustomButton_1["default"], { type: "submit", color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true },
                React.createElement(Typography_1["default"], null,
                    React.createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Create your first test"))))));
}
exports["default"] = CustomCard;
