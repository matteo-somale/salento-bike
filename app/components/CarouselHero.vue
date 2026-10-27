<script setup>
import { ref } from 'vue'

const slides = [
  {
    eyebrow: 'salento.bike',
    title: 'Salento,<br> pedalare nella meraviglia',
    text: 'Ci sono luoghi che richiedono un tempo lento per essere compresi: il Salento è uno di questi. Racchiuso tra due mari, Adriatico e Ionio, questo lembo d\'Italia è un paradiso naturale ideale per essere esplorato in sella a una bicicletta.',
    button: 'Guarda il video completo',
    buttonLink: '#pedalaConCiclonica',
    buttonIcon: 'fluent:filmstrip-play-24-filled',
    media: { type: 'video', src: '/videos/ciclonica-video-wide-teaser.mp4', alt: 'Video cicloturismo nel Salento' }
  },
  {
    eyebrow: 'Il Salento',
    title: 'Salento,<br> la punta estrema della&nbsp;Puglia',
    text: 'Siamo nel “tacco” d’Italia, la punta più a est dello Stivale, dove sorge il primo sole. Qui il cicloturista scopre coste mozzafiato, parchi, vigneti, uliveti e borghi antichi. È il paradiso per chi viaggia in bici e vuole scoprire l\'anima vera del territorio, lontano dal turismo di massa.',
    button: 'Scopri il Salento',
    buttonLink: 'https://ebike.bikesquare.eu/map/salento',
    buttonIcon: 'lucide:bike',
    media: { type: 'image', src: '/img/italia-salento-map.jpg', alt: 'Mappa dell\'Italia con il Salento evidenziato' }
  },
  {
    eyebrow: 'salento.bike',
    title: 'Salento, naturalmente ciclabile ',
    text: 'Prevalentemente pianeggiante o con dislivelli accessibili, il Salento è la meta ideale per il cicloturista. Grazie a una rete infinita di stradine a basso impatto veicolare, per più dell’80% asfaltate, il territorio è totalmente ciclabile. ',
    button: 'I percorsi principali',
    buttonLink: '#destinationsList',
    buttonIcon: 'lucide:bike',
    media: { type: 'image', src: '/img/foto-bike-hero.jpeg', alt: 'Ciclista in sella lungo un percorso del Salento' }
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
                  :to="slide.buttonLink"
                  class="btn btn-orange btn-lg mb-0 mb-md-5 hero-cta-btn d-inline-flex align-items-center justify-content-center gap-2"
                >
                  <Icon :name="slide.buttonIcon" />
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
                  <video
                    v-if="slide.media.type === 'video'"
                    class="video-cover-media"
                    :src="slide.media.src"
                    :aria-label="slide.media.alt"
                    autoplay
                    muted
                    loop
                    playsinline
                  ></video>
                  <img
                    v-else
                    class="video-cover-media"
                    :src="slide.media.src"
                    :alt="slide.media.alt"
                  >
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
.video-cover-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Su schermi grandi lo sfondo grigio non copre più tutta la section,
   ma solo un'altezza fissa dall'alto, per fermarsi poco prima del
   bordo inferiore del video (circa 30px prima). */
@media (min-width: 992px) {
  #heroCarousel {
    --hero-bg-height: 78%; /* regolare qui per avvicinare/allontanare il bordo dal video */
    background-color: transparent;
    position: relative;
    isolation: isolate;
  }

  #heroCarousel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--hero-bg-height);
    background-color: var(--color-neutral-lighter-gray);
    z-index: -1;
  }
}
</style>