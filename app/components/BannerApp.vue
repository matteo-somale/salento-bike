<template>
    <section class="background-giallo py-5">
        <div class="container py-5">
            <div class="banner-app-grid">

                <!-- Sopratitolo e titolo -->
                <div class="banner-app-top">
                    <p class="eyebrow mb-2">
                        APP e WEBAPP
                    </p>

                    <h1 class="mb-4 fw-bold">
                        Salento.Bike, l'App per avere il Salento a pedali in&nbsp;tasca
                    </h1>
                </div>

                <!-- Immagine -->
                <div class="banner-app-image">
                    <div class="ratio ratio-1x1">
                        <div
                            class=" d-flex align-items-center justify-content-center overflow-hidden">
                            <img src="/img/app/iphone-15-mockup-bikesquare.png" alt="">
                        </div>
                    </div>
                </div>

                <!-- Testo, CTA e store -->
                <div class="banner-app-bottom">
                    <p class="body-large mb-4">
                        Con Salento.Bike potrete seguire le tracce, trovare facilmente i punti di interesse, le
                        strutture bikefriendly, i punti noleggio e tutto quello che serve per organizzare le vostre
                        escursioni e i vostri viaggi.
                    </p>

                    <NuxtLink to="/" class="btn btn-primary btn-lg mb-4">
                        Scopri di più
                    </NuxtLink>

                    <!-- Store -->
                    <div class="d-flex flex-wrap gap-3">

                        <a href="#" aria-label="Scarica su Google Play">
                            <img src="/img/app/get-on-google-play.svg" alt="Scarica su Google Play"
                                style="height: 60px;">
                        </a>

                        <a href="#" aria-label="Scarica su App Store">
                            <img src="/img/app/get-on-apple.svg" alt="Scarica su App Store" style="height: 60px;">
                        </a>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.banner-app-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        "top"
        "image"
        "bottom";
    gap: 3rem;
}

@media (min-width: 992px) {
    .banner-app-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "top image"
            "bottom image";
        column-gap: 3rem;
        row-gap: 0;
        align-items: center;
    }
}

.banner-app-top {
    grid-area: top;
}

.banner-app-image {
    grid-area: image;
}

.banner-app-bottom {
    grid-area: bottom;
}
</style>