<template>
    <PercorsiList></PercorsiList>

    <!-- Visibile solo con ?destination=ciclonica -->
    <BannerGuidaCiclonica v-if="isDestinazione('ciclonica')"></BannerGuidaCiclonica>

    <BannerAppBikePercorsi></BannerAppBikePercorsi>

    <MainVideo></MainVideo>

    <!-- Visibile solo con ?destination=ciclonica -->
    <JumboGreenRoad v-if="isDestinazione('ciclonica')"></JumboGreenRoad>

    <JumboSlowCard></JumboSlowCard>

</template>

<script setup>
// Vedi app/composables/useDestinazioneAttiva.js per come funziona
const { isDestinazione } = useDestinazioneAttiva()
</script>
