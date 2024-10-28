let contador = 1;
let tempo = 3000; 

function mudarSlide() {
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if (contador > 5) {
        contador = 1;
        tempo += 2000;
    }


    setTimeout(mudarSlide, tempo);
}


mudarSlide();