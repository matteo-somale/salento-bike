<script setup>
const paragrafoInfo = {
  immagine: '/img/destinazioni/foto-lecce-segnaposto.jpg',
  logo: '/logo/logo-ciclonica-simple.svg',
  coloreSfondo: '#94EADD',
  altLayout: false,

  sopratitolo: 'BAROCCO E TRADIZIONE',
  titolo: 'Fra borghi, mare e campagna',
  testo: 'Si parte da Lecce e si arriva al mare seguendo un percorso ciclabile su strade a bassa intensità di traffico che attraversano il Salento ionico. Un viaggio in sei tappe tra spiagge selvagge e fitte pinete, centri storici, piccole frazioni e la rete dei parchi naturali che si affacciano sulla costa ionica. Dal rosa dei fenicotteri al verde intenso dei pini marittimi, dal giallo delle ginestre in fiore all\'azzurro del mare: preparati a pedalare tra i colori!',

  bottoni: [
    {
      testoBottone: 'Scopri le location',
      linkBottone: '/about'
    },
  ]
}
</script>

<template>
  <section class="py-5">
    <div class="container p-5">

      <div
        class="rounded-4 overflow-hidden"
        :style="{ backgroundColor: paragrafoInfo.coloreSfondo }"
      >

        <div class="row g-0 align-items-stretch">

          <!-- Immagine -->
          <div
            class="col-12 col-lg-6 p-5"
            :class="paragrafoInfo.altLayout
              ? 'order-2 order-lg-1'
              : 'order-1 order-lg-2'"
          >
            <div class="position-relative h-100 rounded-4 overflow-hidden">

              <img
                :src="paragrafoInfo.immagine"
                alt=""
                class="w-100 h-100 object-fit-cover"
                style="max-height: 500px;"
              >

              <!-- Overlay sfumato -->
              <div class="image-overlay"></div>

              <!-- Logo -->
              <img
                :src="paragrafoInfo.logo"
                alt=""
                class="image-logo"
              >

            </div>
          </div>

          <!-- Contenuto -->
          <div
            class="col-12 col-lg-6"
            :class="paragrafoInfo.altLayout
              ? 'order-1 order-lg-2'
              : 'order-2 order-lg-1'"
          >
            <div
              class="h-100 d-flex flex-column align-items-start justify-content-center p-5"
            >

              <p class="eyebrow mb-2">
                {{ paragrafoInfo.sopratitolo }}
              </p>

              <h2 class="fw-bold mb-4">
                {{ paragrafoInfo.titolo }}
              </h2>

              <p class="mb-4">
                {{ paragrafoInfo.testo }}
              </p>

              <!-- Bottoni -->
              <div class="d-flex flex-wrap gap-3">

                <NuxtLink
                  v-for="(bottone, index) in paragrafoInfo.bottoni"
                  :key="index"
                  :to="bottone.linkBottone"
                  class="btn btn-secondary"
                >
                  {{ bottone.testoBottone }}
                </NuxtLink>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0) 35%
  );
  pointer-events: none;
}

.image-logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  height: 55px;
  width: auto;
  max-width: calc(100% - 3rem);
  object-fit: contain;
}
</style>