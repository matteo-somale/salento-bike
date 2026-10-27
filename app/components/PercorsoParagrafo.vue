<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

function hexToRgba(hex, alpha) {
  const valoreHex = hex.replace('#', '')
  const r = parseInt(valoreHex.substring(0, 2), 16)
  const g = parseInt(valoreHex.substring(2, 4), 16)
  const b = parseInt(valoreHex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const {
  immagini,
  logo,
  coloreSfondo,
  altLayout,
  sopratitolo,
  titolo,
  testo,
  bottoni
} = defineProps({
  immagini: { type: Array, required: true },
  logo: { type: String, required: true },
  coloreSfondo: { type: String, default: '#119660' },
  altLayout: { type: Boolean, default: false },
  sopratitolo: { type: String, required: true },
  titolo: { type: String, required: true },
  testo: { type: String, required: true },
  bottoni: { type: Array, default: () => [] }
})

const slideAttivo = ref(0)
let timerCarosello = null

onMounted(() => {
  if (immagini.length > 1) {
    timerCarosello = setInterval(() => {
      slideAttivo.value = (slideAttivo.value + 1) % immagini.length
    }, 7000)
  }
})

onUnmounted(() => {
  clearInterval(timerCarosello)
})
</script>

<template>
  <section class="percorso-paragrafo">
    <div class="container px-md-5 px-sm-0">

      <div
        class="percorso-card rounded-4 overflow-hidden"
        :style="{ backgroundColor: hexToRgba(coloreSfondo, 0.35) }"
      >

        <div class="row g-0 align-items-stretch">

          <!-- Immagine -->
          <div
            class="col-12 col-lg-6 p-4  p-md-5 order-1"
            :class="altLayout ? 'order-lg-1' : 'order-lg-2'"
            :data-aos="altLayout ? 'fade-left' : 'fade-right'"
          >
            <div class="percorso-image-wrapper position-relative rounded-4 overflow-hidden">

              <img
                v-for="(img, index) in immagini"
                :key="img"
                :src="img"
                alt=""
                class="percorso-carousel-image w-100 h-100 object-fit-cover"
                :class="{ 'is-active': index === slideAttivo }"
              >

              <!-- Overlay sfumato -->
              <div class="image-overlay"></div>

              <!-- Logo -->
              <img
                :src="logo"
                alt=""
                class="image-logo d-none d-lg-block"
              >

            </div>
          </div>

          <!-- Contenuto -->
          <div
            class="col-12 col-lg-6 order-2"
            :class="altLayout ? 'order-lg-2' : 'order-lg-1'"
            :data-aos="altLayout ? 'fade-right' : 'fade-left'"
            data-aos-delay="150"
          >
            <div
              class="h-100 d-flex flex-column align-items-start justify-content-center p-4 pt-2 pt-md-4 p-md-5"
            >

              <p
                class="eyebrow mb-2"
                :style="{ color: coloreSfondo }"
                v-html="sopratitolo"
              />

              <h2 class="mb-2 mb-md-4 text-primary" v-html="titolo" />

              <p class="mb-4 body-large body-primary" v-html="testo" />

              <!-- Bottoni -->
              <div class="d-flex flex-wrap gap-3 w-100">

                <NuxtLink
                  v-for="(bottone, index) in bottoni"
                  :key="index"
                  :to="bottone.linkBottone"
                  class="btn btn-primary btn-lg percorso-btn d-inline-flex align-items-center justify-content-center gap-2"
                  target="blank"
                  >
                  <Icon v-if="bottone.icona" :name="bottone.icona" />
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

.percorso-image-wrapper {
  height: 100%;
  max-height: 500px;
}

.percorso-carousel-image {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.percorso-carousel-image.is-active {
  opacity: 1;
}

@media (min-width: 992px) {
  .percorso-image-wrapper {
    min-height: 500px;
  }
}

@media (max-width: 767.98px) {
  /* Dentro lo swiper (sotto il breakpoint md) le card devono avere tutte la stessa altezza */
  .percorso-paragrafo,
  .percorso-paragrafo .container,
  .percorso-card,
  .percorso-paragrafo .row {
    height: 100%;
  }

  .percorso-image-wrapper {
    height: 250px;
    max-height: 250px;
  }

  .percorso-btn {
    width: 100%;
  }
}
</style>