"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var food_1 = require("./modules/food/food");
var scorePanel_1 = require("./modules/scorePanel/scorePanel");
var scorePanel = new scorePanel_1.default();
for (var i = 0; i < 200; i++) {
    scorePanel.addScore();
}
var food = new food_1.default();
console.log(food.position);
