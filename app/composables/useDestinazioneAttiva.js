import { DESTINAZIONI } from '~/utils/destinazioni'

// Slug ammessi nel parametro ?destination= (ciclonica, ladriatica)
const SLUG_VALIDI = DESTINAZIONI.map((d) => d.slug)
const DESTINAZIONE_DEFAULT = 'ciclonica'

/**
 * Destinazione attiva nella pagina /percorsi, salvata nell'URL come ?destination=<slug>.
 *
 * Lo stato vive solo nella query della route: ogni componente che chiama
 * useDestinazioneAttiva() legge lo stesso valore e si aggiorna da solo quando cambia.
 * Se il parametro manca o non è valido (es. ?destination=pippo) si usa 'ciclonica'.
 *
 * Restituisce:
 * - destinazioneAttiva  computed con lo slug attivo ('ciclonica' | 'ladriatica')
 * - isDestinazione(...slugs)  true se la destinazione attiva è una di quelle passate
 * - setDestinazione(slug)  aggiorna l'URL (router.replace: niente nuove voci nella cronologia)
 *
 * Come usarlo per mostrare un componente solo per una destinazione
 * (il composable è auto-importato da Nuxt, non serve import):
 *
 *   <script setup>
 *   const { isDestinazione } = useDestinazioneAttiva()
 *   </script>
 *
 *   <JumboGreenRoad v-if="isDestinazione('ciclonica')" />
 *   <BannerX v-if="isDestinazione('ladriatica')" />
 *   <BannerY v-if="isDestinazione('ciclonica', 'ladriatica')" />  // più destinazioni
 *
 * Nota: se il componente mostrato ha data-aos, l'animazione funziona perché
 * PercorsiList chiama AOS.refreshHard() a ogni cambio di destinazione.
 */
export function useDestinazioneAttiva() {
    const route = useRoute()
    const router = useRouter()

    const destinazioneAttiva = computed(() => {
        const slug = route.query.destination
        return SLUG_VALIDI.includes(slug) ? slug : DESTINAZIONE_DEFAULT
    })

    const isDestinazione = (...slugs) => slugs.includes(destinazioneAttiva.value)

    const setDestinazione = (slug) => {
        router.replace({ query: { ...route.query, destination: slug } })
    }

    return { destinazioneAttiva, isDestinazione, setDestinazione }
}
