<script setup>
const mainVideo = {
    subtitle: 'VIDEO DAL SALENTO IN BICI',
    title: 'Una giornata con Ciclonica',
    text: 'Un assaggio di quella che potrebbe essere la tua giornata pedalando sulla Ciclonica, scoprendo con BringYourBike il Salento ionico sul mezzo migliore per farlo! Vuoi farti un\'idea migliore? ',
    youtubeLink: 'https://www.youtube.com/embed/yRV_RfbSl8k',
    buttonLink: '/percorso'
}
</script>

<template>
    <section class="py-5" data-aos="fade-up">
        <div class="container d-flex flex-column align-items-center text-center">

            <h4 class="text-orange eyebrow mb-2">
                {{ mainVideo.subtitle }}
            </h4>

            <h1 class="fw-bold mb-3 text-primary">
                {{ mainVideo.title }}
            </h1>

            <p class="lead mb-4 col-12 col-lg-8 py-3">
                {{ mainVideo.text }}
            </p>

            <div class="ratio ratio-16x9 w-100 mx-auto rounded-4 overflow-hidden mb-4" style="max-width: 800px;"
                data-aos="fade-up" data-aos-delay="150">
                <iframe :src="mainVideo.youtubeLink" title="Video Salento Bike" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
            </div>

            <NuxtLink :to="mainVideo.buttonLink" class="btn btn-orange btn-lg d-inline-flex align-items-center gap-2">
                <Icon name="bi:camera-video-fill" />
                Guarda il video completo su Youtube
            </NuxtLink>

        </div>
    </section>
</template>
