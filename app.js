let gameseq=[];
let userseq=[];
let btns=["red","yellow","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
})
function checkAns(idx){
    if(gameseq[idx]===userseq[idx]){
        if(gameseq.length==userseq.length)setTimeout(levelUp,1000);
    }else{
        h2.innerHTML=`Game Over! press any key to start again.<br> Your Score:${level*100}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"; 
        },150)
        reset();
    }
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIdx= Math.floor(Math.random()*3);
    let ranColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameseq.push(ranColor);
    btnFlash(ranBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function btnPress(){
    let btn=this;
    let btnColor=btn.getAttribute("id");
    userseq.push(btnColor);
    btnFlash(btn);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}