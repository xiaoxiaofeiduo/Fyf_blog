import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Card } from 'animal-island-ui';
import { LocateFixed } from 'lucide-react';
import { HudDivider } from '../components/HudDivider';
import { SignalMarquee } from '../components/SignalMarquee';
import { formatDate, getPostBySlug, loadPostContent, posts } from '../lib/posts';
import { postAssetMap } from '../lib/post-assets';
import { renderMarkdown } from '../lib/markdown';

function decodeAssetUrl(url: string) {
  try {
    return decodeURIComponent(url);
  } catch {
    return url;
  }
}

function joinAssetPath(basePath: string, relativePath: string) {
  const parts = [...basePath.split('/'), ...relativePath.split('/')];
  const normalized: string[] = [];

  parts.forEach((part) => {
    if (!part || part === '.') return;
    if (part === '..') {
      if (normalized.length && normalized[normalized.length - 1] !== '..') {
        normalized.pop();
      } else {
        normalized.push(part);
      }
      return;
    }
    normalized.push(part);
  });

  return normalized.join('/');
}

export function PostDetailPage() {
  const { slug } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const [content, setContent] = useState('');
  const [isLoadingContent, setIsLoadingContent] = useState(Boolean(post));

  const returnToPosts = () => {
    if ((location.state as { fromPostsList?: boolean } | null)?.fromPostsList) {
      navigate(-1);
      return;
    }
    navigate('/posts');
  };

  useEffect(() => {
    let ignore = false;
    setContent('');
    setIsLoadingContent(Boolean(post));

    if (!post) return;

    loadPostContent(post)
      .then((nextContent) => {
        if (!ignore) setContent(nextContent);
      })
      .finally(() => {
        if (!ignore) setIsLoadingContent(false);
      });

    return () => {
      ignore = true;
    };
  }, [post]);

  if (!post) {
    return (
      <section className="page-section mission-page-background article-page-background">
        <Card className="empty-state">
          <h1>没有找到这篇文章</h1>
          <p>它可能已经被移动，或者链接里有一个拼写错误。</p>
          <Link to="/posts">
            <Button type="primary">返回文章列表</Button>
          </Link>
        </Card>
      </section>
    );
  }

  const postDir = post.sourcePath.slice(0, post.sourcePath.lastIndexOf('/'));
  const resolvePostAsset = (url: string) => {
    if (/^(https?:|data:|\/)/.test(url)) return url;
    const normalized = decodeAssetUrl(url).replace(/^\.\//, '');
    return postAssetMap[joinAssetPath(postDir, normalized)];
  };
  const resolvePostLink = (url: string) => {
    if (/^(https?:|mailto:|tel:|data:|#|\/)/.test(url)) return url;
    const normalized = decodeAssetUrl(url).replace(/^\.\//, '');
    if (!normalized.endsWith('.md')) return url;
    const targetPath = joinAssetPath(postDir, normalized);
    const targetPost = posts.find((item) => item.sourcePath === targetPath);
    return targetPost ? `#/posts/${targetPost.slug}` : url;
  };

  return (
    <article className="article-page mission-page-background article-page-background">
      <button className="floating-back-link" type="button" onClick={returnToPosts}>
        <span className="floating-back-icon" aria-hidden="true">
          <LocateFixed size={16} strokeWidth={1.7} />
        </span>
        <span>返回文章列表</span>
      </button>

      <header className="article-hero">
        <div className="article-meta">
          <span>{formatDate(post.date)}</span>
          <span>{post.readingTime}</span>
        </div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <div className="tag-row">
          {post.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <HudDivider />

      <Card className="article-card">
        <div className="article-content">
          {isLoadingContent ? <p>文章加载中...</p> : renderMarkdown(content, resolvePostAsset, resolvePostLink)}
        </div>
      </Card>

      <SignalMarquee
        variant="article"
        fullBleed
        items={['TACTICAL BRIEFING', 'INTELLIGENCE FILE', 'VERIFY TARGET', 'MISSION DATA']}
      />
    </article>
  );
}
