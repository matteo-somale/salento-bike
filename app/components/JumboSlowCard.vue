<template>
    <section class="py-5">
        <div class="container ">
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 col-sm-12 order-last order-md-0">
                    <div
                        class="slow-background-left text-petrolio rounded px-3 py-4 h-100 d-flex flex-column align-items-center justify-content-center text-center gap-3"
                        data-aos="fade-right">
                        <img src="/logo/LOGOGREENROADAWARD.png" alt="SlowCard" class="img-fluid w-100" style="max-width: 320px; max-height: 150px; object-fit: contain;">
                        <h3 class="fw-bold mb-0 ">Green road award</h3>
                        <p class="mb-0 body-large">Ciclonica, terza classificata all'edizione 2025 dell'Oscar Italiano del Cicloturismo</p>
                    </div>
                </div>

                <div class="col-lg-8 col-md-6 col-sm-12">
                    <div
                        class="background-light-gray rounded px-5 py-2 h-100 d-flex flex-column align-items-center justify-content-center text-center gap-4 pb-4"
                        data-aos="fade-left" data-aos-delay="150">
                        <div class="d-flex align-items-center justify-content-center w-100" style="aspect-ratio: 16 / 9; max-width: 600px; max-height: 150px;">
                            <img src="/logo/SlowMao-logo.png" alt="Logo SlowMap" class="img-fluid w-100 h-100" style="object-fit: contain;">
                        </div>
                        <h3 class="fw-bold mb-0 text-orange">Con la slowcard tante offerte lungo la
                            Ciclonica e Ladriatica</h3>
                        <NuxtLink to="/about" class="btn btn-primary btn-lg">Scopri di più su SlowMap.tours
                        </NuxtLink>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.slow-background-left {
    background-color: rgba(59, 173, 71, 0.5);
}
</style>