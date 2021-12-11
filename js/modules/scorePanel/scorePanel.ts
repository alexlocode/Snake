export default class ScorePanel {
    private score: number = 0;
    private level: number = 1;
    private maxLevel: number;
    private upScore: number;
    private scoreElement: HTMLElement;
    private levelElement: HTMLElement;
    constructor(maxLevel: number = 10, upScore: number = 10) {
      this.maxLevel = maxLevel;
      this.upScore = upScore;
      this.scoreElement = document.getElementById("score") as HTMLElement;
      this.levelElement = document.getElementById("level") as HTMLElement;
    }
    addScore(): void {
      this.score++;
      this.scoreElement.innerHTML = this.score.toString();
      if (this.score % this.upScore === 0) {
        this.levelUp();
      }
    }
    private levelUp(): void {
      if (this.level < this.maxLevel) {
        this.level++;
        this.levelElement.innerHTML = this.level.toString();
      }
    }
  }