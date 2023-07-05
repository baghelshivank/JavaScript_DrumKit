function playSound(e){
    // console.log(e);
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log("hello");
    key.classList.add("playing");

}

function removeTransition(e){
    // console.log(e);
    // if(e.propertyName!=="transform") return;
    // console.log(e.propertyName);
    // console.log(this);
    // console.log("holla");
    // this.classList.remove("playing");

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.remove("playing");

}

window.addEventListener("keydown", playSound);
// const keys = document.querySelectorAll(".key");
// console.log(keys);
// keys.forEach(key=> key.addEventListener("transitionend", removeTransition));

window.addEventListener("keyup", removeTransition);