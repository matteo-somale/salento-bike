<script setup>
const section = {
    colore: 'var(--color-accent-celeste)',
    immagine: '/img/app/albero-secolare-segnaposto.png',
    sopratitolo: 'i punti di interesse',
    titolo: 'Un percorso unico',
    testo: 'Si parte da Lecce e si arriva al mare seguendo un percorso ciclabile su strade a bassa intensità di traffico che attraversano il Salento ionico. Un viaggio in sei tappe tra spiagge selvagge e fitte pinete, centri storici, piccole frazioni e la rete dei parchi naturali che si affacciano sulla costa ionica.',
    bottoneTesto: 'Scopri di più',
    bottoneLink: '/',
}
</script>

<template>
    <section class="py-5">
        <div class="container">
            <div class="row g-4 g-lg-5 align-items-center">

                <div class="col-12 col-md-7">
                    <h4 class="text-orange eyebrow mb-2">{{ section.sopratitolo }}</h4>
                    <h2 class="fw-bold mb-3">{{ section.titolo }}</h2>
                    <p class="body-large mb-4">{{ section.testo }}</p>
                    <NuxtLink :to="section.bottoneLink" class="btn btn-primary btn-lg">
                        {{ section.bottoneTesto }}
                    </NuxtLink>
                </div>

                <div class="col-12 col-md-5">
                    <div class="rounded-4 position-relative app-visual" :style="{ backgroundColor: section.colore }">
                        <img :src="section.immagine" class="rounded-4 app-visual-image" alt="">
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.app-visual {
    aspect-ratio: 1 / 1;
}

.app-visual-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
