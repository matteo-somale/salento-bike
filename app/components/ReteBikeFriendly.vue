<script setup>
const hero = {
  image: '/img/destinazioni/hero-salento-segnaposto.jpg',
  title: 'Una rete bike-friendly',
  text: 'La Ciclonica può contare su una rete di strutture bike-friendly, singole realtà imprenditoriali connesse da un percorso ciclabile che dà forza al tessuto produttivo del territorio. Sono realtà attente all\'ambiente e alla buona enogastronomia a km zero, che offrono servizi dedicati alle biciclette aiutano il turista a scoprire le tradizioni locali e la bellezza custodita nei luoghi più nascosti.',
  buttons: [
    { text: 'Scopri di più', link: '/about' },
    { text: 'Contattaci', link: '/contatti' }
  ]
}



const overlayColor = '#255A52'
const overlayOpacity = 0.9

const network = {
  image: '/img/destinazioni/foto-dest-lecce.jpg',
  columns: [
    {
      title: 'La carta dei valori',
      text: 'Abbiamo scritto insieme una Carta dei Valori, una serie di impegni condivisi per strutture bike-friendly che vogliono combinare la tradizionale ospitalità del Salento con il rispetto dell’ambiente e le esigenze dei ciclisti. Attenzione al territorio, prodotti a km zero, servizi dedicati alle biciclette e scoperta delle tradizioni locali.',
      button: { text: 'Leggi la carta dei valori', link: '/about' }
    },
    {
      title: 'Come si aderisce',
      text: 'Per aderire alla Carta dei Valori basta condividere il nostro impegno per un’accoglienza cicloturistica sostenibile. Le strutture interessate possono contattarci, passando dal nostro partner tecnico BikeSquare, sottoscrivere la carta ed entrare nella Comunità della Ciclonica offrendo servizi di qualità dedicati ai viaggiatori in bici.',
      button: { text: 'Contattaci', link: '/contatti' }
    }
  ]
}

const hexToRgba = (hex, opacity) => {
  const value = hex.replace('#', '')

  const r = parseInt(value.substring(0, 2), 16)
  const g = parseInt(value.substring(2, 4), 16)
  const b = parseInt(value.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
</script>

<template>
  <section class="py-5">
    <div class="container">

      <h2 class="text-center fw-bold mb-5">
        In cosa crediamo
      </h2>

      <div id="bikeFriendlyNetwork" class="background-light-gray rounded-4 p-4 p-lg-5 mt-5" data-aos="fade-up">
        <div class="row g-4 align-items-stretch">

          <div class="col-12 col-lg-4 order-3 order-lg-1">
            <img
              :src="network.image"
              alt=""
              class="network-image img-fluid rounded-4 w-100 h-100"
            >
          </div>

          <div
            v-for="(column, index) in network.columns"
            :key="column.title"
            class="col-12 col-md-6 col-lg-4"
            :class="index === 0 ? 'order-1 order-lg-2' : 'order-2 order-lg-3'"
          >
            <div class="d-flex flex-column align-items-start justify-content-center justify-content-md-between text-start h-100 gap-3">
              <h2 class="fw-bold mb-0 text-orange">
                {{ column.title }}
              </h2>

              <p class="body-regular mb-0">
                {{ column.text }}
              </p>

              <NuxtLink :to="column.button.link" class="btn btn-primary btn-lg">
                {{ column.button.text }}
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

      <div id="bikeFriendlyHero" class="rounded-4 overflow-hidden" data-aos="fade-up" data-aos-delay="150" :style="{
        backgroundImage: `
            linear-gradient(
              ${hexToRgba(overlayColor, overlayOpacity)},
              ${hexToRgba(overlayColor, overlayOpacity)}
            ),
            url(${hero.image})
          `,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }">

        <div class="d-flex flex-column align-items-center justify-content-center text-center text-white p-5"
          style="min-height: 450px;">

          <h1 class="display-4 fw-bold mb-3">
            {{ hero.title }}
          </h1>

          <p class="lead mb-4">
            {{ hero.text }}
          </p>

          <div class="d-flex flex-row flex-wrap justify-content-center gap-3">
            <NuxtLink v-for="button in hero.buttons" :key="button.link" :to="button.link"
              class="btn btn-orange btn-lg">
              {{ button.text }}
            </NuxtLink>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.network-image {
  object-fit: cover;
  max-height: 400px;
}

@media (min-width: 992px) {
  .network-image {
    max-height: none;
  }
}
</style>