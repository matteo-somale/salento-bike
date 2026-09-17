<template>
    <section class="py-5">
        <div class="container ">
            <div class="slow-background rounded p-4 p-md-5">
                <div class="row align-items-center g-5"> <!-- Logo -->
                    <div class="col-12 col-md-5">
                        <div class=" w-100 d-flex align-items-center justify-content-center"
                            style="aspect-ratio: 16 / 9;">
                            <img src="/logo/SlowMao-logo.png" alt="Logo SlowMap" class="img-fluid p-4">
                        </div>
                    </div> <!-- Content -->
                    <div class="col-12 col-md-7">
                        <div class="d-flex flex-column align-items-start gap-4">
                            <h3 class="display-4 fw-bold mb-0 text-orange">Con la slowcard tante offerte lungo la
                                Ciclonica e Ladriatica</h3>
                            <NuxtLink to="/about" class="btn btn-primary btn-lg">Scopri di più su SlowMap.tours
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.slow-background {
    background-color: var(--color-neutral-light-gray);
}
</style>