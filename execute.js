var btnPlay = document.querySelector('.ytp-play-button'),
    timePassed = document.querySelector('.ytp-time-current');

var t = timePassed.innerHTML.split(':').map((v)=>parseInt(v));
if (t.length === 2){
    t = t[0]*60 + t[1];
} else{
    t = t[0]*3600 + t[1]*60 + t[2];
}

chrome.storage.sync.set({"timePassed": t}, ()=>{
    if (btnPlay.getAttribute('title').indexOf('Pause')>-1){
        btnPlay.click();
    }
});

