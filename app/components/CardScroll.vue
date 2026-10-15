<script setup>
const cards = {
    subtitle: 'Sopratitolo',
    title: 'Titolo sezione',
    backgroundColor: 'var(--color-accent-giallo)',
    card: [
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card uno',
            titoloH5: 'Sottotitolo card uno',
            testo: 'Testo segnaposto descrittivo per la prima card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card uno',
            titoloH5: 'Sottotitolo card uno',
            testo: 'Testo segnaposto descrittivo per la prima card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card uno',
            titoloH5: 'Sottotitolo card uno',
            testo: 'Testo segnaposto descrittivo per la prima card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card uno',
            titoloH5: 'Sottotitolo card uno',
            testo: 'Testo segnaposto descrittivo per la prima card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card uno',
            titoloH5: 'Sottotitolo card uno',
            testo: 'Testo segnaposto descrittivo per la prima card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card due',
            titoloH5: 'Sottotitolo card due',
            testo: 'Testo segnaposto descrittivo per la seconda card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card tre',
            titoloH5: 'Sottotitolo card tre',
            testo: 'Testo segnaposto descrittivo per la terza card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
        {
            immagine: '/img/destinazioni/hero-salento-segnaposto.jpg',
            titoloH3: 'Titolo card quattro',
            titoloH5: 'Sottotitolo card quattro',
            testo: 'Testo segnaposto descrittivo per la quarta card, da sostituire con contenuti reali.',
            bottoneTesto: 'Scopri di più',
            bottoneLink: '/',
        },
    ],
}
</script>

<template>
    <section class="py-5" data-aos="fade-up">
        <div class="container">
            <div class="text-center mb-4">
                <h4 class="text-orange eyebrow mb-2">{{ cards.subtitle }}</h4>
                <h2 class="fw-bold">{{ cards.title }}</h2>
            </div>
            <ClientOnly>
                <swiper-container
                    class="cardscroll-swiper"
                    slides-per-view="auto"
                    space-between="24"
                >
                    <swiper-slide v-for="(card, index) in cards.card" :key="index" class="card-slide">
                        <div class="card-item rounded-md overflow-hidden text-white p-4 text-center"
                            :style="{ backgroundColor: cards.backgroundColor }">
                            <img :src="card.immagine" alt="" class="card-image w-100 rounded-md mb-3">
                            <h3 class="fw-bold mt-4">{{ card.titoloH3 }}</h3>
                            <h5>{{ card.titoloH5 }}</h5>
                            <p class="body-large">{{ card.testo }}</p>
                            <NuxtLink :to="card.bottoneLink" class="btn btn-primary w-100">{{ card.bottoneTesto }}</NuxtLink>
                        </div>
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </section>
</template>

<style scoped>
.card-slide {
    width: 400px;
}

.card-item {
    width: 100%;
}

.card-image {
    display: block;
    width: 100%;
    height: 350px;
    object-fit: cover;
}
</style>
