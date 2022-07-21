"use strict";
exports.__esModule = true;
var react_1 = require("react");
var RqForm_module_css_1 = require("./RqForm.module.css");
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
    firstName: yup.string().min(2).required("Field is required"),
    lastName: yup.string().min(2).required("Field is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),
    phone: yup.number().min(8).required("Field is required")
});
function RqForm() {
    var router = router_1.useRouter();
    var formik = formik_1.useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: ""
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
    var ccStyles = {
        "& .MuiInputBase-root": {
            "& input": {
                textAlign: "center"
            },
            fontSize: "1rem"
        }
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].container },
            react_1["default"].createElement("form", { onSubmit: formik.handleSubmit, autoComplete: "off" },
                react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].containerContent },
                    react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].contentWrapper },
                        react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].headerContent },
                            react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].backIcon },
                                react_1["default"].createElement(link_1["default"], { href: "/" },
                                    react_1["default"].createElement("a", null,
                                        react_1["default"].createElement(KeyboardBackspace_1["default"], null)))),
                            react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].headerTexts },
                                react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].headerOne },
                                    react_1["default"].createElement(Typography_1["default"], { sx: headerOne, variant: "h6" }, "Request Quote"),
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[3], alt: "wave" }))))),
                        react_1["default"].createElement("div", { className: RqForm_module_css_1["default"].formContainer },
                            react_1["default"].createElement(Grid_1["default"], { container: true, rowSpacing: 1.5, columnSpacing: 2 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "First Name")),
                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[4], alt: "detail" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                        }, id: "firstName", name: "firstName", size: "small", variant: "outlined", placeholder: "Enter your first name", value: formik.values.firstName, onChange: formik.handleChange, error: formik.touched.firstName &&
                                            Boolean(formik.errors.firstName), helperText: formik.touched.firstName && formik.errors.firstName })),
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Last Name")),
                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[4], alt: "detail" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                        }, id: "lastName", name: "lastName", size: "small", variant: "outlined", placeholder: "Enter your last name", value: formik.values.lastName, onChange: formik.handleChange, error: formik.touched.lastName &&
                                            Boolean(formik.errors.lastName), helperText: formik.touched.lastName && formik.errors.lastName })),
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 12 },
                                    react_1["default"].createElement("label", null,
                                        react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Work Email")),
                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                            startAdornment: (react_1["default"].createElement(InputAdornment_1["default"], { position: "start" },
                                                react_1["default"].createElement(image_1["default"], { src: data_1.LoginFormImgs[2], alt: "email" }),
                                                react_1["default"].createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                                        }, id: "email", name: "email", size: "small", variant: "outlined", placeholder: "Enter your work email address", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email }))),
                            react_1["default"].createElement("label", null,
                                react_1["default"].createElement(Typography_1["default"], { sx: labelStyles }, "Phone Number")),
                            react_1["default"].createElement(Grid_1["default"], { container: true, columnSpacing: 2 },
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 3, sm: 2 },
                                    react_1["default"].createElement(TextField_1["default"], { sx: ccStyles, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "+234" })),
                                react_1["default"].createElement(Grid_1["default"], { item: true, xs: 9, sm: 10 },
                                    react_1["default"].createElement(TextField_1["default"], { fullWidth: true, id: "phone", name: "phone", size: "small", variant: "outlined", placeholder: "9029855826", value: formik.values.phone, onChange: formik.handleChange, error: formik.touched.phone && Boolean(formik.errors.phone), helperText: formik.touched.phone && formik.errors.phone }))),
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(CustomButton_1["default"], { color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true, type: "submit" },
                                    react_1["default"].createElement(Typography_1["default"], null,
                                        react_1["default"].createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Request Quote")))))))))));
}
exports["default"] = RqForm;
