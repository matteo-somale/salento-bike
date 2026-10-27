<script setup>
import { ref } from 'vue'

const mainVideo = {
    subtitle: 'da chi ci è stato',
    title: 'I video dal Salento in bici',
    text: 'Su due ruote tra paesaggi mozzafiato, antiche masserie e borghi del Barocco. Guarda i video di chi già ha fatto questa esperienza!',
    youtubeLinks: [
        'https://www.youtube.com/embed/yRV_RfbSl8k',
        'https://www.youtube.com/embed/yRV_RfbSl8k'
    ],
    buttonLink: '/percorso'
}

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
    loop: true,
})
</script>

<template>
    <section class="py-5 background-lighter-gray" data-aos="fade-up">
        <div class="container d-flex flex-column align-items-center text-center">

            <h4 class="text-orange eyebrow mb-2">
                {{ mainVideo.subtitle }}
            </h4>

            <h1 class="mb-3 text-primary">
                {{ mainVideo.title }}
            </h1>

            <p class="text-large mb-4 col-12 col-lg-8 py-3">
                {{ mainVideo.text }}
            </p>

            <div class="main-video-stage position-relative w-100 mx-auto mb-4" data-aos="fade-up" data-aos-delay="150">
                <ClientOnly>
                    <swiper-container ref="containerRef" :init="false" class="main-video-swiper">
                        <swiper-slide v-for="(link, index) in mainVideo.youtubeLinks" :key="index">
                            <div class="ratio ratio-16x9 rounded-4 overflow-hidden">
                                <iframe :src="link" title="Video Salento Bike" allow="autoplay; encrypted-media"
                                    allowfullscreen></iframe>
                            </div>
                        </swiper-slide>
                    </swiper-container>

                    <button type="button" class="main-video-arrow main-video-arrow-prev" aria-label="Video precedente"
                        @click="swiper.prev()">
                        <Icon name="lucide:chevron-left" />
                    </button>
                    <button type="button" class="main-video-arrow main-video-arrow-next" aria-label="Video successivo"
                        @click="swiper.next()">
                        <Icon name="lucide:chevron-right" />
                    </button>
                </ClientOnly>
            </div>

            <!-- bottone per i video
            <NuxtLink :to="mainVideo.buttonLink" class="btn btn-orange btn-lg d-inline-flex align-items-center gap-2">
                <Icon name="fluent:filmstrip-play-24-filled" />
                Guarda il video completo su Youtube
            </NuxtLink>-->

        </div>
    </section>
</template>

<style scoped>
.main-video-stage {
    max-width: 800px;
}

.main-video-swiper {
    width: 100%;
}

.main-video-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.35);
    color: var(--color-neutral-white);
    font-size: 1.25rem;
    line-height: 1;
    cursor: pointer;
    z-index: 2;
}

.main-video-arrow-prev {
    left: 8px;
}

.main-video-arrow-next {
    right: 8px;
}

@media (min-width: 768px) {
    .main-video-stage {
        max-width: 944px;
    }

    .main-video-swiper {
        width: calc(100% - 144px);
        margin-left: auto;
        margin-right: auto;
    }

    .main-video-arrow {
        width: 56px;
        height: 56px;
        background: transparent;
        color: var(--color-primary);
        font-size: 2.5rem;
    }

    .main-video-arrow-prev {
        left: 0;
    }

    .main-video-arrow-next {
        right: 0;
    }
}
</style>
