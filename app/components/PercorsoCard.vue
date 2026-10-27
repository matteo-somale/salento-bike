<script setup>
defineProps({
    immagine: { type: String, required: true },
    tag: { type: String, default: '' },
    titolo: { type: String, required: true },
    testo: { type: String, required: true },
    linkPercorso: { type: String, required: true },
    linkGpx: { type: String, required: true },
    colore: { type: String, required: true },
})
</script>

<template>
    <article
        class="rounded overflow-hidden percorso-card mx-auto"
        :style="{ backgroundColor: colore + '40' }"
    >
        <div class="row p-4">
            <div class="col-12 col-md-6 position-relative ">
                <img :src="immagine" class="w-100 rounded percorso-card-image" alt="">
                <span class="position-absolute top-0 start-1 m-3 badge rounded-pill"
                    :style="{ backgroundColor: colore, color: 'var(--color-text-white)' }">
                    {{ tag }}
                </span>
            </div>
            <div class="col-12 col-md-6 pt-sm-3 mt-2 mt-md-0 d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-1 mb-md-3 text-primary">{{ titolo }}</h3>
                <p class="body-large mb-4 text-primary">{{ testo }}</p>
                <div class="d-flex flex-column flex-md-row flex-wrap gap-2 percorso-card-actions">
                    <NuxtLink :to="linkPercorso" class="btn btn-lg btn-primary d-inline-flex align-items-center justify-content-center gap-2">
                        <Icon name="lucide:bike" />
                        Vai al percorso
                    </NuxtLink>
                    <NuxtLink :to="linkGpx" class="btn btn-lg btn-orange d-inline-flex align-items-center justify-content-center gap-2">
                        <Icon name="lucide:download" />
                        Scarica GPX
                    </NuxtLink>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.percorso-card {
    max-width: 1000px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.percorso-card-image {
    object-fit: cover;
    height: 250px;
}

@media (min-width: 768px) {
    .percorso-card-image {
        height: 300px;
    }
}

@media (min-width: 992px) {
    .percorso-card-image {
        height: 350px;
    }
}

@media (max-width: 767.98px) {
    .percorso-card,
    .percorso-card .row {
        height: 100%;
    }

    .percorso-card-actions > * {
        width: 100%;
    }
}
</style>
