<script setup>
const destinations = [
    {
        logo: '/logo/logo-ciclonica-vert.svg',
        copertina: '/img/galleria/ciclonica/11_TORRE_SABEA_phROBERTOGUIDO.jpg',
        titolo: 'La ciclovia del Salento ionico',
        testo: 'Dalle spiagge dorate ai borghi del Barocco, dalle antiche masserie alla natura selvaggia dei parchi naturali: 305 km di pura bellezza tra i profumi della macchia mediterranea.',
        link: '/ciclonica',
        colore: '#119660',
        coloreSfondo: '#94EADD',
    },
    {
        logo: '/logo/logo-ladriatica-vert-color.svg',
        copertina: '/img/galleria/ladriatica/05_TORREMINERVINO_phRobertoGuido.jpg',
        titolo: 'La ciclovia del Salento orientale',
        testo: 'Pedalare sul balcone del Mediterraneo, tra scogliere maestose e calette dalle acque cristalline, all\'ombra del faro più a est d\'Italia e l\'emozione di arrivare a <i>Finibus Terrae</i>.',
        link: '/ladriatica',
        colore: '#007FC3',
        coloreSfondo: '#80C4F4',
    },
]

</script>
<template>
    <section class="py-0 mt-2 pb-4 py-md-4 pt-lg-0" data-aos="fade-up">
        <div class="container"> <!-- Carousel -->
            <div class="text-center py-3">
                <p class="eyebrow text-secondary">DESTINAZIONI</p>
                <h1 class="text-primary">I percorsi principali</h1>
            </div>
            <!-- md e superiori: impilati/griglia come oggi -->
            <div class="d-none d-md-block">
                <div class="row g-4 px-4">
                    <div v-for="(destination, index) in destinations" :key="index"
                        class="col-12 col-lg-6">
                        <DestinazioneCard
                            :logo="destination.logo"
                            :copertina="destination.copertina"
                            :titolo="destination.titolo"
                            :testo="destination.testo"
                            :link="destination.link"
                            :colore="destination.colore"
                            :colore-sfondo="destination.coloreSfondo"
                        ></DestinazioneCard>
                    </div>
                </div>
            </div>

            <!-- sotto md: swiper classico -->
            <div class="d-md-none">
                <ClientOnly>
                    <swiper-container
                        class="destinazioni-swiper"
                        pagination="true"
                        slides-per-view="1"
                        space-between="16"
                    >
                        <swiper-slide v-for="(destination, index) in destinations" :key="index">
                            <DestinazioneCard
                                :logo="destination.logo"
                                :copertina="destination.copertina"
                                :titolo="destination.titolo"
                                :testo="destination.testo"
                                :link="destination.link"
                                :colore="destination.colore"
                                :colore-sfondo="destination.coloreSfondo"
                            ></DestinazioneCard>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
        </div>
    </section>
</template>

<style scoped>
.destinazioni-swiper swiper-slide {
    padding-bottom: 2.5rem;
    box-sizing: border-box;
}
</style>
