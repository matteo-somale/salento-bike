```vue
<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container">

        <!-- Logo -->
        <NuxtLink
          to="/"
          class="navbar-brand"
        >
          LOGO
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

            <li class="nav-item">
              <NuxtLink
                to="/"
                class="nav-link"
              >
                Home
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink
                to="/about"
                class="nav-link"
              >
                Chi siamo
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink
                to="/services"
                class="nav-link"
              >
                Servizi
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink
                to="/contact"
                class="nav-link"
              >
                Contatti
              </NuxtLink>
            </li>

          </ul>


          <!-- Bottone -->
          <div class="header-action">

            <NuxtLink
              to="/contact"
              class="btn btn-primary"
            >
              Contattaci
            </NuxtLink>

          </div>

        </div>

      </div>
    </nav>
  </header>
</template>
```


<script setup>
  // JavaScript / logica
</script>

<style scoped>
  /* CSS del componente */
</style>