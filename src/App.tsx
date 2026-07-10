import { lazy, Suspense } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GitHubStar } from './components/GitHubStar';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const PostDetailPage = lazy(() => import('./pages/PostDetailPage').then((module) => ({ default: module.PostDetailPage })));
const PostsPage = lazy(() => import('./pages/PostsPage').then((module) => ({ default: module.PostsPage })));

const navItems = [
  { to: '/', label: '首页' },
  { to: '/posts', label: '文章' },
  { to: '/about', label: '关于' },
];

export function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="返回首页">
          <span className="brand-mark" aria-hidden="true">YF</span>
          <span>
            <strong>云飞</strong>
            <small>SECURITY LAB</small>
          </span>
        </NavLink>

        <nav className="site-nav" aria-label="主导航">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <GitHubStar />

        <Link className="header-action" to="/posts">
          <span>进入知识库</span>
          <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
        </Link>
      </header>

      <main>
        <Suspense fallback={<div className="route-loading">加载中...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:slug" element={<PostDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="site-footer">
        <div>
          <span className="brand-mark" aria-hidden="true">YF</span>
          <p><strong>云飞的测试日志</strong><small>记录、验证、沉淀。</small></p>
        </div>
        <span>© 2026 · BUILT FOR THE OPEN WEB</span>
      </footer>
    </div>
  );
}
