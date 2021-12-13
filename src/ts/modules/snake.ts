class Snake {
  private head: HTMLElement;
  private bodiesContent: HTMLElement;
  private bodies: HTMLCollection;
  private _position: Pos;
  constructor() {
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodiesContent = document.getElementById("snake") as HTMLElement;
    this.bodies = this.bodiesContent.getElementsByTagName("div");
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
    this.head.style.left = `${value.x}px`;
    this.head.style.top = `${value.y}px`;
  }
  addBody() {
    const div = document.createElement("div");
    this.bodiesContent.insertAdjacentElement("beforeend", div);
  }
}

interface Pos {
  x: number;
  y: number;
}

export default Snake;
