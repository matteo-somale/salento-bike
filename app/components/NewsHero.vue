<script setup>
defineProps({
  immagine: { type: String, required: true },
  titolo: { type: String, required: true },
  colore: { type: String, required: true },
})
</script>

<template>
  <section
    class="py-5 bg-mobile-full"
    :style="{ '--mobile-bg-image': `linear-gradient(to top, color-mix(in srgb, ${colore} 80%, transparent), color-mix(in srgb, ${colore} 15%, transparent)), url(${immagine})` }"
  >
    <div class="container">
      <div class="rounded-4 overflow-hidden bg-mobile-full-target">
        <div
          class="d-flex flex-column justify-content-end text-white p-4 p-md-5 news-hero-content"
          data-aos="fade"
          data-aos-duration="800"
        >
          <h2 class="fw-bold mb-0">{{ titolo }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-hero-content {
  min-height: 450px;
}

@media (max-width: 767.98px) {
  .news-hero-content {
    min-height: 300px;
    height: 40vh;
  }
}
</style>
