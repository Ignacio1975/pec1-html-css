import AOS from "aos";
import "aos/dist/aos.css";

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800,
        once: true
    });

  const botonCuriosidad = document.querySelector("[data-boton-curiosidad]");
  const bloqueCuriosidad = document.querySelector("[data-curiosidad]");

  if (botonCuriosidad && bloqueCuriosidad) {
      botonCuriosidad.addEventListener("click", () => {
      const estaOculto = bloqueCuriosidad.hasAttribute("hidden");

      if (estaOculto) {
          bloqueCuriosidad.removeAttribute("hidden");
          botonCuriosidad.setAttribute("aria-expanded", "true");
          botonCuriosidad.textContent = "Ocultar curiosidad gastronómica";
      } else {
          bloqueCuriosidad.setAttribute("hidden", "");
          botonCuriosidad.setAttribute("aria-expanded", "false");
          botonCuriosidad.textContent = "Mostrar curiosidad gastronómica";
      }
    });
  }

  const botonesFiltro = document.querySelectorAll("[data-filtro]");
  const tarjetas = document.querySelectorAll("[data-tipo]");

  if (botonesFiltro.length && tarjetas.length) {
      botonesFiltro.forEach((boton) => {
        boton.addEventListener("click", () => {
            const filtro = boton.dataset.filtro;

        botonesFiltro.forEach((item) => {
            item.classList.remove("activo");
            item.setAttribute("aria-pressed", "false");
        });

        boton.classList.add("activo");
        boton.setAttribute("aria-pressed", "true");

        tarjetas.forEach((tarjeta) => {
            const tipo = tarjeta.dataset.tipo;
            
            if (filtro === "todos" || tipo === filtro)
                tarjeta.hidden = false;
            else
                tarjeta.hidden = true;
        });
      });
    });
  }
});