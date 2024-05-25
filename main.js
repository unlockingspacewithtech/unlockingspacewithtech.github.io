const soundBtn = document.querySelector('.play-sound-btn');
let myAudio = document.querySelector('#audio');
soundBtn.addEventListener('click',()=>{
myAudio.play();
window.setTimeout(function(){



// Move to a new location or you can do something else
window.location.href = "https://www.google.co.in";



}, 5000);
});