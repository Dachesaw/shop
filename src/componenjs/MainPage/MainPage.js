"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./MainPage.css");
var _CategoryMain = _interopRequireDefault(require("../CategoryMain/CategoryMain"));
var _Ads = _interopRequireDefault(require("../Ads/Ads"));
var _PopularCategory = _interopRequireDefault(require("../PopularCategory/PopularCategory"));
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
var _phone = _interopRequireDefault(require("../../assets/phone.png"));
var _washing = _interopRequireDefault(require("../../assets/washing.png"));
var _vacum = _interopRequireDefault(require("../../assets/vacum.png"));
var _fridge = _interopRequireDefault(require("../../assets/fridge.png"));
var _tv = _interopRequireDefault(require("../../assets/tv.png"));
var _microwave = _interopRequireDefault(require("../../assets/microwave.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MainPage = function MainPage() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(_Ads.default, null), /*#__PURE__*/React.createElement(_PopularCategory.default, null));
};
var _default = exports.default = MainPage;