let gamesequence = [];
let usersequence = [];

let btns = ["yellow" , "purple" , "red" , "green"];
let h4 = document.querySelector("h4");
let started = false;
let level = 0;
let acceptingInput = false;
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("Game is Started");
        started = true;
        levelup();
    }
});



function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 500)
}


function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 500)
}

function levelup(){
    acceptingInput = false;
    usersequence = [];
    level++;
    h4.innerText = `level ${level}`;
    //random btn choose
    let randomidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randomidx]; 
    let randomButton = document.querySelector(`.btn.${randcolor}`);

    // console.log(randomidx);
    // console.log(randcolor);
    // console.log(randomButton);

    gamesequence.push(randcolor);
    console.log(gamesequence)
    gameFlash(randomButton);
        setTimeout(function () {
        acceptingInput = true;
    }, 600);
}

let p = document.querySelector("p");


function checkAns(idx){
    console.log("current level : " , level);
    if(usersequence[idx] == gamesequence[idx]){
        console.log("same value");
        if(usersequence.length == gamesequence.length){
            acceptingInput = false;
            setTimeout(levelup , 1000)
            // levelup();
        }
    }else{
        h4.innerText = `Game Over !! Press Any key to start.😊`
        p.innerText = `Your Score : ${level}`;
        reset();
    }
}
function btnpressed(){
    // console.log(this);
    if (! started || ! acceptingInput) {
        return;
    }
    let btn = this;
    userFlash(btn);
    let userColor = btn.classList[1];
    // console.log(userColor);
    usersequence.push(userColor);
    checkAns(usersequence.length - 1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){

    btn.addEventListener("click" ,btnpressed)

}

function reset(){

    started = false;
    gamesequence = [];
    usersequence = [];
    acceptingInput = false;
    level = 0;

}