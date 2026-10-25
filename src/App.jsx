import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
export default function App(){const [theme,setTheme]=useState(()=>localStorage.getItem('portfolio-theme')||'dark');useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme)},[theme]);useEffect(()=>{document.title='Arpit Jayshwal — Developer Portfolio'},[]);return <><Navbar theme={theme} onToggleTheme={()=>setTheme(theme==='dark'?'light':'dark')}/><main><Hero/><div className="hero-divider container"/><About/><Skills/><Projects/><Experience/><Education/><Contact/></main><Footer/></>}
