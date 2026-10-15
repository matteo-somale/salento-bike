export const DESTINAZIONI = [
  { slug: 'ciclonica', nome: 'Ciclonica', colore: 'var(--color-secondary)' },
  { slug: 'ladriatica', nome: 'Ladriatica', colore: 'var(--color-accent-celeste)' },
]

export const COLORE_FALLBACK = 'var(--color-accent-giallo)'

export function getDestinazioni(slugs = []) {
  return slugs.map((slug) => DESTINAZIONI.find((d) => d.slug === slug)).filter(Boolean)
}

export function getColoreSfondo(slugs = []) {
  const dest = getDestinazioni(slugs)
  return dest.length === 1 ? dest[0].colore : COLORE_FALLBACK
}
