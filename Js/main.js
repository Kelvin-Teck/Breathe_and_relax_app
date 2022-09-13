const container = document.querySelector('.container');
const text = document.querySelector('.text');

let totalTime = 7500;
let breatheTime = (totalTime/5)*2;
let holdTime = totalTime/5;


function breathe(){
    text.innerText = 'Breathe In!';
    container.className = 'container grow';
    setTimeout(()=>{
        text.innerText = 'Hold!';
        setTimeout(()=>{
            text.innerHTML = 'Breathe Out!';
    container.className = 'container shrink';

        },holdTime)
    },breatheTime);

   
}

breathe();

setInterval(breathe,totalTime);