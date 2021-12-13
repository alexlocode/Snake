import Food from "./food";
import Snake from "./snake";
import CsorePanel from "./scorePanel";

interface Pos {
  x: number;
  y: number;
}

class gameControl {
  private snake: Snake;
  private food: Food;
  private csorePanel: CsorePanel;
  private direction: string = "";
  private isLive: boolean = true;

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.csorePanel = new CsorePanel();
    this.init();
  }

  init(): void {
    document.addEventListener("keydown", this.keydownHandle.bind(this));
    this.run();
  }
  keydownHandle(event: KeyboardEvent) {
    this.direction = event.key;
  }
  run(): void {
    let pos: Pos = this.snake.position;
    switch (this.direction) {
      case "ArrowUp":
        pos.y -= 10;
        break;
      case "ArrowDown":
        pos.y += 10;
        break;
      case "ArrowLeft":
        pos.x -= 10;
        break;
      case "ArrowRight":
        pos.x += 10;
        break;
    }

    this.checkCollision(pos);
    try {
      this.snake.position = pos;
    } catch (e) {
      this.isLive = false;
      alert(e.message);
    }
    this.isLive &&
      setTimeout(this.run.bind(this), 300 - (this.csorePanel.level - 1) * 30);
  }
  checkCollision(position: Pos): void {
    if (
      position.x === this.food.position.x &&
      position.y === this.food.position.y
    ) {
      this.food.changePosition();
      this.csorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default gameControl;
