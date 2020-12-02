let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=560,height=315,left=-1000,top=-1000`;

var btnOpen = document.querySelector('#yt-pip-open');

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    // https://stackoverflow.com/questions/1979583/how-can-i-get-the-url-of-the-current-tab-from-a-google-chrome-extension
    let url = tabs[0].url,
        parts = url.split('v=');

    if(url.indexOf('www.youtube.com')>-1 && parts[1]){
        btnOpen.addEventListener('click', ()=>{
            chrome.tabs.executeScript({
                file: 'execute.js'
            }, ()=>{
                chrome.storage.sync.get('timePassed', (result)=>{
                    parts = parts[1].split('&');
                    open('https://www.youtube.com/embed/' + parts[0] + '?autoplay=1&start=' + result.timePassed, 'test', params);
                    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {state: "minimized"}, (win)=>{
                    });
                });
            });
        });
    } else{
        document.querySelector('.yt-pip-enabled').style.display = 'none';
        document.querySelector('.yt-pip-disabled').style.display = 'block';
    }

});

