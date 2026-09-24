<script setup>
const contatti = [
    {
        titolo: 'Contatti Ufficio Stampa',
        sottotitolo: 'Freancesca Biffi',
        telefono: '+39 0832 123456',
        email: 'stampa@salento.bike',
    },
    {
        titolo: 'Contatti',
        sottotitolo: 'Vivilitalia',
        telefono: '+39 0832 654321',
        email: 'comunicazione@salento.bike',
    },
]
</script>

<template>
    <section class="py-5">
        <div class="container">
            <div class="row g-4">

                <div v-for="contatto in contatti" :key="contatto.email" class="col-12 col-md-6">
                    <div class="rounded-4 p-4 p-lg-5 background-giallo h-100 text-center">
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
