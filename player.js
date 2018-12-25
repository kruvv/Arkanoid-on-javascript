var player = {
  level: 1,
  hp: 5,
  x: 50,
  y: 440,
  width: 100,
  height: 20,
  color: 'yellow',
  speed: 2,
//Отрисовка игрока
  draw: function() {
    drawRect(this.x, this.y, this.width, this.height, this.color);
  },
//Управление движением платформы
  move: function() {
    if (isKeyDown('D') || isKeyDown('LEFT'))
      this.x += this.speed;
    if (isKeyDown('A') || isKeyDown('RIGHT'))
      this.x -= this.speed;
  },
//Инициализация игрока
  init: function (x, w, color) {
    this.x = x;
    this.width = w;
    this.color = color;
  }
};
