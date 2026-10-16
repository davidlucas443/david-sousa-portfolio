interface IconProps {
  name: 'arrow' | 'diagonal' | 'code' | 'education' | 'back' | 'github';
  className?: string;
}

const paths: Record<IconProps['name'], string> = {
  arrow: 'M4 12h15m-6-6 6 6-6 6',
  diagonal: 'M6 18 18 6M6 6h12v12',
  code: 'm7 5-6 7 6 7m10-14 6 7-6 7m-3-17-4 20',
  education: 'm2 8 10-5 10 5-10 5-10-5zm4 3v7l6 3 6-3v-7M2 8v9',
  back: 'M20 12H5m6-6-6 6 6 6',
  github: 'M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.2-1.7-.7-2.2 3.2-.4 6.7-1.6 6.7-7.2a5.5 5.5 0 0 0-1.5-3.8c.2-1 .2-2-.1-3 0 0-1.2-.4-3.9 1.5a13 13 0 0 0-7 0C5.8 1.4 4.6 1.8 4.6 1.8c-.3 1-.3 2-.1 3A5.5 5.5 0 0 0 3 8.6c0 5.6 3.5 6.8 6.7 7.2-.5.5-.7 1.3-.7 2.2v4',
};

export function Icon({ name, className }: IconProps) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
