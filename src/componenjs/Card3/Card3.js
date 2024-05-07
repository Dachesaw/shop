"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Card3.css");
var _service = _interopRequireDefault(require("../../assets/service.png"));
var _like = _interopRequireDefault(require("../../assets/like.svg"));
var _raiting = _interopRequireDefault(require("../../assets/raiting.svg"));
var _notice = _interopRequireDefault(require("../../assets/notice.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Card3 = function Card3() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sale"
  }), /*#__PURE__*/React.createElement("div", {
    className: "container-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: _service.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("ul", {
    className: "progres-wrap"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "progres-btn"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "progres-btn"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "progres-btn"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "progres-btn"
  })), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "progres-btn"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "container-rating"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rating"
  }, "\u2605 5.0")), /*#__PURE__*/React.createElement("div", {
    className: "device_name-container"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "device_name"
  }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 SMART TV")), /*#__PURE__*/React.createElement("div", {
    className: "price-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-main"
  }, "1 200 \u20BD"), /*#__PURE__*/React.createElement("del", {
    className: "price-sale"
  }, "3000 \u20BD")), /*#__PURE__*/React.createElement("div", {
    className: "button-bug-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "bug"
  }, "\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")), /*#__PURE__*/React.createElement("div", {
    className: "button-container"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-var"
  }, /*#__PURE__*/React.createElement("img", {
    id: "like",
    src: _like.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-var"
  }, /*#__PURE__*/React.createElement("img", {
    id: "rating",
    src: _raiting.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-var"
  }, /*#__PURE__*/React.createElement("img", {
    id: "notice",
    src: _notice.default,
    alt: ""
  }))));
};
var _default = exports.default = Card3;