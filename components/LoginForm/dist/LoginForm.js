"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomButton_1 = require("../CustomButton/CustomButton");
var LoginForm_module_css_1 = require("./LoginForm.module.css");
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
var KeyboardBackspace_1 = require("@mui/icons-material/KeyboardBackspace");
var formik_1 = require("formik");
var yup = require("yup");
var validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    password: yup.string().min(8).required("Password is required")
});
var LoginForm = function () {
    var _a = react_1.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var handleClickShowPassword = function () {
        setShowPassword(!showPassword);
    };
    var formik = formik_1.useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            alert(JSON.stringify(values, null, 2));
        }
    });
    var labelStyles = {
        fontSize: 15,
        marginBottom: 1,
        marginTop: 2,
        color: {
            xs: "#ffffff",
            sm: "#000000"
        }
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
    var headerOne = {
        fontWeight: "bold"
    };
    var headerMsg = {
        fontSize: 12,
        color: { xs: "#ffffff", sm: "rgba(0, 0, 0, 0.7)" }
    };
    var pshow = {
        fontSize: 12,
        cursor: "pointer"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].container },
            react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].containerContent },
                react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
                    react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].contentWrapper },
                        react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].headerContent },
                            react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].backIcon },
                                react_1["default"].createElement(link_1["default"], { href: "/" },
                                    react_1["default"].createElement("a", null,
                                        react_1["default"].createElement(KeyboardBackspace_1["default"], null)))),
                            react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].headerTexts },
                                react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].headerOne },
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Welcome Back"),
                                    react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].dwave },
                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[0], alt: "wave" })),
                                    react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].mwave },
                                        react_1["default"].createElement(image_1["default"], { src: data_1.RLoginIcons[1], alt: "wave" }))),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "We're excited to have you back")))),
                        react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].formContainer },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(Box_1["default"], null,
                                    react_1["default"].createElement(FormControl_1["default"], null,
                                        react_1["default"].createElement("div", null,
                                            react_1["default"].createElement(Grid_1["default"], { container: true, columnSpacing: 3 },
                                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                                    react_1["default"].createElement("label", null,
                                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Work Email")),
                                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[2], alt: "password" }),
                                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                                        }, id: "email", name: "email", size: "small", variant: "outlined", placeholder: "Enter your work email address", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email &&
                                                            Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email })),
                                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                                    react_1["default"].createElement("label", null,
                                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Password")),
                                                    react_1["default"].createElement(TextField_1["default"], { autoComplete: "new-password", fullWidth: true, InputProps: {
                                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[1], alt: "password" }),
                                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" }))),
                                                            endAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "end" },
                                                                react_1["default"].createElement("div", { onClick: handleClickShowPassword },
                                                                    react_1["default"].createElement(Typography_1["default"], { variant: "body1", sx: pshow }, showPassword ? "hide" : "show"))))
                                                        }, id: "password", name: "password", type: showPassword ? "text" : "password", size: "small", variant: "outlined", placeholder: "Enter your password", value: formik.values.password, onChange: formik.handleChange, error: formik.touched.password &&
                                                            Boolean(formik.errors.password), helperText: formik.touched.password &&
                                                            formik.errors.password }),
                                                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                                        react_1["default"].createElement("div", { className: LoginForm_module_css_1["default"].fpswd },
                                                            react_1["default"].createElement(link_1["default"], { href: "../../ForgotPassword" },
                                                                react_1["default"].createElement("a", null,
                                                                    react_1["default"].createElement(Typography_1["default"], null, "Forgot Password?")))))))))),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(CustomButton_1["default"], { color: "secondary", size: "small", variant: "contained", sx: buttonStyles, type: "submit", fullWidth: true },
                                        react_1["default"].createElement(Typography_1["default"], null,
                                            react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Sign in"))))))))))));
};
exports["default"] = LoginForm;
