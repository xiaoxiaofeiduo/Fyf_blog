import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { Button, Footer, Icon } from 'animal-island-ui';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { PostDetailPage } from './pages/PostDetailPage';
import { PostsPage } from './pages/PostsPage';

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
          <span className="brand-mark">
            <Icon name="icon-map" />
          </span>
          <span>
            <strong>云飞</strong>
            <small>安全测试日志</small>
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

        <Link className="header-action" to="/posts">
          <Button type="primary" size="small">开始阅读</Button>
        </Link>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:slug" element={<PostDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer type="sea" />
    </div>
  );
}
