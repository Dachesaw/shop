"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Ads.css");
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Ads = function Ads() {
  return /*#__PURE__*/React.createElement("div", {
    className: "ads-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "button-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    id: "buttons-ads-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: _leftAdsButton.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    id: "buttons-ads-right"
  }, /*#__PURE__*/React.createElement("img", {
    src: _rightAdsButton.default,
    alt: ""
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ads"
  }), /*#__PURE__*/React.createElement("ul", {
    className: "sitebar"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", null))));
};
var _default = exports.default = Ads;