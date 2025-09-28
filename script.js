// Demo için alert ekledim
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      console.log(`Butona tıklandı: ${btn.textContent}`);
    });
  });
});
