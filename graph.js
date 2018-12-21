var canvas, ctx, width, height;

var init = function () {
   canvas = document.getElementById('canvas');
   width = canvas.width;
   height = canvas.height;
   ctx = canvas.getContext('2d');
};

//Закрашиваем все игровое поле каким-нибудь цветом
var fillAll = function (color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
};

//Очистка всего игрового поля
var clearAll = function () {
  ctx.clearRect(0, 0, width, height);
};

//Отрисовка двигающейся платформы
var drawRect = function (x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
};
