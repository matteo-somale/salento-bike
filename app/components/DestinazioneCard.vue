<script setup>
defineProps({
    logo: { type: String, required: true },
    copertina: { type: String, required: true },
    titolo: { type: String, required: true },
    testo: { type: String, required: true },
    link: { type: String, required: true },
    colore: { type: String, required: true },
})
</script>

<template>
    <article class="p-md-5 p-3 rounded h-100 d-flex flex-column align-items-center text-center"
        :style="{ backgroundColor: colore + '55' }">
        <div class="rounded d-flex align-items-center justify-content-center mb-3">
            <img :src="logo" :alt="`Logo ${titolo}`" class="my-1" style="height: 140px;">
        </div>
        <img :src="copertina" class="rounded-md w-100 mb-4 destination-cover" alt="">
        <h3 class="text-primary"> {{ titolo }} </h3>
        <p class="body-large text-primary"> {{ testo }} </p>
        <NuxtLink :to="link" class="btn btn-primary btn-lg mt-auto d-inline-flex align-items-center gap-2">
            <Icon name="lucide:bike" />
            Scopri i percorsi
        </NuxtLink>
    </article>
</template>

<style scoped>
.destination-cover {
    height: 35vh;
    object-fit: cover;
}
</style>
