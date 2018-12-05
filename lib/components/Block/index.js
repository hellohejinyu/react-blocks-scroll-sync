"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

var _react = _interopRequireWildcard(require("react"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  block: {
    height: 400,
    overflow: "auto"
  }
};

var Block =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Block, _PureComponent);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, _getPrototypeOf(Block).apply(this, arguments));
  }

  _createClass(Block, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          children = _this$props.children,
          className = _this$props.className,
          classes = _this$props.classes,
          rest = _objectWithoutProperties(_this$props, ["style", "children", "className", "classes"]);

      return _react.default.createElement("div", _extends({
        className: (0, _classnames.default)(classes.block, className, "react-scroll-sync-block"),
        style: _objectSpread({
          margin: 0,
          padding: 0,
          display: "block"
        }, style)
      }, rest), children);
    }
  }]);

  return Block;
}(_react.PureComponent);

var _default = (0, _reactJss.default)(styles)(Block);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Jsb2NrL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJibG9jayIsImhlaWdodCIsIm92ZXJmbG93IiwiQmxvY2siLCJwcm9wcyIsInN0eWxlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJjbGFzc2VzIiwicmVzdCIsIm1hcmdpbiIsInBhZGRpbmciLCJkaXNwbGF5IiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxNQUFNLEVBQUUsR0FESDtBQUVMQyxJQUFBQSxRQUFRLEVBQUU7QUFGTDtBQURNLENBQWY7O0lBY01DLEs7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSx3QkFDa0QsS0FBS0MsS0FEdkQ7QUFBQSxVQUNDQyxLQURELGVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxRQURSLGVBQ1FBLFFBRFI7QUFBQSxVQUNrQkMsU0FEbEIsZUFDa0JBLFNBRGxCO0FBQUEsVUFDNkJDLE9BRDdCLGVBQzZCQSxPQUQ3QjtBQUFBLFVBQ3lDQyxJQUR6Qzs7QUFFUCxhQUFPO0FBQ0wsUUFBQSxTQUFTLEVBQUUseUJBQVdELE9BQU8sQ0FBQ1IsS0FBbkIsRUFBMEJPLFNBQTFCLEVBQXFDLHlCQUFyQyxDQUROO0FBRUwsUUFBQSxLQUFLO0FBQUlHLFVBQUFBLE1BQU0sRUFBRSxDQUFaO0FBQWVDLFVBQUFBLE9BQU8sRUFBRSxDQUF4QjtBQUEyQkMsVUFBQUEsT0FBTyxFQUFFO0FBQXBDLFdBQWdEUCxLQUFoRDtBQUZBLFNBR0RJLElBSEMsR0FLSkgsUUFMSSxDQUFQO0FBT0Q7Ozs7RUFWaUJPLG9COztlQWFMLHVCQUFZZCxNQUFaLEVBQW9CSSxLQUFwQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENTU1Byb3BlcnRpZXMsIFB1cmVDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGluamVjdFNoZWV0IGZyb20gXCJyZWFjdC1qc3NcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmludGVyZmFjZSBTdHlsZXMge1xyXG4gIGJsb2NrOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBibG9jazoge1xyXG4gICAgaGVpZ2h0OiA0MDAsXHJcbiAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzLFxyXG4gIGNoaWxkcmVuOiBhbnksXHJcbiAgY2xhc3NlczogU3R5bGVzLFxyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuY2xhc3MgQmxvY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCB7fT4ge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc3R5bGUsIGNoaWxkcmVuLCBjbGFzc05hbWUsIGNsYXNzZXMsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5ibG9jaywgY2xhc3NOYW1lLCBcInJlYWN0LXNjcm9sbC1zeW5jLWJsb2NrXCIpfVxyXG4gICAgICBzdHlsZT17eyBtYXJnaW46IDAsIHBhZGRpbmc6IDAsIGRpc3BsYXk6IFwiYmxvY2tcIiwgLi4uc3R5bGUgfX1cclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0U2hlZXQoc3R5bGVzKShCbG9jayk7Il19