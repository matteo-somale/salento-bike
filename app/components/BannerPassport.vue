<template>
  <section class="pt-2 pt-md-3 pt-lg-5 pb-sm-0 pb-md-5 bg-mobile-full banner-passport" data-aos="fade-up">
    <div class="container">

      <div class="rounded-4 overflow-hidden bg-mobile-full-target">
        <div class="row g-0 align-items-stretch">

          <!-- Contenuto -->
          <div class="col-12 col-lg-7 order-1 order-lg-2 text-primary">
            <div class="h-100 d-flex flex-column align-items-start justify-content-center p-5 pb-0 pb-lg-5">

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
                to="https://docs.google.com/document/d/1JBYNFGzxzIeXUpVWTjLNcuH_nqNLRj3Nf2Jf6C4DCao/edit?tab=t.0#heading=h.qogrsq6xamm2"
                class="btn btn-orange btn-lg d-inline-flex align-items-center gap-2"
                target="blank"
              >
                <Icon name="material-symbols:approval" />
                Scopri dove timbrare
              </NuxtLink>

            </div>
          </div>

          <!-- Immagine -->
          <div class="col-12 col-lg-5 order-2 order-lg-1 d-flex align-items-end justify-content-center">
            <NuxtImg
              src="/img/Mockup-Passport.png"
              alt=""
              class="img-fluid pt-4 banner-passport-img"
              format="webp"
              densities="x1"
              loading="lazy"
            />
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

/* Sotto il breakpoint lg il layout passa a colonna unica (col-12):
   limitiamo l'altezza dell'immagine per evitare che diventi troppo grande. */
@media (max-width: 991.98px) {
  .banner-passport-img {
    max-height: 400px;
    width: auto;
  }
}
</style>