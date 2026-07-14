import { lazy, Suspense } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { BookOpen, Compass, Map, UserRound } from 'lucide-react';
import { GitHubStar } from './components/GitHubStar';
import { MotionToggle } from './components/MotionSystem';
import { GnParticleCanvas } from './components/GnParticleCanvas';
import { KorokCounter, KorokSpot } from './components/KorokSpot';
import { HomePage } from './pages/HomePage';
import { posts } from './lib/posts';

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const PostDetailPage = lazy(() => import('./pages/PostDetailPage').then((module) => ({ default: module.PostDetailPage })));
const PostsPage = lazy(() => import('./pages/PostsPage').then((module) => ({ default: module.PostsPage })));

const navItems = [
  { to: '/', label: '天空', icon: Compass },
  { to: '/posts', label: '日志', icon: Map },
  { to: '/about', label: '旅人', icon: UserRound },
];

const avatarUrl = `${import.meta.env.BASE_URL}traveler-avatar.jpg`;

export function App() {
  const location = useLocation();
  const categories = new Set(posts.map((post) => post.category).filter(Boolean)).size;

  return (
    <div className="hyrule-app">
      <GnParticleCanvas />
      <div className="hyrule-atmosphere" aria-hidden="true"><i /><i /><i /></div>
      <div className="route-transition" key={location.pathname} aria-hidden="true"><span /></div>

      <header className="world-bar">
        <Link to="/" className="world-brand" aria-label="返回天空首页">
          <span className="triforce" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>云飞</strong><small>HYRULE FIELD NOTES</small></span>
        </Link>

        <nav className="rune-nav" aria-label="主导航">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => isActive ? 'rune-link is-active' : 'rune-link'}>
              <Icon size={16} strokeWidth={1.6} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="world-tools">
          <KorokCounter />
          <GitHubStar />
          <MotionToggle />
          <Link to="/about" className="traveler-mini" aria-label="查看旅人档案"><img src={avatarUrl} alt="" /></Link>
        </div>
      </header>

      <main className="world-content">
        <Suspense fallback={<div className="route-loading">正在展开海拉鲁地图…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:slug" element={<PostDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="korok-camp">
        <div className="camp-copy">
          <span className="camp-fire" aria-hidden="true"><i /><i /><i /></span>
          <div><strong>旅途会继续，记录不会消失。</strong><small>{posts.length} 篇日志 · {categories} 片区域</small></div>
        </div>
        <KorokSpot id="camp-korok" label="检查营火旁摇晃的树叶" />
        <p>非官方粉丝主题 · The Legend of Zelda 相关权利归 Nintendo 所有</p>
        <a href="https://wall.alphacoders.com/big.php?i=1272163" target="_blank" rel="noreferrer">背景素材来源</a>
      </footer>
    </div>
  );
}
