"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./SeasonalProducts.css");
var _Card = _interopRequireDefault(require("../Card/Card"));
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
var _items = _interopRequireDefault(require("../../data/items.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SeasonalProducts = function SeasonalProducts() {
  return /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-header"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0421\u0435\u0437\u043E\u043D\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u044B"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0412\u0441\u0435")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u041A\u0443\u043B\u044C\u0442\u0438\u0432\u0430\u0442\u043E\u0440\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0421\u0430\u0434\u043E\u0432\u044B\u0435")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u041A\u0443\u0441\u0442\u043E\u0440\u0435\u0437\u044B, \u0441\u0430\u0434\u043E\u0432\u044B\u0435 \u043D\u043E\u0436\u043D\u0438\u0446\u044B")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u0421\u0442\u0435\u043A\u043B\u043E\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043B\u0438")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null, "\u041C\u043E\u0439\u043A\u0438")))), /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement(_Card.default, _items.default[4]), /*#__PURE__*/React.createElement(_Card.default, _items.default[5]), /*#__PURE__*/React.createElement(_Card.default, _items.default[6]), /*#__PURE__*/React.createElement(_Card.default, _items.default[7])));
};
var _default = exports.default = SeasonalProducts;