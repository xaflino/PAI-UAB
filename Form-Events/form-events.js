// Formulario i
function executarF1() {
    const fname = document.getElementById('fname')?.value;
    const lname = document.getElementById('lname')?.value;
    const email = document.getElementById('email')?.value;
    const button = document.querySelector('#form1 button');

    // Validación del correo electrónico
    if (email && !email.includes('@')) {
        alert('El correu no és vàlid');
        document.getElementById('email').value = '';
        return;
    }

    console.log(`Nombre: ${fname || 'Sin valor'}, Apellido: ${lname || 'Sin valor'}, Correo: ${email || 'Sin valor'}`);

    // Mostrar mensaje y desactivar botón
    const mensaje = document.createElement('p');
    mensaje.textContent = 'Processant la seva petició...';
    document.getElementById('form1').appendChild(mensaje);
    button.disabled = true;
}

// Formulario ii
function executarF2() {
    const radios = document.getElementsByName('option');
    for (let radio of radios) {
        if (radio.checked) {
            console.log(`Opción seleccionada: ${radio.value}`);
        }
    }
}

// Formulario iii
function executarF3() {
    const checkboxes = document.querySelectorAll('#form3 input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            console.log(`Opción seleccionada: ${checkbox.value}`);
        }
    });
}

// Formulario iv
function executarF4() {
    const dropdown = document.getElementById('dropdown');
    console.log(`Tercer elemento seleccionado: ${dropdown.options[2]?.value || 'No existe un tercer elemento'}`);
}

// Ocultar y mostrar texto (Ejercicio 6.4)
function toggleText() {
    const paragraph = document.querySelector('p:nth-of-type(2)');
    const link = document.querySelector('a');

    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
        link.textContent = 'Ocultar JavaScript';
    } else {
        paragraph.style.display = 'none';
        link.textContent = 'Mostrar JavaScript';
    }
}
