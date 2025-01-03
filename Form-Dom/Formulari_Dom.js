// Segundo paso: Borrar contenido y cambiar color al hacer clic en el campo Nombre
document.getElementById("nombre").addEventListener("focus", function() {
    const campoNombre = document.getElementById("nombre");

    // Solo borra el contenido si es el texto inicial (placeholder o valor inicial)
    if (campoNombre.value === "Escriu el teu nom") {
        campoNombre.value = ""; // Borra el contenido
        campoNombre.style.color = "black"; // Cambia el color del texto a negro
    }
});

  
  // Tercer paso: Mostrar el contenido del campo Nombre en la consola al salir del campo
  document.getElementById("nombre").onblur = function() {
    const campoNombre = document.getElementById("nombre");
    console.log("Contenido del campo 'Nom':", campoNombre.value);
  };

  // Cuarto paso: Habilitar o deshabilitar el campo de comentarios basado en el radiobotón seleccionado
  document.getElementById("añadirComentarios").onclick = function(){
    const comentaris = document.getElementById("comentarios");
    comentaris.disabled = !this.checked;
  };

  //  document.getElementById("comentariosSi").onclick = function() {
  //  const comentarios = document.getElementById("comentarios");
  //  comentarios.disabled = false; // Habilita el campo de comentarios
  // };
  
  // document.getElementById("comentariosNo").onclick = function() {
  // const comentarios = document.getElementById("comentarios");
  // comentarios.disabled = true; // Deshabilita el campo de comentarios
  // };
  

  // Sexto paso: Validar y modificar el comportamiento del botón Enviar
  document.getElementById("enviar").onclick = function() {
    const nombre = document.getElementById("nombre");
    const comentaris = document.getElementById("comentarios");
    const checkbox = document.getElementById("añadirComentarios");

    // Validación del nombre
    if (nombre.value === "" || nombre.value === "Escriu el teu nom") {
      nombre.value = "Escriu un nom";
      nombre.style.color = "red"; // Cambiar color a rojo
      return; // Termina la función
    }

    // Si el checkbox no está marcado, copiar el nombre 10 veces
    if (!checkbox.checked) {
      comentaris.value = nombre.value.repeat(10); // Copia el texto 10 veces
    }

    // Deshabilitar el botón Enviar
    this.disabled = true;
    this.style.visibility = "hidden";
  };

