<script setup>
import { ref } from 'vue'

const slides = [
  {
    eyebrow: 'salento.bike',
    title: 'Salento,<br> pedalare nella meraviglia',
    text: 'Il Salento è terra che va assaporata lentamente. E non esiste modo migliore per farlo se non in sella a una bicicletta. Questo lembo d’Italia stretto tra due mari, l’Adriatico e lo Ionio, è il paradiso perfetto per il cicloturismo, con itinerari accessibili praticamente a tutti.',
    button: 'Guarda il video',
    video: 'https://www.youtube.com/embed/yRV_RfbSl8k?start=12&autoplay=1&mute=1&loop=1&playlist=yRV_RfbSl8k&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0'
  },
  {
    eyebrow: 'Il Salento',
    title: 'Salento,<br> la punta estrema della&nbsp;Puglia',
    text: 'Il Salento è terra che va assaporata lentamente. E non esiste modo migliore per farlo se non in sella a una bicicletta. Questo lembo d’Italia stretto tra due mari, l’Adriatico e lo Ionio, è il paradiso perfetto per il cicloturismo, con itinerari accessibili praticamente a tutti.',
    button: 'Guarda il video',
    video: 'https://www.youtube.com/embed/yRV_RfbSl8k?start=12&autoplay=1&mute=1&loop=1&playlist=yRV_RfbSl8k&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0'
  },
  {
    eyebrow: 'salento.bike',
    title: 'Salento,<br> pedalare nella meraviglia',
    text: 'Il Salento è terra che va assaporata lentamente. E non esiste modo migliore per farlo se non in sella a una bicicletta. Questo lembo d’Italia stretto tra due mari, l’Adriatico e lo Ionio, è il paradiso perfetto per il cicloturismo, con itinerari accessibili praticamente a tutti.',
    button: 'Guarda il video',
    video: 'https://www.youtube.com/embed/yRV_RfbSl8k?start=12&autoplay=1&mute=1&loop=1&playlist=yRV_RfbSl8k&controls=0&playsinline=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0'
  }
]

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: { delay: 15000 },
  pagination: { clickable: true, enabled: true },
  breakpoints: {
    992: {
      pagination: { enabled: false },
    },
  },
})
</script>

<template>
  <section
    id="heroCarousel"
    class="background-lighter-gray pt-4"
    data-aos="fade"
    data-aos-duration="800"
  >
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="hero-swiper">

      <!-- Slide -->
      <swiper-slide
        v-for="(slide, index) in slides"
        :key="index"
      >
        <div class="container py-3">
          <div class="row align-items-center g-5 min-vh-80">

            <!-- Colonna sinistra -->
            <div class="col-12 col-lg-6 mt-2">
              <div class="d-flex flex-column align-items-start">

                <p class="text-orange eyebrow fw-semibold mb-2">
                  {{ slide.eyebrow }}
                </p>

                <h1 v-html="slide.title " class="fw-bold mb-4 text-primary"></h1>

                <p class="lead mb-4">
                  {{ slide.text }}
                </p>

                <NuxtLink
                  to="/"
                  class="btn btn-orange btn-lg mb-0 mb-md-5 hero-cta-btn d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <Icon name="lucide:bike" />
                  {{ slide.button }}
                </NuxtLink>

                <!-- Navigazione -->
                <div class="d-none d-lg-flex gap-2" id="arrows">

                  <button
                    class="btn btn-lg btn-outline-primary carousel-arrow-btn d-inline-flex align-items-center justify-content-center"
                    type="button"
                    aria-label="Slide precedente"
                    @click="swiper.prev()"
                  >
                    <Icon name="lucide:arrow-left" />
                  </button>

                  <button
                    class="btn btn-lg btn-outline-primary carousel-arrow-btn d-inline-flex align-items-center justify-content-center"
                    type="button"
                    aria-label="Slide successiva"
                    @click="swiper.next()"
                  >
                    <Icon name="lucide:arrow-right" />
                  </button>

                </div>

              </div>
            </div>

            <!-- Colonna destra -->
            <div class="col-12 col-lg-6">
              <div class="ratio ratio-1x1">
                <div class="video-cover rounded-4">
                  <iframe
                    class="video-cover-frame"
                    :src="slide.video"
                    title="Video Salento Bike"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </swiper-slide>

      </swiper-container>
    </ClientOnly>
  </section>
</template>

<style scoped>
.hero-swiper swiper-slide {
  padding-bottom: 3rem;
  box-sizing: border-box;
}

.hero-cta-btn {
  width: 100%;
}

@media (min-width: 768px) {
  .hero-cta-btn {
    width: auto;
  }
}

.carousel-arrow-btn {
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  border-radius: 50%;
}

.video-cover {
  overflow: hidden;
}
.video-cover-frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.78%; /* copre l'altezza intera del box 1:1 con un video 16:9, tagliando ai lati */
  height: 100%;
  border: 0;
  transform: translate(-50%, -50%);
}
</style>