export type ArticleHeading = { id: string; text: string; level: 2 | 3 };

export function headingId(text: string) {
  return `section-${text.toLowerCase().trim().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')}`;
}

export function extractHeadings(markdown: string): ArticleHeading[] {
  return markdown.split('\n').flatMap((line) => {
    const match = /^(##|###)\s+(.+?)\s*$/.exec(line.trim());
    if (!match) return [];
    const text = match[2].replace(/[*_`\[\]]/g, '').trim();
    return [{ id: headingId(text), text, level: match[1].length as 2 | 3 }];
  });
}

