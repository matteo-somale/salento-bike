<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import AOS from 'aos'
import VueEasyLightbox from 'vue-easy-lightbox'

const destinazioni = [
    {
        nome: 'Ciclonica',
        colore: '#119660',
        logo: '/logo/logo-ciclonica-simple.svg',
        immagini: [
            {
                url: '/img/galleria/ciclonica/02_CRISTODITABELLE_phROBERTOGUIDO.jpg',
                alt: 'La Chiesetta di Cristo di Tabelle (Galatone)',
                didascalia: 'La Chiesetta di Cristo di Tabelle (Galatone)',
            },
            {
                url: '/img/galleria/ciclonica/03_GEMINI-UGENTO_O_phROBERTOGUIDO.jpg',
                alt: 'Pedalando verso il mare di Ugento',
                didascalia: 'Pedalando verso il mare di Ugento',
                larga: true,
            },
            {
                url: '/img/galleria/ciclonica/04_PARCOUGENTO_4_phROBERTOGUIDO.jpg',
                alt: 'Lungo i bacini del Parco Litorale di Ugento (Gallipoli)',
                didascalia: 'Lungo i bacini del Parco Litorale di Ugento (Gallipoli)',
            },
            {
                url: '/img/galleria/ciclonica/05_CICLOPEDONALE_ALLISTE_phROBERTOGUIDO.jpg',
                alt: 'Sulla ciclopedonale sul mare sul litorale di Alliste',
                didascalia: 'Sulla ciclopedonale sul mare sul litorale di Alliste',
            },
            {
                url: '/img/galleria/ciclonica/06_CICLOPEDONALE_ALLISTE_10_phROBERTOGUIDO.jpg',
                alt: 'Pedalando sulla scogliera della ciclopedonale sul mare di Alliste',
                didascalia: 'Pedalando sulla scogliera della ciclopedonale sul mare di Alliste',
                
            },
            {
                url: '/img/galleria/ciclonica/07_PARCOPIZZO_2_phROBERTOGUIDO.jpg',
                alt: 'Attraversando il Parco di Punta Pizzo (Gallipoli)',
                didascalia: 'Attraversando il Parco di Punta Pizzo (Gallipoli)',
                
            },
            {
                url: '/img/galleria/ciclonica/08_BAIAVERDE_phROBERTOGUIDO.jpg',
                alt: 'Tra il mare e la spiaggia lungo la ciclopedonale di Baia Verde (Gallipoli)',
                didascalia: 'Tra il mare e la spiaggia lungo la ciclopedonale di Baia Verde (Gallipoli)',
                larga: true,
            },
            {
                url: '/img/galleria/ciclonica/09_GALLIPOLI_BORGO_3_phROBERTOGUIDO.jpg',
                alt: 'Uno scorcio di Palazzo Tafuri nel centro storico di Gallipoli',
                didascalia: 'Uno scorcio di Palazzo Tafuri nel centro storico di Gallipoli',
                larga: true,
            },
            {
                url: '/img/galleria/ciclonica/10_GALLIPOLI_BORGO_5_phROBERTOGUIDO.jpg',
                alt: 'Nel borgo antico di Gallipoli',
                didascalia: 'Nel borgo antico di Gallipoli',
            },
            {
                url: '/img/galleria/ciclonica/11_TORRE_SABEA_phROBERTOGUIDO.jpg',
                alt: 'Torre Sabea, sul litorale nord di Gallipoli',
                didascalia: 'Torre Sabea, sul litorale nord di Gallipoli',
                larga: true,
            },
            {
                url: '/img/galleria/ciclonica/12_SANTAMARIAALBAGNO_1_phROBERTOGUIDO.jpg',
                alt: 'La spiaggia di Santa Maria al Bagno (Nardò)',
                didascalia: 'La spiaggia di Santa Maria al Bagno (Nardò)',
                alta: true,
            },
            {
                url: '/img/galleria/ciclonica/13_PORTOSELVAGGIO_phROBERTOGUIDO.jpg',
                alt: 'La baia di Porto Selvaggio (Nardò)',
                didascalia: 'La baia di Porto Selvaggio (Nardò)',
                alta: true,
            },
            {
                url: '/img/galleria/ciclonica/14_PALUDEDELCAPITANO_1_phROBERTOGUIDO.jpg',
                alt: 'Il sentiero che attraversa la Palude del Capitano (Nardò)',
                didascalia: 'Il sentiero che attraversa la Palude del Capitano (Nardò)',
            },
            {
                url: '/img/galleria/ciclonica/15_PADULA_FEDE_phROBERTOGUIDO.jpg',
                alt: 'Lungo i canali di Padula Fede (Porto Cesareo)',
                didascalia: 'Lungo i canali di Padula Fede (Porto Cesareo)',
            },
            {
                url: '/img/galleria/ciclonica/16_PUNTAPROSCIUTTO_phROBERTOGUIDO.jpg',
                alt: 'La spiaggia di Punta Prosciutto (Porto Cesareo)',
                didascalia: 'La spiaggia di Punta Prosciutto (Porto Cesareo)',
            },
            {
                url: '/img/galleria/ciclonica/17_PALUDEDELCONTE_phROBERTOGUIDO.jpg',
                alt: 'Attraversando la Palude del Conte (Manduria)',
                didascalia: 'Attraversando la Palude del Conte (Manduria)',
            },
            {
                url: '/img/galleria/ciclonica/18_SALINADEIMONACI_1_phROBERTOGUIDO.jpg',
                alt: 'Sul sentiero tra le dune e la palude di Salina dei Monaci (Manduria)',
                didascalia: 'Sul sentiero tra le dune e la palude di Salina dei Monaci (Manduria)',
            },
            {
                url: '/img/galleria/ciclonica/19_VIGNETO_MONTEDEIDIAVOLI_phROBERTOGUIDO.jpg',
                alt: 'Un vigneto di Manduria e sullo sfondo Monte del Diavolo (Manduria)',
                didascalia: 'Un vigneto di Manduria e sullo sfondo Monte del Diavolo (Manduria)',
            },
            {
                url: '/img/galleria/ciclonica/20_CAMPO_DEI_GIGANTI_phROBERTOGUIDO.jpg',
                alt: 'Gli ulivi secolari del Campo dei Giganti (Nardò)',
                didascalia: 'Gli ulivi secolari del Campo dei Giganti (Nardò)',
                larga: true,
            },
            {
                url: '/img/galleria/ciclonica/21_VILLECENATE.jpg',
                alt: 'Una delle storiche ville liberty delle Cenate (Nardò)',
                didascalia: 'Una delle storiche ville liberty delle Cenate (Nardò)',
            },
        ],
    },
    {
        nome: 'Ladriatica',
        colore: '#007FC3',
        logo: '/logo/logo-ladriatica-simple.svg',
        immagini: [
            {
                url: '/img/galleria/ladriatica/01_OTRANTO_FAROPALASCIA_phRobertoGuido.jpg',
                alt: 'Il faro di Punta Palascìa sulla costa a sud di Otranto',
                didascalia: 'Il faro di Punta Palascìa sulla costa a sud di Otranto',
                larga: true,
            },
            {
                url: '/img/galleria/ladriatica/02_CAVABAUXITE_1_phRobertoGuido.jpg',
                alt: 'La cava di bauxite (Otranto)',
                didascalia: 'La cava di bauxite (Otranto)',
            },
            {
                url: '/img/galleria/ladriatica/03_SANTEMILIANO_phRobertoGuido.jpg',
                alt: 'La costa di Torre Sant\'Emiliano (Otranto)',
                didascalia: 'La costa di Torre Sant\'Emiliano (Otranto)',
            },
            {
                url: '/img/galleria/ladriatica/04_OTRANTO_PORTO_BADISCO.jpg',
                alt: 'La baia di Porto Badisco (Otranto)',
                didascalia: 'La baia di Porto Badisco (Otranto)',
            },
            {
                url: '/img/galleria/ladriatica/05_TORREMINERVINO_phRobertoGuido.jpg',
                alt: 'Torre Minervino (Santa Cesarea Terme)',
                didascalia: 'Torre Minervino (Santa Cesarea Terme)',
            },
            {
                url: '/img/galleria/ladriatica/06_CASTRO_phRobertoGuido.jpg',
                alt: 'L\'insenatura di Castro',
                didascalia: 'L\'insenatura di Castro',
            },
            {
                url: '/img/galleria/ladriatica/07_CIOLO_phRobertoGuido.jpg',
                alt: 'Uno scorcio dell\'insenatura del Ciolo (Gagliano del Capo)',
                didascalia: 'Uno scorcio dell\'insenatura del Ciolo (Gagliano del Capo)',
                alta: true,
            },
            {
                url: '/img/galleria/ladriatica/08_CAPODILEUCA_phRobertoGuido.jpg',
                alt: 'Pedalando lungo un tratturo del Capo di Leuca',
                didascalia: 'Pedalando lungo un tratturo del Capo di Leuca',
            },
            {
                url: '/img/galleria/ladriatica/09_COSTA_CAPODILEUCA_phRobertoGuido.jpg',
                alt: 'La costa del Capo di Leuca',
                didascalia: 'La costa del Capo di Leuca',
                alta: true,
            },
            {
                url: '/img/galleria/ladriatica/10_FAROLEUCA_phRobertoGuido.jpg',
                alt: 'Il faro di Santa Maria di Leuca',
                didascalia: 'Il faro di Santa Maria di Leuca',
            },
            {
                url: '/img/galleria/ladriatica/11_ALESSANO_PALAZZOSANGIOVANNI_phRobertoGuido.jpg',
                alt: 'Palazzo Sangiovanni nel borgo di Alessano',
                didascalia: 'Palazzo Sangiovanni nel borgo di Alessano',
            },
            {
                url: '/img/galleria/ladriatica/12_ORTELLE_CHIESASANGIORGIO_phRobertoGuido.jpg',
                alt: 'La Chiesa di San Giorgio a Ortelle',
                didascalia: 'La Chiesa di San Giorgio a Ortelle',
                alta: true,
            },
            {
                url: '/img/galleria/ladriatica/13_QUERCIA_VALLONEA_phRobertoGuido.jpg',
                alt: 'La Quercia Vallonea di Tricase',
                didascalia: 'La Quercia Vallonea di Tricase',
                alta: true,
            },
            {
                url: '/img/galleria/ladriatica/14_PARCODEIGUERRIERI_phRobertoGuido.jpg',
                alt: 'Il Parco dei Guerrieri a Vaste (Poggiardo)',
                didascalia: 'Il Parco dei Guerrieri a Vaste (Poggiardo)',
                alta: true,
            },
            {
                url: '/img/galleria/ladriatica/15_GIURDIGNANO_MENHIR_2_phRobertoGuido.jpg.jpg',
                alt: 'Uno dei menhir del parco dei megaliti a Giurdignano',
                didascalia: 'Uno dei menhir del parco dei megaliti a Giurdignano',
            },
            {
                url: '/img/galleria/ladriatica/16_MASSERIA12GRANAI_phRobertoGuido.jpg',
                alt: 'Masseria 12 granai nel territorio di Minervino',
                didascalia: 'Masseria 12 granai nel territorio di Minervino',
            },
            {
                url: '/img/galleria/ladriatica/17_LEDUESORELLE_2_phRobertoGuido.jpg',
                alt: 'I faraglioni delle Due Sorelle nel mare di Torre dell\'Orso (Melendugno)',
                didascalia: 'I faraglioni delle Due Sorelle nel mare di Torre dell\'Orso (Melendugno)',
                larga: true,
            },
            {
                url: '/img/galleria/ladriatica/18_OTRANTO_VALLE_DELLIDRO_1_phRobertoGuido.jpg',
                alt: 'La verde Valle dell\'Idro (Otranto)',
                didascalia: 'La verde Valle dell\'Idro (Otranto)',
            },
            {
                url: '/img/galleria/ladriatica/19_ENTROTERRA_LEUCA_phRobertoGuido.jpg',
                alt: 'Pedalando nell\'entroterra di Tricase',
                didascalia: 'Pedalando nell\'entroterra di Tricase',
                alta: true,
            },
            {
                url: '/img/galleria/ladriatica/20_CASTELLOOTRANTO_2_phRobertoGuido.jpg',
                alt: 'Il Castello di Otranto',
                didascalia: 'Il Castello di Otranto',
                larga: true,
            },
        ],
    },
]

const SEED_MESCOLAMENTO = 42

function mescola(array, seed) {
    let stato = seed
    const random = () => {
        stato = (stato * 9301 + 49297) % 233280
        return stato / 233280
    }
    const risultato = [...array]
    for (let i = risultato.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1))
        ;[risultato[i], risultato[j]] = [risultato[j], risultato[i]]
    }
    return risultato
}

const immagini = mescola(
    destinazioni.flatMap((destinazione) =>
        destinazione.immagini.map((immagine) => ({
            ...immagine,
            destinazione: destinazione.nome,
            colore: destinazione.colore,
            logo: destinazione.logo,
        }))
    ),
    SEED_MESCOLAMENTO
)

const filtroAttivo = ref(null)

const tuttiAttivo = computed(() => filtroAttivo.value === null)

function isAttiva(nome) {
    return filtroAttivo.value === nome
}

function selezionaTutti() {
    filtroAttivo.value = null
}

function selezionaFiltro(nome) {
    filtroAttivo.value = nome
}

const immaginiFiltrate = computed(() =>
    tuttiAttivo.value
        ? immagini
        : immagini.filter((immagine) => immagine.destinazione === filtroAttivo.value)
)

const immagineAttivaMobile = ref(null)

const toggleImmagineMobile = (url) => {
    immagineAttivaMobile.value = immagineAttivaMobile.value === url ? null : url
}

const lightboxVisibile = ref(false)
const lightboxIndice = ref(0)

const lightboxImmagini = computed(() =>
    immaginiFiltrate.value.map((immagine) => ({
        src: immagine.url,
        title: immagine.didascalia,
        alt: immagine.alt,
    }))
)

function apriLightbox(immagine) {
    const indice = immaginiFiltrate.value.findIndex((i) => i.url === immagine.url)
    if (indice === -1) return
    lightboxIndice.value = indice
    lightboxVisibile.value = true
}

function onClickImmagine(immagine) {
    const haHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (haHover) {
        apriLightbox(immagine)
    } else {
        toggleImmagineMobile(immagine.url)
    }
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
                    Tutto
                </button>
                <button v-for="(destinazione, index) in destinazioni" :key="index" type="button"
                    class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                    :class="{ 'is-active': isAttiva(destinazione.nome) }"
                    :style="{ '--btn-accent': destinazione.colore }"
                    @click="selezionaFiltro(destinazione.nome)">
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
                <div v-for="(immagine, indice) in immaginiFiltrate" :key="immagine.url" class="grid-item"
                    :class="{ 'grid-item--wide': immagine.larga || indice === 0, 'grid-item--tall': immagine.alta }">
                    <div class="gallery-item-inner position-relative overflow-hidden rounded-4"
                        :class="{ 'is-active': immagineAttivaMobile === immagine.url }"
                        @click="onClickImmagine(immagine)">
                        <img :src="immagine.url" :alt="immagine.alt" class="w-100 gallery-image">
                        <div v-if="immagine.didascalia" class="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3"
                            :style="{ backgroundColor: immagine.colore + 'B3' }">
                            <img v-if="immagine.logo" :src="immagine.logo" :alt="`Logo ${immagine.destinazione}`"
                                class="position-absolute top-0 end-0 m-3 gallery-overlay-logo">
                            <div class="w-100 d-flex align-items-end justify-content-between gap-2">
                                <span class="text-white h5 gallery-overlay-caption mb-0">{{ immagine.didascalia }}</span>
                                <button type="button" class="btn-zoom-mobile flex-shrink-0"
                                    :aria-label="`Ingrandisci: ${immagine.didascalia}`"
                                    @click.stop="apriLightbox(immagine)">
                                    <Icon name="lucide:arrow-up-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ClientOnly>
                <VueEasyLightbox
                    :visible="lightboxVisibile"
                    :imgs="lightboxImmagini"
                    :index="lightboxIndice"
                    @hide="lightboxVisibile = false"
                />
            </ClientOnly>

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

.grid-item--tall .gallery-image {
    height: 520px;
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

.btn-zoom-mobile {
    display: none;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    color: white;
    font-size: 1.1rem;
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

    .btn-zoom-mobile {
        display: inline-flex;
    }
}
</style>
