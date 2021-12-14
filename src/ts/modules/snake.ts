class Snake {
  private head: HTMLElement;
  private bodiesContent: HTMLElement;
  private _bodies: HTMLCollection;
  private _position: Pos;
  constructor() {
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodiesContent = document.getElementById("snake") as HTMLElement;
    this._bodies = this.bodiesContent.getElementsByTagName("div");
    this._position = {
      x: this.head.offsetLeft,
      y: this.head.offsetTop,
    };
  }
  get position(): Pos {
    return this._position;
  }
  set position(value: Pos) {
    if (value.x < 0 || value.x > 290 || value.y < 0 || value.y > 290) {
      throw new Error("撞牆了");
    }
    this.moveBody();
    this.head.style.left = `${value.x}px`;
    this.head.style.top = `${value.y}px`;
  }
  get bodies() {
    return this._bodies;
  }
  addBody(): void {
    this.bodiesContent.insertAdjacentHTML("beforeend", "<div></div>");
  }
  moveBody(): void {
    for (let i = this._bodies.length - 1; i > 0; i--) {
      const x: number = (this._bodies[i - 1] as HTMLElement).offsetLeft;
      const y: number = (this._bodies[i - 1] as HTMLElement).offsetTop;
      (this._bodies[i] as HTMLElement).style.left = x + "px";
      (this._bodies[i] as HTMLElement).style.top = y + "px";
    }
  }
}

interface Pos {
  x: number;
  y: number;
}

export default Snake;
