<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const destinations = [
    {
        logo: '/logo/logo-ciclonica-vert.svg',
        copertina: '/img/destinazioni/ciclovia-salento-hero.jpg',
        titolo: 'La ciclovia del salento ionico',
        testo: 'Dalle spiagge dorate ai borghi del Barocco, dalle antiche masserie alla natura selvaggia dei parchi naturali: 305 km di pura bellezza tra i profumi della macchia mediterranea.',
        link: '/ciclonica',
        colore: '#119660',
    },
    {
        logo: '/logo/logo-ladriatica-vert-color.svg',
        copertina: '/img/destinazioni/foto-dest-salento.png',
        titolo: 'La ciclovia del salento orientale',
        testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a Finibus Terrae.',
        link: '/ladriatica',
        colore: '#007FC3',
    },
    {
        logo: '/logo/logo-ciclonica-vert.svg',
        copertina: '/img/destinazioni/foto-dest-lecce.jpg',
        titolo: 'La ciclovia del salento ionico',
        testo: "Un'ultima descrizione per completare il contenuto della terza card.",
        link: '/',
        colore: '#F5BA29',
    },
]

const carousel = ref(null)
const activeIndex = ref(0)

const updateActiveDot = () => {
    if (!carousel.value) return
    const items = carousel.value.querySelectorAll('.destination-item')
    let closestIndex = 0
    let closestDistance = Infinity
    const containerCenter = carousel.value.scrollLeft + carousel.value.clientWidth / 2
    items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(containerCenter - itemCenter)
        if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
        }
    })
    activeIndex.value = closestIndex
}

const scrollToCard = (index) => {
    if (!carousel.value) return
    const items = carousel.value.querySelectorAll('.destination-item')
    items[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
}

onMounted(() => {
    carousel.value?.addEventListener('scroll', updateActiveDot)
})
onBeforeUnmount(() => {
    carousel.value?.removeEventListener('scroll', updateActiveDot)
})
</script>
<template>
    <section class="py-5">
        <div class="container"> <!-- Carousel -->
            <div class="text-center py-3">
                <p class="eyebrow">DESTINAZIONI</p>
                <h1 class="">I percorsi principali</h1>
            </div>
            <div ref="carousel" class="overflow-auto carousel-track">
                <div class="row flex-nowrap g-4 px-4">
                    <div v-for="(destination, index) in destinations" :key="index"
                        class="col-12 col-lg-6 destination-item">
                        <article class="p-md-5 p-3 rounded h-100 d-flex flex-column align-items-center text-center"
                            :style="{ backgroundColor: destination.colore + '55' }">
                            <div class="rounded d-flex align-items-center justify-content-center mb-3">
                                <img :src="destination.logo" :alt="`Logo ${destination.titolo}`" class="my-1"
                                    style="height: 140px;">
                            </div>
                            <img :src="destination.copertina" class="rounded-md w-100 mb-4 destination-cover" alt="">
                            <h3 class="fw-bold"> {{ destination.titolo }} </h3>
                            <p class="body-large"> {{ destination.testo }} </p>
                            <NuxtLink :to="destination.link" class="btn btn-primary btn-lg mt-auto"> Scopri i percorsi
                            </NuxtLink>
                        </article>
                    </div>
                </div>
            </div> <!-- Indicators -->
            <div class="d-flex justify-content-center gap-2 mt-4" aria-label="Navigazione carousel">
                <button v-for="(_, index) in destinations" :key="index" type="button"
                    class="rounded-circle border-0 p-0" :class="activeIndex === index ? 'bg-dark' : 'bg-secondary'"
                    style="width: 10px; height: 10px;" :aria-label="`Vai alla card ${index + 1}`"
                    :aria-current="activeIndex === index ? 'true' : undefined" @click="scrollToCard(index)" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.carousel-track {
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-snap-type: x mandatory;
}

.carousel-track::-webkit-scrollbar {
    display: none;
}

.destination-item {
    scroll-snap-align: start;
}

.destination-cover {
    height: 35vh;
    object-fit: cover;
}

</style>
