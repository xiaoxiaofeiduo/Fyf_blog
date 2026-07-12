export type ArticleHeading = { id: string; text: string; level: 2 | 3 };

export function headingId(text: string) {
  return `section-${text.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')}`;
}

export function extractHeadings(markdown: string): ArticleHeading[] {
  const ids = new Map<string, number>();
  return markdown.split('\n').flatMap((line) => {
    const match = /^(##|###)\s+(.+?)\s*$/.exec(line.trim());
    if (!match) return [];
    const text = match[2].replace(/[*_`\[\]]/g, '').trim();
    const baseId = headingId(text);
    const count = ids.get(baseId) ?? 0;
    ids.set(baseId, count + 1);
    return [{ id: count ? `${baseId}-${count + 1}` : baseId, text, level: match[1].length as 2 | 3 }];
  });
}
