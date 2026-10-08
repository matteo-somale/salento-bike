<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

const destinazioni = [
    {
        nome: 'Ciclonica',
        colore: '#119660',
        immagini: [
            {
                url: '/img/destinazioni/ciclovia-salento-hero.jpg',
                alt: 'Ciclovia tra la macchia mediterranea del Salento ionico',
                didascalia: 'Pedalando lungo la costa ionica al tramonto',
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
        immagini: [
            {
                url: '/img/destinazioni/foto-dest-lecce.jpg',
                alt: 'Lecce lungo il percorso della ladriatica',
                didascalia: 'Lecce, la Firenze del Barocco, lungo il percorso ladriatico',
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
    }))
)

const filtroAttivo = ref(null)

const toggleFiltro = (nome) => {
    filtroAttivo.value = filtroAttivo.value === nome ? null : nome
}

const immaginiFiltrate = computed(() =>
    filtroAttivo.value ? immagini.filter((immagine) => immagine.destinazione === filtroAttivo.value) : immagini
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

    imagesLoaded(grid.value, () => masonry.layout())
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

            <div class="text-center mb-5">
                <h4 class="text-orange eyebrow mb-2">photo gallery</h4>
                <h1 class="text-primary fw-bold mb-3">Immagini dalle ciclovie del Salento</h1>
            </div>

            <div class="d-flex flex-wrap justify-content-center gap-3 mb-5">
                <button v-for="(destinazione, index) in destinazioni" :key="index" type="button" class="btn"
                    :style="{ backgroundColor: destinazione.colore, borderColor: destinazione.colore, color: '#fff' }"
                    @click="toggleFiltro(destinazione.nome)">
                    {{ destinazione.nome }}
                </button>
            </div>

            <div ref="grid" class="masonry-grid">
                <div class="grid-sizer"></div>
                <div v-for="immagine in immaginiFiltrate" :key="immagine.url" class="grid-item">
                    <div class="gallery-item-inner position-relative overflow-hidden rounded-4"
                        :class="{ 'is-active': immagineAttivaMobile === immagine.url }"
                        @click="toggleImmagineMobile(immagine.url)">
                        <img :src="immagine.url" :alt="immagine.alt" class="w-100 gallery-image">
                        <div v-if="immagine.didascalia" class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3"
                            :style="{ backgroundColor: immagine.colore + 'E6' }">
                            <span class="text-white h5">{{ immagine.didascalia }}</span>
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

.grid-item {
    padding: 8px;
}

.gallery-image {
    display: block;
    height: auto;
}

.gallery-overlay {
    opacity: 0;
    transition: opacity .25s ease;
}

@media (hover: hover) and (pointer: fine) {
    .gallery-item-inner:hover .gallery-overlay {
        opacity: 1;
    }
}

@media (hover: none) {
    .gallery-item-inner.is-active .gallery-overlay {
        opacity: 1;
    }
}
</style>
