import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-600 via-indigo-900 to-slate-900 text-white">
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2 text-sm text-gray-300 shadow-lg backdrop-blur">
        {navLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 hover:bg-white/10 hover:text-white ${index === 0 ? 'bg-white/10 font-semibold text-white' : ''
              }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <section id="home" className="scroll-mt-24 min-h-screen">
        <Home />
      </section>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-24">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="education" className="scroll-mt-24">
          <Education />
        </section>
        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App