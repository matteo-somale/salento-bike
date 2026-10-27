<template>
  <section class="py-5 banner-link-sud" data-aos="fade-up">
    <div class="container">
      <div class="row align-items-center g-4">

        <!-- Logo -->
        <div class="col-12 col-md-4 d-flex justify-content-center">
          <img
            src="/logo/bike-link-sud.png"
            alt="Bike Link Sud"
            class="img-fluid banner-link-sud-logo"
          >
        </div>

        <!-- Contenuto -->
        <div class="col-12 col-md-8">
          <div class="d-flex flex-column align-items-start text-white">

            <h1 class="display-5 fw-bold mb-3">
              La rete Bike Link Sud
            </h1>

            <h3 class="fw-bold mb-3">
              Oltre i confini: il magnifico viaggio in bicicletta nel Mezzogiorno d’Italia
            </h3>

            <p class="body-regular mb-4 d-none d-md-block">
             Le Ciclovie del Salento fanno parte del grande progetto Bike Link Sud. Un'idea partita dal basso per promuovere il cicloturismo nel Sud d'Italia. Più di 5000 chilometri per conoscere al ritmo lento le regioni meridionali della Penisola.
            </p>

            <a
              href="https://www.bikelinksud.it/"
              class="btn btn-lg btn-primary banner-link-sud-btn d-inline-flex align-items-center justify-content-center gap-2"
            >
              <Icon name="material-symbols:diversity-3" />
              Scopri la Community
            </a>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.banner-link-sud {
  background-image:
    linear-gradient(
      color-mix(in srgb, var(--color-accent-orange) 90%, transparent),
      color-mix(in srgb, var(--color-accent-orange) 90%, transparent)
    ),
    url('/img/ill-BikeLinkSud.webp');
  background-size: cover;
  background-position: center;
}

.banner-link-sud-logo {
  max-width: 220px;
}

.banner-link-sud-btn {
  width: 100%;
}

@media (min-width: 768px) {
  .banner-link-sud-btn {
    width: auto;
  }
}
</style>
