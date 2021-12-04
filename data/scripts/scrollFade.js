const objs = document.getElementsByClassName('scroll-fade');
const shown = [];
for(let i = 0; i < objs.length; i++){
    shown.push(false);
}

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
    let fraction = 0.5; // Do when the object is visible
    let delay = 0;
    let count = 0;
    let length = 500;

    for(let i = 0; i < objs.length; i++) {
        if(!shown[i]){
            let obj = objs[i];
            let coords = obj.getBoundingClientRect();

            let visibleX = clampV(coords.right) - clampV(coords.left);
            let visibleY = clampH(coords.bottom) - clampH(coords.top);

            let visible = visibleX * visibleY / (coords.width * coords.height);

            if (visible > fraction) {
                count++;
            }
        }
    }

    length = Math.min(length, count * 100);

    for(let i = 0; i < objs.length; i++) {
        if(!shown[i]){
            let obj = objs[i];
            let coords = obj.getBoundingClientRect();

            let visibleX = clampV(coords.right) - clampV(coords.left);
            let visibleY = clampH(coords.bottom) - clampH(coords.top);

            let visible = visibleX * visibleY / (coords.width * coords.height);

            if (visible > fraction) {
                setTimeout(function() {obj.style.opacity = '1'; shown[i] = true;}, delay += length / count);
            }
        }
    }
}

window.addEventListener('scroll', checkScrollFade, true);
window.addEventListener('click', checkScrollFade, true);
