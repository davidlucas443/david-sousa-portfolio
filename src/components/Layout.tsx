import type { ReactNode } from 'react';
import { profile } from '../content/portfolio';
import styles from './Layout.module.css';

export function Layout({ children, home = false }: { children: ReactNode; home?: boolean }) {
  return (
    <div className={styles.shell}>
      <a className={styles.skip} href="#conteudo">Pular para o conteúdo</a>
      <header className={styles.header}>
        <a href="/" className={styles.wordmark} aria-label="David Sousa, página inicial">{profile.name}<span>.</span></a>
        <nav aria-label="Navegação principal">
          <a href={home ? '#projetos' : '/#projetos'}>Projetos</a>
          <a href={home ? '#sobre' : '/#sobre'}>Sobre</a>
          <a href={home ? '#contato' : '/#contato'}>Contato</a>
        </nav>
      </header>
      <main id="conteudo" tabIndex={-1}>{children}</main>
      <footer className={styles.footer}><span>David Sousa</span><span>Da lógica à aplicação.</span><a href="#conteudo">Voltar ao topo ↑</a></footer>
    </div>
  );
}
