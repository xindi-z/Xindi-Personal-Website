import { ArrowDown, ArrowUpRight, Download, Github, MapPin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { ExternalLink } from '../components/ui'
export function Hero() {
 return <section id="home" className="hero section">
  <div className="hero-copy">
   <p className="availability"><span /> OPEN TO OPPORTUNITIES</p>
   <p className="hello">Hi, I’m Xindi.</p>
   <h1>Thoughtful code.<br /><span>Practical impact.</span></h1>
   <p className="hero-role"><strong>{profile.name}</strong> <span>/</span> {profile.title}</p>
   <p className="hero-description">{profile.intro}</p>
   <div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a><a className="button secondary" href={import.meta.env.BASE_URL + profile.resume} download><Download size={17}/> Resume <span className="file-label">{profile.resume.split(".").pop()?.toUpperCase()}</span></a></div>
   <div className="social-row"><ExternalLink href={profile.github}><Github size={17}/> GitHub</ExternalLink><ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink><a href="#contact">Let’s connect <ArrowUpRight size={16}/></a></div>
  </div>
  <div className="system-visual pixel-terminal" aria-label="Technical focus: software, AI, and connected systems">
   <div className="visual-top"><span className="terminal-prompt" aria-hidden="true">&gt;_</span><span>AN ENGINEER’S MINDSET</span><span className="visual-index">01 — XZ</span></div>
   <div className="code-lines"><p><span className="line">01</span><span className="purple">const</span> engineer = {'{'}</p><p><span className="line">02</span>  name: <span className="blue">'Xindi Zheng'</span>,</p><p><span className="line">03</span>  foundation: <span className="blue">'Computer Science'</span>,</p><p><span className="line">04</span>  focus: [<span className="blue">'Software'</span>, <span className="blue">'AI'</span>],</p><p><span className="line">05</span>  approach: <span className="blue">'Understand. Build. Refine.'</span></p><p><span className="line">06</span>{'}'};</p></div>
   <div className="system-flow"><span>UNDERSTAND</span><span className="flow-line"/><span>BUILD</span><span className="flow-line"/><span>REFINE</span></div>
   <div className="visual-bottom"><span>Software ↔ Data ↔ Real-world systems</span><span className="code-cursor"/></div>
  </div>
  <div className="hero-bottom"><span><MapPin size={15}/>{profile.location}</span><span>M.S. COMPUTER SCIENCE · NMSU</span><a href="#about">A little more about me <ArrowDown size={15}/></a></div>
 </section>
}



