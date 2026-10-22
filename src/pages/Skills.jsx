import { motion } from 'framer-motion'

const Skills = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express',
        'MongoDB', 'Tailwind', 'Framer Motion', 'Git', 'GitHub', 'Next.js', 'Zustand',
        'C', 'Python', 'Java', '.Net', 'MySql', 'VsCode']
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white rounded-2xl p-8 backdrop-blur">
            <h2 className="mb-6 text-center text-3xl font-bold">Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {
                    skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-2xl border border-white/10
                             bg-white/10 px-5 py-3 text-lg hover:bg-white/20">
                            {skill}
                        </span>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Skills