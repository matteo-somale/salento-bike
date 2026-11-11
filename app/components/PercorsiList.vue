<script setup>
import { computed, nextTick, watch } from 'vue'
import AOS from 'aos'

const destinations = [
    {
        testo: 'Ciclonica',
        destinazione: 'ciclonica',
        // titolo della sezione, diverso per tipo di percorso (chiavi = valori di tipi[].tipo)
        titoli: { anello: '5 percorsi ad anello', tappa: 'Sei tappe' },
        colore: '#119660',
        jumbomap: {
            sopratitolo: 'percorsi',
            titolo: 'La ciclovia<br>del Salento ionico',
            testo: 'Dalle spiagge dorate ai borghi del Barocco, dalle antiche masserie alla natura selvaggia dei parchi naturali: 305 km di pura bellezza tra i profumi della macchia mediterranea.',
            immagine: '/maps/santento-map_ciclonica.svg',
            bottoni: [
                { testo: 'Scopri il percorso completo', classe: 'btn-primary', icona: 'lucide:bike', blank: true, download: false, link: 'https://ebike.bikesquare.eu/salento/percorso/ciclonica-la-ciclovia-del-salento-ionico' },
                { testo: 'Scarica GPX', classe: 'btn-orange', icona: 'lucide:download', blank: false, download: true, link: '/gpx/ciclonica/ciclonica-percorso-completo.gpx' },
            ],
        },
    },
    {
        testo: 'Ladriatica',
        destinazione: 'ladriatica',
        titoli: { anello: '6 percorsi ad anello', tappa: 'Quattro tappe' },
        colore: '#007FC3',
        jumbomap: {
            sopratitolo: 'percorsi',
            titolo: 'La ciclovia<br> del Salento orientale',
            testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a <i>Finibus Terrae</i>.',
            immagine: '/maps/santento-map_ladriatica.svg',
            bottoni: [
                { testo: 'Scopri il percorso completo', classe: 'btn-primary', icona: 'lucide:bike', blank: true, download: false, link: 'https://ebike.bikesquare.eu/salento/percorso/ladriatica-ciclovia-del-salento-orientale' },
                { testo: 'Scarica GPX', classe: 'btn-orange', icona: 'lucide:download', blank: false, download: true, link: '/gpx/ladriatica/ladriatica-percorso-completo.gpx' },
            ],
        },
    },
]

// Tipi di percorso: bottoni "Anelli" / "Tappe" sotto il sottotitolo
const tipi = [
    { testo: 'Anelli', tipo: 'anello' },
    { testo: 'Tappe', tipo: 'tappa' },
]

const percorsi = [
    {
        immagine: '/img/percorsi/ciclonica/anelli/1-anello-ugento.png',
        tag: 'Anello 1',
        destinazione: 'ciclonica',
        tipo: 'anello',
        titolo:'Passare da un entroterra autentico alla ciclabile sul mare',
        testo: 'Alla scoperta di borghi, bacini costieri e piccole marine',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/pedalare-da-ugento-verso-le-sue-lunghe-spiagge',
        linkGpx: '/gpx/ciclonica/anelli/1-anello-ugento.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/anelli/2-anello-gallipoli.png',
        tag: 'Anello 2',
        destinazione: 'ciclonica',
        tipo: 'anello',
        titolo:'Da Gallipoli alla scoperta di borghi e masserie della campagna salentina',
        testo: 'Avvicinarsi alla natura di Gallipoli e al Parco di Punta Pizzo',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-gallipoli-alla-scoperta-di-borghi-e-masserie-dell-entroterra-salentino',
        linkGpx: '/gpx/ciclonica/anelli/2-anello-gallipoli.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/anelli/3-anello-nardo.png',
        tag: 'Anello 3',
        destinazione: 'ciclonica',
        tipo: 'anello',
        titolo:'Da Nardò verso Gallipoli tra muretti a secco e il mare',
        testo: 'Nella terra delle pajare e sulal costa dei tramonti',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-nardo-verso-gallipoli-tra-muretti-a-secco-e-il-mare',
        linkGpx: '/gpx/ciclonica/anelli/3-anello-nardo.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/anelli/4-anello-selvaggio.png',
        tag: 'Anello 4',
        destinazione: 'ciclonica',
        tipo: 'anello',
        titolo:'Un mare di verde e di blu',
        testo: 'Tra Porto Cesareo e Nardò passando per Portoselvaggio e la Palude del Capitano',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/porto-selvaggio-e-porto-cesareo-un-mare-di-verde-e-blu',
        linkGpx: '/gpx/ciclonica/anelli/4-anello-selvaggio.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/anelli/5-anello-manduria.png',
        tag: 'Anello 5',
        destinazione: 'ciclonica',
        tipo: 'anello',
        titolo:'Il tour intorno a Manduria alla scoperta delle risorgive e della Salina dei Monaci',
        testo: 'La terra del Primitivo tra spiagge selvagge e fenicotteri rosa',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/il-tour-intorno-a-manduria-alla-scoperta-delle-risorgive-e-della-salina-dei-monaci',
        linkGpx: '/gpx/ciclonica/anelli/5-anello-manduria.gpx',
    },

    // Tappe Ciclonica: immagine e GPX abbinati per numero (N-tappa-...), km calcolati dalle tracce GPX
    // TODO testi descrittivi delle tappe; linkPercorso punta ancora al percorso completo
    {
        immagine: '/img/percorsi/ciclonica/tappe/1-tappa-ciclonica-lecce.png',
        tag: 'Tappa 1',
        destinazione: 'ciclonica',
        tipo: 'tappa',
        titolo: 'Da Lecce a Galatina e Nardò',
        testo: 'Da Lecce, capitale del Barocco, parte la prima tappa tra storia e natura: Rudiae, la Grecìa Salentina e Galatina, fino a Nardò.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-lecce-a-galatina-e-nardo',
        linkGpx: '/gpx/ciclonica/tappe/1-tappa-CICLONICA-LECCE_NARDO_.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/tappe/2-tappa-ciclonica-nardo.png',
        tag: 'Tappa 2',
        destinazione: 'ciclonica',
        tipo: 'tappa',
        titolo: 'Da Nardò ad Ugento',
        testo: 'Tra pajare e muretti a secco, da Nardò a Ugento attraverso Galatone e i borghi del Salento.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-nardo-ad-ugento',
        linkGpx: '/gpx/ciclonica/tappe/2-tappa-CICLONICA-NARDO__UGENTO.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/tappe/3-tappa-ciclonica-ugento.png',
        tag: 'Tappa 3',
        destinazione: 'ciclonica',
        tipo: 'tappa',
        titolo: 'Da Ugento a Gallipoli',
        testo: 'Da Ugento a Gallipoli in riva al mare, tra Bacini di Ugento, Capilungo e Punta Pizzo.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-ugento-a-gallipoli',
        linkGpx: '/gpx/ciclonica/tappe/3-tappa-CICLONICA-UGENTO_GALLIPOLI_2026.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/tappe/4-tappa-ciclonica-gallipoli.png',
        tag: 'Tappa 4',
        destinazione: 'ciclonica',
        tipo: 'tappa',
        titolo: 'Da Gallipoli a Torre Lapillo',
        testo: 'Da Gallipoli a Torre Lapillo lungo la costa, tra Porto Selvaggio e Porto Cesareo.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-ugento-a-gallipoli',
        linkGpx: '/gpx/ciclonica/tappe/4-tappa-CICLONICA-GALLIPOLI_TORRE_LAPILLO.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/tappe/5-tappa-ciclonica-lapillo.png',
        tag: 'Tappa 5',
        destinazione: 'ciclonica',
        tipo: 'tappa',
        titolo: 'Da Torre Lapillo ad Avetrana',
        testo: 'Da Torre Lapillo ad Avetrana tra macchia, salina e la storia di Manduria.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-torre-lapillo-ad-avetrana',
        linkGpx: '/gpx/ciclonica/tappe/5-tappa-CICLONICA-TORRE_LAPILLO_AVETRANA.gpx',
    },
    {
        immagine: '/img/percorsi/ciclonica/tappe/6-tappa-ciclonica-avetrana.png',
        tag: 'Tappa 6',
        destinazione: 'ciclonica',
        tipo: 'tappa',
        titolo: 'Da Avetrana a Lecce',
        testo: 'Da Avetrana a Lecce tra campagna salentina, pista Porsche e borgo antico.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-avetrana-a-lecce',
        linkGpx: '/gpx/ciclonica/tappe/6-tappa-CICLONICA-AVETRANA_LECCE.gpx',
    },


    {
        immagine: '/img/percorsi/ladriatica/anelli/1-anello-finibus-terrae.png',
        tag: 'Anello 1',
        destinazione: 'ladriatica',
        tipo: 'anello',
        titolo:'Pedalando sulle maestose scogliere di Finibus Terrae',
        testo: 'Escursione giornaliera ad anello fra i tesori di pietra del Capo di Leuca',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/pedalando-sulle-maestose-scogliere-di-finibusterrae',
        linkGpx: '/gpx/ladriatica/anelli/1-anello-finibus-terrae.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/anelli/2-anello-leuca.png',
        tag: 'Anello 2',
        destinazione: 'ladriatica',
        tipo: 'anello',
        titolo:'Da Alessano nel paesaggio rurale del Capo di Leuca',
        testo: 'Escursione giornaliera ad anello tra pajare e muretti a secco, a due passi dal mare.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-alessano-nel-paesaggio-rurale-del-capo-di-leuca',
        linkGpx: '/gpx/ladriatica/anelli/2-anello-leuca.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/anelli/3-anello-parco.png',
        tag: 'Anello 3',
        destinazione: 'ladriatica',
        tipo: 'anello',
        titolo:'Dal mare al gigante verde del Parco',
        testo: 'Escursione giornaliera ad anello da Andrano tra la costa e i borghi',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/dal-mare-al-gigante-verde-del-parco',
        linkGpx: '/gpx/ladriatica/anelli/3-anello-parco.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/anelli/4-anello-marina.png',
        tag: 'Anello 4',
        destinazione: 'ladriatica',
        tipo: 'anello',
        titolo:'Dalle terme alle grotte in splendide insenature',
        testo: 'Escursione giornaliera ad anello da Santa Cesarea tra storia e natura',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/dalle-terme-alle-grotte-in-splendide-insenature',
        linkGpx: '/gpx/ladriatica/anelli/4-anello-marina.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/anelli/5-anello-selvaggio.png',
        tag: 'Anello 5',
        destinazione: 'ladriatica',
        tipo: 'anello',
        titolo:'Sulla costa selvaggia e primitiva del Salento',
        testo: 'Escursione giornaliera ad anello da Porto Badisco alle radici',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/sulla-costa-selvaggia-e-primitiva-del-salento',
        linkGpx: '/gpx/ladriatica/anelli/5-anello-selvaggio.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/anelli/6-anello-otranto.png',
        tag: 'Anello 6',
        destinazione: 'ladriatica',
        tipo: 'anello',
        titolo:'Da Otranto sulla terra più a Est d’Italia',
        testo: 'Escursione giornaliera ad anello dal laghetto di bauxite ai dolmen e menhir',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-otranto-sulla-terra-piu-a-est-d-italia',
        linkGpx: '/gpx/ladriatica/anelli/6-anello-otranto.gpx',
    },

    // Tappe Ladriatica: immagine N-... abbinata al GPX A-0N_..., km calcolati dalle tracce GPX
    // TODO testi descrittivi delle tappe; linkPercorso punta ancora al percorso completo
    {
        immagine: '/img/percorsi/ladriatica/tappe/1-tappa-ladriatica-lecce.png',
        tag: 'Tappa 1',
        destinazione: 'ladriatica',
        tipo: 'tappa',
        titolo: 'Da Lecce a Otranto',
        testo: 'Da Lecce a Otranto tra Acaya, Roca Vecchia, Due Sorelle e Laghi Alimini.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-lecce-a-otranto',
        linkGpx: '/gpx/ladriatica/tappe/A-01_LADRIATICA-DA_LECCE_A_OTRANTO.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/tappe/2-tappa-ladriatica-otranto.png',
        tag: 'Tappa 2',
        destinazione: 'ladriatica',
        tipo: 'tappa',
        titolo: 'Da Otranto a Santa Maria di Leuca',
        testo: 'Da Otranto a Santa Maria di Leuca tra faro di Punta Palascìa, Ciolo e scogliere.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-otranto-a-santa-maria-di-leuca',
        linkGpx: '/gpx/ladriatica/tappe/A-02_LADRIATICA-DA_OTRANTO_A_SANTA_MARIA_DI_LEUCA.gpx',
    },
    {
        // TODO immagine segnaposto (identica a quella della tappa 4): sostituire con quella di Leuca
        immagine: '/img/percorsi/ladriatica/tappe/3-immagine-segnaposto.png',
        tag: 'Tappa 3',
        destinazione: 'ladriatica',
        tipo: 'tappa',
        titolo: 'Da Santa Maria di Leuca a Giurdignano',
        testo: 'Da Santa Maria di Leuca a Giurdignano tra serre, borghi e il giardino megalitico.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-santa-maria-di-leuca-a-giurdignano',
        linkGpx: '/gpx/ladriatica/tappe/A-03_LADRIATICA-DA_SANTA_MARIA_DI_LEUCA_A_GIURDIGNANO.gpx',
    },
    {
        immagine: '/img/percorsi/ladriatica/tappe/4-tappa-ladriatica-giurdignano.png',
        tag: 'Tappa 4',
        destinazione: 'ladriatica',
        tipo: 'tappa',
        titolo: 'Da Giurdignano a Lecce',
        testo: 'Da Giurdignano a Lecce tra uliveti, Parco di Torcito e Quercia dei Briganti.',
        linkPercorso: 'https://ebike.bikesquare.eu/salento/percorso/da-giurdignano-a-lecce',
        linkGpx: '/gpx/ladriatica/tappe/A-04_LADRIATICA-DA_GIURDIGNANO_A_LECCE.gpx',
    },
]

// Destinazione letta/scritta nell'URL (?destination=...), vedi composables/useDestinazioneAttiva.js
const { destinazioneAttiva: selectedDestinazione, setDestinazione } = useDestinazioneAttiva()

// Tipo di percorso letto/scritto nell'URL (?tipo=anello|tappa), stesso schema della destinazione.
// Se il parametro manca o non è valido si usa 'anello'. Cambiando destinazione il tipo resta.
const route = useRoute()
const router = useRouter()
const TIPI_VALIDI = tipi.map((t) => t.tipo)
const TIPO_DEFAULT = 'anello'

const selectedTipo = computed(() =>
    TIPI_VALIDI.includes(route.query.tipo) ? route.query.tipo : TIPO_DEFAULT
)

const setTipo = (tipo) => {
    router.replace({ query: { ...route.query, tipo } })
}

const percorsiFiltrati = computed(() =>
    percorsi.filter((percorso) =>
        percorso.destinazione === selectedDestinazione.value && percorso.tipo === selectedTipo.value
    )
)

const destinazioneAttiva = computed(() =>
    destinations.find((destination) => destination.destinazione === selectedDestinazione.value)
)

const titoloSezione = computed(() => destinazioneAttiva.value?.titoli[selectedTipo.value])

watch(percorsiFiltrati, async () => {
    await nextTick()
    AOS.refreshHard()
})
</script>

<template>
    <section class="py-5">
        <div class="container">

            <div class="d-flex flex-nowrap gap-1 gap-md-3 mb-3 mb-lg-5 pb-lg-5 filtri-scroll filtri-centrati" style="position: relative; z-index: 999;">
                <button v-for="(destination, index) in destinations" :key="index" type="button"
                    class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                    :class="{ 'is-active': selectedDestinazione === destination.destinazione }"
                    :style="{ '--btn-accent': destination.colore }"
                    @click="setDestinazione(destination.destinazione)">
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
                <h1 text-1 class="text-celeste fw-bold mb-3">{{ titoloSezione }}</h1>
                <p class="lead col-12 col-lg-8 mx-auto">
                    Escursioni da fare in giornata o da collegare per vacanze di 2 o più giorni
                </p>

                <!-- filtro per tipo di percorso: stesso stile dei bottoni destinazione, entrambi arancioni -->
                <div class="d-flex flex-nowrap gap-1 gap-md-3 mt-4 filtri-scroll filtri-centrati">
                    <button v-for="tipo in tipi" :key="tipo.tipo" type="button"
                        class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                        :class="{ 'is-active': selectedTipo === tipo.tipo }"
                        :style="{ '--btn-accent': 'var(--color-accent-orange)' }"
                        @click="setTipo(tipo.tipo)">
                        <Icon name="lucide:bike" />
                        {{ tipo.testo }}
                    </button>
                </div>
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
/* centratura con margini auto invece di justify-content: center, così se la riga sfora il primo bottone resta raggiungibile con lo scroll */
.filtri-centrati > :first-child {
    margin-left: auto;
}
.filtri-centrati > :last-child {
    margin-right: auto;
}

.percorsi-swiper swiper-slide {
    padding-bottom: 2.5rem;
    box-sizing: border-box;
}
</style>
