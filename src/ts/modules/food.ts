class Food {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementById("food") as HTMLElement;
  }
  get position(): object {
    return {
      x: this.element.offsetLeft,
      y: this.element.offsetTop,
    };
  }
  changePosition(): void {
    const newX = Math.floor(Math.random() * 30) * 10;
    const newY = Math.floor(Math.random() * 30) * 10;

    this.element.style.left = `${newX}px`;
    this.element.style.top = `${newY}px`;
  }
}
export default Food;
