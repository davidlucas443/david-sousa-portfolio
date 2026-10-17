import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Project } from '../content/portfolio';
import styles from './ProjectVideo.module.css';

export function ProjectVideo({ project, compact = false }: { project: Project; compact?: boolean }) {
  const inlineRef = useRef<HTMLVideoElement>(null);
  const expandedRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [reducedMotion, setReducedMotion] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [inlinePlaying, setInlinePlaying] = useState(false);
  const [expandedPlaying, setExpandedPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [expandedError, setExpandedError] = useState(false);
  const descriptionId = `video-description-${project.slug}-${compact ? 'home' : 'project'}`;
  const posterStyle = { backgroundImage: `url("${project.video.poster}")` };

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const video = inlineRef.current;
    if (!video) return;
    if (reducedMotion) {
      video.pause();
      return;
    }
    // A poster remains behind the video if the browser declines autoplay.
    void video.play().catch(() => setInlinePlaying(false));
  }, [reducedMotion, project.video.src, expanded]);

  useLayoutEffect(() => {
    if (!expanded) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    closeButtonRef.current?.focus();
    const video = expandedRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play().catch(() => setExpandedPlaying(false));
    }
  }, [expanded]);

  function openExpanded() {
    inlineRef.current?.pause();
    setExpandedError(false);
    setExpandedPlaying(false);
    setExpanded(true);
  }

  function closeExpanded() {
    dialogRef.current?.close();
  }

  function handleClose() {
    expandedRef.current?.pause();
    setExpandedPlaying(false);
    setExpanded(false);
    openButtonRef.current?.focus();
  }

  return (
    <div className={`${styles.wrapper} ${compact ? styles.compact : ''}`}>
      <p id={descriptionId} className={styles.srOnly}>{project.video.description}</p>
      <div className={styles.stage} style={posterStyle}>
        {!expanded && <video
          ref={inlineRef}
          className={`${styles.video} ${!inlinePlaying ? styles.posterVisible : ''}`}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="none"
          poster={project.video.poster}
          width="1920"
          height="1080"
          src={reducedMotion ? undefined : project.video.src}
          aria-hidden="true"
          onPlaying={() => setInlinePlaying(true)}
          onPause={() => setInlinePlaying(false)}
          onError={() => { setVideoError(true); setInlinePlaying(false); }}
          onLoadedData={() => setVideoError(false)}
        />}
        <button ref={openButtonRef} className={styles.expand} type="button" onClick={openExpanded} aria-label={`Ampliar vídeo do ${project.name}`} aria-describedby={descriptionId}>
          <span className={styles.expandIcon} aria-hidden="true">⛶</span>
        </button>
      </div>
      {videoError && <p className={styles.error} role="alert">Não foi possível carregar o vídeo. A prévia permanece disponível.</p>}
      <dialog ref={dialogRef} className={styles.dialog} aria-label={`Vídeo ampliado do ${project.name}`} onClose={handleClose}>
        <div className={styles.expandedStage} style={posterStyle}>
          {expanded && <video
            ref={expandedRef}
            className={`${styles.video} ${!expandedPlaying ? styles.posterVisible : ''}`}
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="none"
            poster={project.video.poster}
            width="1920"
            height="1080"
            src={project.video.src}
            aria-label={`Apresentação ampliada do ${project.name}`}
            aria-describedby={descriptionId}
            onPlaying={() => setExpandedPlaying(true)}
            onPause={() => setExpandedPlaying(false)}
            onError={() => { setExpandedError(true); setExpandedPlaying(false); }}
            onLoadedData={() => setExpandedError(false)}
          />}
          <button ref={closeButtonRef} className={styles.close} type="button" onClick={closeExpanded} aria-label={`Fechar vídeo do ${project.name}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg>
          </button>
        </div>
        {expandedError && <p className={styles.error} role="alert">Não foi possível carregar o vídeo ampliado.</p>}
      </dialog>
    </div>
  );
}
