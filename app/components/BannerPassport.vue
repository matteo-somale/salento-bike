<template>
  <section class="py-5">
    <div class="container">

      <div class="bg-warning rounded-4 overflow-hidden">
        <div class="row g-0 align-items-stretch">

          <!-- Contenuto -->
          <div class="col-12 col-lg-6 order-1 order-lg-2">
            <div class="h-100 d-flex flex-column align-items-start justify-content-center p-5">

              <p class="eyebrow mb-2">
                Sopratitolo
              </p>

              <h2 class="display-5 fw-bold mb-4">
                Un titolo importante per raccontare il progetto
              </h2>

              <p class="body-regular mb-4">
                Un breve testo descrittivo per spiegare il contenuto
                della sezione e fornire qualche informazione in più.
              </p>

              <NuxtLink
                to="/about"
                class="btn btn-orange btn-lg"
              >
                Scopri di più
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