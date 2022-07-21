"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var RaForm_module_css_1 = require("./RaForm.module.css");
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
var Checkbox_1 = require("@mui/material/Checkbox");
var label = { inputProps: { "aria-label": "Checkbox demo" } };
var formik_1 = require("formik");
var yup = require("yup");
var router_1 = require("next/router");
var validationSchema = yup.object({
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required")
});
function RaForm() {
    var router = router_1.useRouter();
    var formik = formik_1.useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            // alert(JSON.stringify(values, null, 2));
            router.push("/VerifyEmail");
        }
    });
    var headerOne = {
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
    var checkedStyles = {
        color: "gray",
        "&.Mui-checked": {
            color: "#000000"
        }
    };
    var textStyle = {
        fontSize: 14
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].container },
            react_1["default"].createElement("form", { onSubmit: formik.handleSubmit, autoComplete: "off" },
                react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].containerContent },
                    react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].contentWrapper },
                        react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].headerContent },
                            react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].backIcon },
                                react_1["default"].createElement(link_1["default"], { href: "/" },
                                    react_1["default"].createElement("a", null,
                                        react_1["default"].createElement(KeyboardBackspace_1["default"], null)))),
                            react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].headerTexts },
                                react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].headerOne },
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Request Access"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[3], alt: "wave" }))))),
                        react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].formContainer },
                            react_1["default"].createElement(Grid_1["default"], { container: true, rowSpacing: 2 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Work Email")),
                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[2], alt: "password" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                        }, id: "email", name: "email", size: "small", variant: "outlined", placeholder: "Enter your work email address", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email })),
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].check },
                                        react_1["default"].createElement("div", null,
                                            react_1["default"].createElement(Checkbox_1["default"], __assign({}, label, { sx: checkedStyles }))),
                                        react_1["default"].createElement(Typography_1["default"], { sx: textStyle },
                                            "I have read and I agreee with the",
                                            " ",
                                            react_1["default"].createElement("span", { className: RaForm_module_css_1["default"].link }, "Terms of use")))),
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("div", { className: RaForm_module_css_1["default"].check },
                                        react_1["default"].createElement("div", null,
                                            react_1["default"].createElement(Checkbox_1["default"], __assign({}, label, { sx: checkedStyles }))),
                                        react_1["default"].createElement(Typography_1["default"], { sx: textStyle }, "Send me occasional email about AppsTest services (unsubscribe at any time)"))))),
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(CustomButton_1["default"], { color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true, type: "submit" },
                                react_1["default"].createElement(Typography_1["default"], null,
                                    react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Request Access"))))))))));
}
exports["default"] = RaForm;
