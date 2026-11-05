<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
// stessi file (stesso URL con hash) referenziati da fonts.css
import fontTitolo from '~/assets/fonts/BricolageGrotesque/BricolageGrotesque_48pt-ExtraBold.woff2?url'
import fontParagrafo from '~/assets/fonts/OpenSans/OpenSans-Light.woff2?url'

const img = useImage()

// poster ritagliato quadrato e ridimensionato al build da @nuxt/image (il box
// della hero è 1:1 e al massimo ~640px): lo stesso URL serve a <img>, preload
// e attributo poster del video, quindi viene scaricato una volta sola
const posterHero = img('/videos/hero-poster.webp', {
  width: 720,
  height: 720,
  fit: 'cover',
  format: 'webp',
  quality: 75,
})

const slides = [
  {
    eyebrow: 'salento.bike',
    title: 'Salento,<br> pedalare nella meraviglia',
    text: 'Ci sono luoghi che richiedono un tempo lento per essere compresi: il Salento è uno di questi. Racchiuso tra due mari, Adriatico e Ionio, questo lembo d\'Italia è un paradiso naturale ideale per essere esplorato in sella a una bicicletta.',
    button: 'Guarda il video completo',
    buttonLink: '#pedalaConCiclonica',
    buttonIcon: 'fluent:filmstrip-play-24-filled',
    media: {
      type: 'video',
      // primo frame del video, mostrato subito (anche nell'HTML statico)
      poster: posterHero,
      // il browser usa la prima sorgente che supporta
      sources: [
        { src: '/videos/video-hero-salento-EXTRA_SHORT_COMPRESSED.mp4', type: 'video/mp4' },
      ],
      // video mostrato nella lightbox al click, se assente si usa l'ultima sorgente
      lightboxSrc: '/videos/ciclonica-video-wide-teaser.mp4',
      alt: 'Video cicloturismo nel Salento'
    }
  },
  {
    eyebrow: 'Il Salento',
    title: 'Salento,<br> la punta estrema della&nbsp;Puglia',
    text: 'Siamo nel “tacco” d’Italia, la punta più a est dello Stivale, dove sorge il primo sole. Qui il cicloturista scopre coste mozzafiato, parchi, vigneti, uliveti e borghi antichi. È il paradiso per chi viaggia in bici e vuole scoprire l\'anima vera del territorio, lontano dal turismo di massa.',
    button: 'Scopri il Salento',
    buttonLink: 'https://ebike.bikesquare.eu/map/salento',
    buttonIcon: 'lucide:bike',
    media: { type: 'image', src: '/img/italia-salento-map.jpg', alt: 'Mappa dell\'Italia con il Salento evidenziato' }
  },
  {
    eyebrow: 'salento.bike',
    title: 'Salento, naturalmente ciclabile ',
    text: 'Prevalentemente pianeggiante o con dislivelli accessibili, il Salento è la meta ideale per il cicloturista. Grazie a una rete infinita di stradine a basso impatto veicolare, per più dell’80% asfaltate, il territorio è totalmente ciclabile. ',
    button: 'I percorsi principali',
    buttonLink: '/percorsi',
    buttonIcon: 'lucide:bike',
    media: { type: 'image', src: '/img/foto-bike-hero.jpeg', alt: 'Ciclista in sella lungo un percorso del Salento' }
  }
]

// Risorse sopra la piega chieste subito al browser, senza aspettare il CSS:
// il poster (elemento più grande) e i font di h1 e paragrafo della hero
// (.lead di Bootstrap ha peso 300 → Open Sans Light).
// I font richiedono crossorigin, altrimenti il browser li scarica due volte.
useHead({
  link: [
    { rel: 'preload', as: 'image', type: 'image/webp', href: posterHero, fetchpriority: 'high' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: fontTitolo, crossorigin: 'anonymous' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: fontParagrafo, crossorigin: 'anonymous' },
  ],
})

// calcolato qui (anche lato server) e non da NuxtImg, che è dentro ClientOnly,
// così in prerender @nuxt/image genera anche queste varianti
const immagini = slides.map((slide) =>
  slide.media.type === 'image'
    ? img.getSizes(slide.media.src, {
        sizes: 'xs:100vw sm:540px md:720px lg:660px',
        modifiers: { format: 'webp', quality: img.options.quality },
      })
    : null
)

const containerRef = ref(null)
const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: { delay: 15000 },
  pagination: { clickable: true, enabled: true },
  breakpoints: {
    992: {
      pagination: { enabled: false },
    },
  },
})

// Il video parte solo a pagina caricata, così non ruba banda a CSS, JS e
// immagini del primo caricamento. Fino ad allora si vede il poster.
// Con "riduci movimento" o risparmio dati resta il poster.
const videoAttivo = ref(false)

function attivaVideo() {
  const riduciMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const risparmioDati = navigator.connection?.saveData === true
  if (!riduciMovimento && !risparmioDati) videoAttivo.value = true
}

onMounted(() => {
  if (document.readyState === 'complete') attivaVideo()
  else window.addEventListener('load', attivaVideo, { once: true })
})

// lightbox solo per i media di tipo video
const lightboxMedia = ref(null)

function apriLightbox(media) {
  if (media.type !== 'video') return
  lightboxMedia.value = { src: media.lightboxSrc ?? media.sources.at(-1).src, alt: media.alt }
}

function chiudiLightbox() {
  lightboxMedia.value = null
}

function onKeydown(event) {
  if (event.key === 'Escape') chiudiLightbox()
}

watch(lightboxMedia, (media) => {
  document.body.style.overflow = media ? 'hidden' : ''
  if (media) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('load', attivaVideo)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <!-- niente data-aos qui: è sopra la piega e resterebbe invisibile finché AOS non parte -->
  <section id="heroCarousel" class="background-lighter-gray pt-4">
    <ClientOnly>
      <swiper-container ref="containerRef" :init="false" class="hero-swiper">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <HeroSlide
            :slide="slide"
            :immagine="immagini[index]"
            :video-attivo="videoAttivo"
            :lazy="index > 0"
            @prev="swiper.prev()"
            @next="swiper.next()"
            @apri="apriLightbox"
          />
        </swiper-slide>
      </swiper-container>

      <Teleport to="body">
        <div
          v-if="lightboxMedia"
          class="video-lightbox"
          role="dialog"
          aria-modal="true"
          :aria-label="lightboxMedia.alt"
          @click.self="chiudiLightbox"
        >
          <button
            type="button"
            class="video-lightbox-close"
            aria-label="Chiudi video"
            @click="chiudiLightbox"
          >
            <Icon name="lucide:x" />
          </button>
          <video
            class="video-lightbox-media"
            :src="lightboxMedia.src"
            controls
            autoplay
            playsinline
          ></video>
        </div>
      </Teleport>

      <!-- HTML statico della prima slide (con il poster al posto del video),
           visibile prima che il JavaScript carichi lo swiper -->
      <template #fallback>
        <div class="hero-fallback">
          <HeroSlide :slide="slides[0]" :immagine="immagini[0]" />
        </div>
      </template>
    </ClientOnly>
  </section>
</template>

<style scoped>
/* il fallback statico replica il padding delle slide: niente salto di layout
   quando lo swiper prende il suo posto */
.hero-swiper swiper-slide,
.hero-fallback {
  padding-bottom: 3rem;
  box-sizing: border-box;
}

/* sopra l'header (z-index 1030) */
.video-lightbox {
  position: fixed;
  inset: 0;
  z-index: 1060;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  background: rgba(0, 0, 0, 0.85);
}

.video-lightbox-media {
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
}

.video-lightbox-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  color: var(--color-neutral-white);
  font-size: 1.5rem;
  cursor: pointer;
}

/* Su schermi grandi lo sfondo grigio non copre più tutta la section,
   ma solo un'altezza fissa dall'alto, per fermarsi poco prima del
   bordo inferiore del video (circa 30px prima). */
@media (min-width: 992px) {
  #heroCarousel {
    --hero-bg-height: 78%; /* regolare qui per avvicinare/allontanare il bordo dal video */
    background-color: transparent;
    position: relative;
    isolation: isolate;
  }

  #heroCarousel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--hero-bg-height);
    background-color: var(--color-neutral-lighter-gray);
    z-index: -1;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  #heroCarousel {
    --hero-bg-height: 75%;
  }
}

@media (min-width: 1400px) {
  #heroCarousel {
    --hero-bg-height: 72%;
  }
}
</style>