// =============================================
// AUREVISTA FUN RIDE 2026
// Ganti satu URL ini ketika link registrasi sudah siap.
// =============================================
const REGISTRATION_URL = "ISI-LINK-PENDAFTARAN-DI-SINI";

document.querySelectorAll("[data-register]").forEach((link) => {
  link.href = REGISTRATION_URL;
  link.addEventListener("click", (event) => {
    if (REGISTRATION_URL.includes("ISI-LINK")) {
      event.preventDefault();
      alert("Link pendaftaran belum diisi. Buka script.js dan ganti REGISTRATION_URL.");
    }
  });
});

const shareButton = document.getElementById("shareButton");
const shareStatus = document.getElementById("shareStatus");

if (shareButton) {
  shareButton.addEventListener("click", async () => {
    const shareData = {
      title: "Aurevista Fun Ride 2026",
      text: "Ayo ikut AUREVISTA FUN RIDE 2026 — More Than a Ride. Khusus anggota komunitas motor.",
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        shareStatus.textContent = "Terima kasih sudah membagikan event.";
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        shareStatus.textContent = "Link event berhasil disalin. Bagikan ke komunitasmu.";
      } else {
        shareStatus.textContent = window.location.href;
      }
    } catch {
      // User closed the native share dialog; no action needed.
    }
  });
}
