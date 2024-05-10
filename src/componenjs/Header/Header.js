"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _burger = _interopRequireDefault(require("../../assets/burger.svg"));
var _favorite = _interopRequireDefault(require("../../assets/favorite.svg"));
var _login = _interopRequireDefault(require("../../assets/login.svg"));
var _shop_basket = _interopRequireDefault(require("../../assets/shop_basket.svg"));
var _search = _interopRequireDefault(require("../../assets/search.svg"));
var _react = require("react");
var _ModalContent = _interopRequireDefault(require("../ModalContent/ModalContent"));
require("./Header.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Header = function Header() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    modalActive = _useState2[0],
    setModalActive = _useState2[1];
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "burger_button btn-click"
  }, /*#__PURE__*/React.createElement("img", {
    src: _burger.default
  }), "\u041A\u0410\u0422\u0410\u041B\u041E\u0413")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "text",
    className: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u0430"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button_search"
  }, /*#__PURE__*/React.createElement("img", {
    src: _search.default,
    alt: ""
  }))))), /*#__PURE__*/React.createElement("ul", {
    className: "ul_2"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "btn-click"
  }, /*#__PURE__*/React.createElement("img", {
    src: _favorite.default,
    alt: "",
    width: 25
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-click"
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "btn-click"
  }, /*#__PURE__*/React.createElement("img", {
    src: _shop_basket.default,
    alt: "",
    width: 25
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-click"
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "open-btn accent-color btn-click",
    onClick: function onClick() {
      return setModalActive(true);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _login.default,
    alt: "",
    width: 25
  })), /*#__PURE__*/React.createElement("button", {
    className: "open-btn accent-color btn-click",
    onClick: function onClick() {
      return setModalActive(true);
    }
  }, "\u0412\u043E\u0439\u0442\u0438"))), /*#__PURE__*/React.createElement(_ModalContent.default, {
    active: modalActive,
    setActive: setModalActive
  }));
};
var _default = exports.default = Header;