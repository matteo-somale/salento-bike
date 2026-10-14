<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import AOS from 'aos'

const destinazioni = [
    {
        nome: 'Ciclonica',
        colore: '#119660',
        logo: '/logo/logo-ciclonica-simple.svg',
        immagini: [
            {
                url: '/img/destinazioni/ciclovia-salento-hero.jpg',
                alt: 'Ciclovia tra la macchia mediterranea del Salento ionico',
                didascalia: 'Pedalando lungo la costa ionica al tramonto',
                larga: true,
            },
            {
                url: '/img/destinazioni/foto-dest-salento.png',
                alt: 'Panorama della costa del Salento ionico',
            },
            {
                url: '/img/articoli/nard-centro.jpg',
                alt: 'Centro storico di Nardò',
                didascalia: 'Il centro storico di Nardò, tra barocco e pietra leccese',
            },
            {
                url: '/img/articoli/portoselvaggio-tramonto-anello-3.jpg',
                alt: 'Tramonto sulla baia di Porto Selvaggio',
                didascalia: 'Tramonto sulla baia selvaggia di Porto Selvaggio',
            },
            {
                url: '/img/articoli/salento-territorio-min.png',
                alt: 'Il territorio del Salento ionico dall\'alto',
            },
        ],
    },
    {
        nome: 'Ladriatica',
        colore: '#007FC3',
        logo: '/logo/logo-ladriatica-simple.svg',
        immagini: [
            {
                url: '/img/destinazioni/foto-dest-lecce.jpg',
                alt: 'Lecce lungo il percorso della ladriatica',
                didascalia: 'Lecce, la Firenze del Barocco, lungo il percorso ladriatico',
                larga: true,
            },
            {
                url: '/img/destinazioni/foto-lecce-segnaposto.jpg',
                alt: 'Dettaglio architettonico leccese',
            },
            {
                url: '/img/destinazioni/hero-salento-segnaposto.jpg',
                alt: 'Litorale adriatico del Salento',
                didascalia: 'La costa adriatica vista pedalando lungo la ciclovia',
            },
        ],
    },
]

const immagini = destinazioni.flatMap((destinazione) =>
    destinazione.immagini.map((immagine) => ({
        ...immagine,
        destinazione: destinazione.nome,
        colore: destinazione.colore,
        logo: destinazione.logo,
    }))
)

const selezionate = ref(destinazioni.map((d) => d.nome))

const tuttiAttivo = computed(() => selezionate.value.length === destinazioni.length)

function isAttiva(nome) {
    return selezionate.value.includes(nome)
}

function selezionaTutti() {
    selezionate.value = destinazioni.map((d) => d.nome)
}

function toggleFiltro(nome) {
    if (selezionate.value.includes(nome)) {
        const rimanenti = selezionate.value.filter((n) => n !== nome)
        selezionate.value = rimanenti.length ? rimanenti : destinazioni.map((d) => d.nome)
    } else {
        selezionate.value = [...selezionate.value, nome]
    }
}

const immaginiFiltrate = computed(() =>
    tuttiAttivo.value
        ? immagini
        : immagini.filter((immagine) => selezionate.value.includes(immagine.destinazione))
)

const immagineAttivaMobile = ref(null)

const toggleImmagineMobile = (url) => {
    immagineAttivaMobile.value = immagineAttivaMobile.value === url ? null : url
}

const grid = ref(null)
let masonry = null

onMounted(async () => {
    const [{ default: Masonry }, { default: imagesLoaded }] = await Promise.all([
        import('masonry-layout'),
        import('imagesloaded'),
    ])

    masonry = new Masonry(grid.value, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
    })

    imagesLoaded(grid.value, () => {
        masonry.layout()
        AOS.refreshHard()
    })
})

onBeforeUnmount(() => {
    masonry?.destroy()
})

watch(immaginiFiltrate, async () => {
    await nextTick()
    masonry?.reloadItems()
    masonry?.layout()
})
</script>

<template>
    <section class="py-5">
        <div class="container">

            <div class="text-center mb-5" data-aos="fade-up">
                <h4 class="text-orange eyebrow mb-2">photo gallery</h4>
                <h1 class="text-primary fw-bold mb-3">Immagini dalle ciclovie del Salento</h1>
            </div>

            <div class="d-flex flex-nowrap gap-3 mb-5 filtri-scroll" data-aos="fade-up" data-aos-delay="150">
                <button type="button" class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                    :class="{ 'is-active': tuttiAttivo }"
                    :style="{ '--btn-accent': 'var(--color-accent-giallo)' }"
                    @click="selezionaTutti">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 3L6.2 1.8C6.37 1.5 6.7 1.33 7.03 1.33H8.97C9.3 1.33 9.63 1.5 9.8 1.8L10.5 3H12.67C13.4 3 14 3.6 14 4.33V11.33C14 12.07 13.4 12.67 12.67 12.67H3.33C2.6 12.67 2 12.07 2 11.33V4.33C2 3.6 2.6 3 3.33 3H5.5Z"
                            stroke="white" stroke-width="1.3" stroke-linejoin="round" />
                        <circle cx="8" cy="8" r="2.5" stroke="white" stroke-width="1.3" />
                    </svg>
                    Tutti
                </button>
                <button v-for="(destinazione, index) in destinazioni" :key="index" type="button"
                    class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                    :class="{ 'is-active': isAttiva(destinazione.nome) }"
                    :style="{ '--btn-accent': destinazione.colore }"
                    @click="toggleFiltro(destinazione.nome)">
                    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 3L6.2 1.8C6.37 1.5 6.7 1.33 7.03 1.33H8.97C9.3 1.33 9.63 1.5 9.8 1.8L10.5 3H12.67C13.4 3 14 3.6 14 4.33V11.33C14 12.07 13.4 12.67 12.67 12.67H3.33C2.6 12.67 2 12.07 2 11.33V4.33C2 3.6 2.6 3 3.33 3H5.5Z"
                            stroke="white" stroke-width="1.3" stroke-linejoin="round" />
                        <circle cx="8" cy="8" r="2.5" stroke="white" stroke-width="1.3" />
                    </svg>
                    {{ destinazione.nome }}
                </button>
            </div>

            <div ref="grid" class="masonry-grid">
                <div class="grid-sizer"></div>
                <div v-for="immagine in immaginiFiltrate" :key="immagine.url" class="grid-item"
                    :class="{ 'grid-item--wide': immagine.larga }">
                    <div class="gallery-item-inner position-relative overflow-hidden rounded-4"
                        :class="{ 'is-active': immagineAttivaMobile === immagine.url }"
                        @click="toggleImmagineMobile(immagine.url)">
                        <img :src="immagine.url" :alt="immagine.alt" class="w-100 gallery-image">
                        <div v-if="immagine.didascalia" class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3"
                            :style="{ backgroundColor: immagine.colore + 'B3' }">
                            <img v-if="immagine.logo" :src="immagine.logo" :alt="`Logo ${immagine.destinazione}`"
                                class="position-absolute top-0 end-0 m-3 gallery-overlay-logo">
                            <span v-if="immagine.didascalia" class="text-white h5 gallery-overlay-caption">{{ immagine.didascalia }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.masonry-grid {
    margin: 0 -8px;
}

.grid-sizer,
.grid-item {
    width: 100%;
}

@media (min-width: 576px) {

    .grid-sizer,
    .grid-item {
        width: 50%;
    }
}

@media (min-width: 992px) {

    .grid-sizer,
    .grid-item {
        width: 33.333%;
    }
}

@media (min-width: 576px) {
    .grid-item--wide {
        width: 100%;
    }
}

@media (min-width: 992px) {
    .grid-item--wide {
        width: 66.666%;
    }
}

.grid-item {
    padding: 8px;
}

.gallery-image {
    display: block;
    height: auto;
}

.grid-item--wide .gallery-image {
    max-height: 400px;
    object-fit: cover;
}

.gallery-overlay {
    opacity: 0;
    transform: translateY(100%);
    transition: opacity .25s ease, transform .25s ease;
}

.gallery-overlay-caption {
    max-width: 400px;
}

.gallery-overlay-logo {
    width: 8%;
    min-width: 42px;
    height: auto;
}

@media (hover: hover) and (pointer: fine) {
    .gallery-item-inner:hover .gallery-overlay {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (hover: none) {
    .gallery-item-inner.is-active .gallery-overlay {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
