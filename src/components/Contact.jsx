import { ArrowUpRight, Mail, MapPin, Copy, Check, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { profile } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }
  return <section id="contact" className="contact-section">
    <div className="container contact-inner">
      <p className="eyebrow">06 — HAVE A PROJECT IN MIND?</p>
      <h2>Let's make<br /><span>something useful.</span></h2>
      <p className="contact-description">Interested in working together, discussing an opportunity, or talking about software? My inbox is open.</p>
      <div className="contact-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>Send me an email <ArrowUpRight size={17} /></a>
        <button className="button button-secondary" onClick={copyEmail}>{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Email copied' : 'Copy email'}</button>
      </div>
      <div className="contact-details"><span><Mail size={16} />{profile.email}</span><span><MapPin size={16} />{profile.location}</span></div>
      <div className="contact-socials contact-socials-large">
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>
        {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a> : <span title="Add your LinkedIn URL in src/data/portfolioData.js"><Linkedin size={17} /> LinkedIn <small>URL not added yet</small></span>}
      </div>
    </div>
  </section>;
}
