document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".link-button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const level = btn.getAttribute("data-level");
      alert(
        "Заглушка. Здесь можно будет открыть список программ для уровня " +
          level +
          ". Пока используйте матрицу как ориентир и уточняйте портфель вручную."
      );
    });
  });
});
