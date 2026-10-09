<template>
  <section class="py-5" data-aos="fade-up">
    <div class="container">

      <div class="bg-warning rounded-4 overflow-hidden">
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
                class="btn btn-orange btn-lg"
              >
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