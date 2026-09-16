<script setup>
const slides = [
  {
    eyebrow: 'Sopratitolo',
    title: 'Un titolo importante per il tuo progetto',
    text: 'Il Salento è terra che va assaporata lentamente. E non esiste modo migliore per farlo se non in sella a una bicicletta. Questo lembo d’Italia stretto tra due mari, l’Adriatico e lo Ionio, è il paradiso perfetto per il cicloturismo, con itinerari accessibili praticamente a tutti.',
    button: 'Scopri di più',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  },
  {
    eyebrow: 'Un altro sopratitolo',
    title: 'Una seconda proposta da raccontare',
    text: 'Un altro testo descrittivo per presentare il servizio, il prodotto o il progetto.',
    button: 'Approfondisci',
    video: 'https://vjs.zencdn.net/v/oceans.mp4'
  },
  {
    eyebrow: 'Ultimo sopratitolo',
    title: 'Un ultimo messaggio importante',
    text: 'Il testo della terza slide può essere utilizzato per concludere la presentazione.',
    button: 'Contattaci',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
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
        <div class="container py-5">
          <div class="row align-items-center g-5 min-vh-100">

            <!-- Colonna sinistra -->
            <div class="col-12 col-lg-6">
              <div class="d-flex flex-column align-items-start">

                <p class="text-uppercase fw-semibold mb-2">
                  {{ slide.eyebrow }}
                </p>

                <h1 class="display-4 fw-bold mb-4">
                  {{ slide.title }}
                </h1>

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
                <video
                  class="w-100 h-100 object-fit-cover rounded-4"
                  autoplay
                  muted
                  loop
                  playsinline
                >
                  <source :src="slide.video" type="video/mp4">
                </video>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>