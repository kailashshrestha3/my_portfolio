import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { LuMenu, LuX } from 'react-icons/lu'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observers = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-2 rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white ${
              activeSection === link.href.replace('#', '') ? 'bg-white/10 font-semibold text-white' : ''
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile Navigation Header & Toggle */}
      <div className="md:hidden fixed top-4 right-4 left-4 z-50 flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/90 px-4 py-3 backdrop-blur shadow-lg">
        <span className="font-bold text-sm tracking-wide text-white">Gokul.dev</span>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="rounded-lg p-1.5 text-gray-300 hover:bg-white/10 hover:text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <LuX size={22} /> : <LuMenu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 right-4 left-4 z-50 rounded-2xl border border-white/10 bg-neutral-900/95 p-4 shadow-2xl backdrop-blur flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                activeSection === link.href.replace('#', '')
                  ? 'bg-blue-600/30 font-semibold text-blue-300'
                  : 'text-gray-300'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <section id="home" className="scroll-mt-24 min-h-screen">
        <Home />
      </section>

      <section id="about" className="scroll-mt-24 max-w-3xl mx-auto px-6 py-16">
        <About />
      </section>
      <section id="projects" className="scroll-mt-24 max-w-6xl mx-auto px-6 py-16">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-24">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Skills />
        </div>
      </section>
      <section id="education" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <Education />
      </section>
      <section id="experience" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <Experience />
      </section>
      <section id="contact" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-16">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App