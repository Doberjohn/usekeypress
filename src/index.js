"use strict";
exports.__esModule = true;
exports.useKeyPress = void 0;
var react_1 = require("react");
var useKeyPress = function (targetKey, ctrlRequired) {
    if (ctrlRequired === void 0) { ctrlRequired = false; }
    var _a = (0, react_1.useState)(false), keyPressed = _a[0], setKeyPressed = _a[1];
    function downHandler(e) {
        if (e.ctrlKey)
            e.preventDefault();
        if (e.keyCode === targetKey) {
            if (!ctrlRequired || (ctrlRequired && e.ctrlKey))
                setKeyPressed(true);
        }
    }
    var upHandler = function (_a) {
        var keyCode = _a.keyCode;
        if (keyCode === targetKey) {
            setKeyPressed(false);
        }
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return function () {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
        // eslint-disable-next-line
    }, []);
    return keyPressed;
};
exports.useKeyPress = useKeyPress;
