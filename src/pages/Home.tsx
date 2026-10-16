import { Architecture } from '../components/Architecture';
import { Icon } from '../components/Icon';
import { Layout } from '../components/Layout';
import { ProjectCover } from '../components/ProjectCover';
import { profile, projects } from '../content/portfolio';
import styles from './Home.module.css';

export function Home() {
  return (
    <Layout home>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Desenvolvimento <span>·</span> Lógica <span>·</span> Impacto real</p>
          <h1 id="hero-title">{profile.name}<span>.</span></h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.tagline}>{profile.tagline}</p>
          <p className={styles.description}>{profile.intro}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#projetos">Explorar projetos <Icon name="arrow" /></a>
            {profile.contactLinks.map(link => <a key={link.href} className={styles.secondary} href={link.href} target="_blank" rel="noreferrer"><Icon name="github" />{link.label}<span className={styles.srOnly}> (nova aba)</span></a>)}
          </div>
        </div>
        <Architecture />
      </section>
      <section id="projetos" className={styles.projects} aria-labelledby="projects-title">
        <div className={styles.sectionHeading}>
          <div><p className={styles.index}>01 <span /></p><h2 id="projects-title">Projetos selecionados</h2></div>
          <p className={styles.aside}>Ideias, código e soluções<br />em construção.</p>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article key={project.slug} className={`${styles.project} ${styles[project.slug]}`}>
              <div className={styles.projectText}>
                <p className={styles.index}>{project.number}<span /></p>
                <div className={styles.projectTitle}><h3>{project.name}</h3>{project.status && <span className={styles.status}><span />{project.status}</span>}</div>
                <p className={styles.projectHeadline}>{project.headline}</p>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.contribution}><p className={styles.eyebrow}>Minha contribuição</p><p>{project.contribution}</p></div>
                <a className={styles.explore} href={`/projetos/${project.slug}`}>Explorar projeto <span className={styles.srOnly}>{project.name}</span><Icon name="diagonal" /></a>
              </div>
              <ProjectCover project={project} />
            </article>
          ))}
        </div>
      </section>
      <section id="sobre" className={styles.about} aria-labelledby="about-title">
        <div className={styles.aboutText}><p className={styles.index}>02 <span /></p><h2 id="about-title">Sobre mim</h2><p className={styles.aboutLead}>{profile.about}</p><p className={styles.aboutBody}>{profile.collaboration}</p></div>
        <div className={styles.facts}>
          <div className={styles.fact}><Icon name="code" /><div><p className={styles.eyebrow}>Tecnologias</p><ul className={styles.coreSkills}>{profile.coreSkills.map(skill => <li key={skill}>{skill}</li>)}</ul><p className={styles.secondarySkills}>{profile.otherSkills.join(' · ')}</p></div></div>
          <div className={styles.fact}><Icon name="education" /><div><p className={styles.eyebrow}>Formação</p><p>{profile.education}</p><p className={styles.secondarySkills}>{profile.graduation}</p></div></div>
          <div className={styles.learning}><p className={styles.eyebrow}>Em aprendizado</p><p>{profile.learning.join(' · ')}</p></div>
        </div>
      </section>
      <section id="contato" className={styles.contact} aria-labelledby="contact-title">
        <div><p className={styles.index}>03 <span /></p><h2 id="contact-title">Vamos conversar.</h2></div>
        <div className={styles.contactContent}><p>{profile.contact}</p><div className={styles.contactLinks}>{profile.contactLinks.map(link => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><Icon name="github" />{link.label}<span className={styles.srOnly}> (nova aba)</span><Icon name="diagonal" /></a>)}</div></div>
      </section>
    </Layout>
  );
}
