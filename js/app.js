window.addEventListener("load", () => {
    addClassOnLG(".dibuja-borde-derecho", "borde-derecho");
});

window.addEventListener("resize", () => {
    addClassOnLG(".dibuja-borde-derecho", "borde-derecho");
});

function addClassOnLG(selector, clase) {
    const tam_LG = 992; //px
    let seleccionados = document.querySelectorAll(selector);

    seleccionados.forEach(function (userItem) {
        if (window.innerWidth >= tam_LG) {
            userItem.classList.add(clase);
        } else {
            userItem.classList.remove(clase);
        }
    });
}