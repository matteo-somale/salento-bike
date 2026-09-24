<template>
  <footer class="py-5 background-primary">
    <div class="container"> <!-- Contenuto principale -->
      <div class="row g-5"> <!-- Colonna 4/12 -->
        <div class="col-12 col-lg-4">
          <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-3">
            <div class="d-flex align-items-center justify-content-center">
              <img src="/logo/logo-vivilitalia-bianco.svg" style="height: 4em;" alt="Logo Vivilitalia" class="my-1"></div>
            <p class="mb-0"> in collaborazione con </p>
            <div class="d-flex flex-column flex-sm-row flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
              <img src="/logo/green-community-logo-white.png" alt="Logo Ciclonica" class="footer-logo">
              <img src="/logo/costa-otranto-logo-white.png" alt="Logo L'Adriatica" class="footer-logo">
            </div>
          </div>
        </div> <!-- Colonna 8/12 -->
        <div class="col-12 col-lg-8">
          <div class="row g-4"> <!-- Sezione 1 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Progetto </h4> <span>Chi siamo</span> <span>Il progetto</span>
                <span>Mission</span> <span>Contatti</span>
              </div>
            </div> <!-- Sezione 2 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Servizi </h4> <span>Consulenza</span> <span>Soluzioni</span>
                <span>Supporto</span> <span>Assistenza</span>
              </div>
            </div> <!-- Sezione 3 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Risorse </h4> <span>Blog</span> <span>Guide</span>
                <span>Documentazione</span> <span>FAQ</span>
              </div>
            </div> <!-- Sezione 4 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Seguici </h4> <span>Instagram</span> <span>LinkedIn</span>
                <span>Facebook</span> <span>YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- Separatore -->
      <hr class="my-5"> <!-- Copyright -->
      <p class="small text-secondary mb-0 text-center text-lg-start"> © 2026 Salento.Bike — Un progetto della Green Community Ionico-Adriatica </p>
    </div>
  </footer>
</template>

<script setup>
// JavaScript / logica
</script>

<style scoped>
footer {
  h3, p , span {
    color: var(--color-text-white);
  }

  span {
    font-size: 14px;
  }

  .footer-logo {
    max-height: 100px;
    width: auto;
  }
}
</style>