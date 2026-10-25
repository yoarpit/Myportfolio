import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Download, Code2, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolioData';

function SocialLink({ href, label, children }) {
  if (!href) {
    return (
      <span className="social-icon social-icon-disabled" title={`Add your ${label} URL in src/data/portfolioData.js`} aria-label={`${label} link not configured`}>
        {children}
      </span>
    );
  }
  return <a className="social-icon" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>{children}</a>;
}

export default function Hero() {
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return <section id="home" className="hero-section container">
    <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
      <div className="availability"><span className="status-dot" /> OPEN TO INTERNSHIPS & OPPORTUNITIES</div>
      <p className="eyebrow">HELLO, WORLD. I'M</p>
      <h1>{profile.name.split(' ')[0]} <span>{profile.name.split(' ').slice(1).join(' ')}</span><i>.</i></h1>
      <h2>{profile.role}</h2>
      <p className="hero-description">{profile.intro} I work across backend development, Python applications, and Linux systems programming.</p>
      <div className="hero-ctas">
        <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
        <a className="button button-secondary" href="/resume.pdf" download="Arpit-Jayshwal-Resume.pdf"><Download size={16} /> Download resume</a>
      </div>
      <div className="social-block">
        <span className="social-label">FIND ME ONLINE</span>
        <div className="social-row">
          <SocialLink href={profile.github} label="GitHub"><Github size={18} /></SocialLink>
          <SocialLink href={profile.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialLink>
          <a className="social-icon" href={`mailto:${profile.email}`} aria-label="Email" title="Email"><Mail size={18} /></a>
          <span className="social-note">{profile.location}</span>
        </div>
      </div>
    </motion.div>

    <motion.div className="hero-visual portrait-stage" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} aria-label="Profile photo area">
      <div className="visual-grid" />
      <div className="portrait-glow" />
      <div className="portrait-orbit portrait-orbit-one" />
      <div className="portrait-orbit portrait-orbit-two" />
      <div className="portrait-frame">
        {profile.photo && photoAvailable ? <img className="portrait-image" src={profile.photo} alt={`${profile.name} portrait`} onError={() => setPhotoAvailable(false)} /> : (
          <div className="portrait-placeholder">
            <div className="placeholder-top"><span className="placeholder-dot" /> PROFILE PREVIEW</div>
            <div className="placeholder-monogram">AJ<span>.</span></div>
            <div className="placeholder-caption">YOUR PHOTO GOES HERE</div>
            <code>public/images/profile.jpg</code>
            <div className="placeholder-icon"><Code2 size={19} /></div>
          </div>
        )}
        <div className="portrait-overlay">
          <div><span className="portrait-kicker">SOFTWARE DEVELOPER</span><strong>{profile.name}</strong><small>Building with curiosity.</small></div>
          <span className="portrait-corner"><ArrowUpRight size={18} /></span>
        </div>
      </div>
      <div className="float-tag portrait-tag-top"><span className="tag-icon"><Code2 size={18} /></span><div><b>Problem solver</b><small>Curious by default</small></div></div>
      <div className="float-tag portrait-tag-bottom"><span className="tag-icon tag-green"><Sparkles size={18} /></span><div><b>Always learning</b><small>One commit at a time</small></div></div>
      <div className="hero-index">01 <span>/</span> 05</div>
    </motion.div>
    <a href="#about" className="scroll-hint"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={14} /></a>
  </section>;
}
