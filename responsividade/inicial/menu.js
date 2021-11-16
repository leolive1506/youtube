// menu normal
let show = true;

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')


menuToggle.addEventListener("click", () => {

    // bloquear rolagem e desbloquear rolagem
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)

    // deixando false o show
    show = !show
})