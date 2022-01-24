function playpause() {
    let vid = document.querySelector("#video1");
    if (vid.paused){
        vid.play();
    }
    else {
        vid.pause();
    }
}