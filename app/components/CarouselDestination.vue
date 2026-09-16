<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const carousel = ref(null)
const activeIndex = ref(0)
const cards = 3

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
                <div class="row flex-nowrap g-4"> <!-- Card 1 -->
                    <div class="col-12 col-lg-6 destination-item">
                        <article class="h-100 d-flex flex-column align-items-center text-center">
                            <div class="bg-light d-flex align-items-center justify-content-center mb-4"
                                style="width: 120px; height: 60px;"> <span class="text-secondary fw-bold"> LOGO </span>
                            </div> <img src="https://picsum.photos/800/450?random=1" class="img-fluid w-100 mb-4"
                                alt="">
                            <h3 class="h4 fw-bold"> Titolo della card </h3>
                            <p> Un testo descrittivo della card con alcune informazioni relative al contenuto. </p>
                            <NuxtLink to="/" class="btn btn-primary mt-auto"> Scopri di più </NuxtLink>
                        </article>
                    </div> <!-- Card 2 -->
                    <div class="col-12 col-lg-6 destination-item">
                        <article class="h-100 d-flex flex-column align-items-center text-center">
                            <div class="bg-light d-flex align-items-center justify-content-center mb-4"
                                style="width: 120px; height: 60px;"> <span class="text-secondary fw-bold"> LOGO </span>
                            </div> <img src="https://picsum.photos/800/450?random=2" class="img-fluid w-100 mb-4"
                                alt="">
                            <h3 class="h4 fw-bold"> Un altro titolo </h3>
                            <p> Una seconda descrizione della card con del testo dimostrativo. </p>
                            <NuxtLink to="/" class="btn btn-primary mt-auto"> Scopri di più </NuxtLink>
                        </article>
                    </div> <!-- Card 3 -->
                    <div class="col-12 col-lg-6 destination-item">
                        <article class="h-100 d-flex flex-column align-items-center text-center">
                            <div class="bg-light d-flex align-items-center justify-content-center mb-4"
                                style="width: 120px; height: 60px;"> <span class="text-secondary fw-bold"> LOGO </span>
                            </div> <img src="https://picsum.photos/800/450?random=3" class="img-fluid w-100 mb-4"
                                alt="">
                            <h3 class="h4 fw-bold"> Terzo titolo </h3>
                            <p> Un'ultima descrizione per completare il contenuto della terza card. </p>
                            <NuxtLink to="/" class="btn btn-primary mt-auto"> Scopri di più </NuxtLink>
                        </article>
                    </div>
                </div>
            </div> <!-- Indicators -->
            <div class="d-flex justify-content-center gap-2 mt-4" aria-label="Navigazione carousel"> <button
                    v-for="index in cards" :key="index" type="button" class="rounded-circle border-0 p-0"
                    :class="activeIndex === index - 1 ? 'bg-dark' : 'bg-secondary'" style="width: 10px; height: 10px;"
                    :aria-label="`Vai alla card ${index}`"
                    :aria-current="activeIndex === index - 1 ? 'true' : undefined" @click="scrollToCard(index - 1)" />
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