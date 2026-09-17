<script setup>
const bannerStory = {
  backgroundColor: '#119660',
  logo: '/logo/logo-ciclonica-vert-white.svg',
  eyebrow: 'DALL\'IDEATORE DEL LOGO',
  title: 'Perché il logo Ciclonica',
  text: 'Credo molto nelle reti e nella cooperazione tra enti e componenti positive della comunità. Credo nella necessità di tenere insieme tutte le terre dei parchi salentini, luoghi che rappresentano radici, prospettive e visioni condivise del Salento. <br> Ho immaginato Ciclonica come un asse di collegamento tra i comuni dell\'area ionico salentina, capace di unire territori, persone e futuro. Ho ideato il nome e il concept del logo, facendo incontrare la bicicletta al tamburello della pizzica salentina, ovvero il movimento al ritmo ancestrale di questa terra, il suono della natura al battito del cuore. <br> “Sono fiero di aver contribuito fin dall\'inizio alla fondazione della Green Community Jonico-Adriatica”',
  subtitle: 'Agostino Indennitate'
}
</script>

<template>
  <section
    class="py-5"
    :style="{ backgroundColor: bannerStory.backgroundColor }"
  >
    <div class="container py-4">
      <div class="row align-items-center g-5">

        <!-- Colonna sinistra -->
        <div class="col-12 col-lg-5">
          <div class="d-flex align-items-center justify-content-center">
            <img
              :src="bannerStory.logo"
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
              {{ bannerStory.eyebrow }}
            </p>

            <h2 class="mb-3">
              {{ bannerStory.title }}
            </h2>

            <p v-html="bannerStory.text" class="mb-4 body-regular"></p>

            <h4 class="h4 mb-0">
              {{ bannerStory.subtitle }}
            </h4>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
</style>