<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <!-- Logo -->
        <NuxtLink
          to="/"
          class="navbar-brand"
        >
          <img src="/logo/salento-bike-colore.svg" style="height: 5em;" alt="Logo salento.bike" class="my-1">
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
          <ul class="navbar-nav mx-auto">

            <li
              v-for="(pagina, index) in pagine"
              :key="index"
              class="nav-item"
            >
              <NuxtLink
                :to="pagina.route"
                class="nav-link"
              >
                <h5>{{ pagina.nome }}</h5>
              </NuxtLink>
            </li>

          </ul>


          <!-- Bottone -->
          <div class="header-action">

            <NuxtLink
              to="/contact"
              class="btn btn-orange btn-lg fw-bold"
            >
              ENG
            </NuxtLink>

          </div>

        </div>

      </div>
    </nav>
  </header>
</template>


<script setup>
const pagine = [
  { nome: 'Home', route: '' },
  { nome: 'Chi siamo', route: '' },
  { nome: 'Percorsi', route: '' },
  { nome: 'Servizi', route: '' },
  { nome: 'Eventi', route: '' },
  { nome: 'Contatti', route: '' },
]
</script>

<style scoped>
  /* CSS del componente */
</style>