const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),   
 };
 
 let timerId = null;
 
 function getRandomHexColor() {
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
   };
 
 function updateBodyBGcolor(color) {
   document.body.style.backgroundColor = color;
 }
 
 refs.startBtn.addEventListener('click', () => {
   document.querySelector('button[data-start]').disabled = true;
   document.querySelector('button[data-stop]').disabled = false;
   timerId = setInterval(() => updateBodyBGcolor(getRandomHexColor()),1000);
 });
 
 refs.stopBtn.addEventListener('click', () => {
   document.querySelector('button[data-start]').disabled = false;
   document.querySelector('button[data-stop]').disabled = true;
   clearInterval(timerId);
 });
 
 
 

