<script setup>
const hero = {
  image: '/img/destinazioni/hero-salento-segnaposto.jpg',
  title: 'Un gruppo appassionato',
  text: 'Siamo un gruppo di persone appassionate di Salento, chi per nascita e chi per adozione, e siamo convinte che la bicicletta sia il mezzo migliore per scoprire questa terra. Siamo amministratori locali, professionisti, piccoli imprenditori o semplici cittadini riuniti intorno all\'idea di trasformare il Salento in una meta di rilevanza nazionale e internazionale per il popolo dei&nbsp;cicloturisti.',
  subText: 'Siamo una piccola comunità nella grande Green Community! '
}

const overlayColor = '#1D2839'
const overlayOpacity = 0.9

const hexToRgba = (hex, opacity) => {
  const value = hex.replace('#', '')

  const r = parseInt(value.substring(0, 2), 16)
  const g = parseInt(value.substring(2, 4), 16)
  const b = parseInt(value.substring(4, 6), 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
</script>

<template>
  <section class="py-5 pb-0">
    <div class="container">

      <div class="rounded overflow-hidden " :style="{
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
          style="min-height: 450px;" data-aos="fade" data-aos-duration="800">

          <h1 class="mb-3">
            {{ hero.title }}
          </h1>

          <p class="body-large mb-4 d-none d-md-block"  v-html="hero.text">
           
          </p>

          <p class="body-small mb-4 d-md-none w-100 text-start" v-html="hero.text">
            
          </p>

          <h4 class="eyebrow text-orange">
            {{ hero.subText }}
          </h4>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
p {
  max-width: 100ch;
}
</style>