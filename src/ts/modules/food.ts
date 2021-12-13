interface Pos {
  x: number;
  y: number;
}
class Food {
  private element: HTMLElement;
  private _position: Pos;
  constructor() {
    this.element = document.getElementById("food") as HTMLElement;
    this._position = {
      x: this.element.offsetLeft,
      y: this.element.offsetTop,
    };
  }
  get position(): Pos {
    return this._position;
  }
  changePosition(): void {
    const newX = Math.floor(Math.random() * 30) * 10;
    const newY = Math.floor(Math.random() * 30) * 10;

    this.element.style.left = `${newX}px`;
    this.element.style.top = `${newY}px`;
  }
}
export default Food;
