const objs = document.getElementsByClassName('scroll-fade');

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

function checkScrollFade() {
    var fraction = 0.0; // Do when the object is visible

    for(var i = 0; i < objs.length; i++) {
        var obj = objs[i];
        var coords = obj.getBoundingClientRect();

        var visibleX = clampV(coords.right) - clampV(coords.left);
        var visibleY = clampH(coords.bottom) - clampH(coords.top);

        var visible = visibleX * visibleY / (coords.width * coords.height);

        if (visible > fraction) {
            console.log(obj.style.opacity);
            let cur = 0;
            if(!isNaN(parseFloat(obj.style.opacity))){
                cur = parseFloat(obj.style.opacity);
            }
            obj.style.opacity = Math.max(cur, Math.min(visible * 0.3, 0.3)).toString();
        }

    }

}

window.addEventListener('scroll', checkScrollFade, true);
window.addEventListener('click', checkScrollFade, true);
