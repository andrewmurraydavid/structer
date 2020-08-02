"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Structer = void 0;
var faker_1 = require("faker");
var Structer = (function () {
    function Structer() {
        this.generate = function (obj) {
            console.log(obj);
            console.log(faker_1.fake('internet.domain'));
            return null;
        };
    }
    return Structer;
}());
exports.Structer = Structer;
