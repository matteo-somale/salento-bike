<!-- pages/index.vue -->
<template>
  <div>

    <CarouselHero></CarouselHero>

    <section class="py-0 py-lg-4">
      <div class="container">
        <JumboMap
          sopratitolo="il territorio"
          titolo="Le ciclovie<br>del Salento"
          testo="Ciclonica è un viaggio ad anello di 300 km che parte da Lecce per dirigersi lungo la costa ionica attraversando ben sei parchi naturali e aree protette. Anche Ladriatica è un viaggio ad anello di 240 km lungo il territorio più a est d'Italia, la costa orientale salentina."
          immagine="/maps/santento-map-ciclonica-adriatica.svg"
          colore-sfondo="color-mix(in srgb, var(--color-accent-giallo) 60%, transparent)"
          :bottoni="[
            { testo: 'Scopri Ciclonica', classe: 'btn-secondary', link: '/ciclonica' },
            { testo: 'Scopri Ladriatica', classe: 'btn-primary', link: '/ladriatica' }
          ]"
        ></JumboMap>
      </div>
    </section>

    <CarouselDestination id="destinationsList"></CarouselDestination>
    <BannerApp></BannerApp>

    <MainVideo id="pedalaConCiclonica"></MainVideo>

    <BannerLinkSud></BannerLinkSud>

    <CheckArticles></CheckArticles>

    <JumboSlowCard></JumboSlowCard>
  </div>
</template>

<script setup>

</script>