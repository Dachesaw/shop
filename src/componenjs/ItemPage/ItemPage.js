"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ItemPage;
var _NavBar = _interopRequireDefault(require("../NavBar/NavBar"));
var _Header = _interopRequireDefault(require("../Header/Header"));
var _Footer = _interopRequireDefault(require("../Footer/Footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ItemPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_NavBar.default, null), /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement(_Footer.default, null));
}