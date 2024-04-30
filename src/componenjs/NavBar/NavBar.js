"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./NavBar.css");
var _loc = _interopRequireDefault(require("../../assets/loc.svg"));
var _tel = _interopRequireDefault(require("../../assets/tel.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var NavBar = function NavBar() {
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", {
    className: "ul-1"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041E \u041D\u0430\u0441")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041C\u0430\u0433\u0430\u0437\u0438\u043D\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043A\u0430\u0437\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0412\u043E\u0437\u0432\u0440\u0430\u0442")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), /*#__PURE__*/React.createElement("ul", {
    className: "ul-2"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, /*#__PURE__*/React.createElement("img", {
    className: "img",
    src: _loc.default
  })), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, " \u041C\u043E\u0441\u043A\u0432\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, /*#__PURE__*/React.createElement("img", {
    className: "img",
    src: _tel.default
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+7(812)834-84-88"
  }, " +7 (812) 834-84-88"))));
};
var _default = exports.default = NavBar;