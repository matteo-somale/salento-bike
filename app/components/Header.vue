<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <!-- Logo -->
        <NuxtLink
          to="/"
          class="navbar-brand"
        >
          <img src="/logo/salento-bike-colore.svg" alt="Logo salento.bike" class="my-1 logo-full d-none d-lg-block">
          <img src="/logo/salento-bike-colore-small.svg" alt="Logo salento.bike" class="my-1 logo-small d-lg-none">
        </NuxtLink>


        <!-- Hamburger - visibile solo su mobile -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Apri menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>


        <!-- Contenuto della navbar -->
        <div
          id="mainNavbar"
          class="collapse navbar-collapse"
        >

          <!-- Pagine -->
          <ul class="navbar-nav mx-auto gap-1 px-2">

            <li
              v-for="(pagina, index) in pagine"
              :key="index"
              class="nav-item"
            >
              <NuxtLink
                :to="pagina.route"
                class="nav-link"
                @click="closeMenu"
              >
                <h5>{{ pagina.nome }}</h5>
              </NuxtLink>
            </li>

          </ul>


          <!-- Bottone -->
          <div class="header-action text-center">

            <div class="header-action-inner d-inline-block position-relative">

              <NuxtLink
                to="/contact"
                class="btn btn-gray btn-lg fw-bold d-inline-flex align-items-center gap-2"
                @click="closeMenu"
              >
                <Icon name="bi:chat-fill" />
                ENG
              </NuxtLink>

              <span class="coming-soon body-small">coming soon</span>

            </div>

          </div>

        </div>

      </div>
    </nav>
  </header>
</template>


<script setup>
const pagine = [
  { nome: 'Percorsi', route: '/percorsi' },
  { nome: 'APP', route: '/app' },
  { nome: 'News', route: '/news' },
  { nome: 'Chi Siamo', route: '/chi-siamo' },
  { nome: 'Gallery', route: '/galleria' },
  { nome: 'Area Stampa', route: '/area-stampa' },
]

// Su mobile chiude la tendina dopo il click su un link, prima della navigazione
function closeMenu() {
  const el = document.getElementById('mainNavbar')
  const instance = el && window.bootstrap?.Collapse.getInstance(el)
  instance?.hide()
}
</script>

<style scoped>
  .logo-full {
    height: 5em;
  }

  .logo-small {
    height: 2.2em;
  }

  .nav-item {
    white-space: nowrap;
  }

  .coming-soon {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    color: var(--color-accent-orange);
    white-space: nowrap;
  }

  /* Schermi grandi: h5 arancione on hover e nella pagina selezionata */
  @media (min-width: 992px) {
    .nav-link:hover h5,
    .nav-link.router-link-active h5 {
      color: var(--color-accent-orange);
    }
  }

  /* Schermi piccoli */
  @media (max-width: 991.98px) {
    .navbar {
      position: relative;
      padding-top: 1rem;
    }

    /* Hamburger a riposo: icona nel colore primario */
    .navbar-toggler {
      --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%231C4059' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }

    /* Hamburger attivo: sfondo arancione e icona bianca */
    .navbar-toggler[aria-expanded="true"] {
      background-color: var(--color-accent-orange);
      border-color: var(--color-accent-orange);
      --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }

    /* Tendina: si sovrappone al contenuto senza spostarlo, ombra sotto */
    .navbar-collapse {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      z-index: 1030;
      background-color: var(--color-neutral-white);
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.25);
      padding: 1.5rem 1rem;
    }

    /* Elementi della tendina centrati orizzontalmente */
    .navbar-nav {
      align-items: center;
      text-align: center;
    }
  }
</style>