<template>
    <section class="background-menta pt-5" data-aos="fade-up">
        <div class="container">
            <div class="row align-items-center align-items-lg-stretch g-4">
                <div
                    class="col-12 col-lg-6 order-2 order-lg-1 align-self-lg-center d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start gap-3">
                    <img src="/logo/ediciclo-editore-green.svg" alt="Logo Ciclonica" class="banner-logo">

                    <h1 class="fw-bold mb-0 text-primary">Scopri la guida di Ciclonica al Salento Ionico</h1>

                    <p class="body-large mb-0">TNel cuore del Sud, tra mare, borghi e natura</p>

                    <NuxtLink to="/guida-ciclonica" class="btn btn-primary btn-lg btn-secondary">Vai allo shop</NuxtLink>

                    <img src="/img/guida-ciclonica-mockup.png" alt="Ciclonica" class="banner-image d-lg-none">
                </div>

                <div class="col-lg-6 d-none d-lg-flex order-1 justify-content-center align-items-end align-self-stretch">
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
