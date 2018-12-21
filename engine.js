
// Для работы с браузерами
var _renderer = (function () {
  return window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame  ||
  window.mozRequestAnimationFrame     ||
  window.oRequestAnimationFrame       ||
  window.msRequestAnimationFrame      ||
  function (callback) {
    setTimeout(callback, 1000 / 60);
  };
})();

//Вывод в консоль о состоянии игрового цикла
var _engine = function () {
  console.log('Игровой цикл не инициализирован');
};

//Старт Игры
var startGame = function (game) {
    if(typeof game == 'function') {
      _engine = game;
    }
    gameLoop();
};

var setGame = function (game) {
  if(typeof game == 'function') {
    _engine = game;
  }
};

// Игровой цикл
var gameLoop = function () {
  _engine();
  _renderer(gameLoop);
};
