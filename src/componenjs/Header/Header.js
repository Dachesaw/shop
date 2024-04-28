"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _burger = _interopRequireDefault(require("../../assets/burger.svg"));
var _favorite = _interopRequireDefault(require("../../assets/favorite.svg"));
var _login = _interopRequireDefault(require("../../assets/login.svg"));
var _shop_basket = _interopRequireDefault(require("../../assets/shop_basket.svg"));
var _search = _interopRequireDefault(require("../../assets/search.svg"));
require("./Header.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var search2 = /*#__PURE__*/React.createElement("img", {
  src: _search.default
});
var Header = function Header() {
  return /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "burger_button"
  }, /*#__PURE__*/React.createElement("img", {
    src: _burger.default
  }), "\u041A\u0410\u0422\u0410\u041B\u041E\u0413")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "text",
    className: "search",
    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0442\u043E\u0432\u0430\u0440\u0430"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "button_search"
  }, /*#__PURE__*/React.createElement("img", {
    src: _search.default,
    alt: ""
  }))))), /*#__PURE__*/React.createElement("ul", {
    className: "ul_2"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
    src: _favorite.default,
    alt: "",
    width: 25
  }), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
    src: _shop_basket.default,
    alt: "",
    width: 25
  }), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("img", {
    src: _login.default,
    alt: "",
    width: 25
  }), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0412\u043E\u0439\u0442\u0438"))));
};
var _default = exports.default = Header;