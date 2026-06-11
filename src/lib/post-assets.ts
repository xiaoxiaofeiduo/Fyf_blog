export const postAssetMap = import.meta.glob('../content/posts/**/*.{png,jpg,jpeg,gif,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;
