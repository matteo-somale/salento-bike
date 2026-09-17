<script setup>
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
</script>

<template>
  <section
    id="heroCarousel"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="15000"
    data-bs-wrap="true"
  >
    <div class="carousel-inner">

      <!-- Slide -->
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <div class="container py-3">
          <div class="row align-items-center g-5 min-vh-100">

            <!-- Colonna sinistra -->
            <div class="col-12 col-lg-6">
              <div class="d-flex flex-column align-items-start">

                <p class="text-orange eyebrow fw-semibold mb-2">
                  {{ slide.eyebrow }}
                </p>

                <h1 v-html="slide.title " class="fw-bold mb-4"></h1>

                <p class="lead mb-4">
                  {{ slide.text }}
                </p>

                <NuxtLink
                  to="/"
                  class="btn btn-primary btn-lg mb-5"
                >
                  {{ slide.button }}
                </NuxtLink>

                <!-- Navigazione -->
                <div class="d-flex gap-2">

                  <button
                    class="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="prev"
                    aria-label="Slide precedente"
                    style="width: 48px; height: 48px;"
                  >
                    <span aria-hidden="true">←</span>
                  </button>

                  <button
                    class="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                    type="button"
                    data-bs-target="#heroCarousel"
                    data-bs-slide="next"
                    aria-label="Slide successiva"
                    style="width: 48px; height: 48px;"
                  >
                    <span aria-hidden="true">→</span>
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
      </div>

    </div>
  </section>
</template>

<style scoped>
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