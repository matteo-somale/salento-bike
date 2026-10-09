<script setup>
function hexToRgba(hex, alpha) {
  const valoreHex = hex.replace('#', '')
  const r = parseInt(valoreHex.substring(0, 2), 16)
  const g = parseInt(valoreHex.substring(2, 4), 16)
  const b = parseInt(valoreHex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const {
  immagine,
  logo,
  coloreSfondo,
  altLayout,
  sopratitolo,
  titolo,
  testo,
  bottoni
} = defineProps({
  immagine: { type: String, required: true },
  logo: { type: String, required: true },
  coloreSfondo: { type: String, default: '#119660' },
  altLayout: { type: Boolean, default: false },
  sopratitolo: { type: String, required: true },
  titolo: { type: String, required: true },
  testo: { type: String, required: true },
  bottoni: { type: Array, default: () => [] }
})
</script>

<template>
  <section class="">
    <div class="container p-5">

      <div
        class="rounded-4 overflow-hidden"
        :style="{ backgroundColor: hexToRgba(coloreSfondo, 0.35) }"
      >

        <div class="row g-0 align-items-stretch">

          <!-- Immagine -->
          <div
            class="col-12 col-lg-6 p-5"
            :class="altLayout
              ? 'order-2 order-lg-1'
              : 'order-1 order-lg-2'"
            :data-aos="altLayout ? 'fade-left' : 'fade-right'"
          >
            <div class="position-relative h-100 rounded-4 overflow-hidden">

              <img
                :src="immagine"
                alt=""
                class="w-100 h-100 object-fit-cover"
                style="max-height: 500px;"
              >

              <!-- Overlay sfumato -->
              <div class="image-overlay"></div>

              <!-- Logo -->
              <img
                :src="logo"
                alt=""
                class="image-logo"
              >

            </div>
          </div>

          <!-- Contenuto -->
          <div
            class="col-12 col-lg-6"
            :class="altLayout
              ? 'order-1 order-lg-2'
              : 'order-2 order-lg-1'"
            :data-aos="altLayout ? 'fade-right' : 'fade-left'"
            data-aos-delay="150"
          >
            <div
              class="h-100 d-flex flex-column align-items-start justify-content-center p-5"
            >

              <p
                class="eyebrow mb-2"
                :style="{ color: coloreSfondo }"
              >
                {{ sopratitolo }}
              </p>

              <h2 class="fw-bold mb-4 text-primary">
                {{ titolo }}
              </h2>

              <p class="mb-4">
                {{ testo }}
              </p>

              <!-- Bottoni -->
              <div class="d-flex flex-wrap gap-3">

                <NuxtLink
                  v-for="(bottone, index) in bottoni"
                  :key="index"
                  :to="bottone.linkBottone"
                  class="btn btn-primary btn-lg"
                >
                  {{ bottone.testoBottone }}
                </NuxtLink>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0) 35%
  );
  pointer-events: none;
}

.image-logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  height: 55px;
  width: auto;
  max-width: calc(100% - 3rem);
  object-fit: contain;
}
</style>