import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'
import { IoMdOpen } from 'react-icons/io'


const projects = [
    {
        id: 1,
        title: 'Online Book Store',
        image: '/book_store.png',
        description: 'A modern online book store platform enabling users to browse, search, and purchase books with secure checkout.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/kailashshrestha3/online-book-store',
        demo: 'https://online-book-store-six-chi.vercel.app/',
    },
    {
        id: 2,
        title: 'Eventora',
        subtitle: 'Event Booking Platform',
        image: '/event.png',
        description: 'A full-stack event booking platform designed to streamline event discovery, ticket reservation, and attendee booking management.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'],
        github: 'https://github.com/kailashshrestha3/Event-Booking-Web-App',
        demo: '',
    },
    {
        id: 3,
        title: 'URL Shortener',
        image: '',
        description: 'A fast, reliable URL shortening web application with custom link alias generation and click tracking analytics.',
        tech: ['React', 'Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/kailashshrestha3/url-shortener',
        demo: '',
    },
]

const Projects = () => {
    return (
        <div className="text-white">
            <h2 className="mb-8 text-center text-3xl font-bold">My Projects</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-800/80 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="h-48 w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-48 w-full flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 p-6 text-center border-b border-white/5">
                                <span className="text-2xl font-bold tracking-tight text-white">{project.title}</span>
                                {project.subtitle && (
                                    <span className="mt-1 text-xs font-medium text-blue-400">{project.subtitle}</span>
                                )}
                                <span className="mt-3 rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300 border border-blue-500/20">
                                    MERN Stack
                                </span>
                            </div>
                        )}

                        <div className="flex flex-1 flex-col p-5">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-300">{project.description}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((item) => (
                                    <span
                                        key={item}
                                        className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex gap-3 pt-4 border-t border-white/5">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/20 ${project.demo ? 'flex-1' : 'w-full'
                                        }`}
                                >
                                    <FaGithub size={16} />
                                    GitHub Code
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-md shadow-blue-600/30"
                                    >
                                        <IoMdOpen size={16} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Projects