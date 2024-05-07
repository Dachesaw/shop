"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./ServicesBlock.css");
var _Card = _interopRequireDefault(require("../Card3/Card3"));
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ServicesBlock = function ServicesBlock() {
  return /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-header"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0421\u0435\u0440\u0432\u0438\u0441\u044B"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0412\u0441\u0435")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0414\u043B\u044F \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u0432")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0414\u043B\u044F \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u043E\u0432")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0414\u043B\u044F \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u043E\u0432/\u043F\u043B\u0430\u043D\u0448\u0435\u0442\u043E\u0432")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0442\u0435\u0445\u043D\u0438\u043A\u0438")))), /*#__PURE__*/React.createElement("button", {
    className: "buttons-ads-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: _leftAdsButton.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    className: "buttons-ads-right"
  }, /*#__PURE__*/React.createElement("img", {
    src: _rightAdsButton.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-block"
  }, /*#__PURE__*/React.createElement(_Card.default, null), /*#__PURE__*/React.createElement(_Card.default, null), /*#__PURE__*/React.createElement(_Card.default, null), /*#__PURE__*/React.createElement(_Card.default, null)));
};
var _default = exports.default = ServicesBlock;