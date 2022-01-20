class Building {
  constructor({
    x,
    y,
    z,
    baseWidth,
    baseHeight,
    h
  }) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.baseWidth = baseWidth;
    this.baseHeight = baseHeight;
    this.h = h;
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    box(this.baseWidth,  this.baseHeight, this.h);
    pop();
  }
}