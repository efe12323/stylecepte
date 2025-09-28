document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".explore .card .btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Randevu talebiniz gönderildi! Hizmeti aldıktan sonra puan kazanacaksınız.");
    });
  });
});


