import { lazy, Suspense } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Radar } from 'lucide-react';
import { GitHubStar } from './components/GitHubStar';
import { CelestialAmbient } from './components/CelestialAmbient';
import { HomePage } from './pages/HomePage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const PostDetailPage = lazy(() => import('./pages/PostDetailPage').then((module) => ({ default: module.PostDetailPage })));
const PostsPage = lazy(() => import('./pages/PostsPage').then((module) => ({ default: module.PostsPage })));

const navItems = [
  { to: '/', label: '首页' },
  { to: '/posts', label: '文章' },
  { to: '/about', label: '关于' },
];

const siteAvatarUrl = `${import.meta.env.BASE_URL}gn00-site-avatar.webp?v=gn00-site-1`;

export function App() {
  return (
    <div className="app-shell">
      <CelestialAmbient />
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="返回首页">
          <span className="brand-mark brand-avatar brand-gundam-avatar" aria-hidden="true">
            <img src={siteAvatarUrl} alt="" />
          </span>
          <span>
            <strong>GN-00</strong>
            <small>CELESTIAL TEST LAB</small>
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
          <span>启动任务</span>
          <span className="hud-action-icon" aria-hidden="true">
            <Radar size={14} strokeWidth={1.7} />
          </span>
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
          <span className="brand-mark brand-avatar brand-gundam-avatar" aria-hidden="true">
            <img src={siteAvatarUrl} alt="" />
          </span>
          <p><strong>GN 测试日志</strong><small>记录、验证、沉淀。</small></p>
        </div>
        <span>© 2026 · GN SYSTEM / ONLINE</span>
      </footer>
    </div>
  );
}
