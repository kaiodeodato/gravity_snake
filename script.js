var a = document.getElementById('area')
function clicar(){
  clicks += 1
  a.innerText = tam
}

let cor = "#cccc00"



window.onload = function(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  //variaveis
  snake = [];
  positionX = 10;
  positionY = 10;
  foodX = 6;
  foodY = 6;
  velX = 0;
  velY = 0;
  grid = 20;
  tam = 1;

// chamada da funçao jogo a cada 100 milisegundos
  setInterval(jogo,100)
  

  //controles
  document.addEventListener("keydown",function(e){
      switch(e.keyCode){
      //seta direita  39
      case 39:
        velX = 1;
        velY = 0;


          a.innerText = tam


        break;
      //seta esquerda 37
      case 37:
        velX = -1;
        velY = 0;


          a.innerText = tam


        break;
      //seta cima 38
      case 38:
        velX = 0;
        velY = -1;


          a.innerText = tam


        break;
      //seta baixo 40
      case 40:
       velX = 0;
       velY = 1;

          a.innerText = tam


      break;
    }
  });

}

function jogo(){




  //configuraçao da tela
  ctx.fillStyle = "#2980B9";
  //distancia da borda h, distancia da borda v, largura, altura
  ctx.fillRect(0,0, canvas.width + 50, canvas.height);


  //deslocamento cobra

  positionX += velX;
  positionY += velY;


  // espelhamento
  if(positionX < 0){
    positionX = grid - 1;
  }
  if(positionX > grid - 1){
   positionX = 0;
  }
  if(positionY < 0){
    positionY = grid - 1;
  }
  if(positionY > grid - 1){
    positionY = 0;
  }


  //configurar a cobra
  ctx.fillStyle = cor;
  for(let i = 0; i < snake.length; i++){
    ctx.fillRect(snake[i].x*grid , snake[i].y*grid, grid - 1, grid - 1);
    if(snake[i].x == positionX && snake[i].y == positionY && tam > 3){
      ctx.fillStyle = "#e62e00";
      tam = 1;
    }
  }

    //posicionamento cobra
  snake.push({x: positionX, y: positionY})

  //apagando
  while(snake.length > tam){
    snake.shift();
  }

  //configurando comida
  ctx.fillStyle = "#cc6600";
  ctx.fillRect(foodX*grid,foodY*grid,grid - 1,grid - 1);
  foodY =  foodY + 1;


  //comendo a comida
  if(positionX == foodX && (positionY == foodY || positionY == foodY - 1)){
    tam++
    cor = "#33cc00"
    //foodX = Math.gloor(Math.random()*29)
    foodX = Math.round(Math.random()*19)
    foodY = 0//Math.round(Math.random()*19)

    setTimeout(function(){
      cor = "#cccc00"
      console.log('voltei')

    },300)


  }
  else if(foodY > 19){
    foodX = Math.round(Math.random()*19)
    foodY = 0//Math.round(Math.random()*19)

  }
  else if (tam == 50){
    tam = 1;
    positionX = 10;
    positionY = 10;
    velX = 0;
    velY = 0;
    alert("Voce ganhou")
  }
  }
