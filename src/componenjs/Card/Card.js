"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Card.css");
var _vivoY33s = _interopRequireDefault(require("../../assets/vivo-y33s.png"));
var _like = _interopRequireDefault(require("../../assets/like.svg"));
var _raiting = _interopRequireDefault(require("../../assets/raiting.svg"));
var _notice = _interopRequireDefault(require("../../assets/notice.svg"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Card = function Card(item) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sale"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sale-element"
  }, "-39%"), /*#__PURE__*/React.createElement("span", {
    className: "sale-element"
  }, item.Icon)), /*#__PURE__*/React.createElement("div", {
    className: "container-img"
  }, /*#__PURE__*/React.createElement("img", {
    src: item.Icon,
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
  }, "\u2605 4.8")), /*#__PURE__*/React.createElement("div", {
    className: "device_name-container"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "device_name"
  }, item.ItemName)), /*#__PURE__*/React.createElement("div", {
    className: "price-container"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price-main"
  }, item.Price, " \u20BD"), /*#__PURE__*/React.createElement("del", {
    className: "price-sale"
  }, "50085 \u20BD")), /*#__PURE__*/React.createElement("div", {
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
var _default = exports.default = Card;