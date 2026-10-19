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
  bottoni: { type: Array, default: () => [] }
})
</script>

<template>
    <div class="p-4 p-md-5 jumbo-map-card" data-aos="fade-up">
        <div class="jumbo-map-bg" :style="{ backgroundColor: coloreSfondo }"></div>

        <img :src="immagine" alt="" class="img-fluid mb-0  mb-lg-4 mb-md-0 jumbo-map-image">

        <div class="jumbo-map-text">
            <p v-if="sopratitolo" class="eyebrow" :style="{ color: coloreSopratitolo }">{{ sopratitolo }}</p>
            <h2 class="" :style="{ color: coloreTitoloTesto }" v-html="titolo"></h2>
            <p class="body-large" :style="{ color: coloreTitoloTesto }">{{ testo }}</p>

            <div class="d-flex flex-wrap gap-3 jumbo-map-buttons">
                <NuxtLink
                    v-for="(bottone, index) in bottoni"
                    :key="index"
                    :to="bottone.link"
                    :class="['btn btn-lg', bottone.classe]"
                >
                    <Icon name="lucide:bike" class="me-2" />{{ bottone.testo }}
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
