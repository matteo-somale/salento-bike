<script setup>
const contatti = [
    {
        titolo: 'Ufficio Stampa',
        sottotitolo: 'Francesca Biffi',
        telefono: '+39 333 2164430',
        email: 'ufficiostampa@vivilitalia.it',
    },
    {
        titolo: 'Contatti',
        sottotitolo: 'Vivilitalia',
        telefono: '06/86268324 - 06/4741245',
        email: 'info@vivilitalia.it',
    },
]
</script>

<template>
    <section class="py-5">
        <div class="container">
            <div class="row g-4">

                <div v-for="(contatto, index) in contatti" :key="contatto.email" class="col-12 col-md-6">
                    <div class="rounded-4 p-4 p-lg-5 background-giallo h-100 text-center" data-aos="fade-up" :data-aos-delay="index * 150">
                        <h3 class="mb-2">{{ contatto.titolo }}</h3>
                        <p class="eyebrow mb-4">{{ contatto.sottotitolo }}</p>

                        <div class="d-flex flex-wrap justify-content-center gap-3">
                            <a :href="`tel:${contatto.telefono}`" class="btn btn-secondary">
                                {{ contatto.telefono }}
                            </a>
                            <a :href="`mailto:${contatto.email}`" class="btn btn-secondary">
                                {{ contatto.email }}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
</style>
