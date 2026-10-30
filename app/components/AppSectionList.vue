<script setup>
const section = {
    colore: 'var(--color-accent-celeste)',
    immagine: '/img/app/mappa-salento-segnaposto.png',
    sopratitolo: 'le tappe',
    titolo: 'Tante funzionalità in un’unica APP',
    lista: [
        { testo: 'Scopri i tracciati' },
        { testo: 'Consulta le mappe' },
        { testo: 'Scopri le curiosità lungo il tracciato' },
        { testo: 'scarica le tracce GPX da utilizzare in APP' }
    ],
    bottoneTesto: 'Scopri di più',
    bottoneLink: 'https://ciclovia-salento.web.app/mappa/around-me/0',
}
</script>

<template>
    <section class="py-3">
        <div class="container">
            <div class="row g-4 g-lg-5 align-items-center">

                <div class="col-12 col-md-5" data-aos="fade-left">
                    <div class="rounded-4 position-relative app-visual" :style="{ backgroundColor: section.colore }">
                        <NuxtImg :src="section.immagine" class="rounded-4 app-visual-image" alt=""
                            format="webp" sizes="xs:100vw sm:540px md:550px" loading="lazy" />
                    </div>
                </div>

                <div class="col-12 col-md-7" data-aos="fade-right" data-aos-delay="150">
                    <h4 class="text-celeste eyebrow mb-2">{{ section.sopratitolo }}</h4>
                    <h2 class="text-primary mb-4">{{ section.titolo }}</h2>

                    <div class="d-flex flex-column gap-3">
                        <div v-for="(voce, index) in section.lista" :key="index"
                            class="d-flex align-items-center flex-nowrap gap-3">
                            <span class="app-list-icon rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                :style="{ backgroundColor: section.colore }">
                                <svg width="22" height="22" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 3L11 8L6 13" stroke="white" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </span>
                            <p class="mb-0 body-large">{{ voce.testo }}</p>
                        </div>
                    </div>

                    <NuxtLink :to="section.bottoneLink" target="blank" class="btn btn-primary btn-lg mt-4">
                        <Icon name="lucide:bike" class="me-2" />{{ section.bottoneTesto }}
                    </NuxtLink>
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

.app-list-icon {
    width: 40px;
    height: 40px;
}
</style>
