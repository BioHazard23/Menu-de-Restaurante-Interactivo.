document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidad del Menú Móvil
  const botonMenuMovil = document.querySelector('.boton-menu-movil');
  const navegacionPrincipal = document.querySelector('.navegacion-principal');

  if (botonMenuMovil && navegacionPrincipal) {
    botonMenuMovil.addEventListener('click', () => {
      navegacionPrincipal.classList.toggle('activa'); // Añade o quita la clase 'activa'

      // Actualizar ARIA attribute y el ícono del botón
      const esActiva = navegacionPrincipal.classList.contains('activa');
      botonMenuMovil.setAttribute('aria-expanded', esActiva);

      if (esActiva) {
        botonMenuMovil.innerHTML = '&times;'; // Ícono de 'X' (cierre)
      } else {
        botonMenuMovil.innerHTML = '&#9776;'; // Ícono de hamburguesa
      }
    });

    // Opcional: Cerrar menú al hacer clic en un enlace (para SPAs o anclas)
    const enlacesMenu = navegacionPrincipal.querySelectorAll('a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', () => {
            if (navegacionPrincipal.classList.contains('activa')) {
                navegacionPrincipal.classList.remove('activa');
                botonMenuMovil.setAttribute('aria-expanded', 'false');
                botonMenuMovil.innerHTML = '&#9776;';
            }
        });
    });

  } // Fin de if (botonMenuMovil && navegacionPrincipal)

  // Actualizar el año en el footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

}); // Fin de DOMContentLoaded