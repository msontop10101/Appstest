"use strict";
exports.__esModule = true;
var React = require("react");
var Box_1 = require("@mui/material/Box");
var TextField_1 = require("@mui/material/TextField");
var Grid_1 = require("@mui/material/Grid");
var AccountCircle_1 = require("@mui/icons-material/AccountCircle");
var InputAdornment_1 = require("@mui/material/InputAdornment");
var Divider_1 = require("@mui/material/Divider");
var FormControl_1 = require("@mui/material/FormControl");
var Typography_1 = require("@mui/material/Typography");
var CustomButton_1 = require("./CustomButton/CustomButton");
//FORMIK
var formik_1 = require("formik");
var yup = require("yup");
var validationSchema = yup.object({
    firstName: yup.string().required("Name is required"),
    lastName: yup.string().required("Name is required"),
    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required")
});
function BasicTextFields() {
    var formik = formik_1.useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        validationSchema: validationSchema,
        onSubmit: function (values) {
            alert(JSON.stringify(values, null, 2));
        }
    });
    var buttonStyles = {
        fontSize: "1.2rem",
        width: {
            sm: 300
        },
        marginTop: 2,
        padding: 1,
        "&:hover": {
            backgroundColor: "#00690B"
        }
    };
    var labelStyles = {
        fontSize: 15,
        marginBottom: 1,
        marginTop: 2
    };
    var ccStyles = {
        "& .MuiInputBase-root": {
            "& input": {
                textAlign: "center"
            },
            fontSize: "1rem"
        }
    };
    return (React.createElement("form", { onSubmit: formik.handleSubmit },
        React.createElement(Box_1["default"], null,
            React.createElement(FormControl_1["default"], { fullWidth: true },
                " ",
                React.createElement(Grid_1["default"], { container: true, columnSpacing: 2 },
                    React.createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                        React.createElement("label", null,
                            React.createElement(Typography_1["default"], { sx: labelStyles }, "First Name")),
                        React.createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                startAdornment: (React.createElement(InputAdornment_1["default"], { position: "start" },
                                    React.createElement(AccountCircle_1["default"], null),
                                    React.createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                            }, id: "firstName", name: "firstName", size: "small", variant: "outlined", placeholder: "Enter your first name", value: formik.values.firstName, onChange: formik.handleChange, error: formik.touched.firstName && Boolean(formik.errors.firstName), helperText: formik.touched.firstName && formik.errors.firstName })),
                    React.createElement(Grid_1["default"], { item: true, xs: 12, sm: 6 },
                        React.createElement("label", null,
                            React.createElement(Typography_1["default"], { sx: labelStyles }, "Last Name")),
                        React.createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                                startAdornment: (React.createElement(InputAdornment_1["default"], { position: "start" },
                                    React.createElement(AccountCircle_1["default"], null),
                                    React.createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                            }, id: "lastName", name: "lastName", size: "small", variant: "outlined", placeholder: "Enter your last name", value: formik.values.lastName, onChange: formik.handleChange, error: formik.touched.lastName && Boolean(formik.errors.lastName), helperText: formik.touched.lastName && formik.errors.lastName }))),
                React.createElement("label", null,
                    React.createElement(Typography_1["default"], { sx: labelStyles }, "Email Address")),
                React.createElement(TextField_1["default"], { fullWidth: true, InputProps: {
                        startAdornment: (React.createElement(InputAdornment_1["default"], { position: "start" },
                            React.createElement(AccountCircle_1["default"], null),
                            React.createElement(Divider_1["default"], { sx: { height: 28, m: 1.5 }, orientation: "vertical" })))
                    }, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "Enter your email address" }),
                React.createElement("label", null,
                    React.createElement(Typography_1["default"], { sx: labelStyles }, "Phone Number")),
                React.createElement(Grid_1["default"], { container: true, columnSpacing: 2 },
                    React.createElement(Grid_1["default"], { item: true, xs: 3, sm: 2 },
                        React.createElement(TextField_1["default"], { sx: ccStyles, id: "outlined-basic", size: "small", variant: "outlined", placeholder: "+234" })),
                    React.createElement(Grid_1["default"], { item: true, xs: 9, sm: 10 },
                        React.createElement(TextField_1["default"], { fullWidth: true, 
                            // sx={fieldStyles}
                            id: "email", name: "email", size: "small", variant: "outlined", placeholder: "9029855826", value: formik.values.email, onChange: formik.handleChange, error: formik.touched.email && Boolean(formik.errors.email), helperText: formik.touched.email && formik.errors.email }))),
                React.createElement(Grid_1["default"], { container: true },
                    React.createElement(Grid_1["default"], { item: true, xs: 12 },
                        React.createElement(CustomButton_1["default"], { type: "submit", color: "primary", size: "small", variant: "contained", sx: buttonStyles, fullWidth: true },
                            React.createElement(Typography_1["default"], null,
                                React.createElement(Box_1["default"], { sx: { textTransform: "capitalize" } }, "Request Quote")))))))));
}
exports["default"] = BasicTextFields;
