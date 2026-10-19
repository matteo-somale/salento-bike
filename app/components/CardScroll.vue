<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'

const cards = {
    subtitle: 'Cho siamo',
    title: 'Il nostro team',
    backgroundColor: 'var(--color-accent-giallo)',
    card: [
        {
            immagine: '/img/team/roberto-guido.jpg',
            titoloH3: 'Roberto Guido',
            titoloH5: 'ideatore di ciclonica',
            testo: 'Ho disegnato i percorsi della Ciclonica. Ho cercato di far passare l’itinerario nei luoghi più segreti e preziosi, sfruttando le stradine meno trafficate e incrociando le aree protette della costa ionica. Ho scritto anche la guida alla Ciclonica e altre alla Puglia in bici.',
        },
        {
            immagine: '/img/team/sebastiano-venneri.jpg',
            titoloH3: 'Sebastiano Venneri',
            titoloH5: 'Presidente vivilitalia',
            testo: 'Sono Sebastiano, salentino di nascita e ambientalista per passione e professione. Con Vivilitalia, la società di Legambiente che si occupa di turismo ambientale, abbiamo proposto l’idea della Ciclonica alla Green Community. Bello vedere che un’idea si fa realtà.',
        },
        {
            immagine: '/img/team/carlo-e-giulia.jpg',
            titoloH3: 'Carlo Cascione e Giulia Trenuzzo',
            titoloH5: 'salento bici tour',
            testo: 'Ci piace andare in bici e abbiamo fatto di questa passione la nostra principale attività. Ora accompagniamo tanti turisti a pedalare sulle strade del Salento e abbiamo sempre gli occhi bene aperti per contrastare abusi edilizi e scempi ambientali.',
        },
        {
            immagine: '/img/team/giulia-puglia.jpeg',
            titoloH3: 'Giulia Puglia',
            titoloH5: 'Assessora Ambiente e Cultura Comune di Nardò',
            testo: 'Amo la mia città e la mia terra e provo da anni a dare un contributo per migliorarle, per renderle più accoglienti e per tutelare e far conoscere le meravigliose aree protette che abbiamo.',
        },
        {
            immagine: '/img/team/sergio-fai.jpg',
            titoloH3: 'Sergio Fai',
            titoloH5: 'Dirigente del Comune di Nardò',
            testo: 'Sono Sergio e ho seguito i progetti della Green Community Ionico-Adriatica, la prima comunità in Puglia destinataria delle risorse del PNNR. Insieme abbiamo realizzato progetti che renderanno più sostenibili i nostri paesi e dato vita alla Ciclonica.',
        },
        {
            immagine: '/img/team/francesca-biffi.jpg',
            titoloH3: 'Francesca Biffi',
            titoloH5: 'ufficio stampa e comunicazione',
            testo: 'Mi occupo di comunicazione su temi ambientali e di turismo sostenibile da molti anni. Amo profondamente il Salento che è diventato un po’ una seconda casa. Dare l’opportunità di scoprire questa terra dalla bicicletta è la missione più bella di Ciclonica.',
        },
        {
            immagine: '/img/team/team-bikesquare.jpg',
            titoloH3: 'Massimo Lucia e Alberto',
            titoloH5: 'Partner tecnici BikeSquare',
            testo: 'Forniamo consulenza alle aziende e ai territori su mobilità sostenibile e turismo. La nostra piattaforma serve a facilitare la collaborazione delle realtà presenti lungo il percorso. Viviamo nelle Langhe, ma quando abbiamo scoperto il Salento ce ne siamo innamorati!',
        },
        {
            immagine: '/img/team/agostino-indennitate.jpg',
            titoloH3: 'Agostino Indennitate',
            titoloH5: 'ideatore del logo ciclonica',
            testo: 'Sono Agostino e ho immaginato Ciclonica come un asse di collegamento tra i comuni dell\'area ionico salentina, per unire territori, persone e futuro. Ho ideato il nome e il concept del logo, facendo incontrare la bicicletta al tamburello della pizzica salentina.',
        },
        {
            immagine: '/img/team/bartolo-conte.jpg',
            titoloH3: 'Bartolo Conte',
            titoloH5: 'Coordinatore progetto Ciclonica Vivilitalia',
            testo: 'Per Vivilitalia ho coordinato i corsi ASTA – Alta Scuola di Turismo Ambientale dedicata ai piccoli imprenditori turistici della Comunità della Ciclonica. Mi piace quando tutto gira alla perfezione, come la ruota di una bicicletta.',
        },
        {
            immagine: '/img/team/aurora-mastore.jpg',
            titoloH3: 'Guida turistica abilitata',
            titoloH5: 'Sottotitolo card quattro',
            testo: 'Ho sempre amato scrivere, leggere, viaggiare e occuparmi di cultura: per questo mi sono specializzata in storia, poi in turismo e ora accompagno i viaggiatori che scelgono di visitare la Puglia. Sono una convinta sostenitrice del potere trasformativo dell’arte!',
        },
    ],
}

const cardItemRefs = ref([])

function setCardItemRef(el, index) {
    if (el) cardItemRefs.value[index] = el
}

function equalizeCardHeights() {
    const items = cardItemRefs.value.filter(Boolean)
    if (!items.length) return
    items.forEach((item) => { item.style.height = '' })
    const maxHeight = Math.max(...items.map((item) => item.offsetHeight))
    items.forEach((item) => { item.style.height = `${maxHeight}px` })
}

function waitForImages(items) {
    const images = items.flatMap((item) => [...item.querySelectorAll('img')])
    return Promise.all(images.map((img) => {
        if (img.complete) return Promise.resolve()
        return new Promise((resolve) => {
            img.addEventListener('load', resolve, { once: true })
            img.addEventListener('error', resolve, { once: true })
        })
    }))
}

let resizeHandler

onMounted(async () => {
    await nextTick()
    const items = cardItemRefs.value.filter(Boolean)
    await waitForImages(items)
    equalizeCardHeights()
    resizeHandler = () => equalizeCardHeights()
    window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
    if (resizeHandler) window.removeEventListener('resize', resizeHandler)
})
</script>

<template>
    <section class="py-5" data-aos="fade-up">
        <div class="container">
            <div class="text-center mb-4">
                <h4 class="text-secondary eyebrow mb-2">{{ cards.subtitle }}</h4>
                <h1 class="text-primary">{{ cards.title }}</h1>
            </div>
            <ClientOnly>
                <swiper-container
                    class="cardscroll-swiper"
                    slides-per-view="auto"
                    space-between="24"
                    pagination="true"
                >
                    <swiper-slide v-for="(card, index) in cards.card" :key="index" class="card-slide">
                        <div class="card-item rounded-md overflow-hidden p-4 "
                            :ref="(el) => setCardItemRef(el, index)"
                            :style="{ backgroundColor: cards.backgroundColor }">
                            <img :src="card.immagine" alt="" class="card-image w-100 rounded-md mb-3">
                            <h3 class="text-center text-primary mt-4">{{ card.titoloH3 }}</h3>
                            <p class="text-center eyebrow text-orange">{{ card.titoloH5 }}</p>
                            <p class="text-primary d-none d-md-block body-regular">{{ card.testo }}</p>
                            <p class="text-primary d-md-none body-small">{{ card.testo }}</p>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>
</template>

<style scoped>
.cardscroll-swiper swiper-slide {
    padding-bottom: 2.5rem;
    box-sizing: border-box;
    overflow: visible;
}

.card-slide {
    width: 400px;
}

@media (max-width: 767.98px) {
    .card-slide {
        width: min(calc(100vw - 40px), 400px);
    }
}

.card-item {
    width: 100%;
}

.card-image {
    display: block;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    object-position: center;
}
</style>
