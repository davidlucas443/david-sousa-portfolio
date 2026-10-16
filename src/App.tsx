import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { projects } from './content/portfolio';
import { Home } from './pages/Home';
import { ProjectPage } from './pages/ProjectPage';
import styles from './App.module.css';

export function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  useEffect(() => {
    if (pathname !== '/' && !projects.some(item => pathname === `/projetos/${item.slug}`)) {
      document.title = 'Página não encontrada — David Sousa';
    }
  }, [pathname]);
  if (pathname === '/') return <Home />;
  const project = projects.find(item => pathname === `/projetos/${item.slug}`);
  if (project) return <ProjectPage project={project} />;
  return <Layout><section className={styles.notFound}><p>404</p><h1>Página não encontrada.</h1><p>Explore os projetos e conheça meu trabalho na página inicial.</p><a href="/">Voltar ao início →</a></section></Layout>;
}
