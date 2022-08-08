"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ResetPasswordForm_module_css_1 = require("./ResetPasswordForm.module.css");
var link_1 = require("next/link");
var image_1 = require("next/image");
var data_1 = require("../../files/data");
var CustomButton_1 = require("../CustomButton/CustomButton");
var Box_1 = require("@mui/material/Box");
var Typography_1 = require("@mui/material/Typography");
var KeyboardBackspace_1 = require("@mui/icons-material/KeyboardBackspace");
var Grid_1 = require("@mui/material/Grid");
var TextField_1 = require("@mui/material/TextField");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var Divider_1 = require("@mui/material/Divider");
var formik_1 = require("formik");
var yup = require("yup");
var router_1 = require("next/router");
var validationSchema = yup.object({
    password: yup
        .string()
        .min(8, "Charaters must be upto 8")
        .required("New password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
});
function ResetPasswordFrom() {
    var router = router_1.useRouter();
    var _a = react_1.useState(false), showPassword = _a[0], setShowPassword = _a[1];
    var handleClickShowPassword = function () {
        setShowPassword(!showPassword);
    };
    var formik = formik_1.useFormik({
        initialValues: {
            password: "",
            passwordConfirmation: ""
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            // alert(JSON.stringify(values, null, 2));
            router.push("/Dashboard");
        }
    });
    var headerOne = {
        fontWeight: "bold"
    };
    var labelStyles = {
        fontSize: 15,
        marginBottom: 1,
        marginTop: 1
    };
    var buttonStyles = {
        fontSize: "1.2rem",
        width: {
            sm: 200
        },
        marginTop: 1,
        padding: 1,
        "&:hover": {
            backgroundColor: "#00690B"
        }
    };
    var ccStyles = {
        "& .MuiInputBase-root": {
            "& input": {
                textAlign: "center"
            },
            fontSize: "1rem"
        }
    };
    var headerMsg = {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.7)"
    };
    var subMsg = {
        marginTop: 1,
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.7)"
    };
    var reqHeader = {
        fontWeight: "bold",
        textTransform: "capitalize",
        margin: "10px 0px 10px 0px"
    };
    var pshow = {
        fontSize: 14,
        cursor: "pointer"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].container },
            react_1["default"].createElement("form", { onSubmit: formik.handleSubmit, autoComplete: "off" },
                react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].containerContent },
                    react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].contentWrapper },
                        react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].headerContent },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(link_1["default"], { href: "/" },
                                    react_1["default"].createElement("a", null,
                                        react_1["default"].createElement(KeyboardBackspace_1["default"], null)))),
                            react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].headerTexts },
                                react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].headerOne },
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Reset Password"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[5], alt: "wave" }))),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "Enter your new password and confirm your password")))),
                        react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].formContainer },
                            react_1["default"].createElement(Grid_1["default"], { container: true, rowSpacing: 1.5, columnSpacing: 2 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "New Password")),
                                    react_1["default"].createElement(TextField_1["default"], { autoComplete: "new-password", fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[1], alt: "password" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" }))),
                                            endAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "end" },
                                                react_1["default"].createElement("div", { onClick: handleClickShowPassword },
                                                    react_1["default"].createElement(Typography_1["default"], { variant: "body1", sx: pshow }, showPassword ? "hide" : "show"))))
                                        }, id: "password", name: "password", type: showPassword ? "text" : "password", size: "small", variant: "outlined", placeholder: "Enter new password", value: formik.values.password, onChange: formik.handleChange, error: formik.touched.password &&
                                            Boolean(formik.errors.password), helperText: formik.touched.password && formik.errors.password }),
                                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                        react_1["default"].createElement(Typography_1["default"], { sx: subMsg }, "Must be at least 8 charaters"))),
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Confirm Password")),
                                    react_1["default"].createElement(TextField_1["default"], { autoComplete: "new-password", fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[1], alt: "password" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" }))),
                                            endAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "end" },
                                                react_1["default"].createElement("div", { onClick: handleClickShowPassword },
                                                    react_1["default"].createElement(Typography_1["default"], { variant: "body1", sx: pshow }, showPassword ? "hide" : "show"))))
                                        }, id: "passwordConfirmation", name: "passwordConfirmation", type: showPassword ? "text" : "password", size: "small", variant: "outlined", placeholder: "Enter new password", value: formik.values.passwordConfirmation, onChange: formik.handleChange, error: formik.touched.passwordConfirmation &&
                                            Boolean(formik.errors.passwordConfirmation), helperText: formik.touched.passwordConfirmation &&
                                            formik.errors.passwordConfirmation }),
                                    react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                        react_1["default"].createElement(Typography_1["default"], { sx: subMsg }, "Both passwords must match")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(CustomButton_1["default"], { type: "submit", color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true },
                                    react_1["default"].createElement(Typography_1["default"], null,
                                        react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Sign in"))))),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(Typography_1["default"], { sx: reqHeader }, "Password requirement:"),
                            react_1["default"].createElement("div", null, data_1.PasswordRequirement.map(function (reqs, index) {
                                var info = reqs.info;
                                return (react_1["default"].createElement("div", { key: index, className: ResetPasswordForm_module_css_1["default"].reqs },
                                    react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].checkImg },
                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[6], alt: "check" })),
                                    react_1["default"].createElement("div", { className: ResetPasswordForm_module_css_1["default"].info }, info)));
                            })))))))));
}
exports["default"] = ResetPasswordFrom;
