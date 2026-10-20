<script setup>
defineProps({
  immagine: { type: String, required: true },
  titolo: { type: String, required: true },
  colore: { type: String, required: true },
})
</script>

<template>
  <section
    class="pt-5 pb-4 bg-mobile-full"
    :style="{ '--mobile-bg-image': `url(${immagine})` }"
  >
    <div class="container">
      <div class="news-hero-inner">
        <div class="rounded-4 overflow-hidden bg-mobile-full-target news-hero-image" />
        <h2
          class="fw-bold mt-4 mb-0"
          :style="{ color: colore }"
          data-aos="fade"
          data-aos-duration="800"
        >
          {{ titolo }}
        </h2>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-hero-inner {
  max-width: 800px;
  margin-inline: auto;
}

.news-hero-image {
  min-height: 450px;
}

@media (max-width: 767.98px) {
  .news-hero-image {
    min-height: 300px;
    height: 40vh;
  }
}
</style>
