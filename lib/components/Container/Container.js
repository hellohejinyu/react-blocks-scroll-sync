"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.fill");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

var _react = require("react");

var _Block = _interopRequireDefault(require("../Block/Block"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Container =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "getElementChildNodesArr",
    value: function getElementChildNodesArr(node) {
      var arr = [];
      var count = node.childNodes.length;

      for (var i = 0; i < count; i++) {
        if (node.childNodes[i].nodeType === 1) {
          arr.push(node.childNodes[i]);
        }
      }

      return arr;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      var find = Array.from(document.querySelectorAll(".react-scroll-sync-block"));

      if (find.length == 0) {
        console.warn("There is no scroll block find!");
        return;
      }

      var latestCount = -1,
          flag = true;
      find.forEach(function (el, index) {
        var count = _this.getElementChildNodesArr(el).length;

        if (count != latestCount && latestCount != -1) {
          flag = false;
        }

        latestCount = count;
      });

      if (!flag) {
        console.warn("Every scroll block childrens count shoule be same!If not, this library won't work.");
        return;
      }

      var scrollFlag = new Array(find.length).fill(false);
      find.forEach(function (el, index) {
        el.addEventListener("scroll", function () {
          if (!scrollFlag[index]) {
            scrollFlag.fill(true);
            scrollFlag[index] = false;
            var _flag = false;

            var elArr = _this.getElementChildNodesArr(el);

            elArr.forEach(function (_el, _index) {
              var px = _el.offsetTop - el.scrollTop;

              if (px > 0 && !_flag && _index > 0) {
                var currNode = elArr[_index - 1];
                var currentOffsetHeight = currNode.offsetHeight;
                var otherFind = find.filter(function (_find, __index) {
                  return __index != index;
                });
                otherFind.forEach(function (_find) {
                  var _elArr = _this.getElementChildNodesArr(_find);

                  var compareNode = _elArr[_index - 1];
                  var compareOffsetHeight = compareNode.offsetHeight;
                  var times = compareOffsetHeight / currentOffsetHeight;

                  var alreadyPx = _elArr.reduce(function (prev, current, currentIndex) {
                    if (currentIndex < _index - 1) {
                      var tmpNode = _elArr[currentIndex];
                      return prev + tmpNode.offsetHeight;
                    } else {
                      return prev;
                    }
                  }, 0);

                  var __ = elArr[_index - 1];
                  _find.scrollTop = alreadyPx + times * -(__.offsetTop - el.scrollTop);
                });
                _flag = true;
              }
            });
          }

          scrollFlag[index] = false;
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);

  return Container;
}(_react.PureComponent);

_defineProperty(Container, "Block", _Block.default);

var _default = Container;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci9Db250YWluZXIudHN4Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIm5vZGUiLCJhcnIiLCJjb3VudCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJpIiwibm9kZVR5cGUiLCJwdXNoIiwiZmluZCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJ3YXJuIiwibGF0ZXN0Q291bnQiLCJmbGFnIiwiZm9yRWFjaCIsImVsIiwiaW5kZXgiLCJnZXRFbGVtZW50Q2hpbGROb2Rlc0FyciIsInNjcm9sbEZsYWciLCJmaWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9mbGFnIiwiZWxBcnIiLCJfZWwiLCJfaW5kZXgiLCJweCIsIm9mZnNldFRvcCIsInNjcm9sbFRvcCIsImN1cnJOb2RlIiwiY3VycmVudE9mZnNldEhlaWdodCIsIm9mZnNldEhlaWdodCIsIm90aGVyRmluZCIsImZpbHRlciIsIl9maW5kIiwiX19pbmRleCIsIl9lbEFyciIsImNvbXBhcmVOb2RlIiwiY29tcGFyZU9mZnNldEhlaWdodCIsInRpbWVzIiwiYWxyZWFkeVB4IiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJjdXJyZW50SW5kZXgiLCJ0bXBOb2RlIiwiX18iLCJjaGlsZHJlbiIsInByb3BzIiwiUHVyZUNvbXBvbmVudCIsIkJsb2NrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1NQSxTOzs7Ozs7Ozs7Ozs7OzRDQUc0QkMsSSxFQUFtQjtBQUNqRCxVQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBLFVBQUlDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxVQUFMLENBQWdCQyxNQUE1Qjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEtBQXBCLEVBQTJCRyxDQUFDLEVB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QixHQUFHRCxXQUFXLENBQUNOLFlBQXRDO0FBQ0Esc0JBQUlRLEtBQUssR0FBR0QsbUJBQW1CLEdBQUdSLG1CQUFsQzs7QUFFQSxzQkFBSVUsU0FBUyxHQUFHSixNQUFNLENBQUNLLE1BQVAsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLE9BQVAsRUFBZ0JDLFlBQWhCLEVBQWlDO0FBQzdELHdCQUFJQSxZQUFZLEdBQUduQixNQUFNLEdBQUcsQ0FBNUIsRUFBK0I7QUFDN0IsMEJBQUlvQixPQUFPLEdBQUdULE1BQU0sQ0FBQ1EsWUFBRCxDQUFwQjtBQUNBLDZCQUFPRixJQUFJLEdBQUdHLE9BQU8sQ0FBQ2QsWUFBdEI7QUFDRCxxQkFIRCxNQUdPO0FBQ0wsNkJBQU9XLElBQVA7QUFDRDtBQUNGLG1CQVBlLEVBT2IsQ0FQYSxDQUFoQjs7QUFRQSxzQkFBSUksRUFBRSxHQUFHdkIsS0FBSyxDQUFDRSxNQUFNLEdBQUcsQ0FBVixDQUFkO0FBQ0FTLGtCQUFBQSxLQUFLLENBQUNOLFNBQU4sR0FBa0JZLFNBQVMsR0FBR0QsS0FBSyxHQUFHLEVBQUVPLEVBQUUsQ0FBQ25CLFNBQUgsR0FBZVgsRUFBRSxDQUFDWSxTQUFwQixDQUF0QztBQUNELGlCQWpCRDtBQWtCQU4sZ0JBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0Q7QUFDRixhQTlCRDtBQWdDRDs7QUFDREgsVUFBQUEsVUFBVSxDQUFDRixLQUFELENBQVYsR0FBb0IsS0FBcEI7QUFDRCxTQTNDRDtBQTRDRCxPQTdDRDtBQThDRDs7OzZCQUVRO0FBQUEsVUFDQzhCLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREO0FBRVAsYUFBT0EsUUFBUDtBQUNEOzs7O0VBdkZxQkUsb0I7O2dCQUFsQnBELFMsV0FDZ0JxRCxjOztlQXlGUHJELFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJsb2NrIGZyb20gXCIuLi9CbG9jay9CbG9ja1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjaGlsZHJlbjogYW55O1xufVxuXG5jbGFzcyBDb250YWluZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICBzdGF0aWMgQmxvY2s6IGFueSA9IEJsb2NrO1xuXG4gIHByaXZhdGUgZ2V0RWxlbWVudENoaWxkTm9kZXNBcnIobm9kZTogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgYXJyID0gW107XG4gICAgbGV0IGNvdW50ID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgIGlmIChub2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgYXJyLnB1c2gobm9kZS5jaGlsZE5vZGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBmaW5kID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlYWN0LXNjcm9sbC1zeW5jLWJsb2NrXCIpKTtcbiAgICBpZiAoZmluZC5sZW5ndGggPT0gMCkge1xuICAgICAgY29uc29sZS53YXJuKFwiVGhlcmUgaXMgbm8gc2Nyb2xsIGJsb2NrIGZpbmQhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsYXRlc3RDb3VudCA9IC0xLCBmbGFnID0gdHJ1ZTtcbiAgICBmaW5kLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY291bnQgPSB0aGlzLmdldEVsZW1lbnRDaGlsZE5vZGVzQXJyKGVsKS5sZW5ndGg7XG4gICAgICBpZiAoKGNvdW50ICE9IGxhdGVzdENvdW50KSAmJiBsYXRlc3RDb3VudCAhPSAtMSkge1xuICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsYXRlc3RDb3VudCA9IGNvdW50O1xuICAgIH0pXG5cbiAgICBpZiAoIWZsYWcpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkV2ZXJ5IHNjcm9sbCBibG9jayBjaGlsZHJlbnMgY291bnQgc2hvdWxlIGJlIHNhbWUhSWYgbm90LCB0aGlzIGxpYnJhcnkgd29uJ3Qgd29yay5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbEZsYWcgPSBuZXcgQXJyYXkoZmluZC5sZW5ndGgpLmZpbGwoZmFsc2UpO1xuICAgIGZpbmQuZm9yRWFjaCgoZWw6IGFueSwgaW5kZXgpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoIXNjcm9sbEZsYWdbaW5kZXhdKSB7XG4gICAgICAgICAgc2Nyb2xsRmxhZy5maWxsKHRydWUpO1xuICAgICAgICAgIHNjcm9sbEZsYWdbaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgbGV0IF9mbGFnID0gZmFsc2U7XG5cbiAgICAgICAgICBsZXQgZWxBcnI6IGFueVtdID0gdGhpcy5nZXRFbGVtZW50Q2hpbGROb2Rlc0FycihlbCk7XG5cblxuICAgICAgICAgIGVsQXJyLmZvckVhY2goKF9lbDogYW55LCBfaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGxldCBweCA9IF9lbC5vZmZzZXRUb3AgLSBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICBpZiAocHggPiAwICYmICFfZmxhZyAmJiBfaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgIGxldCBjdXJyTm9kZSA9IGVsQXJyW19pbmRleCAtIDFdO1xuICAgICAgICAgICAgICBsZXQgY3VycmVudE9mZnNldEhlaWdodCA9IGN1cnJOb2RlLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICBsZXQgb3RoZXJGaW5kID0gZmluZC5maWx0ZXIoKF9maW5kLCBfX2luZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9faW5kZXggIT0gaW5kZXg7XG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgb3RoZXJGaW5kLmZvckVhY2goKF9maW5kOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgX2VsQXJyID0gdGhpcy5nZXRFbGVtZW50Q2hpbGROb2Rlc0FycihfZmluZClcblxuICAgICAgICAgICAgICAgIGxldCBjb21wYXJlTm9kZSA9IF9lbEFycltfaW5kZXggLSAxXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBsZXQgY29tcGFyZU9mZnNldEhlaWdodCA9IGNvbXBhcmVOb2RlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICBsZXQgdGltZXMgPSBjb21wYXJlT2Zmc2V0SGVpZ2h0IC8gY3VycmVudE9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIGxldCBhbHJlYWR5UHggPSBfZWxBcnIucmVkdWNlKChwcmV2LCBjdXJyZW50LCBjdXJyZW50SW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBfaW5kZXggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0bXBOb2RlID0gX2VsQXJyW2N1cnJlbnRJbmRleF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgdG1wTm9kZS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgICAgIGxldCBfXyA9IGVsQXJyW19pbmRleCAtIDFdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIF9maW5kLnNjcm9sbFRvcCA9IGFscmVhZHlQeCArIHRpbWVzICogLShfXy5vZmZzZXRUb3AgLSBlbC5zY3JvbGxUb3ApO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBfZmxhZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcblxuICAgICAgICB9XG4gICAgICAgIHNjcm9sbEZsYWdbaW5kZXhdID0gZmFsc2U7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyJdfQ==