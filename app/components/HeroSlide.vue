<script setup>
// Contenuto di una slide della hero. Usato sia dentro lo swiper (client)
// sia nel fallback statico di CarouselHero, così la prima slide è già
// nell'HTML generato e non aspetta il JavaScript per comparire.
defineProps({
  slide: { type: Object, required: true },
  // { src, srcset, sizes } calcolato con useImage, solo per le slide immagine
  immagine: { type: Object, default: null },
  // true = monta il <video>; false = mostra solo il poster come <img>
  videoAttivo: { type: Boolean, default: false },
  // le slide non visibili all'avvio caricano l'immagine solo quando servono
  lazy: { type: Boolean, default: false },
})

const emit = defineEmits(['prev', 'next', 'apri'])
</script>

<template>
  <div class="container py-3">
    <div class="row align-items-center g-5 min-vh-80">

      <!-- Colonna sinistra -->
      <div class="col-12 col-lg-6 mt-2">
        <div class="d-flex flex-column align-items-start">

          <p class="text-orange eyebrow fw-semibold mb-2">
            {{ slide.eyebrow }}
          </p>

          <h1 v-html="slide.title" class="fw-bold mb-4 text-primary"></h1>

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
          <div class="d-none d-lg-flex gap-2">

            <button
              class="btn btn-lg btn-outline-primary carousel-arrow-btn d-inline-flex align-items-center justify-content-center"
              type="button"
              aria-label="Slide precedente"
              @click="emit('prev')"
            >
              <Icon name="lucide:arrow-left" />
            </button>

            <button
              class="btn btn-lg btn-outline-primary carousel-arrow-btn d-inline-flex align-items-center justify-content-center"
              type="button"
              aria-label="Slide successiva"
              @click="emit('next')"
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
            <button
              v-if="slide.media.type === 'video'"
              type="button"
              class="video-cover-trigger"
              :aria-label="`Guarda il video: ${slide.media.alt}`"
              @click="emit('apri', slide.media)"
            >
              <video
                v-if="videoAttivo"
                class="video-cover-media"
                :poster="slide.media.poster"
                autoplay
                muted
                loop
                playsinline
              >
                <source
                  v-for="source in slide.media.sources"
                  :key="source.src"
                  :src="source.src"
                  :type="source.type"
                />
              </video>
              <img
                v-else
                class="video-cover-media"
                :src="slide.media.poster"
                :alt="slide.media.alt"
                width="720"
                height="720"
                fetchpriority="high"
              />
            </button>
            <img
              v-else
              class="video-cover-media"
              :src="immagine.src"
              :srcset="immagine.srcset"
              :sizes="immagine.sizes"
              :alt="slide.media.alt"
              :loading="lazy ? 'lazy' : undefined"
            />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
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

.video-cover-trigger {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}
</style>
