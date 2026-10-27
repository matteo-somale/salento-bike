<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import AOS from 'aos'

const destinations = [
    {
        testo: 'Ciclonica',
        destinazione: 'ciclonica',
        titolo: '5 percorsi ad anello',
        colore: '#119660',
        jumbomap: {
            sopratitolo: 'percorsi',
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
        titolo: '6 percorsi ad anello',
        colore: '#007FC3',
        jumbomap: {
            sopratitolo: 'percorsi',
            titolo: 'Le ciclovie<br> del Salento orientale',
            testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a <i>Finibus Terrae</i>.',
            immagine: '/maps/santento-map_ladriatica.svg',
            bottoni: [
                { testo: 'Scopri il percorso completo', classe: 'btn-primary', link: '/ladriatica' },
            ],
        },
    },
]

const percorsi = [
    {
        immagine: '/img/percorsi/ciclonica/1-anello-ugento.png',
        tag: 'Percoso 1',
        destinazione: 'ciclonica',
        titolo: 'Passare da un entroterra autentico alla ciclabile sul mare',
        testo: 'Alla scoperta di borghi, bacini costieri e piccole marine',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/pedalare-da-ugento-verso-le-sue-lunghe-spiagge',
        linkGpx: '/kml/ciclonica/1-anello-ugento.kml',
    },
    {
        immagine: '/img/percorsi/ciclonica/2-anello-gallipoli.png',
        tag: 'Percoso 2',
        destinazione: 'ciclonica',
        titolo: 'Da Gallipoli alla scoperta di borghi e masserie della campagna salentina',
        testo: 'Avvicinarsi alla natura di Gallipoli e al Parco di Punta Pizzo',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-gallipoli-alla-scoperta-di-borghi-e-masserie-dell-entroterra-salentino',
        linkGpx: '/kml/ciclonica/2-anello-gallipoli.kml',
    },
    {
        immagine: '/img/percorsi/ciclonica/4-anello-nardo.png',
        tag: 'Percoso 3',
        destinazione: 'ciclonica',
        titolo: 'Un mare di verde e di blu',
        testo: 'Tra Porto Cesareo e Nardò passando per Portoselvaggio e la Palude del Capitano',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/porto-selvaggio-e-porto-cesareo-un-mare-di-verde-e-blu',
        linkGpx: '/kml/ciclonica/4-anello-selvaggio.kml',
    },
    {
        immagine: '/img/percorsi/ciclonica/5-anello-selvaggio.png',
        tag: 'Percoso 4',
        destinazione: 'ciclonica',
        titolo: 'Il tour intorno a Manduria alla scoperta delle risorgive e della Salina dei Monaci',
        testo: 'La terra del Primitivo tra spiagge selvagge e fenicotteri rosa',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/mare-vigneti-e-macchia-mediterranea',
        linkGpx: '/kml/ciclonica/5-anello-manduria-breve.kml',
    },
    {
        immagine: '/img/percorsi/ciclonica/3-anello-manduria-breve.png',
        tag: 'Percoso 5',
        destinazione: 'ciclonica',
        titolo: 'Da Nardò verso Gallipoli tra muretti a secco e il mare',
        testo: 'Nella terra delle pajare e sulal costa dei tramonti',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-nardo-verso-gallipoli-tra-muretti-a-secco-e-il-mare',
        linkGpx: '/kml/ciclonica/3-anello-nardo.kml',
    },
    {
        immagine: '/img/percorsi/ladriatica/1-anello-finibus-terrae.png',
        tag: 'Percoso 1',
        destinazione: 'ladriatica',
        titolo: 'Pedalando sulle maestose scogliere di Finibus Terrae',
        testo: 'Escursione giornaliera ad anello fra i tesori di pietra del Capo di Leuca',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/pedalando-sulle-maestose-scogliere-di-finibusterrae',
        linkGpx: '/kml/ladriatica/1-anello-finibus-terrae.kml',
    },
    {
        immagine: '/img/percorsi/ladriatica/2-anello-leuca.png',
        tag: 'Percoso 2',
        destinazione: 'ladriatica',
        titolo: 'Da Alessano nel paesaggio rurale del Capo di Leuca',
        testo: 'Escursione giornaliera ad anello tra pajare e muretti a secco, a due passi dal mare.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-alessano-nel-paesaggio-rurale-del-capo-di-leuca',
        linkGpx: '/kml/ladriatica/2-anello-leuca.kml',
    },
    {
        immagine: '/img/percorsi/ladriatica/3-anello-parco.png',
        tag: 'Percoso 3',
        destinazione: 'ladriatica',
        titolo: 'Dal mare al gigante verde del Parco',
        testo: 'Escursione giornaliera ad anello da Andrano tra la costa e i borghi',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/dal-mare-al-gigante-verde-del-parco',
        linkGpx: '/kml/ladriatica/3-anello-parco.kml',
    },
    {
        immagine: '/img/percorsi/ladriatica/4-anello-marina.png',
        tag: 'Percoso 4',
        destinazione: 'ladriatica',
        titolo: 'Dalle terme alle grotte in splendide insenature',
        testo: 'Escursione giornaliera ad anello da Santa Cesarea tra storia e natura',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/dalle-terme-alle-grotte-in-splendide-insenature',
        linkGpx: '/kml/ladriatica/4-anello-marina.kml',
    },
    {
        immagine: '/img/percorsi/ladriatica/5-anello-selvaggio.png',
        tag: 'Percoso 5',
        destinazione: 'ladriatica',
        titolo: 'Sulla costa selvaggia e primitiva del Salento',
        testo: 'Escursione giornaliera ad anello da Porto Badisco alle radici',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/sulla-costa-selvaggia-e-primitiva-del-salento',
        linkGpx: '/kml/ladriatica/5-anello-selvaggio.kml',
    },
    {
        immagine: '/img/percorsi/ladriatica/6-anello-otranto.png',
        tag: 'Percoso 6',
        destinazione: 'ladriatica',
        titolo: 'Da Otranto sulla terra più a Est d’Italia',
        testo: 'Escursione giornaliera ad anello dal laghetto di bauxite ai dolmen e menhir',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-otranto-sulla-terra-piu-a-est-d-italia',
        linkGpx: '/kml/ladriatica/6-anello-otranto.kml',
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

            <div class="d-flex flex-wrap justify-content-center gap-1 gap-md-3 mb-3 mb-lg-5 pb-lg-5" style="position: relative; z-index: 999;">
                <button v-for="(destination, index) in destinations" :key="index" type="button"
                    class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                    :class="{ 'is-active': selectedDestinazione === destination.destinazione }"
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
                <h1 text-1 class="text-celeste fw-bold mb-3">{{ destinazioneAttiva?.titolo }}</h1>
                <p class="lead col-12 col-lg-8 mx-auto">
                    Escursioni da fare in giornata o da collegare per vacanze di 2 o più giorni
                </p>
            </div>

            <!-- md e superiori: impilati -->
            <div class="d-none d-md-flex flex-column gap-4">
                <PercorsoCard v-for="(percorso, index) in percorsiFiltrati" :key="index"
                    data-aos="fade-up" :data-aos-delay="Math.min(index, 3) * 100"
                    :immagine="percorso.immagine"
                    :tag="percorso.tag"
                    :titolo="percorso.titolo"
                    :testo="percorso.testo"
                    :link-percorso="percorso.linkPercorso"
                    :link-gpx="percorso.linkGpx"
                    :colore="destinazioneAttiva.colore"
                ></PercorsoCard>
            </div>

            <!-- sotto md: swiper classico -->
            <div class="d-md-none">
                <ClientOnly>
                    <swiper-container
                        class="percorsi-swiper"
                        pagination="true"
                        slides-per-view="1"
                        space-between="16"
                    >
                        <swiper-slide v-for="(percorso, index) in percorsiFiltrati" :key="index">
                            <PercorsoCard
                                :immagine="percorso.immagine"
                                :tag="percorso.tag"
                                :titolo="percorso.titolo"
                                :testo="percorso.testo"
                                :link-percorso="percorso.linkPercorso"
                                :link-gpx="percorso.linkGpx"
                                :colore="destinazioneAttiva.colore"
                            ></PercorsoCard>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>

        </div>
    </section>
</template>

<style scoped>
.percorsi-swiper swiper-slide {
    padding-bottom: 2.5rem;
    box-sizing: border-box;
}
</style>
