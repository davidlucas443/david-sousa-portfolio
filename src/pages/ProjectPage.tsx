import { useEffect } from 'react';
import { Icon } from '../components/Icon';
import { Layout } from '../components/Layout';
import { ProjectVideo } from '../components/ProjectVideo';
import type { Project } from '../content/portfolio';
import { projects } from '../content/portfolio';
import styles from './ProjectPage.module.css';

export function ProjectPage({ project }: { project: Project }) {
  useEffect(() => {
    document.title = `${project.name} — David Sousa`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', `${project.name}: ${project.headline} Conheça o contexto e a contribuição de David Sousa.`);
  }, [project]);
  const next = projects.find(item => item.slug !== project.slug);
  return (
    <Layout>
      <a href="/#projetos" className={styles.back}><Icon name="back" />Todos os projetos</a>
      <section className={styles.overview} aria-labelledby="project-title">
        <div><p className={styles.eyebrow}>Projeto selecionado / {project.number}</p><h1 id="project-title">{project.name}<span>.</span></h1>{project.status && <p className={styles.status}>{project.status}</p>}<p className={styles.lead}>{project.overview}</p></div>
        <div className={styles.summary}><p className={styles.eyebrow}>Contexto</p><p>{project.context}</p><p className={styles.eyebrow}>Minha contribuição</p><p className={styles.contribution}>{project.contribution}</p></div>
      </section>
      <section className={styles.videoSection} aria-labelledby="video-title"><h2 id="video-title">Apresentação em vídeo.</h2><ProjectVideo project={project} /></section>
      <section className={styles.team} aria-labelledby="team-title"><h2 id="team-title">Produto e equipe.</h2><p>{project.team}</p></section>
      <section className={styles.editorial} aria-labelledby="contribution-title"><h2 id="contribution-title">Onde eu contribuí.</h2><div className={styles.editorialBody}>{project.responsibilities.map(item => <p key={item}>{item}</p>)}<p className={styles.learning}>{project.learning}</p></div></section>
      {project.technical.length > 0 && <section className={styles.technical} aria-labelledby="technical-title"><div><p className={styles.eyebrow}>Um olhar para o código</p><h2 id="technical-title">Detalhes técnicos.</h2></div><div>{project.technical.map(note => <details key={note.title}><summary>{note.title}<span aria-hidden="true">+</span></summary><div className={styles.detailBody}><p>{note.text}</p><a href={note.source.href} target="_blank" rel="noreferrer">{note.source.label}<span className={styles.newTab}> (nova aba)</span><Icon name="diagonal" /></a></div></details>)}</div></section>}
      <section className={styles.resources} aria-labelledby="resources-title"><h2 id="resources-title">Conheça o projeto.</h2><div>{project.links.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}<span className={styles.newTab}> (nova aba)</span><Icon name="diagonal" /></a>)}</div></section>
      {next && <a className={styles.next} href={`/projetos/${next.slug}`}><span><span className={styles.eyebrow}>Próximo projeto</span><span className={styles.nextName}>{next.name}</span></span><Icon name="arrow" /></a>}
    </Layout>
  );
}
