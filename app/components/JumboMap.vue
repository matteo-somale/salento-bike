```vue
<template>
    <div class="container background-giallo rounded p-5">
        <h2 class="display-4 fw-bold">
            Le ciclovie del Salento
        </h2>
        <p class="lead">
            Ciclonica è un viaggio ad anello di 300 km che parte da Lecce per dirigersi lungo la costa ionica
            attraversando ben sei parchi naturali e aree protette. Anche Ladriatica è un viaggio ad anello di 230 km
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
</template>
```

<script setup>
// JavaScript / logica
</script>

<style scoped>
/* CSS del componente */
</style>