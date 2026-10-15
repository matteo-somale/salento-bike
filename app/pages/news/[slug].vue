<script setup>
import { getNewsBySlug } from '~/utils/news'
import { getColoreSfondo } from '~/utils/destinazioni'

const route = useRoute()
const item = getNewsBySlug(route.params.slug)

if (!item) {
  throw createError({ statusCode: 404, statusMessage: 'Articolo non trovato', fatal: true })
}

const coloreHero = getColoreSfondo(item.destinazioni)

useHead({ title: item.titolo })
</script>

<template>
  <NewsHero :immagine="item.immagine" :titolo="item.titolo" :colore="coloreHero" />
  <section class="py-5">
    <div class="container news-body" v-html="item.corpoHtml" />
  </section>
</template>

<style scoped>
.news-body {
  max-width: 800px;
  margin-inline: auto;
}
.news-body :deep(h2),
.news-body :deep(h3),
.news-body :deep(h4) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--color-accent-orange);
}
.news-body :deep(p),
.news-body :deep(ul),
.news-body :deep(ol) {
  margin-bottom: 1.5rem;
}
.news-body :deep(ul),
.news-body :deep(ol) {
  padding-left: 1.5rem;
}
.news-body :deep(a) {
  color: var(--color-accent-celeste);
}
</style>
