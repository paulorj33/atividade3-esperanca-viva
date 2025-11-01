// ===============================
// 🌿 ESPERANÇA VIVA – main.js (corrigido para exibir toast)
// ===============================

import { setupNavigation } from "./router.js";
import { initFormValidation } from "./formValidation.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("🌿 Esperança Viva – Aplicação iniciada");

  // Inicializa o roteamento SPA
  setupNavigation();

  // 🔹 Garante que a validação funcione na primeira carga
  if (window.location.hash === "#cadastro") {
    setTimeout(() => initFormValidation(), 400);
  }

  // 🔹 Reativa a validação sempre que o hash mudar (SPA)
  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "");
    if (hash === "cadastro") {
      // Dá tempo do template ser renderizado antes de aplicar o script
      setTimeout(() => initFormValidation(), 400);
    }
  });

  // 🔹 Controle do menu hambúrguer
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("ativo");
      menu.classList.toggle("ativo");
    });

    // Fecha o menu ao clicar em qualquer link
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        toggle.classList.remove("ativo");
      });
    });
  }
});
