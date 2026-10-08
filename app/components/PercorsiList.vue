<script setup>
import { ref, computed } from 'vue'

const destinations = [
    {
        testo: 'La ciclovia del Salento ionico',
        destinazione: 'ciclonica',
        colore: '#119660',
        jumbomap: {
            titolo: 'Le ciclovie del Salento ionico',
            testo: 'Dalle spiagge dorate ai borghi del Barocco, dalle antiche masserie alla natura selvaggia dei parchi naturali: 305 km di pura bellezza tra i profumi della macchia mediterranea.',
            immagine: '/img/salento-map.png',
            bottoni: [
                { testo: 'Scopri il percorso completo', link: '/ciclonica' },
            ],
        },
    },
    {
        testo: 'La ciclovia del Salento orientale',
        destinazione: 'ladriatica',
        colore: '#007FC3',
        jumbomap: {
            titolo: 'Le ciclovie del Salento orientale',
            testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a Finibus Terrae.',
            immagine: '/img/salento-map.png',
            bottoni: [
                { testo: 'Scopri il percorso completo', link: '/ladriatica' },
            ],
        },
    },
]

const percorsi = [
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Facile',
        destinazione: 'ciclonica',
        titolo: 'Percorso uno',
        testo: 'Testo descrittivo segnaposto per il percorso uno, da sostituire con contenuti reali.',
        linkPercorso: '/',
        linkGpx: '/',
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Medio',
        destinazione: 'ciclonica',
        titolo: 'Percorso due',
        testo: 'Testo descrittivo segnaposto per il percorso due, da sostituire con contenuti reali.',
        linkPercorso: '/',
        linkGpx: '/',
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Difficile',
        destinazione: 'ladriatica',
        titolo: 'Percorso tre',
        testo: 'Testo descrittivo segnaposto per il percorso tre, da sostituire con contenuti reali.',
        linkPercorso: '/',
        linkGpx: '/',
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Facile',
        destinazione: 'ladriatica',
        titolo: 'Percorso quattro',
        testo: 'Testo descrittivo segnaposto per il percorso quattro, da sostituire con contenuti reali.',
        linkPercorso: '/',
        linkGpx: '/',
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Medio',
        destinazione: 'ciclonica',
        titolo: 'Percorso cinque',
        testo: 'Testo descrittivo segnaposto per il percorso cinque, da sostituire con contenuti reali.',
        linkPercorso: '/',
        linkGpx: '/',
    },
]

const selectedDestinazione = ref(destinations[0].destinazione)

const percorsiFiltrati = computed(() =>
    percorsi.filter((percorso) => percorso.destinazione === selectedDestinazione.value)
)

const destinazioneAttiva = computed(() =>
    destinations.find((destination) => destination.destinazione === selectedDestinazione.value)
)
</script>

<template>
    <section class="py-5">
        <div class="container">

            <div class="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <button v-for="(destination, index) in destinations" :key="index" type="button"
                    class="btn btn-lg d-inline-flex align-items-center gap-2"
                    :class="selectedDestinazione === destination.destinazione ? 'btn-accent' : 'btn-accent-outline'"
                    :style="{ '--btn-accent': destination.colore }"
                    @click="selectedDestinazione = destination.destinazione">
                    <Icon name="lucide:bike" />
                    {{ destination.testo }}
                </button>
            </div>

            <div id="jumbomap" class="position-relative mb-5" v-if="destinazioneAttiva">
                <div class="rounded p-4 p-md-5 jumbo-map-card" :style="{ backgroundColor: destinazioneAttiva.colore }">
                    <img :src="destinazioneAttiva.jumbomap.immagine" alt="" class="img-fluid mb-4 mb-md-0 jumbo-map-image">

                    <div class="jumbo-map-text">
                        <h2 class="display-4 fw-bold text-white">
                            {{ destinazioneAttiva.jumbomap.titolo }}
                        </h2>
                        <p class="lead text-white">
                            {{ destinazioneAttiva.jumbomap.testo }}
                        </p>

                        <div class="d-flex flex-wrap gap-3">
                            <NuxtLink v-for="(bottone, i) in destinazioneAttiva.jumbomap.bottoni" :key="i" :to="bottone.link"
                                class="btn btn-primary btn-lg">
                                {{ bottone.testo }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mb-5">
                <h4 class="text-orange eyebrow mb-2">Scopri i percorsi più adatti a te</h4>
                <h1 text-1 class="text-celeste fw-bold mb-3">5 percorsi ad anello</h1>
                <p class="lead col-12 col-lg-8 mx-auto">
                    Escursioni da fare in giornata o da collegare per vacanze di 2 o più giorni
                </p>
            </div>

            <div class="d-flex flex-column gap-4">
                <article v-for="(percorso, index) in percorsiFiltrati" :key="index"
                    class="row g-0 rounded-4 overflow-hidden percorso-card mx-auto"
                    :style="{ backgroundColor: destinazioneAttiva.colore + '66' }">
                    <div class="col-12 col-md-5 position-relative">
                        <img :src="percorso.immagine" class="w-100 percorso-card-image" alt="">
                        <span class="position-absolute top-0 start-0 m-3 badge rounded-pill percorso-chip">
                            {{ percorso.tag }}
                        </span>
                    </div>
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center p-4 p-md-5">
                        <h3 class="fw-bold mb-3 text-primary">{{ percorso.titolo }}</h3>
                        <p class="body-large mb-4 text-primary">{{ percorso.testo }}</p>
                        <div class="d-flex flex-wrap gap-3">
                            <NuxtLink :to="percorso.linkPercorso" class="btn btn-lg btn-primary d-inline-flex align-items-center gap-2">
                                <Icon name="lucide:bike" />
                                Vai al percorso
                            </NuxtLink>
                            <NuxtLink :to="percorso.linkGpx" class="btn btn-lg btn-orange d-inline-flex align-items-center gap-2">
                                <Icon name="lucide:download" />
                                Scarica GPX
                            </NuxtLink>
                        </div>
                    </div>
                </article>
            </div>

        </div>
    </section>
</template>

<style scoped>
.percorso-card {
    max-width: 1000px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.percorso-card-image {
    object-fit: cover;
    height: 350px;
}

.percorso-chip {
    background-color: var(--color-accent-orange);
    color: var(--color-text-white);
    font-weight: 600;
}

@media (min-width: 992px) {
    .jumbo-map-card {
        max-width: 100%;
    }

    .jumbo-map-text {
        max-width: 75%;
    }

    .jumbo-map-image {
        position: absolute;
        top: 50%;
        right: 0;
        width: auto;
        max-width: none;
        height: 140%;
        transform: translate(33%, -50%);
    }
}
</style>
