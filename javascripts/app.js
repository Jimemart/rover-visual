// Rover Object Goes Here
// ======================
window.onload = function(){
//INTENTAR CREAR UNA FUNCION QUE CONTENGA LOS LOOPS
 /*var rover = {
   direction: "N",
   positionX: 0,
   positionY: 0,
   travelLog: []
 };
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:

  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:

  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  var currentPosition = [rover.positionX, rover.positionY];

  var length = rover.travelLog.length;

  rover.travelLog.push(currentPosition);

  switch (rover.direction) {
    case "N":
      if(rover.positionY > 0){
        rover.positionY -=1;
    }
      else{
        console.log("Sorry, you have reached the limit of the grid.");
      }
      break;
    case "W":
      if(rover.positionX > 0){
      rover.positionX -=1;
    }
      else{
        console.log("Sorry, you have reached the limit of the grid.");
      }
      break;
    case "S":
    if(rover.positionY <10){
      rover.positionY +=1;
    }
    else{
      console.log("Sorry, you have reached the limit of the grid.");
    }
      break;
    case "E":
      if(rover.positionX < 10 ){
      rover.positionX +=1;
    }
    else{
      console.log("Sorry, you have reached the limit of the grid.");
    }
      break;
    default:
  }
  console.log("moveForward was called");
}

function moveBackward(rover){
  var currentPosition = [rover.positionX, rover.positionY];

  var length = rover.travelLog.length;

  rover.travelLog.push(currentPosition);

  switch(rover.direction){
    case "N":
      if(rover.positionY < 10){
        rover.positionY += 1;
      }
      else{
        console.log("Sorry, you reached the limit of the grid");
      }
      break;
      case "E":
        if(rover.positionX > 0){
          rover.positionY -= 1;
        }
        else{
          console.log("Sorry, you reached the limit of the grid");
        }
        break;
      case "S":
        if(rover.positionY > 0){
            rover.positionY -= 1;
          }
        else{
            console.log("Sorry, you reached the limit of the grid");
          }
        break;
      case "W":
        if(rover.positionX < 10){
            rover.positionY += 1;
          }
        else{
            console.log("Sorry, you reached the limit of the grid");
          }
          break;
  }
  console.log("moveBackward was called");
}

function roverAttack(string){
  for(var i = 0; i<string.length; i++){
    switch (string[i]){
      case "r":
      turnRight(rover);
      break;
      case "l":
      turnLeft(rover);
      break;
      case "f":
      moveForward(rover);
      break;
      case "b":
      moveBackward(rover);
      break;
      default:
      break;
    }
  }
  console.log("Your rover is here: " + [rover.positionX, rover.positionY]);
  console.log("Your rover was here: " + rover.travelLog);
}
*/
/*-------Variable para crear el tablero */
var board = [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
];

//variable con información de rover
var rover ={
  positionX : 5,
  positionY : 4
};
// botones y tablero sobre el que crearemos el grid
var tablero = document.getElementById("board");
var botonIzda = document.getElementById('izquierda');
var botonDcha = document.getElementById('derecha');
var botonTop = document.getElementById('arriba');
var botonAba = document.getElementById('abajo');

//grid y posicion de rover inicial

function createGrid(claseRover){
  for(var i = 0; i<board.length; i++){
    for(var j = 0; j<board[i].length; j++){
     if(board[i][j] === 1){
        tablero.innerHTML +="<div class='"+ claseRover+" cell'></div>";
      }
      else{
      tablero.innerHTML += "<div class='cell'></div>";
    }
    }
    tablero.innerHTML +="<br/>";

  }
}

createGrid("rover");

//contador para saber si el rover está mirando en la direccion que nos interesa
var counterLeft = 0;
var counterRight = 0;
var counterTop = 1;
var counterAba = 0;
//funcion para girar el rover hacia el oeste y que avance
function moveLeft(){
  //damos valor 0 al resto de contadores para saber que no están en esa direccion
  counterRight = 0;
  counterTop = 0;
  counterAba = 0;
  var horizontal = rover.positionX;
  var vertical = rover.positionY;
  //si la variable counterLeft es igual a 0 significa
// que el rover no está mirando hacia el oeste por lo que
// tenemos que girarlo. Eliminamos el tablero y creamos otro
// donde el rover este mirando al oeste
  if(counterLeft === 0){
    tablero.innerHTML = "";
    createGrid("roverLeft");
    counterLeft = 1;
  }
  //si counterLeft no es cero esto es porque el rover sí está mirando
// al oeste. Si la posicion horizontal del rover es mayor que
//0 entonces podemos restar para que se mueva hacia la izquierda
  else if(horizontal > 0 && counterLeft !== 0){

    //Eliminamos la posicion anterior del rover
    board[vertical][horizontal] = 0;

    // cambiamos la horizontal hacia la izquierda
    rover.positionX -= 1;

    // asignamos la nueva posicion a una nueva variable
    var nuevaH = rover.positionX;

    //definimos la nueva posicion del rover
    board[vertical][nuevaH] = 1;

    //eliminamos el tablero antiguo y creamos otro
    tablero.innerHTML = "";
    createGrid("roverLeft");
  }
  else{
    alert("You have reached the limit of the grid");
  }
}

//Mismo funcionamiento que moveLeft() pero con valores que hace
// que el rover vaya a la derecha
function moveRight(){
  counterLeft = 0;
  counterTop = 0;
  counterAba = 0;
  var horizontal = rover.positionX;
  var vertical = rover.positionY;

  if(counterRight === 0){
    tablero.innerHTML = "";
    createGrid("roverRight");
    counterRight = 1;
  }

  else if(rover.positionX <9 && counterRight !== 0){
    board[vertical][horizontal] = 0;
    rover.positionX += 1;
    var nuevaH = rover.positionX;
    board[vertical][nuevaH] = 1;
    tablero.innerHTML = "";
    createGrid("roverRight");
  }
  else{
    alert("You have reached the limit of the grid");
  }
}

//mismo funcionamiento que las anteriores pero haci arriba
function moveUp(){
  counterLeft = 0;
  counterRight = 0;
  counterAba = 0;
  var horizontal = rover.positionX;
  var vertical = rover.positionY;

  if(counterTop === 0){
    tablero.innerHTML = "";
    createGrid("rover");
    counterTop = 1;
  }
  else if(vertical > 0 && counterTop !== 0){
    board[vertical][horizontal] = 0;
    rover.positionY -=1;
    var nuevaV = rover.positionY;
    board[nuevaV][horizontal] = 1;
    tablero.innerHTML = "";
    createGrid("rover");
  }
  else{
    alert("Sorry, you have reached the limits of the grid");
  }
}

function moveDown (){
  var vertical = rover.positionY;
  var horizontal = rover.positionX;
  counterLeft = 0;
  counterRight= 0;
  counterTop = 0;

  if(counterAba === 0){
    tablero.innerHTML = "";
    createGrid("roverAba");
    counterAba = 1;
  }
  else if (vertical <9 && counterAba !== 0){
    board[vertical][horizontal] = 0;
    rover.positionY += 1;
    nuevaV = rover.positionY;
    board[nuevaV][horizontal] = 1;
    tablero.innerHTML = "";
    createGrid("roverAba");
  }
  else{
    alert("Sorry you have reached the limits of the grid");
  }
}

botonIzda.onclick = function(){
  moveLeft();
};

botonDcha.onclick = function(){
  moveRight();
};

botonTop.onclick = function(){
  moveUp();
};
botonAba.onclick = function(){
  moveDown();
};

};
