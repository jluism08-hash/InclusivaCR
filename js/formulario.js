// formulario.js - Validación del formulario de contacto accesible

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const telefonoInput = document.getElementById('telefono');
  const tipoConsulta = document.getElementById('tipo-consulta');
  const mensajeInput = document.getElementById('mensaje');
  const privacidadCheckbox = document.getElementById('privacidad');
  const submitButton = document.getElementById('submit-button');

  // Obtiene el contenedor de error aunque no sea hermano directo
  function obtenerErrorDiv(input) {
    if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
      return input.nextElementSibling;
    }
    if (input.parentElement && input.parentElement.querySelector('.error-message')) {
      return input.parentElement.querySelector('.error-message');
    }
    if (input.parentElement && input.parentElement.parentElement) {
      return input.parentElement.parentElement.querySelector('.error-message');
    }
    return null;
  }

  function mostrarError(input, mensaje) {
    const errorDiv = obtenerErrorDiv(input);
    input.setAttribute('aria-invalid', 'true');
    input.classList.add('error');
    if (errorDiv) {
      errorDiv.textContent = mensaje;
      errorDiv.style.display = 'block';
    }
  }

  function limpiarError(input) {
    const errorDiv = obtenerErrorDiv(input);
    input.setAttribute('aria-invalid', 'false');
    input.classList.remove('error');
    if (errorDiv) {
      errorDiv.textContent = '';
      errorDiv.style.display = 'none';
    }
  }

  function validarNombre() {
    const valor = nombreInput.value.trim();
    if (!valor) {
      mostrarError(nombreInput, 'Por favor ingresa tu nombre completo (mínimo 3 caracteres)');
      return false;
    }
    if (valor.length < 3) {
      mostrarError(nombreInput, 'El nombre debe tener al menos 3 caracteres');
      return false;
    }
    limpiarError(nombreInput);
    return true;
  }

  function validarEmail() {
    const valor = emailInput.value.trim();
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!valor) {
      mostrarError(emailInput, 'Por favor ingresa tu correo electrónico');
      return false;
    }
    if (!regex.test(valor)) {
      mostrarError(emailInput, 'Por favor ingresa un correo electrónico válido');
      return false;
    }
    limpiarError(emailInput);
    return true;
  }

  function validarTelefono() {
    const valor = telefonoInput.value.trim();
    const regex = /^[0-9]{4}-[0-9]{4}$/;
    if (!valor) {
      limpiarError(telefonoInput);
      return true;
    }
    if (!regex.test(valor)) {
      mostrarError(telefonoInput, 'El formato debe ser XXXX-XXXX');
      return false;
    }
    limpiarError(telefonoInput);
    return true;
  }

  function validarTipoConsulta() {
    if (tipoConsulta.value === 'default' || tipoConsulta.value === '') {
      mostrarError(tipoConsulta, 'Por favor selecciona un tipo de consulta');
      return false;
    }
    limpiarError(tipoConsulta);
    return true;
  }

  function validarMensaje() {
    const valor = mensajeInput.value.trim();
    if (!valor) {
      mostrarError(mensajeInput, 'El mensaje debe tener al menos 20 caracteres');
      return false;
    }
    if (valor.length < 20) {
      mostrarError(mensajeInput, `El mensaje debe tener al menos 20 caracteres (tienes ${valor.length})`);
      return false;
    }
    limpiarError(mensajeInput);
    return true;
  }

  function validarPrivacidad() {
    if (!privacidadCheckbox.checked) {
      mostrarError(privacidadCheckbox, 'Debes aceptar la política de privacidad para continuar');
      return false;
    }
    limpiarError(privacidadCheckbox);
    return true;
  }

  function formularioValido() {
    const v1 = validarNombre();
    const v2 = validarEmail();
    const v3 = validarTelefono();
    const v4 = validarTipoConsulta();
    const v5 = validarMensaje();
    const v6 = validarPrivacidad();
    return v1 && v2 && v3 && v4 && v5 && v6;
  }

  function actualizarEstadoBoton() {
    const listo = validarNombre() && validarEmail() && validarTelefono() && validarTipoConsulta() && validarMensaje() && validarPrivacidad();
    submitButton.disabled = !listo;
  }

  // Eventos de validación en tiempo real
  nombreInput.addEventListener('input', () => { validarNombre(); actualizarEstadoBoton(); });
  nombreInput.addEventListener('blur', validarNombre);

  emailInput.addEventListener('input', () => { validarEmail(); actualizarEstadoBoton(); });
  emailInput.addEventListener('blur', validarEmail);

  telefonoInput.addEventListener('input', () => { validarTelefono(); actualizarEstadoBoton(); });
  telefonoInput.addEventListener('blur', validarTelefono);

  tipoConsulta.addEventListener('change', () => { validarTipoConsulta(); actualizarEstadoBoton(); });
  mensajeInput.addEventListener('input', () => { validarMensaje(); actualizarEstadoBoton(); });
  mensajeInput.addEventListener('blur', validarMensaje);
  privacidadCheckbox.addEventListener('change', () => { validarPrivacidad(); actualizarEstadoBoton(); });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (formularioValido()) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      const datos = {
        nombre: nombreInput.value.trim(),
        email: emailInput.value.trim(),
        telefono: telefonoInput.value.trim(),
        tipo: tipoConsulta.value,
        mensaje: mensajeInput.value.trim(),
      };

      setTimeout(() => {
        mostrarMensajeExito();
        form.reset();
        submitButton.disabled = true;
        submitButton.textContent = 'Enviar mensaje';
        console.log('📧 Formulario enviado:', datos);
      }, 1200);
    } else {
      const primerError = form.querySelector('.error');
      if (primerError) primerError.focus();
    }
  });

  function mostrarMensajeExito() {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje-exito';
    mensajeExito.setAttribute('role', 'alert');
    mensajeExito.setAttribute('aria-live', 'polite');
    mensajeExito.innerHTML = '<strong>✓ ¡Mensaje enviado correctamente!</strong><p>Gracias por contactarnos. Responderemos tu consulta en menos de 24 horas.</p>';
    form.parentNode.insertBefore(mensajeExito, form);
    mensajeExito.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => {
      mensajeExito.style.opacity = '0';
      setTimeout(() => mensajeExito.remove(), 500);
    }, 8000);
  }
});
