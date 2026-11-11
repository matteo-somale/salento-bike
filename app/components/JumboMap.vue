<script setup>
const {
  sopratitolo,
  coloreSopratitolo,
  titolo,
  testo,
  coloreTitoloTesto,
  immagine,
  coloreSfondo,
  bottoni
} = defineProps({
  sopratitolo: { type: String, default: null },
  coloreSopratitolo: { type: String, default: 'var(--color-accent-orange)' },
  titolo: { type: String, required: true },
  testo: { type: String, required: true },
  coloreTitoloTesto: { type: String, default: 'var(--color-primary)' },
  immagine: { type: String, required: true },
  coloreSfondo: { type: String, required: true },
  // ogni bottone: { testo, link, classe, icona?, blank?, download? }
  // - icona: nome icona a sinistra del testo (default 'lucide:bike')
  // - blank: true per aprire il link in una nuova scheda
  // - download: true per scaricare il file, oppure una stringa con il nome del file scaricato
  bottoni: { type: Array, default: () => [] }
})

// l'attributo download vuole '' (o il nome file): con true Vue scriverebbe download="true"
const attributoDownload = (bottone) => {
  if (!bottone.download) return undefined
  return bottone.download === true ? '' : bottone.download
}
</script>

<template>
    <div class="p-4 p-md-5 jumbo-map-card" data-aos="fade-up">
        <div class="jumbo-map-bg" :style="{ backgroundColor: coloreSfondo }"></div>

        <img :src="immagine" alt="" class="img-fluid mb-0  mb-lg-4 mb-md-0 jumbo-map-image">

        <div class="jumbo-map-text">
            <p v-if="sopratitolo" class="eyebrow" :style="{ color: coloreSopratitolo }" v-html="sopratitolo"></p>
            <h2 class="" :style="{ color: coloreTitoloTesto }" v-html="titolo"></h2>
            <p class="body-large testo-limitato" :style="{ color: coloreTitoloTesto }" v-html="testo"></p>

            <div class="d-flex flex-wrap gap-3 jumbo-map-buttons">
                <NuxtLink
                    v-for="(bottone, index) in bottoni"
                    :key="index"
                    :to="bottone.link"
                    :target="bottone.blank ? '_blank' : undefined"
                    :external="bottone.download ? true : undefined"
                    :trailing-slash="bottone.download ? 'remove' : undefined"
                    :download="attributoDownload(bottone)"
                    :class="['btn btn-lg', bottone.classe]"
                >
                    <Icon :name="bottone.icona || 'lucide:bike'" class="me-2" />{{ bottone.testo }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.jumbo-map-card {
    position: relative;
    isolation: isolate;
}

.jumbo-map-buttons {
    flex-direction: column;
}

.jumbo-map-buttons .btn {
    width: 100%;
}

.jumbo-map-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    right: auto;
    width: 100vw;
    margin-left: -50vw;
    border-radius: 0;
    z-index: -1;
}

@media (min-width: 990px) and (max-width: 1199.98px) {
    .testo-limitato {
        max-width: 50ch;
    }
}

@media (min-width: 1400px) {
    .testo-limitato {
        max-width: 70ch;
    }
}

@media (min-width: 992px) {
    .jumbo-map-bg {
        left: 0;
        right: 0;
        width: 83%;
        margin-left: 0;
        border-radius: var(--bs-border-radius);
    }

    .jumbo-map-image {
        position: absolute;
        top: 50%;
        right: 0;
        width: auto;
        max-width: none;
        height: 140%;
        transform: translateY(-50%);
    }

    .jumbo-map-buttons {
        flex-direction: row;
    }

    .jumbo-map-buttons .btn {
        width: auto;
    }
}

@media (min-width: 1400px) {
    .jumbo-map-text {
        max-width: 75%;
    }
}

@media (min-width: 992px) and (max-width: 1399.98px) {
    .jumbo-map-text {
        max-width: 600px;
    }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
    .jumbo-map-image {
        transform: translate(15%, -50%);
    }
}
</style>
