import { PixelLogo } from './components/PixelLogo'
import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { nav } from './data/portfolio'
import { Hero } from './sections/Hero'
import { Content } from './sections/Content'
export default function App() {
 const [theme, setTheme] = useState(() => {
  try { return localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' }
  catch { return 'dark' }
 })
 useEffect(() => {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f5f7fc' : '#090d14')
  try { localStorage.setItem('portfolio-theme', theme) } catch { /* Storage is optional. */ }
 }, [theme])
 const [menu, setMenu] = useState(false)
 const [active, setActive] = useState('home')
 const menuButton = useRef<HTMLButtonElement>(null)
 useEffect(() => {
  const close = (event: KeyboardEvent) => { if(event.key === 'Escape' && menu) { setMenu(false); menuButton.current?.focus() } }
  window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
 }, [menu])
 useEffect(() => {
  const update = () => {
   const sections = nav.map(label=>document.getElementById(label.toLowerCase())).filter((element): element is HTMLElement=>!!element)
   let current = 'home'
   for(const section of sections) if(section.getBoundingClientRect().top <= 180) current = section.id
   if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) current = 'contact'
   setActive(current)
  }
  window.addEventListener('scroll', update, { passive: true }); update()
  return () => window.removeEventListener('scroll', update)
 }, [])
 function navigateTo(id: string) {
  setMenu(false)
  const section = document.getElementById(id)
  if (section) { section.tabIndex = -1; section.focus({ preventScroll: true }) }
 }
 return <><a href="#main" className="skip-link">Skip to content</a><header><div className="nav-wrap"><a className="wordmark" href="#home" aria-label="Xindi Zheng home"><PixelLogo/></a><button className="theme-toggle" aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"} title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={19}/> : <Moon size={19}/>}</button><button ref={menuButton} className="menu-toggle" aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="navigation" onClick={()=>setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button><nav id="navigation" className={menu ? 'open' : ''} aria-label="Main navigation">{nav.map(item=><a key={item} href={'#'+item.toLowerCase()} aria-current={active===item.toLowerCase()?'location':undefined} onClick={()=>navigateTo(item.toLowerCase())}>{item}</a>)}</nav><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={15}/></a></div></header><main id="main"><Hero/><Content/></main></>
}


