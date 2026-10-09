import AOS from 'aos'

export default defineNuxtPlugin((nuxtApp) => {
  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
    disable: prefersReducedMotion,
  })

  nuxtApp.hook('page:finish', () => {
    AOS.refreshHard()
  })
})
