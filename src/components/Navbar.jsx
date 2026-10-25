import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const links = [['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact']];
export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return <header className="navbar-wrap"><nav className="navbar container" aria-label="Main navigation">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">A<span>.</span></span><span>arpit<span className="brand-muted">/dev</span></span></a>
    <div className={`nav-links ${open ? 'nav-open' : ''}`}>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <span>↗</span></a>
    </div>
    <div className="nav-actions"><button className="icon-button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button><button className="icon-button menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button></div>
  </nav></header>;
}
