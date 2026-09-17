<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const destinations = [
    {
        logo: '/logo/logo-ciclonica-vert.svg',
        copertina: 'https://picsum.photos/800/450?random=1',
        titolo: 'La ciclovia del salento ionico',
        testo: 'Dalle spiagge dorate ai borghi del Barocco, dalle antiche masserie alla natura selvaggia dei parchi naturali: 305 km di pura bellezza tra i profumi della macchia mediterranea.',
        link: '/',
        colore: '#119660',
    },
    {
        logo: '/logo/logo-ladriatica-vert-color.svg',
        copertina: 'https://picsum.photos/800/450?random=2',
        titolo: 'La ciclovia del salento orientale',
        testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a Finibus Terrae.',
        link: '/',
        colore: '#007FC3',
    },
    {
        logo: '/logo/logo-ciclonica-vert.svg',
        copertina: 'https://picsum.photos/800/450?random=3',
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
    items[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
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
            <div ref="carousel" class="overflow-auto carousel-track">
                <div class="row flex-nowrap g-4 px-4">
                    <div v-for="(destination, index) in destinations" :key="index" class="col-12 col-lg-6 destination-item">
                        <article
                            class="p-5 rounded h-100 d-flex flex-column align-items-center text-center"
                            :style="{ backgroundColor: destination.colore + '55' }"
                        >
                            <div class="rounded d-flex align-items-center justify-content-center mb-3">
                                <img :src="destination.logo" :alt="`Logo ${destination.titolo}`" class="my-1" style="height: 140px;">
                            </div>
                            <img :src="destination.copertina" class="rounded-md img-fluid w-100 mb-4" alt="">
                            <h3 class="fw-bold"> {{ destination.titolo }} </h3>
                            <p class="body-large"> {{ destination.testo }} </p>
                            <NuxtLink :to="destination.link" class="btn btn-primary btn-lg mt-auto"> Scopri i percorsi </NuxtLink>
                        </article>
                    </div>
                </div>
            </div> <!-- Indicators -->
            <div class="d-flex justify-content-center gap-2 mt-4" aria-label="Navigazione carousel">
                <button
                    v-for="(_, index) in destinations" :key="index" type="button" class="rounded-circle border-0 p-0"
                    :class="activeIndex === index ? 'bg-dark' : 'bg-secondary'" style="width: 10px; height: 10px;"
                    :aria-label="`Vai alla card ${index + 1}`"
                    :aria-current="activeIndex === index ? 'true' : undefined" @click="scrollToCard(index)" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.carousel-track {
    scrollbar-width: none;
    -ms-overflow-style: none;
}
.carousel-track::-webkit-scrollbar {
    display: none;
}
</style>
