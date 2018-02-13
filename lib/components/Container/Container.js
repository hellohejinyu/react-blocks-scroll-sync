"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Block_1 = require("../Block/Block");
class Container extends React.Component {
    constructor(props) {
        super(props);
    }
    getElementChildNodesArr(node) {
        let arr = [];
        let count = node.childNodes.length;
        for (let i = 0; i < count; i++) {
            if (node.childNodes[i].nodeType == 1) {
                arr.push(node.childNodes[i]);
            }
        }
        return arr;
    }
    componentDidMount() {
        let find = Array.from(document.querySelectorAll(".react-scroll-sync-block"));
        if (find.length == 0) {
            console.warn("There is no scroll block find!");
            return;
        }
        let latestCount = -1, flag = true;
        find.forEach((el, index) => {
            let count = this.getElementChildNodesArr(el).length;
            if ((count != latestCount) && latestCount != -1) {
                flag = false;
            }
            latestCount = count;
        });
        if (!flag) {
            console.warn("Every scroll block childrens count shoule be same!If not, this library won't work.");
            return;
        }
        let scrollFlag = new Array(find.length).fill(false);
        find.forEach((el, index) => {
            el.addEventListener("scroll", () => {
                if (!scrollFlag[index]) {
                    scrollFlag.fill(true);
                    scrollFlag[index] = false;
                    let _flag = false;
                    let elArr = this.getElementChildNodesArr(el);
                    elArr.forEach((_el, _index) => {
                        let px = _el.offsetTop - el.scrollTop;
                        if (px > 0 && !_flag) {
                            let currNode = elArr[_index - 1];
                            let currentOffsetHeight = currNode.offsetHeight;
                            let otherFind = find.filter((_find, __index) => {
                                return __index != index;
                            });
                            otherFind.forEach((_find) => {
                                let _elArr = this.getElementChildNodesArr(_find);
                                let compareNode = _elArr[_index - 1];
                                let compareOffsetHeight = compareNode.offsetHeight;
                                let times = compareOffsetHeight / currentOffsetHeight;
                                let alreadyPx = _elArr.reduce((prev, current, currentIndex) => {
                                    if (currentIndex < _index - 1) {
                                        let tmpNode = _elArr[currentIndex];
                                        return prev + tmpNode.offsetHeight;
                                    }
                                    else {
                                        return prev;
                                    }
                                }, 0);
                                let __ = elArr[_index - 1];
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
    render() {
        const { children } = this.props;
        return children;
    }
}
Container.Block = Block_1.default;
exports.default = Container;
