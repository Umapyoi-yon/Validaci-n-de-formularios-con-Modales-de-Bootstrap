// scripts.js - Sesión 14: Validación con Modal de Bootstrap

/**
 * Muestra el modal de error con un mensaje personalizado.
 * @param {string} mensaje - Texto que describe el error al usuario.
 */
function mostrarModalError(mensaje) {
    // Instanciamos el modal de Bootstrap mediante JavaScript
    const modalElement = document.getElementById('modalError');
    const modal = new bootstrap.Modal(modalElement);

    // Modificamos dinámicamente el cuerpo del modal con el mensaje de error
    document.getElementById('modalErrorBody').textContent = mensaje;

    // Mostramos el modal en pantalla
    modal.show();
}

/**
 * Valida que los campos del formulario no estén vacíos.
 * Sustituye los console.log() de la sesión anterior por el modal de Bootstrap.
 * @returns {boolean} true si la validación pasa, false si hay algún error.
 */
function validarContenido() {
    const nombre = document.getElementById('inputNombre').value.trim();
    const domicilio = document.getElementById('inputDomicilio').value.trim();

    if (nombre === '') {
        mostrarModalError('El campo "Nombre" es obligatorio. Por favor, ingresa un nombre.');
        return false;
    }

    if (domicilio === '') {
        mostrarModalError('El campo "Domicilio" es obligatorio. Por favor, ingresa un domicilio.');
        return false;
    }

    return true;
}

// Asignamos el evento click al botón de envío
document.getElementById('btnEnviar').addEventListener('click', function () {
    const esValido = validarContenido();

    if (esValido) {
        const nombre = document.getElementById('inputNombre').value.trim();
        const domicilio = document.getElementById('inputDomicilio').value.trim();

        // Aquí iría la lógica para procesar los datos (p. ej. enviar al servidor)
        alert(`Contacto guardado:\nNombre: ${nombre}\nDomicilio: ${domicilio}`);
    }
});