import { lazy, Suspense, useState } from 'react';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Radar } from 'lucide-react';
import { GitHubStar } from './components/GitHubStar';
import { CelestialAmbient } from './components/CelestialAmbient';
import { GnParticleCanvas } from './components/GnParticleCanvas';
import { MotionToggle } from './components/MotionSystem';
import { HomePage } from './pages/HomePage';
import { posts } from './lib/posts';

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const PostDetailPage = lazy(() => import('./pages/PostDetailPage').then((module) => ({ default: module.PostDetailPage })));
const PostsPage = lazy(() => import('./pages/PostsPage').then((module) => ({ default: module.PostsPage })));

const navItems = [
  { to: '/', label: '首页', code: '00' },
  { to: '/posts', label: '文章', code: '01' },
  { to: '/about', label: '关于', code: '02' },
];

const siteAvatarUrl = `${import.meta.env.BASE_URL}avatar.jpg?v=profile-1`;

export function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [transAm, setTransAm] = useState(false);
  const categories = new Set(posts.map((post) => post.category).filter(Boolean)).size;

  return (
    <div className={`app-shell ${transAm ? 'trans-am-active' : ''}`}>
      <CelestialAmbient />
      <GnParticleCanvas />
      <div className="route-scan" key={location.pathname} data-channel={location.pathname === '/' ? 'GN-00 HOME LINK' : location.pathname === '/about' ? 'PTOLEMAIOS CREW FILE' : 'VEDA ARCHIVE CHANNEL'} aria-hidden="true"><i /></div>
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="返回首页">
          <span className="brand-mark brand-avatar" aria-hidden="true">
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
              <small>{item.code}</small>{item.label}
            </NavLink>
          ))}
        </nav>

        <GitHubStar />
        <MotionToggle />

        <button className="header-action" type="button" onClick={() => {
          if (transAm) return;
          setTransAm(true);
          window.setTimeout(() => navigate('/posts'), 700);
          window.setTimeout(() => setTransAm(false), 3200);
        }}>
          <span>{transAm ? 'TRANS-AM' : '启动任务'}</span>
          <span className="hud-action-icon" aria-hidden="true">
            <Radar size={14} strokeWidth={1.7} />
          </span>
        </button>
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
          <span className="brand-mark brand-avatar" aria-hidden="true">
            <img src={siteAvatarUrl} alt="" />
          </span>
          <p><strong>GN 测试日志</strong><small>记录、验证、沉淀。</small></p>
        </div>
        <div className="footer-telemetry" aria-label="站点统计">
          <span><small>RECORDS</small><strong>{String(posts.length).padStart(2, '0')}</strong></span>
          <span><small>DOMAINS</small><strong>{String(categories).padStart(2, '0')}</strong></span>
          <span><small>VEDA LINK</small><strong className="status-ready">ONLINE</strong></span>
        </div>
        <span>© 2026 · GN SYSTEM / ONLINE</span>
      </footer>
    </div>
  );
}
