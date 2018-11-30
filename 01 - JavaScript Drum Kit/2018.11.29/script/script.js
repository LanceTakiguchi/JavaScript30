window.addEventListener("keypress", play);
function play(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("hit");
    if (!audio) return; 
    audio.currentTime = 0;
    audio.play();
}