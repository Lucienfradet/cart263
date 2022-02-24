class Timer {
  constructor() {
    this.w = 400;
    this.h = 175;
    this.pos = {
      x: canvas.w - this.w/2,
      y: this.h/2
    };

    this.timerValue = 120 * 60; //(seconds * frames)
    this.timer = this.timerValue;

    this.frames = [
      img[6],
      img[7],
      img[8],
      img[9],
      img[10],
      img[11]
    ];
  }

  update() {
    this.timer--;
    if (this.timer < 0) {
      console.log('gameOver Big');
    }
  }

  display() {
    push();
    rectMode(CENTER);
    imageMode(CENTER);
    noStroke();
    fill(230);
    rect(this.pos.x, this.pos.y, this.w, this.h);

    let step = this.timerValue / this.frames.length;
    if (this.timer <= this.timerValue && this.timer > step * 5) {
      image(this.frames[0], this.pos.x, this.pos.y);
    }
    else if (this.timer <= step * 5 && this.timer > step * 4) {
      image(this.frames[1], this.pos.x, this.pos.y);
    }
    else if (this.timer <= step * 4 && this.timer > step * 3) {
      image(this.frames[2], this.pos.x, this.pos.y);
    }
    else if (this.timer <= step * 3 && this.timer > step * 2) {
      image(this.frames[3], this.pos.x, this.pos.y);
    }
    else if (this.timer <= step * 2 && this.timer > step * 1) {
      image(this.frames[4], this.pos.x, this.pos.y);
    }
    else if (this.timer <= step) {
      image(this.frames[5], this.pos.x, this.pos.y);
    }
    pop();
  }
}