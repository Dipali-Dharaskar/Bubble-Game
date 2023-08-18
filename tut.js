var timer = 60;
var score = 0;
var hitrn = 0;

//  jispe  click karoge wo element par event raise hoge, 
// aur event listener naa milne par event element ke parent 
// par listener dhundhenga, waha bhi naa milane par event
//  parent ke parent ke parent par listener dhundega

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){    
    var clutter ="";
    
    for(var i=1; i<=147; i++){
    // += (clutter me yek yek karke add karte jao 69 )
    var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    
    }
    document.querySelector("#pbot").innerHTML = clutter;
}
function runTimer(){
var timerint = setInterval(function (){
    if(timer>0){
        timer--;
        document.querySelector("#timerVal").textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbot").innerHTML = `<h1>Game Over</h1>`;
    }
}, 1000);
}

document.querySelector("#pbot")
.addEventListener("click", function(dets){
var clickednum = Number(dets.target.textContent);
if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();


}
})
runTimer();

makeBubble();

getNewHit();
 













