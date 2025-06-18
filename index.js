let gameSeq=[];
let userSeq=[];

let h2=document.querySelector("h2");
let btns= ['red', 'blue', 'yellow', 'green'];

let started=false;
let level=0;

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game Started");
        started =true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    userSeq=[];

    h2.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);  
    btnFlash(randBtn);
};

function checkAns(idx){
    // let idx=level-1;

    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000);
        }

    }
    else{
        h2.innerHTML=`Game Over, Your score is <b>${level} </b>  <br/> Press any key to Start`;
        reset();
    }
}

function btnPress(){
    let btn=this;
    btnFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".box");

for( btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}