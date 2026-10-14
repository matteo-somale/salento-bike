<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import AOS from 'aos'

const destinations = [
    {
        testo: 'Ciclonica',
        destinazione: 'ciclonica',
        colore: '#119660',
        jumbomap: {
            titolo: 'Le ciclovie<br>del Salento ionico',
            testo: 'Dalle spiagge dorate ai borghi del Barocco, dalle antiche masserie alla natura selvaggia dei parchi naturali: 305 km di pura bellezza tra i profumi della macchia mediterranea.',
            immagine: '/maps/santento-map_ciclonica.svg',
            bottoni: [
                { testo: 'Scopri il percorso completo', classe: 'btn-primary', link: '/ciclonica' },
            ],
        },
    },
    {
        testo: 'Ladriatica',
        destinazione: 'ladriatica',
        colore: '#007FC3',
        jumbomap: {
            titolo: 'Le ciclovie<br> del Salento orientale',
            testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a Finibus Terrae.',
            immagine: '/maps/santento-map_ladriatica.svg',
            bottoni: [
                { testo: 'Scopri il percorso completo', classe: 'btn-primary', link: '/ladriatica' },
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

watch(percorsiFiltrati, async () => {
    await nextTick()
    AOS.refreshHard()
})
</script>

<template>
    <section class="py-5">
        <div class="container">

            <div class="d-flex flex-wrap justify-content-center gap-3 mb-5 pb-lg-5" style="position: relative; z-index: 999;">
                <button v-for="(destination, index) in destinations" :key="index" type="button"
                    class="btn btn-lg d-inline-flex align-items-center gap-2"
                    :class="selectedDestinazione === destination.destinazione ? 'btn-accent' : 'btn-accent-outline'"
                    :style="{ '--btn-accent': destination.colore }"
                    @click="selectedDestinazione = destination.destinazione">
                    <Icon name="lucide:bike" />
                    {{ destination.testo }}
                </button>
            </div>

            <JumboMap
                v-if="destinazioneAttiva"
                class="mb-5 "
                :sopratitolo="destinazioneAttiva.jumbomap.sopratitolo"
                colore-sopratitolo="var(--color-text-white)"
                :titolo="destinazioneAttiva.jumbomap.titolo"
                :testo="destinazioneAttiva.jumbomap.testo"
                colore-titolo-testo="var(--color-text-white)"
                :immagine="destinazioneAttiva.jumbomap.immagine"
                :colore-sfondo="destinazioneAttiva.colore"
                :bottoni="destinazioneAttiva.jumbomap.bottoni"
            ></JumboMap>

            <div class="text-center mb-5">
                <h4 class="text-orange eyebrow mb-2">Scopri i percorsi più adatti a te</h4>
                <h1 text-1 class="text-celeste fw-bold mb-3">5 percorsi ad anello</h1>
                <p class="lead col-12 col-lg-8 mx-auto">
                    Escursioni da fare in giornata o da collegare per vacanze di 2 o più giorni
                </p>
            </div>

            <div class="d-flex flex-column gap-4">
                <article v-for="(percorso, index) in percorsiFiltrati" :key="index"
                    class="row g-0 rounded overflow-hidden percorso-card mx-auto"
                    data-aos="fade-up" :data-aos-delay="Math.min(index, 3) * 100"
                    :style="{ backgroundColor: destinazioneAttiva.colore + '66' }">
                    <div class="row p-y p-md-4">
                    <div class="col-12 col-md-6 position-relative ">
                        <img :src="percorso.immagine" class="w-100 rounded percorso-card-image" alt="">
                        <span class="position-absolute top-0 start-1 m-3 badge rounded-pill"
                            :style="{ backgroundColor: destinazioneAttiva.colore, color: 'var(--color-text-white)' }">
                            {{ percorso.tag }}
                        </span>
                    </div>
                    <div class="col-12 col-md-6 d-flex flex-column justify-content-center">
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
    height: 250px;
}

@media (min-width: 768px) {
    .percorso-card-image {
        height: 300px;
    }
}

@media (min-width: 992px) {
    .percorso-card-image {
        height: 350px;
    }
}
</style>
