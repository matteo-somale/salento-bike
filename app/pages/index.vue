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

    <MainVideo
      id="pedalaConCiclonica"
      subtitle="da chi l'ha provato"
      title="I video dal Salento in&nbsp;bici"
      text="Su due ruote tra paesaggi mozzafiato, antiche masserie e borghi del Barocco. Guarda i video di chi già ha fatto questa esperienza!"
      :youtube-links="youtubeLinks"
      button-link="/percorso"
    ></MainVideo>

    <BannerLinkSud></BannerLinkSud>

    <CheckArticles></CheckArticles>

    <JumboSlowCard></JumboSlowCard>
  </div>
</template>

<script setup>
const youtubeLinks = [
  'https://www.youtube.com/embed/yRV_RfbSl8k?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/VWKEaJizJKc?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/QruvlHL8b7Q?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/IEHfoeXHQ60?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/FbQ9DHrIP-k?list=PLVEJssP1vh2Y9s1WmoRJz4-09JK9O515K&enablejsapi=1',
  'https://www.youtube.com/embed/xji1bGCTPmw'
]
</script>