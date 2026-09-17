<template>
    <section class="py-5">
        <div class="container position-relative">
            <div class="background-giallo-light rounded p-4 p-md-5 jumbo-map-card">
                <img src="/img/salento-map.png" alt="Mappa del Salento" class="img-fluid mb-4 mb-md-0 jumbo-map-image">

                <div class="jumbo-map-text">
                    <h2 class="display-4 fw-bold">
                        Le ciclovie del Salento
                    </h2>
                    <p class="lead">
                        Ciclonica è un viaggio ad anello di 300 km che parte da Lecce per dirigersi lungo la costa ionica
                        attraversando ben sei parchi naturali e aree protette. Anche Ladriatica è un viaggio ad anello di 230 km
                        lungo il territorio più a est d’Italia, la costa orientale salentina.
                    </p>

                    <div class="d-flex flex-wrap gap-3">
                        <NuxtLink to="/about" class="btn btn-secondary btn-lg">
                            Vai a Ciclonica
                        </NuxtLink>

                        <NuxtLink to="/about" class="btn btn-primary btn-lg">
                            Vai a Ladriatica
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@media (min-width: 992px) {
    .jumbo-map-card {
        max-width: 100%;
    }

    .jumbo-map-text {
        max-width: 75%;
    }

    .jumbo-map-image {
        position: absolute;
        top: 50%;
        right: 0;
        width: auto;
        max-width: none;
        height: 140%;
        transform: translate(33%, -50%);
    }
}
</style>
