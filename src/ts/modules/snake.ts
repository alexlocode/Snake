class Snake {
  private head: HTMLElement;
  private bodiesContent: HTMLElement;
  private bodies: HTMLCollection;
  constructor() {
    this.head = document.querySelector("#snake > div") as HTMLElement;
    this.bodiesContent = document.getElementById("snake") as HTMLElement;
    this.bodies = this.bodiesContent.getElementsByTagName("div");
  }
  get position(): Pos {
    const pos: Pos = {
      x: this.head.offsetLeft,
      y: this.head.offsetTop,
    };
    return pos;
  }
  set position(value: Pos) {
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
