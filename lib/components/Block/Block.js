"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_jss_1 = require("react-jss");
var classNames = require("classnames");
const styles = {
    block: {
        height: 400,
        overflow: "auto"
    }
};
let Block = class Block extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const _a = this.props, { style, children, className, classes } = _a, rest = __rest(_a, ["style", "children", "className", "classes"]);
        return React.createElement("div", Object.assign({ className: classNames(classes.block, className, "react-scroll-sync-block"), style: Object.assign({ margin: 0, padding: 0, display: "block" }, style) }, rest), children);
    }
};
Block = __decorate([
    react_jss_1.default(styles)
], Block);
exports.default = Block;
