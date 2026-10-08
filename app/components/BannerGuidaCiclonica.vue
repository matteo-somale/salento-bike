<template>
    <section class="background-menta py-5">
        <div class="container">
            <div class="row align-items-center g-4">
                <div
                    class="col-12 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-3">
                    <img src="/logo/ediciclo-editore-green.svg" alt="Logo Ciclonica" class="banner-logo">

                    <h1 class="fw-bold mb-0 text-primary">Scopri la guida di Ciclonicaal Salento Ionico</h1>

                    <p class="body-large mb-0">TNel cuore del Sud, tra mare, borghi e natura</p>

                    <img src="/img/destinazioni/ciclovia-salento-hero.jpg" alt="Ciclonica" class="banner-image d-lg-none">

                    <NuxtLink to="/guida-ciclonica" class="btn btn-primary btn-lg btn-secondary">Vai allo shop</NuxtLink>
                </div>

                <div class="col-lg-6 d-none d-lg-flex order-1 justify-content-center">
                    <img src="/img/guida-ciclonica-mockup.png" alt="Ciclonica" class="banner-image">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.banner-logo {
    height: 100px;
    width: auto;
}

.banner-image {
    height: 100%;
    max-height: 500px;
    width: auto;
    object-fit: contain;
}
</style>
