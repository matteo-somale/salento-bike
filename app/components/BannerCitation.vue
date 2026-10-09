<script setup>
const {
  backgroundColor,
  logo,
  eyebrow,
  title,
  text,
  subtitle
} = defineProps({
  backgroundColor: { type: String, default: '#119660' },
  logo: { type: String, required: true },
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  subtitle: { type: String, required: true }
})
</script>

<template>
  <section
    class="py-5"
    :style="{ backgroundColor: backgroundColor }"
    data-aos="fade-up"
  >
    <div class="container py-4">
      <div class="row align-items-center g-5">

        <!-- Colonna sinistra -->
        <div class="col-12 col-lg-5">
          <div class="d-flex align-items-center justify-content-center">
            <img
              :src="logo"
              alt=""
              class="img-fluid w-100"
              style="min-height: 100px; max-height: 200px; object-fit: contain;"
            >
          </div>
        </div>

        <!-- Colonna destra -->
        <div class="col-12 col-lg-7">
          <div class="d-flex flex-column align-items-start text-white">

            <p class="eyebrow mb-2">
              {{ eyebrow }}
            </p>

            <h2 class="mb-3">
              {{ title }}
            </h2>

            <p v-html="text" class="mb-4 body-regular"></p>

            <h4 class="h4 mb-0">
              {{ subtitle }}
            </h4>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>