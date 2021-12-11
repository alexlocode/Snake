"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Food = (function () {
    function Food() {
        this.element = document.getElementById("food");
    }
    Object.defineProperty(Food.prototype, "position", {
        get: function () {
            return {
                x: this.element.offsetLeft,
                y: this.element.offsetTop,
            };
        },
        enumerable: false,
        configurable: true
    });
    Food.prototype.changePosition = function () {
        var newX = Math.floor(Math.random() * 30) * 10;
        var newY = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = "".concat(newX, "px");
        this.element.style.top = "".concat(newY, "px");
    };
    return Food;
}());
exports.default = Food;
