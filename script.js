var points = 0;
var isRunning = true;
var clickedButton = 0;

let correctPick = 0;
console.log(correctPick);
actualGame();
console.log(correctPick);



function generateColor() {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        return `rgb(${r},${g},${b})`;
    }
function showColor(correctColor) {
    document.getElementById("colorGuess").style.backgroundColor = correctColor;
}

function arrayOfColors(){
    return [generateColor(), generateColor(), generateColor()];
}

function insertValuesIntoButtons(){

}


function actualGame(){
   correctPick = Math.round(Math.random()*2); 
let colorValue = [
    generateColor(),
    generateColor(),
    generateColor()
];
showColor(colorValue[correctPick]);
for(let i=0;i<3;i++){
        document.getElementById(`button${i}`).innerHTML = colorValue[i];
}
}

const but0 = document.getElementById('but0');
but0.addEventListener("click", reset);

const but1 = document.getElementById('but1');
but1.addEventListener("click", reset);

const but2 = document.getElementById('but2');
but2.addEventListener("click", reset);

//let myTimeout = setTimeout(this.reload, 5000);

function reset(){
    let text = document.getElementById('counter');
    

    if(this.id[3] == correctPick){
        points+=1;
        console.log(points);
        text.style.color = 'green';
        text.innerHTML = '<p>Actual points: '+points;

        actualGame();
        
    }
    else{
        points = 0;
        text.innerHTML = 'Game Over! <p id="refresh">(refresh page for retry!)</p>'
        text.style.color = 'red';
        myTimeout();
        
    }
}


