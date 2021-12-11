"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScorePanel = (function () {
    function ScorePanel(maxLevel, upScore) {
        if (maxLevel === void 0) { maxLevel = 10; }
        if (upScore === void 0) { upScore = 10; }
        this.score = 0;
        this.level = 1;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
        this.scoreElement = document.getElementById("score");
        this.levelElement = document.getElementById("level");
    }
    ScorePanel.prototype.addScore = function () {
        this.score++;
        this.scoreElement.innerHTML = this.score.toString();
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    };
    ScorePanel.prototype.levelUp = function () {
        if (this.level < this.maxLevel) {
            this.level++;
            this.levelElement.innerHTML = this.level.toString();
        }
    };
    return ScorePanel;
}());
exports.default = ScorePanel;
