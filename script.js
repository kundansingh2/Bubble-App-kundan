function makebubble(){
let text = " ";
for (let i = 1; i < 169; i++) {
    
    let rn = Math.floor(Math.random()*10);
    text += `<div class="bubble">${rn}</div>`;
    
}
document.querySelector("#pbtm").innerHTML = text;
}
let timer = 60;
let score = 0;
let hitrn = 0;

function runTimer(){
  let result =  setInterval(function(){
        if (timer > 0){
        timer--;
        document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(result);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }

    }, 1000);

}
function getNewHit(){
    let timer = 60;
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitvial").textContent = hitrn

}

function increaseScore(){
    let timer = 60;
    let score = 0;
    score += 10;
    document.querySelector("#scorevak").textContent = score;
}
/*
document.querySelector("#pbtm").addEventListener("click", function(dets){
    alert("hii kundan");
});
*/

document.querySelector("#pbtm").addEventListener('click', (dets) => {
    let clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }

});

// when we increase i to 2 to 3 to 4 time value increase 10 +.. every tme
// increaseScore();
getNewHit();
runTimer();
makebubble();


// event bubbling => jispe click karenge wo element par event raise hoga , aur event listner naa milne par event element ke parent par listner dhundega , waha na milne par event parent ke parent ke parent par listner dhundega;