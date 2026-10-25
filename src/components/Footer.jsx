import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/portfolioData';

function FooterSocial({ href, label, children }) {
  return href
    ? <a href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>{children}</a>
    : <span className="footer-social-disabled" title={`Add your ${label} URL in src/data/portfolioData.js`} aria-label={`${label} link not configured`}>{children}</span>;
}

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>arpit<span className="brand-muted">/dev</span></span></a>
      <p>Designed & built with React. <span>© {new Date().getFullYear()} {profile.name}</span></p>
      <div className="footer-right">
        <div className="footer-socials">
          <FooterSocial href={profile.github} label="GitHub"><Github size={16} /></FooterSocial>
          <FooterSocial href={profile.linkedin} label="LinkedIn"><Linkedin size={16} /></FooterSocial>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={16} /></a>
        </div>
        <a className="back-top" href="#home">Back to top <ArrowUpRight size={15} /></a>
      </div>
    </div>
  </footer>;
}
