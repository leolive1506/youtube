let time = 2000,
    currentImgIndex = 0,
    images = document.querySelectorAll('#slider img')
    max = images.length


// troca de img
function nextImage() {

    images[currentImgIndex].classList.remove('selected')

    currentImgIndex++
    if(currentImgIndex >= max) {
        currentImgIndex = 0
    } 

    images[currentImgIndex].classList.add('selected')

    

}

function start() {
    setInterval(() => {
        nextImage()
    }, time)
}
window.addEventListener('load', start)