<script setup>
defineProps({
  slug: { type: String, required: true },
  immagine: { type: String, required: true },
  titolo: { type: String, required: true },
  excerpt: { type: String, required: true },
  dataFormattata: { type: String, required: true },
  destinazioni: { type: Array, default: () => [] },
  colore: { type: String, required: true },
})
</script>

<template>
  <NuxtLink :to="`/news/${slug}`" class="d-block text-decoration-none">
    <article
      class="rounded overflow-hidden news-article-card mx-auto"
      :style="{ backgroundColor: `color-mix(in srgb, ${colore} 40%, transparent)` }"
    >
      <div class="row p-4">
        <div class="col-12 col-md-5 position-relative">
          <img :src="immagine" class="w-100 rounded news-article-image" alt="">
          <div v-if="destinazioni.length" class="position-absolute top-0 start-1  d-flex flex-row flex-wrap gap-1">
            <span
              v-for="d in destinazioni"
              :key="d.slug"
              class="badge badge-sm rounded-pill"
              style="margin-top: 10px; margin-left: 10px "
              :style="{ backgroundColor: d.colore, color: 'var(--color-text-white)' }"
            >{{ d.nome }}</span>
          </div>
        </div>
        <div class="col-12 col-md-7 pt-sm-3 mt-2 mt-md-0 d-flex flex-column justify-content-center">
          <p class="eyebrow text-orange mb-2">{{ dataFormattata }}</p>
          <h3 class="fw-bold mb-2 text-primary">{{ titolo }}</h3>
          <p class="body-large mb-2 text-primary">{{ excerpt }}</p>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<style scoped>
.news-article-card {
  max-width: 1000px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.news-article-image {
  object-fit: cover;
  height: 250px;
}

@media (min-width: 768px) {
  .news-article-image {
    height: 260px;
  }
}
</style>
