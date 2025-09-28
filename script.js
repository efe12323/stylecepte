document.addEventListener("DOMContentLoaded", () => {
  // Öğrenci formu
  const studentForm = document.getElementById("studentForm");
  if(studentForm){
    studentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("studentMsg").textContent = "🎉 Kayıt başarılı! Artık indirimli kuaförleri görebilirsiniz.";
      studentForm.reset();
    });
  }

  // Kuaför formu
  const barberForm = document.getElementById("barberForm");
  if(barberForm){
    barberForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("barberMsg").textContent = "🎉 Kuaför kaydınız alındı! Öğrencilere görünür olacaksınız.";
      barberForm.reset();
    });
  }

  // Explore sayfasındaki randevu butonları
  const buttons = document.querySelectorAll(".barber-list .btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Randevu talebiniz gönderildi! Kuaför sizi bilgilendirecek.");
    });
  });
});
