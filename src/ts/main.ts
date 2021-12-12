import "../style/index.css";
import Food from "./modules/food";
import ScorePanel from "./modules/scorePanel";

const scorePanel = new ScorePanel();
for (let i = 0; i < 200; i++) {
  scorePanel.addScore();
}

const food = new Food();
console.log(food.position);
