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
  content: string;
}

interface PostSource {
  slug: string;
  sourcePath: string;
  category: string | null;
  raw: string;
}

const contentRoot = '../content/posts/';

function normalizeSlugPart(part: string) {
  return part.trim().replace(/\s+/g, '-');
}

function uniqueTags(tags: Array<string | null | undefined>) {
  return Array.from(new Set(tags.filter((tag): tag is string => Boolean(tag))));
}

const postModules = import.meta.glob('../content/posts/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

export const postAssetMap = import.meta.glob('../content/posts/**/*.{png,jpg,jpeg,gif,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const sources: PostSource[] = Object.entries(postModules).map(([path, raw]) => {
  const parts = path.split('/');
  const filename = parts.pop() ?? '';
  const folder = parts.pop();
  const fileSlug = filename.replace(/\.md$/, '');
  const relativePath = path.startsWith(contentRoot)
    ? path.slice(contentRoot.length).replace(/\.md$/, '')
    : fileSlug;
  const relativeParts = relativePath.split('/');
  const [categoryDir] = relativeParts;
  const category = relativePath.includes('/') ? categoryDir : null;
  const slugParts = category && (fileSlug === 'index' || fileSlug === 'README' || fileSlug === '分享')
    ? relativeParts.slice(0, -1)
    : relativeParts;
  const pathSlug = category
    ? slugParts
      .map(normalizeSlugPart)
      .join('-')
    : undefined;

  return {
    slug: pathSlug ?? (fileSlug === 'index' || fileSlug === 'README' || fileSlug === '分享'
      ? folder ?? fileSlug
      : fileSlug),
    sourcePath: path,
    category,
    raw,
  };
});

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { meta: new Map<string, string>(), body: raw };
  }

  const meta = new Map<string, string>();
  match[1].split('\n').forEach((line) => {
    const index = line.indexOf(':');
    if (index === -1) return;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    meta.set(key, value);
  });

  return { meta, body: match[2].trim() };
}

function readTags(value = '') {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function readBoolean(value = 'false') {
  return value.toLowerCase() === 'true';
}

function readTitleFromBody(body: string, fallback: string) {
  const heading = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return heading || fallback;
}

function readSummaryFromBody(body: string) {
  return body
    .split('\n')
    .map((line) => line.trim())
    .find((line) =>
      line &&
      !line.startsWith('#') &&
      !line.startsWith('![') &&
      !line.startsWith('<!--') &&
      !line.startsWith('```')
    ) ?? '';
}

export const posts: BlogPost[] = sources
  .map(({ slug, sourcePath, category, raw }) => {
    const { meta, body } = parseFrontmatter(raw);

    return {
      slug,
      sourcePath,
      category,
      title: meta.get('title') ?? readTitleFromBody(body, slug),
      date: meta.get('date') ?? '2026-01-01',
      summary: meta.get('summary') ?? readSummaryFromBody(body),
      tags: uniqueTags([category, ...readTags(meta.get('tags'))]),
      cover: meta.get('cover'),
      readingTime: meta.get('readingTime') ?? '5 分钟',
      featured: readBoolean(meta.get('featured')),
      content: body,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

export function getPostBySlug(slug: string | undefined) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}
