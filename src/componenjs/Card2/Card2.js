"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Card2.css");
var _washing = _interopRequireDefault(require("../../assets/washing-1.png"));
var _like = _interopRequireDefault(require("../../assets/like.svg"));
var _raiting = _interopRequireDefault(require("../../assets/raiting.svg"));
var _notice = _interopRequireDefault(require("../../assets/notice.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Card2 = function Card2() {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sale"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sale-element"
  }, "\u0424\u0438\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0430")), /*#__PURE__*/React.createElement("div", {
    className: "container-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: _washing.default,
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
  }, "\u0420\u043E\u0431\u043E\u0442 \u0434\u043B\u044F \u043C\u044B\u0442\u044C\u044F \u043E\u043A\u043E\u043D \u0414\u0430\u0434\u0436\u0435\u0442 dBot W120")), /*#__PURE__*/React.createElement("div", {
    className: "price-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-main"
  }, "6 291 \u20BD"), /*#__PURE__*/React.createElement("del", {
    className: "price-sale"
  }, "12037 \u20BD")), /*#__PURE__*/React.createElement("div", {
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
var _default = exports.default = Card2;