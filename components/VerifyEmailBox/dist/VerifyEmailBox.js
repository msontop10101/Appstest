"use strict";
exports.__esModule = true;
var react_1 = require("react");
var VerifyEmailBox_module_css_1 = require("./VerifyEmailBox.module.css");
var Typography_1 = require("@mui/material/Typography");
var CustomButton_1 = require("../CustomButton/CustomButton");
var Box_1 = require("@mui/material/Box");
var link_1 = require("next/link");
var image_1 = require("next/image");
var data_1 = require("../../files/data");
function VerifyEmailBox() {
    var buttonStyles = {
        fontSize: "1.2rem",
        marginTop: 2,
        padding: 1,
        "&:hover": {
            backgroundColor: "#00690B"
        }
    };
    var headerOne = {
        fontWeight: "bold",
        fontSize: 24
    };
    var headerMsg = {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.7)"
    };
    var textLogo = {
        color: "#00690B",
        textTransform: "uppercase",
        fontWeight: "bold"
    };
    var lMsg = {
        color: "rgba(0, 0, 0, 0.7);",
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 2
    };
    var lmsg = {
        color: "rgba(0, 0, 0, 0.7);",
        fontWeight: "bold",
        fontSize: 14
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: VerifyEmailBox_module_css_1["default"].container },
            react_1["default"].createElement("div", { className: VerifyEmailBox_module_css_1["default"].contentContainer },
                react_1["default"].createElement("div", { className: VerifyEmailBox_module_css_1["default"].headerContent },
                    react_1["default"].createElement("div", { className: VerifyEmailBox_module_css_1["default"].logo },
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement("a", null,
                                react_1["default"].createElement(Typography_1["default"], { sx: textLogo, variant: "h6" }, "AppsTest")))),
                    react_1["default"].createElement("div", { className: VerifyEmailBox_module_css_1["default"].verify },
                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[9], alt: "verify" })),
                    react_1["default"].createElement("div", { className: VerifyEmailBox_module_css_1["default"].headerTexts },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Verify email address")),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "we have sent you a unique link to your email adddress to help you proceed in exploring AppsTest")))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(link_1["default"], { href: "../../ConfirmEmail" },
                        react_1["default"].createElement("a", null,
                            react_1["default"].createElement(CustomButton_1["default"], { type: "submit", color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true },
                                react_1["default"].createElement(Typography_1["default"], null,
                                    react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Open email app")))))),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(Typography_1["default"], { sx: lMsg }, " Skip I'll confirm later"),
                    react_1["default"].createElement(Typography_1["default"], { sx: lmsg },
                        " ",
                        "Didn't recieve email, Check your spam folder or",
                        " ",
                        react_1["default"].createElement("span", { className: VerifyEmailBox_module_css_1["default"].link }, "try another email address")))))));
}
exports["default"] = VerifyEmailBox;
