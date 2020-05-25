interface Root {
  x: number;
  y: number;
  color: any;
  centerX: number;
  centerY: number;
  speedX: number;
  speedY: number;
  edge: number;
  ctx: any;
}

class Root {
  constructor(
    x: number,
    y: number,
    color: any,
    centerX: number,
    centerY: number,
    edge: number,
    ctx: any
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.centerX = centerX;
    this.centerY = centerY;
    this.edge = edge;
    this.ctx = ctx;
  }
  update() {
    this.speedX += (Math.random() - 0.5) / 2;
    this.speedY += (Math.random() - 0.5) / 2;
    this.x += this.speedX;
    this.y += this.speedY;

    const distanceX: number = this.x - this.centerX;
    const distanceY: number = this.y - this.centerY;
    const distance: number = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const radius = ((-distance / this.edge + 1) * this.edge) / 10;

    if (radius > 0) {
      requestAnimationFrame(this.update.bind(this));
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
      this.ctx.fillStyle = this.color;
      this.ctx.fill();
      this.ctx.strokeStyle = "#000000";
      this.ctx.stroke();
    }
  }
}

export default Root;
