<script setup>
defineProps({
  immagine: { type: String, required: true },
  titolo: { type: String, required: true },
  colore: { type: String, required: true },
})

const img = useImage()
</script>

<template>
  <section class="pt-5 pb-4">
    <div class="container news-hero-inner">
      <div
        class="rounded-4 overflow-hidden news-hero-image"
        :style="{ backgroundImage: `url(${img(immagine, { width: 1600, format: 'webp' })})` }"
      />
      <h2
        class="fw-bold mt-4 mb-0"
        :style="{ color: colore }"
        data-aos="fade"
        data-aos-duration="800"
      >
        {{ titolo }}
      </h2>
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
  background-size: cover;
  background-position: center;
}

@media (max-width: 767.98px) {
  .news-hero-image {
    min-height: 300px;
    height: 40vh;
  }
}
</style>
