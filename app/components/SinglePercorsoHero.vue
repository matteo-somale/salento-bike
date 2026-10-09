<script setup>
const {
  image,
  overlayColor,
  logo,
  title,
  text,
  buttonText,
  buttonLink
} = defineProps({
  image: { type: String, required: true },
  overlayColor: { type: String, default: '#119660' },
  logo: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonLink: { type: String, required: true }
})

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
              ${hexToRgba(overlayColor, overlayOpacity)},
              ${hexToRgba(overlayColor, overlayOpacity)}
            ),
            url(${image})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
      >

        <div
          class="d-flex flex-column align-items-center justify-content-center text-center text-white p-5"
          style="min-height: 600px;"
          data-aos="fade"
          data-aos-duration="800"
        >

          <img
            :src="logo"
            alt=""
            class="mb-4"
            style="height: 200px;"
          >

          <h1 class="display-4 fw-bold mb-3">
            {{ title }}
          </h1>

          <p class="lead mb-4">
            {{ text }}
          </p>

          <NuxtLink
            :to="buttonLink"
            class="btn btn-lg btn-secondary"
          >
            {{ buttonText }}
          </NuxtLink>

        </div>

      </div>

    </div>
  </section>
</template>