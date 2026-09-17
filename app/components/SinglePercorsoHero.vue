<script setup>
const hero = {
  image: 'https://picsum.photos/1600/900',
  overlayColor: '#119660',
  logo: '/logo/logo-ciclonica-vert-white.svg',
  title: 'Un titolo importante per questa sezione',
  text: 'Una breve descrizione del progetto o del contenuto che vuoi presentare.',
  buttonText: 'Scopri di più',
  buttonLink: '/about'
}

const overlayOpacity = 0.6

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

      <div
        class="rounded-4 overflow-hidden"
        :style="{
          backgroundImage: `
            linear-gradient(
              ${hexToRgba(hero.overlayColor, overlayOpacity)},
              ${hexToRgba(hero.overlayColor, overlayOpacity)}
            ),
            url(${hero.image})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      >

        <div
          class="d-flex flex-column align-items-center justify-content-center text-center text-white p-5"
          style="min-height: 600px;"
        >

          <img
            :src="hero.logo"
            alt=""
            class="mb-4"
            style="height: 200px;"
          >

          <h1 class="display-4 fw-bold mb-3">
            {{ hero.title }}
          </h1>

          <p class="lead mb-4">
            {{ hero.text }}
          </p>

          <NuxtLink
            :to="hero.buttonLink"
            class="btn btn-lg btn-secondary"
          >
            {{ hero.buttonText }}
          </NuxtLink>

        </div>

      </div>

    </div>
  </section>
</template>