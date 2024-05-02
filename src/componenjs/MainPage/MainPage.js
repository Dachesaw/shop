"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./MainPage.css");
var _CategoryMain = _interopRequireDefault(require("../CategoryMain/CategoryMain"));
var _Ads = _interopRequireDefault(require("../Ads/Ads"));
var _PopularCategory = _interopRequireDefault(require("../PopularCategory/PopularCategory"));
var _BestSellers = _interopRequireDefault(require("../BestSellers/BestSellers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var MainPage = function MainPage() {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(_BestSellers.default, null));
};
var _default = exports.default = MainPage;