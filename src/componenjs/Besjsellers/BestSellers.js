"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./BestSellers.css");
var _Card = _interopRequireDefault(require("../Card/Card"));
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
var _items = _interopRequireDefault(require("../../data/items.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var BestSellers = function BestSellers() {
  return /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-header"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0425\u0438\u0442\u044B \u043F\u0440\u043E\u0434\u0430\u0436"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0412\u0441\u0435")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0421\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0448\u0438\u043D\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u041F\u044B\u043B\u0435\u0441\u043E\u0441\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0438")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u041C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u044B\u0435 \u043F\u0435\u0447\u0438")))), /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement(_Card.default, _items.default[0]), /*#__PURE__*/React.createElement(_Card.default, _items.default[1]), /*#__PURE__*/React.createElement(_Card.default, _items.default[2]), /*#__PURE__*/React.createElement(_Card.default, _items.default[3])));
};
var _default = exports.default = BestSellers;