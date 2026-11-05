<script setup>
// pagina di errore globale di Nuxt: viene mostrata per le rotte inesistenti (404)
// e per qualsiasi errore fatale (es. createError in news/[slug].vue)
const props = defineProps({
  error: { type: Object, required: true },
})

const is404 = computed(() => props.error?.statusCode === 404)

const titolo = computed(() => (is404.value ? 'Pagina non trovata' : 'Qualcosa è andato storto'))
const sottotitolo = computed(() =>
  is404.value
    ? 'Forse hai sbagliato strada: la pagina che cerchi non esiste o è stata spostata.'
    : 'Si è verificato un errore imprevisto. Riprova tra qualche istante.',
)

useHead({
  title: titolo,
  meta: [{ name: 'robots', content: 'noindex' }],
})

// clearError azzera lo stato di errore prima di navigare, altrimenti la pagina resterebbe bloccata qui
const tornaAllaHome = () => clearError({ redirect: '/' })
</script>

<template>
  <main class="error-page">
    <div class="error-content container">
      <a href="/" class="error-logo" aria-label="Salento.bike, torna alla home" @click.prevent="tornaAllaHome">
        <img src="/logo/salento-bike-colore.svg" alt="Salento.bike" width="808" height="403" />
      </a>

      <h2 class="text-primary">{{ titolo }}</h2>
      <h3 class="text-orange">{{ sottotitolo }}</h3>

      <button type="button" class="btn btn-lg btn-orange" @click="tornaAllaHome">
        Torna alla home
      </button>
    </div>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: var(--space-xl);
  text-align: center;
}

.error-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
}

.error-logo {
  display: block;
  width: min(320px, 70vw);
  margin-bottom: var(--space-lg);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}

h2,
h3 {
  margin: 0;
}

h3 {
  max-width: 640px;
}

.btn {
  margin-top: var(--space-lg);
}
</style>
