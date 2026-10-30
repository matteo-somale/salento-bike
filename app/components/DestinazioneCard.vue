<script setup>
defineProps({
    logo: { type: String, required: true },
    copertina: { type: String, required: true },
    titolo: { type: String, required: true },
    testo: { type: String, required: true },
    link: { type: String, required: true },
    colore: { type: String, required: true },
    coloreSfondo: { type: String, required: true },
})
</script>

<template>
    <article class="p-md-5 pb-4 p-3 rounded h-100 d-flex flex-column align-items-center text-center"
        :style="{ backgroundColor: coloreSfondo }">
        <div class="rounded d-flex align-items-center justify-content-center mb-3 destination-logo-wrap">
            <img :src="logo" :alt="`Logo ${titolo}`" class="my-1 destination-logo">
        </div>
        <NuxtImg :src="copertina" class="rounded-md w-100 mb-4 destination-cover" alt=""
            format="webp" sizes="xs:100vw sm:540px md:600px" loading="lazy" />
        <h3 class="text-primary destination-text" v-html="titolo" />
        <p class="body-large text-primary destination-text d-none d-md-block" v-html="testo" />
        <p class="body-small text-primary destination-text d-md-none" v-html="testo" />
        <NuxtLink :to="link" class="btn btn-primary btn-lg mt-auto d-inline-flex align-items-center justify-content-center gap-2 destination-btn">
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

.destination-logo {
    height: 140px;
}

@media (max-width: 767.98px) {
    .destination-btn {
        width: 100%;
    }

    .destination-text {
        width: 100%;
        text-align: left;
    }

    .destination-logo {
        max-width: 150px;
        height: auto;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
}
</style>
