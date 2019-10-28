'use strict';

{
    
    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        
        if (!audio) return; // stop the function from running all together
        audio.currentTime = 0; //rewind to the start //https://www.w3schools.com/jsref/prop_audio_currenttime.asp
        audio.play();

        key.classList.add('playing')
    }

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return; // skip it if it's not a transform
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //https://qiita.com/zukkis/items/6739209e9bc716e6a8b5
    window.addEventListener('keydown', playSound);




}