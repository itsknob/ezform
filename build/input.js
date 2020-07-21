"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var TypeEnum;
(function (TypeEnum) {
    TypeEnum[TypeEnum["text"] = 0] = "text";
    TypeEnum[TypeEnum["number"] = 1] = "number";
    TypeEnum[TypeEnum["date"] = 2] = "date";
    TypeEnum[TypeEnum["datetime"] = 3] = "datetime";
    TypeEnum[TypeEnum["select"] = 4] = "select";
    TypeEnum[TypeEnum["search"] = 5] = "search";
    TypeEnum[TypeEnum["file"] = 6] = "file";
})(TypeEnum || (TypeEnum = {}));
function Input(_a) {
    var _b;
    var TypeEnum = _a.type, InputProps = __rest(_a, ["type"]);
    return ((_b = { label: label }) !== null && _b !== void 0 ? _b : htmlFor) = { name: name };
    id = {}(templateObject_1 || (templateObject_1 = __makeTemplateObject(["", "-label"], ["", "-label"])), label);
}
 > { label: label } < /label>}
    < input;
type = { type: type };
name = { name: name };
id = { id: id } /  >
    /React.Fragment>;
var templateObject_1;
