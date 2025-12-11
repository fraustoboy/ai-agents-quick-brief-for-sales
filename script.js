document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".outline-button").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Вы выбрали: " + btn.getAttribute("data-level"));
    });
  });
});
