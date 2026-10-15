import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({ html: false, linkify: true })

const files = import.meta.glob('../content/news/*.md', { eager: true, query: '?raw', import: 'default' })

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const data = {}
  for (const line of match[1].split('\n')) {
    const lineMatch = line.match(/^(\w+):\s*(.*)$/)
    if (!lineMatch) continue
    const [, key, rawValue] = lineMatch
    const value = rawValue.trim()
    data[key] = value.startsWith('[')
      ? value.slice(1, -1).split(',').map((v) => v.trim()).filter(Boolean)
      : value.replace(/^["']|["']$/g, '')
  }

  return { data, content: match[2].trim() }
}

function parseDataOrdinamento(dataStr) {
  const [gg, mm, aaaa] = dataStr.split('-').map(Number)
  return new Date(aaaa, mm - 1, gg)
}

function formatDataItaliana(dataStr) {
  const [gg, mm, aaaa] = dataStr.split('-')
  return `${gg}/${mm}/${aaaa}`
}

export function stripMarkdownToExcerpt(markdown, length = 150) {
  const plain = markdown
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/[*_`>-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return plain.length > length ? `${plain.slice(0, length).trim()}…` : plain
}

const allNews = Object.values(files)
  .map((raw) => {
    const { data, content } = parseFrontmatter(raw)
    return {
      slug: data.slug,
      titolo: data.titolo,
      dataFormattata: formatDataItaliana(data.data),
      dataOrdinamento: parseDataOrdinamento(data.data),
      immagine: data.immagine,
      destinazioni: data.destinazione || [],
      excerpt: stripMarkdownToExcerpt(content, 150),
      corpoHtml: md.render(content),
    }
  })
  .sort((a, b) => b.dataOrdinamento - a.dataOrdinamento)

export function getNewsList() {
  return allNews
}

export function getNewsBySlug(slug) {
  return allNews.find((item) => item.slug === slug) || null
}
