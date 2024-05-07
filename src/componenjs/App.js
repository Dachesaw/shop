"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./App.css");
var _NavBar = _interopRequireDefault(require("./NavBar/NavBar"));
var _Footer = _interopRequireDefault(require("./Footer/Footer"));
var _Header = _interopRequireDefault(require("./Header/Header"));
var _MainPage = _interopRequireDefault(require("./MainPage/MainPage"));
var _ItemPage = _interopRequireDefault(require("./ItemPage/ItemPage"));
var _ErrorPage = _interopRequireDefault(require("./ErrorPage/ErrorPage"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var router = (0, _reactRouterDom.createBrowserRouter)([{
  path: "/",
  element: /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(_MainPage.default, null)),
  errorElement: /*#__PURE__*/React.createElement(_ErrorPage.default, null)
}, {
  path: "/ItemPage",
  element: /*#__PURE__*/React.createElement(_ItemPage.default, null)
}]);
function App() {
  // const [count, setCount] = useState(0);
  return /*#__PURE__*/React.createElement(_reactRouterDom.RouterProvider, {
    router: router
  });
}
var _default = exports.default = App;