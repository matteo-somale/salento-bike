<script setup>
const hero = {
  image: '/img/destinazioni/hero-salento-segnaposto.jpg',
  title: 'Un gruppo appassionato',
  text: 'Siamo un gruppo di persone appassionate della nostra terra e convinte che la bicicletta sia il mezzo migliore per scoprire il Salento. Amministratori locali, piccoli imprenditori o semplici cittadini riuniti dal progetto di un percorso ciclabile che attraversa i territori dei dieci comuni costieri che fanno parte della Green Community Ionico-Adriatica.',
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
  <section class="py-5">
    <div class="container">

      <div class="rounded-4 overflow-hidden" :style="{
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

          <h4 class="text-orange">
            {{ hero.subText }}
          </h4>

        </div>

      </div>

    </div>
  </section>
</template>