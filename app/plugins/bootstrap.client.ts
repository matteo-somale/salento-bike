import * as bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
  // esposto su window per poterne recuperare le istanze (es. Collapse) dai componenti
  ;(window as unknown as { bootstrap: typeof bootstrap }).bootstrap = bootstrap
})
