/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/app.tsx":
/*!*************************!*\
  !*** ./src/app/app.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var redux_1 = __webpack_require__(/*! redux */ "redux");
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var component1_1 = __webpack_require__(/*! ./component1 */ "./src/app/component1.tsx");
var component2_1 = __webpack_require__(/*! ./component2 */ "./src/app/component2.tsx");
var state_1 = __webpack_require__(/*! ./state */ "./src/app/state.ts");
var reducer_1 = __webpack_require__(/*! ./reducer */ "./src/app/reducer.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
function init(container) {
    var store = redux_1.createStore(reducer_1.reducer, new state_1.AppState());
    /*store.subscribe(() => {
        console.log("listener: ")
        console.log(store.getState())
    })*/
    store.dispatch({ type: "INIT", message: "initial", temp: "enter message" });
    ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: component1_1.Component1 }),
                React.createElement(react_router_dom_1.Route, { path: "/2", component: component2_1.Component2 })))), document.getElementById(container));
}
window.global = {
    init: {
        app: function (container) { return init(container); }
    }
};


/***/ }),

/***/ "./src/app/component1.tsx":
/*!********************************!*\
  !*** ./src/app/component1.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var Component1 = /** @class */ (function (_super) {
    __extends(Component1, _super);
    function Component1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component1.prototype.render = function () {
        var msg = this.props.msg;
        return React.createElement("div", null,
            "connected component, state message: ",
            msg,
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: msg }),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: "/2" }, "goto #2"));
    };
    return Component1;
}(React.Component));
exports.Component1 = Component1;


/***/ }),

/***/ "./src/app/component2.tsx":
/*!********************************!*\
  !*** ./src/app/component2.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var react_redux_1 = __webpack_require__(/*! react-redux */ "react-redux");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
var TestComponent2 = /** @class */ (function (_super) {
    __extends(TestComponent2, _super);
    function TestComponent2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestComponent2.prototype.render = function () {
        var _a = this.props, msg = _a.msg, setMessage = _a.setMessage, msg_temp = _a.msg_temp, tempChanged = _a.tempChanged;
        return React.createElement("div", null,
            "connected component, state message: ",
            msg,
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: msg_temp, onChange: function (e) { return tempChanged(e.target.value); } }),
            React.createElement("br", null),
            React.createElement("button", { onClick: function (e) { return setMessage(msg_temp); } }, "set message"),
            React.createElement("br", null),
            React.createElement(react_router_dom_1.Link, { to: "/1" }, "goto #1"));
    };
    return TestComponent2;
}(React.Component));
var mapState = function (state) {
    return {
        msg_temp: state.msg_temp,
        msg: state.msg
    };
};
var mapDispatch = function (dispatch) {
    return {
        setMessage: function (val) { return dispatch({ type: "SET_MSG", message: val }); },
        tempChanged: function (val) { return dispatch({ type: "TEMP_CHANGED", text: val }); }
    };
};
exports.Component2 = react_redux_1.connect(mapState, mapDispatch)(TestComponent2);


/***/ }),

/***/ "./src/app/reducer.ts":
/*!****************************!*\
  !*** ./src/app/reducer.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
function reducer(state, action) {
    console.log(action);
    var ns2 = __assign({}, state);
    switch (action.type) {
        case "INIT":
            ns2.msg = action.message;
            ns2.msg_temp = action.temp;
            break;
        case "SET_MSG":
            ns2.msg = action.message;
            break;
        case "TEMP_CHANGED":
            ns2.msg_temp = action.text;
            break;
    }
    return ns2;
}
exports.reducer = reducer;


/***/ }),

/***/ "./src/app/state.ts":
/*!**************************!*\
  !*** ./src/app/state.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppState = /** @class */ (function () {
    function AppState() {
    }
    return AppState;
}());
exports.AppState = AppState;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ "react-redux":
/*!*****************************!*\
  !*** external "ReactRedux" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRedux;

/***/ }),

/***/ "react-router-dom":
/*!*********************************!*\
  !*** external "ReactRouterDom" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactRouterDom;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "Redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Redux;

/***/ })

/******/ });
//# sourceMappingURL=app.js.map