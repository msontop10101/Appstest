"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("@mui/material/Button");
var CustomButton = function (_a) {
    var children = _a.children, color = _a.color, size = _a.size, variant = _a.variant, fullWidth = _a.fullWidth, sx = _a.sx, type = _a.type;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Button_1["default"], { color: color, size: size, variant: variant, sx: sx, type: "submit", fullWidth: true }, children)));
};
exports["default"] = CustomButton;
