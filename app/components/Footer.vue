<template>
  <footer class="py-5 mt-2 background-primary">
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
            <p class="small text-white mb-0 text-center d-lg-none"> © 2026 Salento.Bike — Un progetto di Vivilitalia</p>
          </div>
        </div> <!-- Colonna 8/12 -->
        <div class="col-12 col-lg-8">
          <div class="row g-4"> <!-- Sezione 1 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-start text-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Progetto </h4>
                <NuxtLink to="/ciclonica">Ciclonica</NuxtLink>
                <NuxtLink to="/ladriatica">Ladriatica</NuxtLink>
              </div>
            </div> <!-- Sezione 2 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-start text-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Risorse </h4>
                <a href="https://www.ediciclo.it/libri/dettaglio/ciclonica-ciclovia-del-salento-ionico/" target="blank">La guida ciclonica</a>
                <NuxtLink to="/app">App</NuxtLink>
              </div>
            </div> <!-- Sezione 3 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-start text-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Su di noi </h4>
                <NuxtLink to="/chi-siamo">Chi siamo</NuxtLink>
                <a href="https://cicloturismo.puglia.it/it/diventa-partner/" target="blank">Diventa parthner</a>
                <NuxtLink to="/area-stampa">Area stampa</NuxtLink>
              </div>
            </div> <!-- Sezione 4 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column align-items-start text-start gap-2">
                <h4 class="fw-bold mb-2 text-orange"> Contatti </h4>
                <a href="mailto:info@vivilitalia.it">info@vivilitalia.it</a>
                <a href="tel:+390686268324">06/86268324</a>
                <div class="d-flex flex-wrap gap-3 mt-2">
                  <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" :aria-label="social.name" class="social-link text-orange">
                    <Icon :name="social.icon" size="20" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- Separatore -->
      <hr class="my-5 d-none d-lg-block"> <!-- Copyright -->
      <p class="small text-white mb-0 text-start d-none d-lg-block"> © 2026 Salento.Bike — Un progetto di Vivilitalia</p>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'Facebook', icon: 'fa6-brands:facebook', url: '#' },// a ciclonica
  { name: 'Instagram', icon: 'fa6-brands:instagram', url: '#' },//a ciclonica
  { name: 'LinkedIn', icon: 'fa6-brands:linkedin', url: '#' },//a vivilitalia
]
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

  .social-link {
    color: var(--color-accent-orange);
    line-height: 1;
  }

  .social-link:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  .footer-logo {
    max-height: 100px;
    width: auto;
  }

  hr {
    color: var(--color-text-white);
    opacity: 1;
  }
}
</style>