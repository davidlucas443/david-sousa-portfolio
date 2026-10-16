import type { Project } from '../content/portfolio';
import styles from './ProjectCover.module.css';

export function ProjectCover({ project }: { project: Project }) {
  return (
    <div className={`${styles.cover} ${styles[project.slug]}`}>
      <span className={styles.label}><span />Design do produto</span>
      <div className={styles.panels}>
        <div className={styles.brand}>
          <img src={project.brand.src} alt={project.brand.alt} width={project.brand.width} height={project.brand.height} loading="lazy" decoding="async" />
        </div>
        <div className={styles.interface}>
          <img src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  );
}
