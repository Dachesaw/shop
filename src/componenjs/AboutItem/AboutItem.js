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
var _shopIcon = _interopRequireDefault(require("../../assets/shopIcon.svg"));
var _truckIcon = _interopRequireDefault(require("../../assets/truckIcon.svg"));
var _favorite = _interopRequireDefault(require("../../assets/favorite.svg"));
var _statisticsIcon = _interopRequireDefault(require("../../assets/statisticsIcon.svg"));
var _bellIcon = _interopRequireDefault(require("../../assets/bellIcon.svg"));
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
  }, /*#__PURE__*/React.createElement("div", {
    id: "photos-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main-img-container"
  }, /*#__PURE__*/React.createElement("img", {
    src: _phone.default,
    alt: "",
    id: "main-item-image"
  })), /*#__PURE__*/React.createElement("div", {
    className: "additional-image-scroll"
  }, /*#__PURE__*/React.createElement("img", {
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
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "\u0426\u0432\u0435\u0442 \u043A\u043E\u0440\u043F\u0443\u0441\u0430"), /*#__PURE__*/React.createElement("button", {
    className: "choose-model-button choose-model-button-active"
  }, "\u0421\u0438\u043D\u0438\u0439"), /*#__PURE__*/React.createElement("button", {
    className: "choose-model-button"
  }, "\u0422\u0435\u043C\u043D\u043E-\u0441\u0435\u0440\u044B\u0439"), /*#__PURE__*/React.createElement("h3", null, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438"), /*#__PURE__*/React.createElement("p", null, "\u042D\u043A\u0440\u0430\u043D: 6.82\" 720x1640 \u043F\u0438\u043A\u0441\u0435\u043B\u0435\u0439, IPS"), /*#__PURE__*/React.createElement("p", null, "\u041F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440:\xA0\xA0MediaTek Helio G99 , 8 \u044F\u0434\u0440., 2.2 \u0413\u0413\u0446"), /*#__PURE__*/React.createElement("p", null, "\u041F\u0430\u043C\u044F\u0442\u044C:\xA0\xA0\u041E\u0417\u0423 8 \u0413\u0411 , 128 \u0413\u0411"), /*#__PURE__*/React.createElement("p", null, "\u0424\u043E\u0440\u043C\u0430\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 SIM-\u043A\u0430\u0440\u0442\u044B:\xA0\xA0Nano"), /*#__PURE__*/React.createElement("p", null, "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u043C\u043E\u0434\u0443\u043B\u044F \u043A\u0430\u043C\u0435\u0440\u044B:\xA0\xA050 \u041C\u043F"), /*#__PURE__*/React.createElement("a", {
    href: ""
  }, "\u0412\u0441\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "21 770\u202F\u20BD"), /*#__PURE__*/React.createElement("p", null, "50085 \u20BD"), /*#__PURE__*/React.createElement("p", null, "\u0420\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0430 \u043E\u0442 267 \u20BD/\u043C\u0435\u0441."), /*#__PURE__*/React.createElement("button", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443"), /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("img", {
    src: _shopIcon.default,
    alt: ""
  }), "\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437 \u0437\u0430\u0432\u0442\u0440\u0430, \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("p", null, " ", /*#__PURE__*/React.createElement("img", {
    src: _truckIcon.default,
    alt: ""
  }), "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0437\u0430\u0432\u0442\u0440\u0430"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: _favorite.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: _statisticsIcon.default,
    alt: ""
  }), /*#__PURE__*/React.createElement("img", {
    src: _bellIcon.default,
    alt: ""
  }))))));
}