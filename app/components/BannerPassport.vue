<template>
  <section class="pt-5 pb-sm-0 pb-md-5 bg-mobile-full banner-passport" data-aos="fade-up">
    <div class="container">

      <div class="rounded-4 overflow-hidden bg-mobile-full-target">
        <div class="row g-0 align-items-stretch">

          <!-- Contenuto -->
          <div class="col-12 col-lg-6 order-1 order-lg-2">
            <div class="h-100 d-flex flex-column align-items-start justify-content-center p-5">

              <p class="eyebrow mb-2">
                il passaporto della ciclonica
              </p>

              <h2 class="display-5 fw-bold mb-4">
                Trova qui i punti timbro nei comuni tappa
              </h2>

              <p class="body-regular mb-4">
                Tutte le tappe lungo la Ciclonica hanno il loro timbro personalizzato: basta recarsi in uno dei punti timbro ufficiali e timbrare il proprio passaporto.
              </p>

              <NuxtLink
                to="/about"
                class="btn btn-orange btn-lg d-inline-flex align-items-center gap-2"
              >
                <Icon name="material-symbols:approval" />
                Scopri dove timbrare
              </NuxtLink>

            </div>
          </div>

          <!-- Immagine -->
          <div class="col-12 col-lg-6 order-2 order-lg-1 d-flex align-items-end justify-content-center">
            <img
              src="/img/Mockup-Passport.png"
              alt=""
              class="img-fluid pt-4"
            >
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.banner-passport {
  --mobile-bg-color: var(--bs-warning);
}

/* Su schermi piccoli lo sfondo è applicato alla section (bg-mobile-full):
   togliamo il padding-bottom così l'immagine tocca il bordo basso della section,
   come succede con il box interno da 768px in su. */
@media (max-width: 767.98px) {
  .banner-passport {
    padding-bottom: 0;
  }
}
</style>