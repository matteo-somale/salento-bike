<template>
    <section class="py-2 my-md-3">
        <div class="container">
            <div class="background-light-gray rounded px-5 py-4 py-md-4" data-aos="fade-up">
                <div class="row align-items-center g-5">
                    <!-- Logo -->
                    <div class="col-12 col-md-5 px-1">
                        <div class="logo-wrap w-100 d-flex align-items-center justify-content-center">
                            <NuxtImg src="/logo/SlowMao-logo.png" alt="Logo SlowMap" class="img-fluid p-2"
                                format="webp" densities="x1" loading="lazy" />
                        </div>
                    </div>
                    <!-- Content -->
                    <div class="col-12 col-md-7 mt-3 mt-md-5">
                        <div class="d-flex flex-column align-items-start gap-4">
                            <h2 class="fw-bold mb-0 text-orange">Con la slowcard tante offerte lungo la
                                Ciclonica e Ladriatica</h2>
                            <NuxtLink to="https://slowmap.tours/travel-planner/ciclonica/" target="blank" class="btn btn-primary btn-lg jumbo-cta">Scopri di più su SlowMap.tours
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.logo-wrap {
    aspect-ratio: 16 / 9;
}

@media (max-width: 767.98px) {
    .logo-wrap {
        aspect-ratio: auto;
        padding: 1.5rem 0;
    }

    .jumbo-cta {
        width: 100%;
    }
}
</style>
