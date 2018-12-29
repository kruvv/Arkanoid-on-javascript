var grid = {
  // Массив элементов в виде сетки
  nodes: [],
  // Добавляет один елемент в массив nodes
  add: function(x, y, w, h, c) {
    var tmp = new _Enemy(x, y, w, h, c);
    this.nodes.push(tmp);
  },

  //Генерация елементов
  generate: function(count, w, h, color) {
    var dW = 5,
      dX = dW,
      dY = dW;
    dCountX = Math.ceil(width / (w + dW)) - 1;
    dAllw = Math.ceil((width - (w + dW) * dCountX) / 2);
    dY = dAllw;
    for (var i = 0; i < count; i++) {
      for (var j = 0; j < dCountX; j++) {
        if (j == 0) {
          dX += Math.ceil(dAllw - dW / 2);
        }
        this.add(dX, dY, w, h, color);
        dX += w + dW;
      }
      dY += h + dW;
      dX = dW;
    }
  },
  //Создание карты уровня
  create: function(map) {
    var dOffsetX = (width - (map.tiles[0].length * (map.width + map.offset))) / 2;
    for (var t1 in map.tiles) {
      for (var t2 in map.tiles[t1]) {
        var tile = map.tiles[t1][t2];
        var dx = dOffsetX + t2 * (map.width + map.offset);
        var dy = map.offset + t1 * (map.height + map.offset);
        if (tile == 1) {
          this.add(dx, dy, map.width, map.height, map.color);
        }
      }
    }
  },
  //Очистка экрана
  clear: function() {
    this.nodes = [];
  },
  // Удаляет один елемент при попададии в него при игре
  destroy: function(id) {
    this.nodes.splice(id, 1);

    if (this.nodes <= 0) {
      document.getElementById("win").style.display = 'inline';
      grid.clear();
      ball.clear();
      setInterval(location.reload(), 50000); // ссылка на следующий LvL
      // TODO: Сделать переход на другой уровень
    }
  },

  draw: function() {
    for (en in this.nodes) {
      this.nodes[en].draw();
    }
  }
};

// Строительный элемент (прототип)
var _Enemy = function(x, y, w, h, color) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;
  this.color = color;
};

_Enemy.prototype.draw = function() {
  drawRect(this.x, this.y, this.width, this.height, this.color);
};
