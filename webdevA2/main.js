//select DOM 4 the paegs and da navigatione and the traversal butons
const index = document.querySelector(".dindex");
const hist = document.querySelector(".dhistory");
const what = document.querySelector(".dwhat");
const type = document.querySelector(".dtype");
const cons = document.querySelector(".dcons");
const indexbtn = document.querySelector("#indexbtn");
const historybtn = document.querySelector("#historybtn");
const whatbtn = document.querySelector("#whatbtn");
const typebtn = document.querySelector("#typebtn");
const consbtn = document.querySelector("#consbtn");
const indexnav = document.querySelector("#indexnav");
const historynav = document.querySelector("#historynav");
const whatnav = document.querySelector("#whatnav");
const typenav = document.querySelector("#typenav");
const consnav = document.querySelector("#consnav");

//select all the DOM for the minigame
const speedinp = document.querySelector("#speedinp");
const gaming = document.querySelector(".gaming");
const timer = document.querySelector("#timer");
const startbtn = document.querySelector("#start");
var timerinterval; //setinterval var
var ingame=false;

//minmax values for top
const humantop=0;
const turtletop=-146;
const sealtop=-294;

const humanbottom=354;
const turtlebottom=206;
const sealbottom=59;

//minmax values for lefr :thumbsup:
const allleft=0;

const humanright=288;
const turtleright=260;
const sealright=293;

//pos
var humanx=0;
var humany=0;
var turtlex=0;
var turtley=0;
var sealx=0;
var sealy=0;

//velocity
var humanvelx=0;
var humanvely=0;
var turtlevelx=0;
var turtlevely=0;
var sealvelx=0;
var sealvely=0;

//id
var human;
var turtle;
var seal;

const bitesfx = new Audio('audio/bite.mp3');
const failsfx = new Audio('audio/screm.mp3');

const score = document.querySelector("#score");
var timesclicked;

//function random number generator
function randomahh(min, max){
    return Math.round(Math.random()*(max-min)+min);
}

function startgame(){
if (ingame==false){
    timesclicked=0;
    requestAnimationFrame(move);//start moving
    ingame=true;
    timer.innerHTML=100; //set timer to 100
    score.innerHTML=0; //set score to 0
    timerinterval=setInterval(function () {//start timer
            timer.innerHTML -= 1;    //every interval -1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! time!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
             score.innerHTML= Math.pow(5, speedinp.value) * timesclicked + parseInt(score.innerHTML); //this i slike 5 to the poer of the speed ll
            if (timer.innerHTML<=0){ //stops game when u DIE
                ingame=false;
                //stop timer
                clearInterval(timerinterval);
            }
        }, 100/speedinp.value);
    spawner();
}
}

function spawner(){
    gaming.innerHTML="";//CLEAR EVEYRTHING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    humanvelx=0;
    humanvely=0;
    turtlevelx=0;
    turtlevely=0;
    sealvelx=0;
    sealvely=0;
    for (var i=0;i<3;i++) {
        //make new div element
        var newfood = document.createElement('div');
        newfood.classList.add("gameobj");//Ggiive game object clalalss set position with da style.topp and stye.lef
        newfood.style.left=0;
        if (i== 0){
            human=newfood; //created food is human
            newfood.classList.add("spritehuman");//spawm one human
            newfood.style.top=humantop+"px";//set to top :)
            humanvelx=randomahh(-3,3)*speedinp.value;
            humanvely=randomahh(-3,3)*speedinp.value;
        }
        if (i==1){
            turtle=newfood;  //created turtle
            newfood.classList.add("spriteturtle");//spawn 1 turty
            newfood.style.top=turtletop+"px";
            turtlevelx=randomahh(-2,2)*speedinp.value;
            turtlevely=randomahh(-2,2)*speedinp.value;
        }
        if (i==2){
            seal=newfood; //created seal 
            newfood.classList.add("spriteseal");//spawr the. sell
            newfood.style.top=sealtop+"px";
            sealvelx=randomahh(-3,3)*speedinp.value;
            sealvely=randomahh(-3,3)*speedinp.value;
        }
        gaming.appendChild(newfood);
    }
    //startpos init
        humany=humantop;
        turtley=turtletop;
        sealy=sealtop;
        humanx=0;
        turtlex=0;
        sealx=0;
}


//hideeverything fucntion
function hideall(){
    index.style.display="none";
    hist.style.display="none";
    what.style.display="none";
    type.style.display="none";
    cons.style.display="none";
    indexnav.style.display="none";
    historynav.style.display="none";
    whatnav.style.display="none";
    typenav.style.display="none";
    consnav.style.display="none";
}

//on button clik show the correct page and navi
indexbtn.addEventListener("click", function(){
    hideall();

    index.style.display="block"; 
       indexnav.style.display="block";
});
historybtn.addEventListener("click", function(){
    hideall();
    hist.style.display="block";
    historynav.style.display="block";
});
whatbtn.addEventListener("click", function(){
    hideall();
    what.style.display="block";
    whatnav.style.display="block";
});
typebtn.addEventListener("click", function(){
    hideall();
    type.style.display="block";
    typenav.style.display="block";
});
consbtn.addEventListener("click", function(){
    hideall();
    cons.style.display="block";
    consnav.style.display="block";
});

startbtn.addEventListener("click", function(){
    startgame();
});
gaming.addEventListener("click",function(evt){
if (ingame==true){
    var clickedclasses =evt.target.classList.value;
    if (clickedclasses=="gameobj spritehuman"){
        timer.innerHTML= 0;
        spawner();//respawn
        failsfx.play();
    }
    else if (clickedclasses=="gameobj spriteturtle"){
        timer.innerHTML=10 * speedinp.value+parseInt(timer.innerHTML);//sete timre valu to int and add to it
        spawner();//respawn
        bitesfx.play();
        timesclicked++;
    }
    else if (clickedclasses=="gameobj spriteseal"){
        timer.innerHTML=30 * speedinp.value+parseInt(timer.innerHTML);  
        spawner();//respawn
        bitesfx.play();
        timesclicked++;
    }

    if (timer.innerHTML>100){
        timer.innerHTML=100;
    }
}
});


function move(){
    humanx+=humanvelx;
    humany+=humanvely;
    turtlex+=turtlevelx;
    turtley+=turtlevely;
    sealx+=sealvelx;
    sealy+=sealvely;

if (humany>humanbottom){
    humany=humanbottom;
    humanvely=-humanvely;
}
if (humany<humantop){
    humany=humantop;
    humanvely=-humanvely;
}
if (humanx>humanright){
    humanx=humanright;
    humanvelx=-humanvelx;
}
if (humanx<allleft){
    humanx=allleft;
    humanvelx=-humanvelx;
}

if (turtley>turtlebottom){
    turtley=turtlebottom;
    turtlevely=-turtlevely;
}
if (turtley<turtletop){
    turtley=turtletop;
    turtlevely=-turtlevely;
}
if (turtlex>turtleright){
    turtlex=turtleright;
    turtlevelx=-turtlevelx;
}
if (turtlex<allleft){
    turtlex=allleft;
    turtlevelx=-turtlevelx;
}

if (sealy>sealbottom){
    sealy=sealbottom;
    sealvely=-sealvely;
}
if (sealy<sealtop){
    sealy=sealtop;
    sealvely=-sealvely;
}
if (sealx>sealright){
    sealx=sealright;
    sealvelx=-sealvelx;
}
if (sealx<allleft){
    sealx=allleft;
    sealvelx=-sealvelx;
}


human.style.top=humany+"px";
human.style.left=humanx +"px";

turtle.style.top=turtley+"px";
turtle.style.left=turtlex +"px";

seal.style.top=sealy+"px";
seal.style.left=sealx +"px";




//go to next anim frame if ingame
if (ingame==true)
requestAnimationFrame(move);
}

hideall();

    index.style.display="block"; 
    indexnav.style.display="block";
    //hide all pages then show index so it shows up by default
    speedinp.value=1;