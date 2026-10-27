<template>
    <section class="py-4 bg-mobile-full banner-app-background" data-aos="fade-up">
        <div class="container">
            <div class="rounded p-4 p-lg-5 banner-app-grid bg-mobile-full-target">

                <!-- Sopratitolo e logo -->
                <div class="banner-app-top">
                    <p class="eyebrow text-orange mb-2">
                        APP e WEBAPP
                    </p>

                    <img src="/logo/logo-bikesquare-colori.svg" alt="Salento.Bike" class="mb-4 banner-app-logo">
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

                    <NuxtLink to="https://bikesquare.web.app/home" target="blank" class="btn btn-primary btn-lg mb-4">
                        <Icon name="lucide:globe" />
                        WebApp
                    </NuxtLink>

                    <!-- Store -->
                    <div class="d-flex flex-wrap gap-3">

                        <a href="https://play.google.com/store/apps/details?id=eu.bikesquare.ebike&hl=it&pli=1" target="blank" aria-label="Scarica su Google Play">
                            <img src="/img/app/get-on-google-play.svg"  alt="Scarica su Google Play"
                                style="height: 60px;">
                        </a>

                        <a href="https://apps.apple.com/it/app/bikesquare/id1346583687"  target="blank" aria-label="Scarica su App Store">
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

    /* il blocco sx resta unito e centrato verticalmente rispetto all'immagine */
    .banner-app-top {
        align-self: end;
    }

    .banner-app-bottom {
        align-self: start;
    }
}

@media (min-width: 1200px) {
    .banner-app-image {
        max-width: 460px;
        width: 100%;
        justify-self: center;
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

.banner-app-logo {
    height: 120px;
}

.banner-app-background {
    --mobile-bg-color: color-mix(in srgb, var(--color-accent-celeste) 30%, transparent);
}
</style>