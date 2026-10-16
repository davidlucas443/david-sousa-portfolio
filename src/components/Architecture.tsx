import styles from './Architecture.module.css';

export function Architecture() {
  return (
    <div className={styles.scene}>
      <svg className={styles.diagram} viewBox="0 0 600 510" fill="none" role="img" aria-labelledby="architecture-title architecture-description">
        <title id="architecture-title">Da API aos dados</title>
        <desc id="architecture-description">Composição ilustrativa de módulos conectados: API, serviços e dados. Representa o interesse em backend, sem descrever a arquitetura de um projeto específico.</desc>
        <defs>
          <linearGradient id="glass-top" x1="100" y1="80" x2="400" y2="370" gradientUnits="userSpaceOnUse"><stop stopColor="#667078" stopOpacity=".5"/><stop offset=".5" stopColor="#22282e" stopOpacity=".5"/><stop offset="1" stopColor="#879099" stopOpacity=".24"/></linearGradient>
          <linearGradient id="glass-side" x1="140" y1="180" x2="330" y2="370" gradientUnits="userSpaceOnUse"><stop stopColor="#515b64" stopOpacity=".3"/><stop offset=".55" stopColor="#0b0e10" stopOpacity=".8"/><stop offset="1" stopColor="#717b85" stopOpacity=".28"/></linearGradient>
          <linearGradient id="edge" x1="80" y1="50" x2="410" y2="400" gradientUnits="userSpaceOnUse"><stop stopColor="#e2e7eb" stopOpacity=".8"/><stop offset=".5" stopColor="#8d979f" stopOpacity=".22"/><stop offset="1" stopColor="#e4e9ed" stopOpacity=".65"/></linearGradient>
          <radialGradient id="halo"><stop stopColor="#778692" stopOpacity=".17"/><stop offset="1" stopColor="#778692" stopOpacity="0"/></radialGradient>
          <filter id="glow" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="4"/></filter>
        </defs>
        <ellipse cx="305" cy="297" rx="285" ry="195" fill="url(#halo)"/>
        <g stroke="#76818a" strokeOpacity=".07"><path d="m10 350 290-165 290 165M10 390l290-165 290 165M10 430l290-165 290 165M90 270l290 165M160 230l290 165M230 190l290 165"/></g>
        <g className={styles.connections} stroke="url(#edge)" strokeWidth="1">
          <path d="M194 287C345 283 142 149 283 140"/>
          <path d="M329 153C283 268 468 244 446 367"/>
          <path d="M202 326C290 462 301 289 448 377"/>
          <path d="M302 128C104 18 84 191 241 218S380 298 345 401"/>
        </g>
        <g className={styles.module}>
          <path d="m83 301 115-64 127 70v27l-115 67-127-72z" fill="url(#glass-side)" stroke="url(#edge)"/>
          <path d="m83 301 115-64 127 70-115 66z" fill="url(#glass-top)" stroke="url(#edge)"/>
          <path d="m127 238 67-38 72 40v80l-66 38-73-40z" fill="url(#glass-side)" stroke="url(#edge)"/>
          <path d="m127 238 67-38 72 40-66 38z" fill="url(#glass-top)" stroke="url(#edge)"/>
          <path d="M200 278v80" stroke="url(#edge)"/>
          <path d="M125 192h40" stroke="#a8afb5" strokeOpacity=".45"/><text x="125" y="181">API</text>
        </g>
        <g className={styles.module}>
          <path d="m247 147 98-55 117 64v25l-98 56-117-64z" fill="url(#glass-side)" stroke="url(#edge)"/>
          <path d="m247 147 98-55 117 64-98 57z" fill="url(#glass-top)" stroke="url(#edge)"/>
          <path d="m286 67 61-34 68 37v78l-61 35-68-37z" fill="url(#glass-side)" stroke="url(#edge)"/>
          <path d="m286 67 61-34 68 37-61 35z" fill="url(#glass-top)" stroke="url(#edge)"/>
          <path d="M354 105v78" stroke="url(#edge)"/>
          <path d="M435 79h80" stroke="#a8afb5" strokeOpacity=".45"/><text x="435" y="68">SERVIÇOS</text>
        </g>
        <g className={styles.module}>
          <path d="m350 394 100-56 116 64v30l-100 57-116-65z" fill="url(#glass-side)" stroke="url(#edge)"/>
          <path d="m350 394 100-56 116 64-100 58z" fill="url(#glass-top)" stroke="url(#edge)"/>
          <path d="m391 357 57-32 62 35v35l-57 33-62-35z" fill="url(#glass-side)" stroke="url(#edge)"/>
          <path d="m391 357 57-32 62 35-57 33z" fill="url(#glass-top)" stroke="url(#edge)"/>
          <path d="M453 390v38" stroke="url(#edge)"/>
          <path d="m508 340 26-23h38" stroke="#a8afb5" strokeOpacity=".45"/><text x="526" y="305">DADOS</text>
        </g>
        <g className={styles.flow} stroke="#e9f0f5" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 280">
          <path d="M194 287C345 283 142 149 283 140"/>
          <path d="M329 153C283 268 468 244 446 367"/>
          <path d="M202 326C290 462 301 289 448 377"/>
        </g>
        <g fill="#e9f0f5"><g opacity=".75" filter="url(#glow)"><circle cx="290" cy="323" r="5"/><circle cx="332" cy="180" r="5"/><circle cx="415" cy="286" r="5"/></g><circle cx="290" cy="323" r="2"/><circle cx="332" cy="180" r="2"/><circle cx="415" cy="286" r="2"/></g>
      </svg>
    </div>
  );
}
