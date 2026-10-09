<script setup>
import { ref, computed } from 'vue'

const destinazioni = [
    { slug: 'ciclonica', nome: 'Ciclonica', colore: '#119660' },
    { slug: 'ladriatica', nome: 'Ladriatica', colore: '#007FC3' },
]

const rassegne = [
    {
        destinazioni: ['ciclonica'],
        titolo: 'Rassegna uno',
        testo: 'Testo descrittivo segnaposto per la rassegna uno, da sostituire con contenuti reali.',
        link: '/',
    },
    {
        destinazioni: ['ladriatica'],
        titolo: 'Rassegna due',
        testo: 'Testo descrittivo segnaposto per la rassegna due, da sostituire con contenuti reali.',
        link: '/',
    },
    {
        destinazioni: ['ciclonica', 'ladriatica'],
        titolo: 'Rassegna tre',
        testo: 'Testo descrittivo segnaposto per la rassegna tre, da sostituire con contenuti reali.',
        link: '/',
    },
    {
        destinazioni: [],
        titolo: 'Rassegna quattro',
        testo: 'Testo descrittivo segnaposto per la rassegna quattro, da sostituire con contenuti reali.',
        link: '/',
    },
]

const selezionate = ref(destinazioni.map((d) => d.slug))

const tuttiAttivo = computed(() => selezionate.value.length === destinazioni.length)

function isAttiva(slug) {
    return selezionate.value.includes(slug)
}

function selezionaTutti() {
    selezionate.value = destinazioni.map((d) => d.slug)
}

function toggleDestinazione(slug) {
    if (selezionate.value.includes(slug)) {
        const rimanenti = selezionate.value.filter((s) => s !== slug)
        selezionate.value = rimanenti.length ? rimanenti : destinazioni.map((d) => d.slug)
    } else {
        selezionate.value = [...selezionate.value, slug]
    }
}

const rassegneFiltrate = computed(() =>
    tuttiAttivo.value
        ? rassegne
        : rassegne.filter((rassegna) => rassegna.destinazioni.some((slug) => selezionate.value.includes(slug)))
)

function destinazioniDiRassegna(rassegna) {
    return rassegna.destinazioni
        .map((slug) => destinazioni.find((destinazione) => destinazione.slug === slug))
        .filter(Boolean)
}

function sfondoRassegna(rassegna) {
    const dest = destinazioniDiRassegna(rassegna)
    const colore = dest.length === 1 ? dest[0].colore : 'var(--color-accent-giallo)'
    return { backgroundColor: `color-mix(in srgb, ${colore} 50%, transparent)` }
}
</script>

<template>
    <section class="py-5">
        <div class="container">

            <div class="d-flex flex-column align-items-center text-center mb-5">
                <h4 class="eyebrow text-orange mb-2">Area stampa</h4>
                <h1 class="fw-bold mb-4 text-primary">Materiali stampa</h1>

                <div class="d-flex flex-nowrap gap-3">
                    <button type="button" class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                        :class="{ 'is-active': tuttiAttivo }"
                        :style="{ '--btn-accent': 'var(--color-accent-giallo)' }"
                        @click="selezionaTutti">
                        <Icon :name="tuttiAttivo ? 'lucide:x' : 'lucide:plus'" />
                        Tutti
                    </button>
                    <button v-for="destinazione in destinazioni" :key="destinazione.slug" type="button"
                        class="btn btn-lg btn-filter d-inline-flex align-items-center gap-2"
                        :class="{ 'is-active': isAttiva(destinazione.slug) }"
                        :style="{ '--btn-accent': destinazione.colore }"
                        @click="toggleDestinazione(destinazione.slug)">
                        <Icon :name="isAttiva(destinazione.slug) ? 'lucide:x' : 'lucide:plus'" />
                        {{ destinazione.nome }}
                    </button>
                </div>
            </div>

            <div class="d-flex flex-column gap-4">
                <article v-for="(rassegna, index) in rassegneFiltrate" :key="index"
                    class="rounded-4 p-4 p-md-5" :style="sfondoRassegna(rassegna)">

                    <div v-if="destinazioniDiRassegna(rassegna).length" class="d-flex flex-row gap-2 mb-3">
                        <span v-for="destinazione in destinazioniDiRassegna(rassegna)" :key="destinazione.slug"
                            class="badge rounded-pill"
                            :style="{ backgroundColor: destinazione.colore, color: 'var(--color-text-white)' }">
                            {{ destinazione.nome }}
                        </span>
                    </div>

                    <h3 class="fw-bold mb-3 text-primary">{{ rassegna.titolo }}</h3>
                    <p class="body-large mb-4">{{ rassegna.testo }}</p>

                    <NuxtLink :to="rassegna.link" class="btn btn-lg btn-orange d-inline-flex align-items-center gap-2">
                        <Icon name="lucide:download" />
                        Scarica la rassegna
                    </NuxtLink>
                </article>
            </div>

        </div>
    </section>
</template>
