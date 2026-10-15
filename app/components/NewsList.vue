<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import AOS from 'aos'
import { getNewsList } from '~/utils/news'
import { DESTINAZIONI, getDestinazioni, getColoreSfondo } from '~/utils/destinazioni'

const news = getNewsList()

const selezionate = ref(DESTINAZIONI.map((d) => d.slug))
const tuttiAttivo = computed(() => selezionate.value.length === DESTINAZIONI.length)

function isAttiva(slug) {
  return selezionate.value.includes(slug)
}
function selezionaTutti() {
  selezionate.value = DESTINAZIONI.map((d) => d.slug)
}
function toggleDestinazione(slug) {
  if (selezionate.value.includes(slug)) {
    const rimanenti = selezionate.value.filter((s) => s !== slug)
    selezionate.value = rimanenti.length ? rimanenti : DESTINAZIONI.map((d) => d.slug)
  } else {
    selezionate.value = [...selezionate.value, slug]
  }
}

const newsFiltrate = computed(() =>
  tuttiAttivo.value
    ? news
    : news.filter((n) => n.destinazioni.some((slug) => selezionate.value.includes(slug)))
)

watch(newsFiltrate, async () => {
  await nextTick()
  AOS.refreshHard()
})
</script>

<template>
  <section class="py-5">
    <div class="container">
      <div class="d-flex flex-column align-items-center text-center mb-5" data-aos="fade-up">
        <h4 class="eyebrow text-orange mb-2">Il blog di Salento Bike</h4>
        <h1 class="fw-bold mb-4 text-primary">News</h1>
        <div class="d-flex flex-nowrap gap-3 filtri-scroll w-100">
          <button
            type="button"
            class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
            :class="{ 'is-active': tuttiAttivo }"
            :style="{ '--btn-accent': 'var(--color-accent-giallo)' }"
            @click="selezionaTutti"
          >
            <Icon :name="tuttiAttivo ? 'lucide:x' : 'lucide:plus'" /> Tutti
          </button>
          <button
            v-for="destinazione in DESTINAZIONI"
            :key="destinazione.slug"
            type="button"
            class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
            :class="{ 'is-active': isAttiva(destinazione.slug) }"
            :style="{ '--btn-accent': destinazione.colore }"
            @click="toggleDestinazione(destinazione.slug)"
          >
            <Icon :name="isAttiva(destinazione.slug) ? 'lucide:x' : 'lucide:plus'" /> {{ destinazione.nome }}
          </button>
        </div>
      </div>

      <div class="d-flex flex-column gap-4">
        <NewsArticle
          v-for="(item, index) in newsFiltrate"
          :key="item.slug"
          :slug="item.slug"
          :immagine="item.immagine"
          :titolo="item.titolo"
          :excerpt="item.excerpt"
          :data-formattata="item.dataFormattata"
          :destinazioni="getDestinazioni(item.destinazioni)"
          :colore="getColoreSfondo(item.destinazioni)"
          data-aos="fade-up"
          :data-aos-delay="Math.min(index, 3) * 100"
        />
      </div>
    </div>
  </section>
</template>
