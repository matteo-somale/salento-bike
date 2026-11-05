// Solo Collapse (menu mobile): è l'unico componente JS di Bootstrap usato.
// Importandolo da solo registra anche il data-api di data-bs-toggle="collapse".
import Collapse from 'bootstrap/js/dist/collapse'

export default defineNuxtPlugin(() => {
  // esposto su window per poterne recuperare le istanze dai componenti (vedi Header.vue)
  ;(window as unknown as { bootstrap: { Collapse: typeof Collapse } }).bootstrap = { Collapse }
})
