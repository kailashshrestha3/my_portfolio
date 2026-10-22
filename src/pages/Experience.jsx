import { motion } from 'framer-motion'
import { LuBriefcase } from 'react-icons/lu'

const experience = [
    {
        id: 1,
        company: 'Code IT',
        location: 'Dharan, Nepal (Remote)',
        role: 'Full Stack Web Development Intern',
        years: 'Aug 2026 - present',
        details: 'Working on full-stack web development using the MERN stack. Contributing to frontend and backend development, API integration, code reviews, and bug fixes while improving application functionality and coding skills.',
    },
]

const Experience = () => {
    return (
        <div className="text-white">
            <h2 className="mb-12 text-center text-3xl font-bold">My Experience</h2>

            <div className="relative mx-auto max-w-4xl">
                {/* Center line for desktop, left line for mobile */}
                <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-white/20 -translate-x-1/2" />

                <div className="space-y-12">
                    {experience.map((item, index) => {
                        const isLeft = index % 2 === 0

                        return (
                            <div
                                key={item.id}
                                className={`relative flex flex-col md:flex-row items-start ${
                                    isLeft ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Timeline Icon */}
                                <div className="absolute left-6 md:left-1/2 top-0 flex h-12 w-12 md:h-14 md:w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-700 text-white shadow-lg z-10">
                                    <LuBriefcase className="text-lg md:text-xl" />
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5 }}
                                    className={`ml-14 md:ml-0 md:w-[45%] rounded-2xl border border-white/10 bg-slate-800/90 p-5 md:p-6 backdrop-blur shadow-xl ${
                                        isLeft ? 'md:mr-auto' : 'md:ml-auto'
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                                            {item.years}
                                        </span>
                                        <span className="text-xs text-gray-400">{item.location}</span>
                                    </div>
                                    <h3 className="mt-3 text-lg font-bold text-white">{item.role}</h3>
                                    <p className="text-sm font-medium text-blue-400">{item.company}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.details}</p>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience