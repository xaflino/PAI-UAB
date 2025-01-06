function compartirEnllacos() {
    const tercerParagraf = document.getElementById('aquest');
    
    const numEnllacos = tercerParagraf.getElementsByTagName('a').length;

    const resultats = document.getElementById('resultats');
    resultats.innerHTML = numEnllacos;
}

function compartirEnllacos2() {
    // Selecciona todos los párrafos
    const paragrafs = document.querySelectorAll('p');
    
    // Oculta todos los párrafos
    paragrafs.forEach((paragraf) => {
        paragraf.style.display = 'none';
    });

    // Muestra solo el tercer párrafo
    const tercerParagraf = document.getElementById('aquest');
    tercerParagraf.style.display = 'block';
    
    // Cuenta los enlaces en el tercer párrafo
    const numEnllacos = tercerParagraf.getElementsByTagName('a').length;
    
    // Actualiza el contenido del span con el número de enlaces
    const resultats = document.getElementById('resultats');
    resultats.innerHTML = numEnllacos;
    
    // Muestra también el resultado
    resultats.parentElement.style.display = 'block';
}
