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
                <h4 class="fw-bold mb-2 text-orange"> Progetto </h4>
                <NuxtLink to="/ciclonica">Ciclonica</NuxtLink>
                <NuxtLink to="/ladriatica">Ladriatica</NuxtLink>
                <a href="#">Anello del Salento</a>
              </div>
            </div> <!-- Sezione 2 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Risorse </h4>
                <a href="#">La guida</a>
                <NuxtLink to="/app">App</NuxtLink>
                <a href="#">FAQ</a>
              </div>
            </div> <!-- Sezione 3 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Su di noi </h4>
                <NuxtLink to="/chi-siamo">Chi siamo</NuxtLink>
                <a href="#">Diventa parthner</a>
                <NuxtLink to="/area-stampa">Area stampa</NuxtLink>
              </div>
            </div> <!-- Sezione 4 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Contatti </h4>
                <a href="mailto:info@vivilitalia.it">info@vivilitalia.it</a>
                <a href="tel:+390686268324">06/86268324</a>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- Separatore -->
      <hr class="my-5"> <!-- Copyright -->
      <p class="small text-white mb-0 text-center text-lg-start"> © 2026 Salento.Bike — Un progetto di Vivilitalia</p>
    </div>
  </footer>
</template>

<script setup>
// JavaScript / logica
</script>

<style scoped>
footer {
  h3, p, span, a {
    color: var(--color-text-white);
  }

  span, a {
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .footer-logo {
    max-height: 100px;
    width: auto;
  }
}
</style>