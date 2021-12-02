

function initBlock(name) {
    const projectBlock = document.getElementById(name + "-block");
    const video = document.getElementById(name + "-video");
    projectBlock.addEventListener("mouseover", () => video.play());
    projectBlock.addEventListener("mouseout", () => video.pause());
}

initBlock("evolution");
initBlock("neural-net");
initBlock("repeat");
