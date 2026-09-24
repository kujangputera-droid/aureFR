// =============================================
// AUREVISTA FUN RIDE 2026
// =============================================


// =============================================
// SHARE EVENT
// =============================================

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

      // Share menu bawaan HP
      if (navigator.share) {

        await navigator.share(shareData);

        if (shareStatus) {
          shareStatus.textContent =
            "Terima kasih sudah membagikan event.";
        }

      }

      // Jika browser tidak mendukung Share,
      // coba salin link
      else if (navigator.clipboard) {

        await navigator.clipboard.writeText(
          window.location.href
        );

        if (shareStatus) {
          shareStatus.textContent =
            "Link event berhasil disalin. Bagikan ke komunitasmu.";
        }

      }

      // Fallback terakhir
      else {

        if (shareStatus) {
          shareStatus.textContent =
            window.location.href;
        }

      }

    } catch {

      // User menutup menu share.
      // Tidak melakukan apa-apa.

    }

  });
}
