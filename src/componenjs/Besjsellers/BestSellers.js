"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./BestSellers.css");
var _Card = _interopRequireDefault(require("../Card/Card"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BestSellers = function BestSellers() {
  return /*#__PURE__*/React.createElement("div", {
    className: "best-sellers"
  }, /*#__PURE__*/React.createElement(_Card.default, null), /*#__PURE__*/React.createElement(_Card.default, null), /*#__PURE__*/React.createElement(_Card.default, null), /*#__PURE__*/React.createElement(_Card.default, null));
};
var _default = exports.default = BestSellers;