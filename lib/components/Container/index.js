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

var _Block = _interopRequireDefault(require("../Block"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci9pbmRleC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwibm9kZSIsImFyciIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJub2RlVHlwZSIsInB1c2giLCJmaW5kIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsIndhcm4iLCJsYXRlc3RDb3VudCIsImZsYWciLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsImdldEVsZW1lbnRDaGlsZE5vZGVzQXJyIiwic2Nyb2xsRmxhZyIsImZpbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiX2ZsYWciLCJlbEFyciIsIl9lbCIsIl9pbmRleCIsInB4Iiwib2Zmc2V0VG9wIiwic2Nyb2xsVG9wIiwiY3Vyck5vZGUiLCJjdXJyZW50T2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3RoZXJGaW5kIiwiZmlsdGVyIiwiX2ZpbmQiLCJfX2luZGV4IiwiX2VsQXJyIiwiY29tcGFyZU5vZGUiLCJjb21wYXJlT2Zmc2V0SGVpZ2h0IiwidGltZXMiLCJhbHJlYWR5UHgiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImN1cnJlbnRJbmRleCIsInRtcE5vZGUiLCJfXyIsImNoaWxkcmVuIiwicHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU1BLFM7Ozs7Ozs7Ozs7Ozs7NENBRzRCQyxJLEVBQW1CO0FBQ2pELFVBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLFVBQUwsQ0FBZ0JDLE1BQTVCOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBcEIsRUFBMkJHLENBQUMsRUFBNUIs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QUdELFdBQVcsQ0FBQ04sWUFBdEM7QUFDQSxzQkFBSVEsS0FBSyxHQUFHRCxtQkFBbUIsR0FBR1IsbUJBQWxDOztBQUVBLHNCQUFJVSxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLFVBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsWUFBaEIsRUFBaUM7QUFDN0Qsd0JBQUlBLFlBQVksR0FBR25CLE1BQU0sR0FBRyxDQUE1QixFQUErQjtBQUM3QiwwQkFBSW9CLE9BQU8sR0FBR1QsTUFBTSxDQUFDUSxZQUFELENBQXBCO0FBQ0EsNkJBQU9GLElBQUksR0FBR0csT0FBTyxDQUFDZCxZQUF0QjtBQUNELHFCQUhELE1BR087QUFDTCw2QkFBT1csSUFBUDtBQUNEO0FBQ0YsbUJBUGUsRUFPYixDQVBhLENBQWhCOztBQVFBLHNCQUFJSSxFQUFFLEdBQUd2QixLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFWLENBQWQ7QUFDQVMsa0JBQUFBLEtBQUssQ0FBQ04sU0FBTixHQUFrQlksU0FBUyxHQUFHRCxLQUFLLEdBQUcsRUFBRU8sRUFBRSxDQUFDbkIsU0FBSCxHQUFlWCxFQUFFLENBQUNZLFNBQXBCLENBQXRDO0FBQ0QsaUJBakJEO0FBa0JBTixnQkFBQUEsS0FBSyxHQUFHLElBQVI7QUFDRDtBQUNGLGFBOUJEO0FBZ0NEOztBQUNESCxVQUFBQSxVQUFVLENBQUNGLEtBQUQsQ0FBVixHQUFvQixLQUFwQjtBQUNELFNBM0NEO0FBNENELE9BN0NEO0FBOENEOzs7NkJBRVE7QUFBQSxVQUNDOEIsUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7QUFFUCxhQUFPQSxRQUFQO0FBQ0Q7Ozs7RUF2RnFCRSxvQjs7Z0JBQWxCcEQsUyxXQUNnQnFELGM7O2VBeUZQckQsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCbG9jayBmcm9tIFwiLi4vQmxvY2tcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IGFueTtcclxufVxyXG5cclxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcywge30+IHtcclxuICBzdGF0aWMgQmxvY2s6IGFueSA9IEJsb2NrO1xyXG5cclxuICBwcml2YXRlIGdldEVsZW1lbnRDaGlsZE5vZGVzQXJyKG5vZGU6IEhUTUxFbGVtZW50KSB7XHJcbiAgICBsZXQgYXJyID0gW107XHJcbiAgICBsZXQgY291bnQgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgIGlmIChub2RlLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IDEpIHtcclxuICAgICAgICBhcnIucHVzaChub2RlLmNoaWxkTm9kZXNbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBsZXQgZmluZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWFjdC1zY3JvbGwtc3luYy1ibG9ja1wiKSk7XHJcbiAgICBpZiAoZmluZC5sZW5ndGggPT0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXCJUaGVyZSBpcyBubyBzY3JvbGwgYmxvY2sgZmluZCFcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbGF0ZXN0Q291bnQgPSAtMSwgZmxhZyA9IHRydWU7XHJcbiAgICBmaW5kLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBjb3VudCA9IHRoaXMuZ2V0RWxlbWVudENoaWxkTm9kZXNBcnIoZWwpLmxlbmd0aDtcclxuICAgICAgaWYgKChjb3VudCAhPSBsYXRlc3RDb3VudCkgJiYgbGF0ZXN0Q291bnQgIT0gLTEpIHtcclxuICAgICAgICBmbGFnID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGF0ZXN0Q291bnQgPSBjb3VudDtcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKCFmbGFnKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcIkV2ZXJ5IHNjcm9sbCBibG9jayBjaGlsZHJlbnMgY291bnQgc2hvdWxlIGJlIHNhbWUhSWYgbm90LCB0aGlzIGxpYnJhcnkgd29uJ3Qgd29yay5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc2Nyb2xsRmxhZyA9IG5ldyBBcnJheShmaW5kLmxlbmd0aCkuZmlsbChmYWxzZSk7XHJcbiAgICBmaW5kLmZvckVhY2goKGVsOiBhbnksIGluZGV4KSA9PiB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmICghc2Nyb2xsRmxhZ1tpbmRleF0pIHtcclxuICAgICAgICAgIHNjcm9sbEZsYWcuZmlsbCh0cnVlKTtcclxuICAgICAgICAgIHNjcm9sbEZsYWdbaW5kZXhdID0gZmFsc2U7XHJcbiAgICAgICAgICBsZXQgX2ZsYWcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICBsZXQgZWxBcnI6IGFueVtdID0gdGhpcy5nZXRFbGVtZW50Q2hpbGROb2Rlc0FycihlbCk7XHJcblxyXG5cclxuICAgICAgICAgIGVsQXJyLmZvckVhY2goKF9lbDogYW55LCBfaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHB4ID0gX2VsLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcDtcclxuICAgICAgICAgICAgaWYgKHB4ID4gMCAmJiAhX2ZsYWcgJiYgX2luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgIGxldCBjdXJyTm9kZSA9IGVsQXJyW19pbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgIGxldCBjdXJyZW50T2Zmc2V0SGVpZ2h0ID0gY3Vyck5vZGUub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICBsZXQgb3RoZXJGaW5kID0gZmluZC5maWx0ZXIoKF9maW5kLCBfX2luZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19pbmRleCAhPSBpbmRleDtcclxuICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICBvdGhlckZpbmQuZm9yRWFjaCgoX2ZpbmQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IF9lbEFyciA9IHRoaXMuZ2V0RWxlbWVudENoaWxkTm9kZXNBcnIoX2ZpbmQpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhcmVOb2RlID0gX2VsQXJyW19pbmRleCAtIDFdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhcmVPZmZzZXRIZWlnaHQgPSBjb21wYXJlTm9kZS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGltZXMgPSBjb21wYXJlT2Zmc2V0SGVpZ2h0IC8gY3VycmVudE9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxyZWFkeVB4ID0gX2VsQXJyLnJlZHVjZSgocHJldiwgY3VycmVudCwgY3VycmVudEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPCBfaW5kZXggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcE5vZGUgPSBfZWxBcnJbY3VycmVudEluZGV4XSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIHRtcE5vZGUub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICAgICAgbGV0IF9fID0gZWxBcnJbX2luZGV4IC0gMV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBfZmluZC5zY3JvbGxUb3AgPSBhbHJlYWR5UHggKyB0aW1lcyAqIC0oX18ub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wKTtcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIF9mbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNjcm9sbEZsYWdbaW5kZXhdID0gZmFsc2U7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiBjaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiXX0=