/*!
 * 
 * @license @rakuten-rex/radio-button v1.2.0 2020-03-31
 * RadioGroup/RadioGroup.development.js
 * 
 * Copyright (c) 2018-present, Rakuten, Inc.
 * 
 * This source code is licensed under the MIT license found in the LICENSE file in the root directory of this source tree.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("rakutenRexRadioButton", ["react"], factory);
	else if(typeof exports === 'object')
		exports["rakutenRexRadioButton"] = factory(require("react"));
	else
		root["rakutenRexRadioButton"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(4);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radio; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Radio_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _Radio_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Radio_scss__WEBPACK_IMPORTED_MODULE_3__);



/* eslint-disable react/jsx-props-no-spreading */


function Radio(_ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      isBlock = _ref.isBlock,
      value = _ref.value,
      label = _ref.label,
      disabled = _ref.disabled,
      checked = _ref.checked,
      required = _ref.required,
      onChange = _ref.onChange,
      style = _ref.style,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className", "id", "name", "isBlock", "value", "label", "disabled", "checked", "required", "onChange", "style"]);

  var labelClass = 'rex-radio-label';
  var layoutClass = isBlock ? 'rex-form-block' : null;
  var classes = ['rex-radio', layoutClass, className].join(' ').trim();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    value: value,
    id: id,
    name: name,
    type: "radio",
    checked: checked,
    disabled: disabled,
    required: required,
    onChange: onChange
  }, props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    className: labelClass,
    htmlFor: id
  }, label));
}
Radio.displayName = "Radio";
Radio.defaultProps = {
  className: '',
  disabled: false,
  checked: false,
  required: false,
  isBlock: false,
  id: '',
  name: '',
  label: '',
  value: '',
  onChange: function onChange() {
    return null;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(12);

var assertThisInitialized = __webpack_require__(6);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(13);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(8);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(9);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(6);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(10);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(11);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react","umd":"react"}
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_ = __webpack_require__(0);
var external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_);

// EXTERNAL MODULE: ./src/Radio/Radio.jsx
var Radio = __webpack_require__(3);

// CONCATENATED MODULE: ./src/Radio/index.jsx

// CONCATENATED MODULE: ./src/RadioGroup/RadioGroup.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioGroup_RadioGroup; });







function _createSuper(Derived) { return function () { var Super = getPrototypeOf_default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable react/jsx-props-no-spreading */



var RadioGroup_RadioGroup = /*#__PURE__*/function (_Component) {
  inherits_default()(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    classCallCheck_default()(this, RadioGroup);

    _this = _super.call(this, props);
    var options = _this.props.options;

    var checkedList = _this.setCheckedList(options);

    _this.state = {
      options: options,
      checkedList: checkedList
    };
    _this.handleChange = _this.handleChange.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(RadioGroup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var options = this.props.options;
      var canUpdate = false; // Check for options length (how many items)

      if (options.length !== prevProps.options.length) {
        // eslint-disable-next-line react/no-did-update-set-state
        canUpdate = true;
      } // Check for any change in options object values (data)
      // eslint-disable-next-line no-restricted-syntax


      for (var key in options) {
        if (options[key] !== prevProps.options[key]) {
          canUpdate = true;
          break;
        }
      }

      if (canUpdate) {
        this.updateCheckedState(options);
      }
    } // Set initial default values for checkedList
    // eslint-disable-next-line class-methods-use-this

  }, {
    key: "setCheckedList",
    value: function setCheckedList(options) {
      var checkedList = [];
      options.forEach(function (_ref) {
        var id = _ref.id,
            checked = _ref.checked;
        checkedList[id] = checked;
      });
      return checkedList;
    }
  }, {
    key: "updateCheckedState",
    value: function updateCheckedState(options) {
      var checkedList = this.setCheckedList(options);
      this.setState({
        options: options,
        checkedList: checkedList
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var _e$target = e.target,
          id = _e$target.id,
          checked = _e$target.checked;
      var checkedList = this.state.checkedList;

      if (checked) {
        checkedList = [];
      }

      checkedList[id] = checked;
      this.setState({
        checkedList: checkedList
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          isBlock = _this$props.isBlock;
      var _this$state = this.state,
          options = _this$state.options,
          checkedList = _this$state.checkedList;
      return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement("div", {
        className: className,
        style: style,
        role: "radiogroup"
      }, options.map(function (option) {
        var value = option.value,
            id = option.id,
            name = option.name,
            label = option.label,
            required = option.required,
            disabled = option.disabled;
        var checked = checkedList[id];
        return /*#__PURE__*/external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_default.a.createElement(Radio["default"], {
          key: id.toString(),
          id: id,
          name: name,
          value: value,
          onChange: !disabled ? _this2.handleChange : null,
          label: label,
          disabled: disabled,
          required: required,
          checked: checked,
          isBlock: isBlock
        });
      }));
    }
  }]);

  return RadioGroup;
}(external_root_React_commonjs2_react_commonjs_react_amd_react_umd_react_["Component"]);

RadioGroup_RadioGroup.displayName = "RadioGroup";

RadioGroup_RadioGroup.defaultProps = {
  className: 'rex-radio-group',
  // eslint-disable-next-line react/default-props-match-prop-types
  style: {},
  options: [],
  isBlock: false
};

/***/ })
/******/ ]);
});