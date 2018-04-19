let positioArray = [300, 250];

const app = function(){


  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');

  const buttonUp = document.querySelector('#button-up');
  buttonUp.addEventListener('click', onUpButtonClick);

  const buttonLeft = document.querySelector('#button-left');
  buttonLeft.addEventListener('click', onLeftButtonClick);

  const buttonRight = document.querySelector('#button-right');
  buttonRight.addEventListener('click', onRightButtonClick);

  const buttonDown = document.querySelector('#button-down');
  buttonDown.addEventListener('click', onDownButtonClick);

  const buttonReset = document.querySelector('#button-reset');
  buttonReset.addEventListener('click', onResetButtonClick);
}

document.addEventListener('DOMContentLoaded',app);

const onUpButtonClick = function(){
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');
  context.beginPath();
  let x = positioArray[0];
  let y = positioArray[1];
  context.moveTo(x,y);
  context.lineTo(x, y);
  y = y - 2;
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
  positioArray[0] = x;
  positioArray[1] = y;

}

const onLeftButtonClick = function(){
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');
  context.beginPath();
  let x = positioArray[0];
  let y = positioArray[1];
  context.moveTo(x,y);
  context.lineTo(x, y);
  x = x - 2;
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
  positioArray[0] = x;
  positioArray[1] = y;

}

const onRightButtonClick = function(){
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');
  context.beginPath();
  let x = positioArray[0];
  let y = positioArray[1];
  context.moveTo(x,y);
  context.lineTo(x, y);
  x = x + 2;
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
  positioArray[0] = x;
  positioArray[1] = y;

}

const onDownButtonClick = function(){
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');
  context.beginPath();
  let x = positioArray[0];
  let y = positioArray[1];
  context.moveTo(x,y);
  context.lineTo(x, y);
  y = y + 2;
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
  positioArray[0] = x;
  positioArray[1] = y;

}

const onResetButtonClick = function(){
  const canvas = document.getElementById('main-canvas');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

}
