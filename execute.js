var btnPlay = document.querySelector('.ytp-play-button'),
    timePassed = document.querySelector('.ytp-time-current');

var t = timePassed.innerHTML.split(':').map((v)=>parseInt(v));
t = t[0]*60 + t[1];

chrome.storage.sync.set({"timePassed": t}, ()=>{
    if (btnPlay.getAttribute('title').indexOf('Pause')>-1){
        btnPlay.click();
    }
});

