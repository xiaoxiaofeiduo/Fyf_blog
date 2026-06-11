import { generatedPosts } from './generated-posts';

export interface BlogPost {
  slug: string;
  sourcePath: string;
  category: string | null;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  cover?: string;
  readingTime: string;
  featured: boolean;
}

const postContentModules = import.meta.glob('../content/posts/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>;

export const posts: BlogPost[] = generatedPosts.map((post) => ({ ...post }));

export const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

export function getPostBySlug(slug: string | undefined) {
  return posts.find((post) => post.slug === slug);
}

export async function loadPostContent(post: BlogPost) {
  const loader = postContentModules[post.sourcePath];
  if (!loader) return '';
  const raw = await loader();
  const match = raw.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  return (match?.[1] ?? raw).trim();
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}
