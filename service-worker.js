<script>
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js")
        .then(reg => console.log("Service Worker registrado com sucesso!", reg))
        .catch(err => console.log("Falha ao registrar o Service Worker:", err));
    });
  }

  // Lógica para capturar o evento de instalação
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Mostra o botão de instalar que já existe no seu topo
    const btnInstall = document.getElementById('btn-install-app');
    if(btnInstall) btnInstall.style.display = 'flex';
  });

  async function installApp() {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        deferredPrompt = null;
        document.getElementById('btn-install-app').style.display = 'none';
      }
    }
  }
</script>
