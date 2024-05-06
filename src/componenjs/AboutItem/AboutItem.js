"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AboutItem;
var _phone = _interopRequireDefault(require("../../assets/phone-images/phone-1.svg"));
var _phone2 = _interopRequireDefault(require("../../assets/phone-images/phone-2.svg"));
var _phone3 = _interopRequireDefault(require("../../assets/phone-images/phone-3.svg"));
var _phone4 = _interopRequireDefault(require("../../assets/phone-images/phone-4.svg"));
var _phone5 = _interopRequireDefault(require("../../assets/phone-images/phone-5.svg"));
var _leftAdsButton = _interopRequireDefault(require("../../assets/left-ads-button.svg"));
var _rightAdsButton = _interopRequireDefault(require("../../assets/right-ads-button.svg"));
require("./AboutItem.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function AboutItem() {
  function ItemImgChange(e) {
    var oldMainImg = document.getElementById("main-item-image");
    var additionalImages = document.querySelectorAll(".additional-item-image");
    if (oldMainImg !== null) {
      oldMainImg.src = e.target.src;
      additionalImages.forEach(function (img) {
        img.classList.remove("chosen-item-image");
      });
      e.target.classList.add("chosen-item-image");
    } else {
      alert("error");
    }
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "about-item-section"
  }, /*#__PURE__*/React.createElement("h2", null, "\u0421\u043C\u0430\u0440\u0442\u0444\u043E\u043D TECNO Pova 4 LG7n 8GB/128GB (\u0441\u0435\u0440\u044B\u0439)"), /*#__PURE__*/React.createElement("span", null, "-39%"), /*#__PURE__*/React.createElement("span", null, "\u0422\u043E\u0432\u0430\u0440 \u0438\u0437 \u0440\u0435\u043A\u043B\u0430\u043C\u044B"), /*#__PURE__*/React.createElement("div", {
    className: "item-container"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "main-img-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: _phone.default,
    alt: "",
    id: "main-item-image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "additional-image-scroll"
  }, /*#__PURE__*/React.createElement("button", {
    className: "buttons-ads-left"
  }, /*#__PURE__*/React.createElement("img", {
    src: _leftAdsButton.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("button", {
    className: "buttons-ads-right"
  }, /*#__PURE__*/React.createElement("img", {
    src: _rightAdsButton.default,
    alt: ""
  })), /*#__PURE__*/React.createElement("img", {
    src: _phone.default,
    alt: "",
    className: "additional-item-image chosen-item-image",
    onClick: ItemImgChange
  }), /*#__PURE__*/React.createElement("img", {
    src: _phone2.default,
    alt: "",
    className: "additional-item-image",
    onClick: ItemImgChange
  }), /*#__PURE__*/React.createElement("img", {
    src: _phone3.default,
    alt: "",
    className: "additional-item-image",
    onClick: ItemImgChange
  }), /*#__PURE__*/React.createElement("img", {
    src: _phone4.default,
    alt: "",
    className: "additional-item-image",
    onClick: ItemImgChange
  }), /*#__PURE__*/React.createElement("img", {
    src: _phone5.default,
    alt: "",
    className: "additional-item-image",
    onClick: ItemImgChange
  })))));
}