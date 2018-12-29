var keys = {
  'W': 87,
  'S': 83,
  'A': 65,
  'D': 68,
  'LEFT': 39,
  'RIGHT': 37
};
var keyDown = {}

var setKey =  function (keyCode) {
  keyDown[keyCode] = true;
};

var clearKey =  function (keyCode) {
  keyDown[keyCode] = false;
};

var isKeyDown = function (keyName) {
  return keyDown[keys[keyName]] == true;
};

var isAnyKeyDown = function () {
  for (var k in keyDown) {
    if (keyDown[k]) {
      return true;
    }
  }
};

window.onkeydown = function (e) {
  setKey(e.keyCode);
  console.log(e.keyCode);
};
window.onkeyup = function (e) {
  clearKey(e.keyCode);
};
