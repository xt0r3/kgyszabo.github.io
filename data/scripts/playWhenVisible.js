var videos = document.getElementsByClassName("play-when-visible");
console.log(videos);

function clampV(x){
    if(x < 0) return 0;
    if(x > window.innerWidth) return window.innerWidth;
    return x;
}

function clampH(y){
    if(y < 0) return 0;
    if(y > window.innerHeight) return window.innerHeight;
    return y;
}

function checkScroll() {
    var fraction = 0.8; // Play when 80% of the player is visible.

    for(var i = 0; i < videos.length; i++) {
        var video = videos[i];
        var coords = video.getBoundingClientRect();

        var visibleX = clampV(coords.right) - clampV(coords.left);
        var visibleY = clampH(coords.bottom) - clampH(coords.top);

        var visible = visibleX * visibleY / (coords.width * coords.height);

        if (visible > fraction) {
            video.play();
        } else {
            video.pause();
        }

    }

}

window.addEventListener('scroll', checkScroll, true);
window.addEventListener('resize', checkScroll, true);