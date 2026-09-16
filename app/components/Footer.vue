<template>
  <footer class="py-5 background-orange">
    <div class="container"> <!-- Contenuto principale -->
      <div class="row g-5"> <!-- Colonna 4/12 -->
        <div class="col-12 col-lg-4">
          <div class="d-flex flex-column align-items-start gap-3">
            <div class="bg-light d-flex align-items-center justify-content-center" style="width: 120px; height: 60px;">
              <span class="text-secondary fw-bold">LOGO</span> </div>
            <h3 class="h5 mb-0"> Nome del progetto </h3>
            <p class="mb-0"> Una breve descrizione del progetto, dell'azienda o del servizio offerto. </p>
          </div>
        </div> <!-- Colonna 8/12 -->
        <div class="col-12 col-lg-8">
          <div class="row g-4"> <!-- Sezione 1 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column gap-2">
                <h4 class="h6 fw-bold mb-2"> Progetto </h4> <span>Chi siamo</span> <span>Il progetto</span>
                <span>Mission</span> <span>Contatti</span>
              </div>
            </div> <!-- Sezione 2 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column gap-2">
                <h4 class="h6 fw-bold mb-2"> Servizi </h4> <span>Consulenza</span> <span>Soluzioni</span>
                <span>Supporto</span> <span>Assistenza</span>
              </div>
            </div> <!-- Sezione 3 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column gap-2">
                <h4 class="h6 fw-bold mb-2"> Risorse </h4> <span>Blog</span> <span>Guide</span>
                <span>Documentazione</span> <span>FAQ</span>
              </div>
            </div> <!-- Sezione 4 -->
            <div class="col-12 col-md-6 col-lg-3">
              <div class="d-flex flex-column gap-2">
                <h4 class="h6 fw-bold mb-2"> Seguici </h4> <span>Instagram</span> <span>LinkedIn</span>
                <span>Facebook</span> <span>YouTube</span>
              </div>
            </div>
          </div>
        </div>
      </div> <!-- Separatore -->
      <hr class="my-5"> <!-- Copyright -->
      <p class="small text-secondary mb-0"> © 2026 Nome del progetto. Tutti i diritti riservati. </p>
    </div>
  </footer>
</template>

<script setup>
// JavaScript / logica
</script>

<style scoped>
footer {
  h3, p , span {
    color: var(--color-text-white);
  }

}
</style>