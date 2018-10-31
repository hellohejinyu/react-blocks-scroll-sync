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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci9pbmRleC50c3giXSwibmFtZXMiOlsiQ29udGFpbmVyIiwibm9kZSIsImFyciIsImNvdW50IiwiY2hpbGROb2RlcyIsImxlbmd0aCIsImkiLCJub2RlVHlwZSIsInB1c2giLCJmaW5kIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsIndhcm4iLCJsYXRlc3RDb3VudCIsImZsYWciLCJmb3JFYWNoIiwiZWwiLCJpbmRleCIsImdldEVsZW1lbnRDaGlsZE5vZGVzQXJyIiwic2Nyb2xsRmxhZyIsImZpbGwiLCJhZGRFdmVudExpc3RlbmVyIiwiX2ZsYWciLCJlbEFyciIsIl9lbCIsIl9pbmRleCIsInB4Iiwib2Zmc2V0VG9wIiwic2Nyb2xsVG9wIiwiY3Vyck5vZGUiLCJjdXJyZW50T2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwib3RoZXJGaW5kIiwiZmlsdGVyIiwiX2ZpbmQiLCJfX2luZGV4IiwiX2VsQXJyIiwiY29tcGFyZU5vZGUiLCJjb21wYXJlT2Zmc2V0SGVpZ2h0IiwidGltZXMiLCJhbHJlYWR5UHgiLCJyZWR1Y2UiLCJwcmV2IiwiY3VycmVudCIsImN1cnJlbnRJbmRleCIsInRtcE5vZGUiLCJfXyIsImNoaWxkcmVuIiwicHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiQmxvY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTU1BLFM7Ozs7Ozs7Ozs7Ozs7NENBRzRCQyxJLEVBQW1CO0FBQ2pELFVBQUlDLEdBQUcsR0FBRyxFQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLFVBQUwsQ0FBZ0JDLE1BQTVCOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBcEIsRUFBMkJHLENBQUMsRUFBNUIs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QUdELFdBQVcsQ0FBQ04sWUFBdEM7QUFDQSxzQkFBSVEsS0FBSyxHQUFHRCxtQkFBbUIsR0FBR1IsbUJBQWxDOztBQUVBLHNCQUFJVSxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjLFVBQUNDLElBQUQsRUFBT0MsT0FBUCxFQUFnQkMsWUFBaEIsRUFBaUM7QUFDN0Qsd0JBQUlBLFlBQVksR0FBR25CLE1BQU0sR0FBRyxDQUE1QixFQUErQjtBQUM3QiwwQkFBSW9CLE9BQU8sR0FBR1QsTUFBTSxDQUFDUSxZQUFELENBQXBCO0FBQ0EsNkJBQU9GLElBQUksR0FBR0csT0FBTyxDQUFDZCxZQUF0QjtBQUNELHFCQUhELE1BR087QUFDTCw2QkFBT1csSUFBUDtBQUNEO0FBQ0YsbUJBUGUsRUFPYixDQVBhLENBQWhCOztBQVFBLHNCQUFJSSxFQUFFLEdBQUd2QixLQUFLLENBQUNFLE1BQU0sR0FBRyxDQUFWLENBQWQ7QUFDQVMsa0JBQUFBLEtBQUssQ0FBQ04sU0FBTixHQUFrQlksU0FBUyxHQUFHRCxLQUFLLEdBQUcsRUFBRU8sRUFBRSxDQUFDbkIsU0FBSCxHQUFlWCxFQUFFLENBQUNZLFNBQXBCLENBQXRDO0FBQ0QsaUJBakJEO0FBa0JBTixnQkFBQUEsS0FBSyxHQUFHLElBQVI7QUFDRDtBQUNGLGFBOUJEO0FBZ0NEOztBQUNESCxVQUFBQSxVQUFVLENBQUNGLEtBQUQsQ0FBVixHQUFvQixLQUFwQjtBQUNELFNBM0NEO0FBNENELE9BN0NEO0FBOENEOzs7NkJBRVE7QUFBQSxVQUNDOEIsUUFERCxHQUNjLEtBQUtDLEtBRG5CLENBQ0NELFFBREQ7QUFFUCxhQUFPQSxRQUFQO0FBQ0Q7Ozs7RUF2RnFCRSxvQjs7Z0JBQWxCcEQsUyxXQUNnQnFELGM7O2VBeUZQckQsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvY2sgZnJvbSBcIi4uL0Jsb2NrXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBhbnk7XG59XG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHMsIHt9PiB7XG4gIHN0YXRpYyBCbG9jazogYW55ID0gQmxvY2s7XG5cbiAgcHJpdmF0ZSBnZXRFbGVtZW50Q2hpbGROb2Rlc0Fycihub2RlOiBIVE1MRWxlbWVudCkge1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBsZXQgY291bnQgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgaWYgKG5vZGUuY2hpbGROb2Rlc1tpXS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBhcnIucHVzaChub2RlLmNoaWxkTm9kZXNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IGZpbmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVhY3Qtc2Nyb2xsLXN5bmMtYmxvY2tcIikpO1xuICAgIGlmIChmaW5kLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGVyZSBpcyBubyBzY3JvbGwgYmxvY2sgZmluZCFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGxhdGVzdENvdW50ID0gLTEsIGZsYWcgPSB0cnVlO1xuICAgIGZpbmQuZm9yRWFjaCgoZWw6IGFueSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb3VudCA9IHRoaXMuZ2V0RWxlbWVudENoaWxkTm9kZXNBcnIoZWwpLmxlbmd0aDtcbiAgICAgIGlmICgoY291bnQgIT0gbGF0ZXN0Q291bnQpICYmIGxhdGVzdENvdW50ICE9IC0xKSB7XG4gICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxhdGVzdENvdW50ID0gY291bnQ7XG4gICAgfSlcblxuICAgIGlmICghZmxhZykge1xuICAgICAgY29uc29sZS53YXJuKFwiRXZlcnkgc2Nyb2xsIGJsb2NrIGNoaWxkcmVucyBjb3VudCBzaG91bGUgYmUgc2FtZSFJZiBub3QsIHRoaXMgbGlicmFyeSB3b24ndCB3b3JrLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgc2Nyb2xsRmxhZyA9IG5ldyBBcnJheShmaW5kLmxlbmd0aCkuZmlsbChmYWxzZSk7XG4gICAgZmluZC5mb3JFYWNoKChlbDogYW55LCBpbmRleCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgIGlmICghc2Nyb2xsRmxhZ1tpbmRleF0pIHtcbiAgICAgICAgICBzY3JvbGxGbGFnLmZpbGwodHJ1ZSk7XG4gICAgICAgICAgc2Nyb2xsRmxhZ1tpbmRleF0gPSBmYWxzZTtcbiAgICAgICAgICBsZXQgX2ZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgIGxldCBlbEFycjogYW55W10gPSB0aGlzLmdldEVsZW1lbnRDaGlsZE5vZGVzQXJyKGVsKTtcblxuXG4gICAgICAgICAgZWxBcnIuZm9yRWFjaCgoX2VsOiBhbnksIF9pbmRleCkgPT4ge1xuICAgICAgICAgICAgbGV0IHB4ID0gX2VsLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGlmIChweCA+IDAgJiYgIV9mbGFnICYmIF9pbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgbGV0IGN1cnJOb2RlID0gZWxBcnJbX2luZGV4IC0gMV07XG4gICAgICAgICAgICAgIGxldCBjdXJyZW50T2Zmc2V0SGVpZ2h0ID0gY3Vyck5vZGUub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgIGxldCBvdGhlckZpbmQgPSBmaW5kLmZpbHRlcigoX2ZpbmQsIF9faW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX19pbmRleCAhPSBpbmRleDtcbiAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICBvdGhlckZpbmQuZm9yRWFjaCgoX2ZpbmQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBfZWxBcnIgPSB0aGlzLmdldEVsZW1lbnRDaGlsZE5vZGVzQXJyKF9maW5kKVxuXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBhcmVOb2RlID0gX2VsQXJyW19pbmRleCAtIDFdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIGxldCBjb21wYXJlT2Zmc2V0SGVpZ2h0ID0gY29tcGFyZU5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGxldCB0aW1lcyA9IGNvbXBhcmVPZmZzZXRIZWlnaHQgLyBjdXJyZW50T2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgbGV0IGFscmVhZHlQeCA9IF9lbEFyci5yZWR1Y2UoKHByZXYsIGN1cnJlbnQsIGN1cnJlbnRJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA8IF9pbmRleCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcE5vZGUgPSBfZWxBcnJbY3VycmVudEluZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyB0bXBOb2RlLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICAgICAgbGV0IF9fID0gZWxBcnJbX2luZGV4IC0gMV0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgX2ZpbmQuc2Nyb2xsVG9wID0gYWxyZWFkeVB4ICsgdGltZXMgKiAtKF9fLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF9mbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuXG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsRmxhZ1tpbmRleF0gPSBmYWxzZTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7Il19