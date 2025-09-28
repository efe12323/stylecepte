document.addEventListener("DOMContentLoaded", () => {
  // Explore sayfasındaki randevu butonları
  const buttons = document.querySelectorAll(".barber-list .btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Randevu talebiniz gönderildi! Hizmeti aldıktan sonra puan kazanacaksınız.");
    });
  });

  // Form mesajları
  const studentForm = document.getElementById("studentForm");
  if(studentForm){
    studentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("studentMsg").textContent = "🎉 Kayıt başarılı! Artık kuaförleri görebilir ve puan kazanabilirsiniz.";
      studentForm.reset();
    });
  }

  const barberForm = document.getElementById("barberForm");
  if(barberForm){
    barberForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("barberMsg").textContent = "🎉 Kuaför kaydınız alındı! Hizmetleriniz herkes tarafından görülecek.";
      barberForm.reset();
    });
  }
});

