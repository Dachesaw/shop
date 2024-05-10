"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./ModalContent.css");
var ModalContent = function ModalContent(_ref) {
  var active = _ref.active,
    setActive = _ref.setActive;
  return /*#__PURE__*/React.createElement("div", {
    className: active ? "modalcontent-wrap active" : "modalcontent-wrap",
    onClick: function onClick() {
      return setActive(false);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: active ? "modalcontent active" : "modalcontent",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "close-modalcontent",
    onClick: function onClick() {
      return setActive(false);
    }
  }, "x"), /*#__PURE__*/React.createElement("h3", null, "\u0412\u0445\u043E\u0434 \u0438\u043B\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"), /*#__PURE__*/React.createElement("p", null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430. \u041C\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043C \u0432\u0430\u043C \u043A\u043E\u0434 \u0432 \u0421\u041C\u0421."), /*#__PURE__*/React.createElement("form", {
    action: "number"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form",
    type: "tel",
    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
  }), /*#__PURE__*/React.createElement("input", {
    className: "submit-button",
    type: "submit",
    value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u0434"
  }))));
};
var _default = exports.default = ModalContent;