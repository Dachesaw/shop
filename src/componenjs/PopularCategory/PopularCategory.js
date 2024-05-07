"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./PopularCategory.css");
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
var _phone = _interopRequireDefault(require("../../assets/phone.png"));
var _washing = _interopRequireDefault(require("../../assets/washing.png"));
var _vacum = _interopRequireDefault(require("../../assets/vacum.png"));
var _fridge = _interopRequireDefault(require("../../assets/fridge.png"));
var _tv = _interopRequireDefault(require("../../assets/tv.png"));
var _microwave = _interopRequireDefault(require("../../assets/microwave.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PopularCategory = function PopularCategory() {
  return /*#__PURE__*/React.createElement("div", {
    className: "popular-category"
  }, /*#__PURE__*/React.createElement("h2", null, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), /*#__PURE__*/React.createElement("button", {
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
    className: "wrap-items-popular-cat"
  }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: _phone.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u044B"))), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: _washing.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0421\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u044B\u0435", /*#__PURE__*/React.createElement("br", null), "\u043C\u0430\u0448\u0438\u043D\u044B"))), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: _vacum.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041F\u044B\u043B\u0435\u0441\u043E\u0441\u044B"))), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: _fridge.default,
    alt: "",
    width: 60
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0425\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A\u0438"))), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: _tv.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u044B"))), /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
    src: _microwave.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("figcaption", null, /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u044B\u0435", /*#__PURE__*/React.createElement("br", null), "\u043F\u0435\u0447\u0438")))));
};
var _default = exports.default = PopularCategory;