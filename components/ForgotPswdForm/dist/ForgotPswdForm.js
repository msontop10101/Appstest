"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ForgotPswdForm_module_css_1 = require("./ForgotPswdForm.module.css");
var link_1 = require("next/link");
var image_1 = require("next/image");
var data_1 = require("../../files/data");
var Typography_1 = require("@mui/material/Typography");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var Divider_1 = require("@mui/material/Divider");
var Grid_1 = require("@mui/material/Grid");
var TextField_1 = require("@mui/material/TextField");
var CustomButton_1 = require("../CustomButton/CustomButton");
var Box_1 = require("@mui/material/Box");
var formik_1 = require("formik");
var yup = require("yup");
var router_1 = require("next/router");
var validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required")
});
function ForgotPswdForm() {
    var router = router_1.useRouter();
    var formik = formik_1.useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            // alert(JSON.stringify(values, null, 2));
            router.push("/ResetPassword");
        }
    });
    var headerOne = {
        fontWeight: "bold"
    };
    var headerMsg = {
        fontSize: 12,
        color: "rgba(0, 0, 0, 0.7)"
    };
    var textLogo = {
        color: "#00690B",
        textTransform: "uppercase",
        fontWeight: "bold"
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
    var backLink = {
        fontSize: 14,
        color: "#00690B",
        cursor: "pointer"
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].container },
            react_1["default"].createElement("form", { onSubmit: formik.handleSubmit },
                react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].containerContent },
                    react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].contentWrapper },
                        react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].headerContent },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(link_1["default"], { href: "/" },
                                    react_1["default"].createElement("a", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: textLogo, variant: "h6" }, "AppsTest")))),
                            react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].headerTexts },
                                react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].headerOne },
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Forgot Password")),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerMsg }, "Enter your email and you'll recieve an email with your password reset link")))),
                        react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].formContainer },
                            react_1["default"].createElement(Grid_1["default"], { container: true, rowSpacing: 1.5 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Work Email")),
                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[2], alt: "password" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                        }, id: "email", name: "email", size: "small", variant: "outlined", placeholder: "Enter your work email address", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email })))),
                        react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].buttons },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(CustomButton_1["default"], { color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true, type: "submit" },
                                    react_1["default"].createElement(Typography_1["default"], null,
                                        react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Send email")))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement("div", { className: ForgotPswdForm_module_css_1["default"].backLink },
                                    react_1["default"].createElement(link_1["default"], { href: "../../Login" },
                                        react_1["default"].createElement(Typography_1["default"], { sx: backLink },
                                            react_1["default"].createElement("a", null, "Back to Login page"))))))))))));
}
exports["default"] = ForgotPswdForm;
