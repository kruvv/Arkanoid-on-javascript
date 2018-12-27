var player = {
  level: 1,
  hp: 3,
  x: 50,
  y: 440,
  width: 100,
  height: 20,
  color: 'yellow',
  speed: 2,
  dx: 0,
  score: 0,

  //Обновление информации о счете игрока
  updScore: function(score) {
    this.score += score;
    document.getElementById('score').innerHTML = this.score;
  },
  //Обновление информации о колличестве оставшихся игр
  updHp: function(hp) {
    this.hp -= hp;
    document.getElementById('hp').innerHTML = this.hp;
  },
  //Отрисовка игрока
  draw: function() {
    drawRect(this.x, this.y, this.width, this.height, this.color);
  },
  //Управление движением платформы
  move: function() {
    if (isKeyDown('D') || isKeyDown('LEFT')) {
      this.x += this.speed;
      this.dx = 1;
    } else if (isKeyDown('A') || isKeyDown('RIGHT')) {
      this.x -= this.speed;
      this.dx = -1;
    } else {
      this.dx = 0;
    }
  },
  //Инициализация игрока
  init: function(x, w, color) {
    this.x = x;
    this.width = w;
    this.color = color;
  }
};
