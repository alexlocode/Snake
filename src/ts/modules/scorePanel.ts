class ScorePanel {
  private score: number = 0;
  private _level: number = 1;
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
  get level() {
    return this._level;
  }
  addScore(): void {
    this.score++;
    this.scoreElement.innerHTML = this.score.toString();
    if (this.score % this.upScore === 0) {
      this.levelUp();
    }
  }
  private levelUp(): void {
    if (this._level < this.maxLevel) {
      this._level++;
      this.levelElement.innerHTML = this._level.toString();
    }
  }
}
export default ScorePanel;
