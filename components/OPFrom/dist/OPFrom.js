"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomButton_1 = require("../CustomButton/CustomButton");
var OPForm_module_css_1 = require("./OPForm.module.css");
var link_1 = require("next/link");
var image_1 = require("next/image");
var data_1 = require("../../files/data");
var Box_1 = require("@mui/material/Box");
var TextField_1 = require("@mui/material/TextField");
var Grid_1 = require("@mui/material/Grid");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var Divider_1 = require("@mui/material/Divider");
var FormControl_1 = require("@mui/material/FormControl");
var Typography_1 = require("@mui/material/Typography");
var Button_1 = require("@mui/material/Button");
function OPForm() {
    var headerStyles = {
        marginTop: 2
    };
    var labelStyles = {
        fontSize: 15,
        marginBottom: 1,
        marginTop: 2
    };
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
    var inviteBtn = {
        fontSize: "1.2rem",
        width: {
            sm: 100
        },
        padding: 1
    };
    var headerOne = {
        fontWeight: "bold"
    };
    var headerMsg = {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.7)"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].container },
            react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].containerContent },
                react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].contentWrapper },
                    react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].headerContent },
                        react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].headerTexts },
                            react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].headerOne },
                                react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Setup your organization profile")),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "Please fill in your details to create your organization profile")))),
                    react_1["default"].createElement("div", { className: OPForm_module_css_1["default"].formContainer },
                        react_1["default"].createElement(Box_1["default"], null,
                            react_1["default"].createElement(FormControl_1["default"], null,
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(Grid_1["default"], { container: true, columnSpacing: 3 },
                                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                            react_1["default"].createElement("label", null,
                                                react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Name of Organization")),
                                            react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                                    startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[7], alt: "org" }),
                                                        react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                                }, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "Company" })),
                                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                            react_1["default"].createElement("label", null,
                                                react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Role in Organization")),
                                            react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                                    startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[7], alt: "org" }),
                                                        react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                                }, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "Enter your password" }))),
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Invite your team")),
                                    react_1["default"].createElement(Grid_1["default"], { container: true },
                                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 7 },
                                            react_1["default"].createElement(TextField_1["default"], { sx: {
                                                    "& .MuiInputBase-root": {
                                                        border: "1px solid gray",
                                                        borderRadius: "5px 0px 0px 5px"
                                                    }
                                                }, fullWidth: true, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "Invite your team (Multiple lines and comma)" })),
                                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 3 },
                                            react_1["default"].createElement(TextField_1["default"], { sx: {
                                                    "& .MuiInputBase-root": {
                                                        border: "1px solid gray",
                                                        borderRadius: "0px 5px 5px 0px"
                                                    }
                                                }, fullWidth: true, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "Member" })),
                                        react_1["default"].createElement(Grid_1["default"], { item: true, xs: 2 },
                                            react_1["default"].createElement(Button_1["default"], { color: "primary", size: "small", variant: "contained", sx: inviteBtn, fullWidth: true },
                                                react_1["default"].createElement(Typography_1["default"], null,
                                                    react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Invite")))))))),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(link_1["default"], { href: "../../Dashboard" },
                                react_1["default"].createElement("a", null,
                                    react_1["default"].createElement(CustomButton_1["default"], { color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true, type: "submit" },
                                        react_1["default"].createElement(Typography_1["default"], null,
                                            react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Setup Profile"))))))))))));
}
exports["default"] = OPForm;
