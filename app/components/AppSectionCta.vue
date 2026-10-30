<script setup>
const section = {
    colore: 'var(--color-accent-celeste)',
    immagine: '/img/app/albero-secolare-segnaposto.png',
    sopratitolo: 'i punti di interesse',
    titolo: 'Un percorso unico',
    testo: 'Ciclonica e Ladriatica uniscono le piccole e le grande meraviglie del Salento seguendo percorsi ciclabili a bassa intensità di traffico che attraversano i parchi naturali della provincia di Lecce. Tra spiagge selvagge e fitte pinete, centri storici, borghi e piccole frazioni sono davvero tanti i punti di interesse lungo gli itinerari',
    bottoneTesto: 'Scopri di più',
    bottoneLink: 'https://ciclovia-salento.web.app/categoria-poi/0',
}
</script>

<template>
    <section class="py-3">
        <div class="container">
            <div class="row g-4 g-lg-5 align-items-center">

                <div class="col-12 col-md-7" data-aos="fade-left">
                    <h4 class="text-celeste eyebrow mb-2">{{ section.sopratitolo }}</h4>
                    <h2 class="text-primary mb-3">{{ section.titolo }}</h2>
                    <p class="body-large mb-4">{{ section.testo }}</p>
                    <NuxtLink :to="section.bottoneLink" target="blank" class="btn btn-primary btn-lg">
                        <Icon name="lucide:bike" class="me-2" />{{ section.bottoneTesto }}
                    </NuxtLink>
                </div>

                <div class="col-12 col-md-5" data-aos="fade-right" data-aos-delay="150">
                    <div class="rounded-4 position-relative app-visual" :style="{ backgroundColor: section.colore }">
                        <NuxtImg :src="section.immagine" class="rounded-4 app-visual-image" alt=""
                            format="webp" sizes="xs:100vw sm:540px md:550px" loading="lazy" />
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
