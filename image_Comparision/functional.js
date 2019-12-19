let slide = document.getElementById('slide')
window.onmousemove = function(e){
    let x = e.clientX;
    slide.style.left = x + 'px'
}

window.onload()
