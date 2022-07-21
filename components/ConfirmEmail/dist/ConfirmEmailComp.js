"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ConfirmEmailComp_module_css_1 = require("./ConfirmEmailComp.module.css");
var Typography_1 = require("@mui/material/Typography");
var CustomButton_1 = require("../CustomButton/CustomButton");
var Box_1 = require("@mui/material/Box");
var link_1 = require("next/link");
var Divider_1 = require("@mui/material/Divider");
function ConfirmEmailComp() {
    var buttonStyles = {
        fontSize: "1.2rem",
        // width: {
        //   sm: 200,
        // },
        marginTop: 1,
        padding: 1,
        "&:hover": {
            backgroundColor: "#00690B"
        }
    };
    var headerOne = {
        fontWeight: "bold",
        fontSize: 18
    };
    var headerMsg = {
        fontSize: 14,
        color: "rgba(0, 0, 0, 0.7)"
    };
    var textLogo = {
        color: "#00690B",
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: 1
    };
    var footerText = {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.7)"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: ConfirmEmailComp_module_css_1["default"].container },
            react_1["default"].createElement("div", { className: ConfirmEmailComp_module_css_1["default"].contentWrapper },
                react_1["default"].createElement("div", { className: ConfirmEmailComp_module_css_1["default"].contentContainer },
                    react_1["default"].createElement("div", { className: ConfirmEmailComp_module_css_1["default"].headerContent },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(link_1["default"], { href: "/" },
                                react_1["default"].createElement("a", null,
                                    react_1["default"].createElement(Typography_1["default"], { sx: textLogo, variant: "h6" }, "AppsTest"))),
                            react_1["default"].createElement(Divider_1["default"], null)),
                        react_1["default"].createElement("div", { className: ConfirmEmailComp_module_css_1["default"].headerTexts },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Hi, Maureen!")),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "Thanks for signing up with AppsTest! Before you get started with AppsTest, we need to confirm your email address")),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "Please click on the button below to complete your sign up")))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(link_1["default"], { href: "../../ProfileSetup" },
                            react_1["default"].createElement("a", null,
                                react_1["default"].createElement(CustomButton_1["default"], { type: "submit", color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true },
                                    react_1["default"].createElement(Typography_1["default"], null,
                                        react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Confirm email address")))))),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "If you have any trouble clicking the button above please copy and paste the URL below into your browser"),
                        react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }))),
                react_1["default"].createElement("div", { className: ConfirmEmailComp_module_css_1["default"].footer },
                    react_1["default"].createElement("footer", null,
                        react_1["default"].createElement(Typography_1["default"], { sx: footerText }, "\u00A9AppsTest Ltd 2021"),
                        react_1["default"].createElement(Typography_1["default"], { sx: footerText }, "Manual Testing platform for Africa")))))));
}
exports["default"] = ConfirmEmailComp;
