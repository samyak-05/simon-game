let p= document.querySelector("p");
let h1= document.querySelector("h1");
let scores= document.querySelector(".scores");
let btns=["one","two","three","four"];

//Keeping track of displayed colors
let gameSeq=[];
let playerSeq=[];
let highestScore=0;
let score=0;

//kepping track of game and level
let level=0;
let started=false;
scores.innerHTML=`Score: ${score} <br> Highest Score: ${highestScore} `;

document.addEventListener("keypress",function(){
    if(started == false){
        alert("Game started!");
        started=true;
        levelUp();
    }
});

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}

function flashUser(btn){
    btn.classList.add("green");
    setTimeout(function(){
        btn.classList.remove("green");
    }, 90);
}

function levelUp(){
    level++;
    p.innerText=`Level ${level}`;
    
    //selecting random button
    let index= Math.floor(Math.random()*4);
    let btnFlash=btns[index];
    let randBtn= document.querySelector(`.${btnFlash}`);
    gameSeq.push(btnFlash);
    console.log(gameSeq);
    flashBtn(randBtn);
    playerSeq=[];

}

function checkAns(idx){
    if(gameSeq[idx]==playerSeq[idx]){
        if(gameSeq.length==playerSeq.length){
            setTimeout(() => levelUp(), 500);
            score+=level;
            findHighest(score);
            scores.innerHTML=`Score: ${score} <br> Highest Score: ${highestScore}`;
        }
    }

    else{

        p.innerText=`GAME OVER! Your Score was: ${score} Press any key to start again.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="wheat";
        },200);
        reset();
        scores.innerHTML = `Score: ${score} <br> Highest Score: ${highestScore}`;
    }
}

function btnPress(){
    let pressedBtn=this;
    flashUser(pressedBtn);
    let userIp;
    for (let cls of btns) {
        if (this.classList.contains(cls)) {
            userIp = cls;
            break;
        }
    }
    console.log(userIp);
    playerSeq.push(userIp);
    checkAns(playerSeq.length-1);
}

let allBtns= document.querySelectorAll("#box");
for(Btn of allBtns){
    Btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    playerSeq=[];
    level=0;
    score=0;
}

function findHighest(score){
    if(highestScore<score){
        highestScore=score;
    }

    else{
        highestScore=highestScore;
    }
}