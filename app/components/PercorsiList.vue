<script setup>
import { ref, computed } from 'vue'

const destinations = [
    { testo: 'La ciclovia del Salento ionico', destinazione: 'ciclonica' },
    { testo: 'La ciclovia del Salento orientale', destinazione: 'ladriatica' },
]

const percorsi = [
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Facile',
        destinazione: 'ciclonica',
        colore: '#119660',
        titolo: 'Percorso uno',
        testo: 'Testo descrittivo segnaposto per il percorso uno, da sostituire con contenuti reali.',
        bottoni: [
            { testo: 'Scarica GPX', link: '/' },
            { testo: 'Vedi mappa', link: '/' },
        ],
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Medio',
        destinazione: 'ciclonica',
        colore: '#119660',
        titolo: 'Percorso due',
        testo: 'Testo descrittivo segnaposto per il percorso due, da sostituire con contenuti reali.',
        bottoni: [
            { testo: 'Scarica GPX', link: '/' },
        ],
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Difficile',
        destinazione: 'ladriatica',
        colore: '#007FC3',
        titolo: 'Percorso tre',
        testo: 'Testo descrittivo segnaposto per il percorso tre, da sostituire con contenuti reali.',
        bottoni: [
            { testo: 'Scarica GPX', link: '/' },
            { testo: 'Vedi mappa', link: '/' },
        ],
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Facile',
        destinazione: 'ladriatica',
        colore: '#007FC3',
        titolo: 'Percorso quattro',
        testo: 'Testo descrittivo segnaposto per il percorso quattro, da sostituire con contenuti reali.',
        bottoni: [
            { testo: 'Scarica GPX', link: '/' },
        ],
    },
    {
        immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
        tag: 'Medio',
        destinazione: 'ciclonica',
        colore: '#119660',
        titolo: 'Percorso cinque',
        testo: 'Testo descrittivo segnaposto per il percorso cinque, da sostituire con contenuti reali.',
        bottoni: [
            { testo: 'Scarica GPX', link: '/' },
            { testo: 'Vedi mappa', link: '/' },
        ],
    },
]

const selectedDestinazione = ref(destinations[0].destinazione)

const percorsiFiltrati = computed(() =>
    percorsi.filter((percorso) => percorso.destinazione === selectedDestinazione.value)
)
</script>

<template>
    <section class="py-5">
        <div class="container">

            <div class="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <button v-for="(destination, index) in destinations" :key="index" type="button"
                    class="btn btn-outline-primary" @click="selectedDestinazione = destination.destinazione">
                    {{ destination.testo }}
                </button>
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
                    :style="{ backgroundColor: percorso.colore + '22' }">
                    <div class="col-12 col-md-5 position-relative">
                        <img :src="percorso.immagine" class="w-100 percorso-card-image" alt="">
                        <span class="position-absolute top-0 start-0 m-3 badge rounded-pill percorso-chip">
                            {{ percorso.tag }}
                        </span>
                    </div>
                    <div class="col-12 col-md-7 d-flex flex-column justify-content-center p-4 p-md-5">
                        <h3 class="fw-bold mb-3">{{ percorso.titolo }}</h3>
                        <p class="body-large mb-4">{{ percorso.testo }}</p>
                        <div class="d-flex flex-wrap gap-3">
                            <NuxtLink v-for="(bottone, i) in percorso.bottoni" :key="i" :to="bottone.link"
                                class="btn btn-primary">
                                {{ bottone.testo }}
                            </NuxtLink>
                            <NuxtLink to="/percorsi" class="btn btn-outline-primary">
                                Scarica gpx
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
</style>
