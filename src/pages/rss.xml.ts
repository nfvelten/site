import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const leituras = (await getCollection('leituras', ({ data }) => !data.draft && data.status === 'lido'))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const items = [
    ...posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description ?? '',
      link: `/posts/${post.id.replace(/\.mdx?$/, '')}`,
    })),
    ...leituras.map(l => ({
      title: `Leitura: ${l.data.title}`,
      pubDate: l.data.date,
      description: `Review de "${l.data.title}" de ${l.data.autor}`,
      link: `/leituras/${l.id.replace(/\.mdx?$/, '')}`,
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: 'Nicholas Velten',
    description: 'Escrita, leituras e notas.',
    site: context.site!,
    items,
  });
}
