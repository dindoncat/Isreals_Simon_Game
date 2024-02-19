const init = () => {
  //   let game = false;
  let gameSet = ["green", "red", "blue", "yellow"];
  let followColors = [];
  let pressedColors = [];
  let game = false;
  let level = 0;



  $(document).keypress(function () {

    if (!game){
    $("#level-title").text("level" + level)
    newColor();
    game = true;
  }
  }); 




  $(".btn").click(function () {
    let colorInput = $(this).attr("id");
    pressedColors.push(colorInput);

  game = false;
  if(!game) playSound(colorInput);
    showPress(colorInput);

    checkAnsewer(pressedColors.length-1);
  })

  const checkAnsewer = (theNewIndex) => {
    if(followColors[theNewIndex]  ===  pressedColors[theNewIndex]){
      console.log("success")

      if(followColors.length === pressedColors .length){

        setTimeout(()=>{
        newColor();}, 1000);

      }
    }else{
      gameOver();
    }
  }


const newColor = () => {
  pressedColors = [];

  level++;
  $("h1").text("level " + level);

  let color = gameSet[Math.floor(Math.random()*4)];
  followColors.push(color);

  $("#" + color).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(color);
  // showPress(color);
}



const gameOver = () => {
  $("h1").text("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 400);
  let audio = new Audio("sounds/wrong.mp3");
  audio.play();
  level = 0;
  followColors = [];
  game = false;
};

const playSound = (input) => {
  let audio = new Audio("sounds/"+ input+".mp3");
  audio.play();
}
const showPress = (input) => {
  $("#" + input).addClass("pressed");
  setTimeout(() => {
    $("#" + input).removeClass("pressed");
  }, 100);
  
}
};
init();
