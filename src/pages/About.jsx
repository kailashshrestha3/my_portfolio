import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
            <h2 className="mb-6 text-3xl font-bold">About me</h2>

            <div className="space-y-4 leading-relaxed text-gray-200">
                <p>
                    Hi, I'm a Full Stack Developer focused on building web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB. I enjoy creating practical applications, working with APIs, and learning how frontend and backend systems work together.
                    I'm passionate about solving problems, building real-world projects, and continuously improving my development skills through hands-on experience.
                </p>
                <p>

                </p>
                <p>
                    Finish with what you are learning now or what you want to work on next.
                </p>
            </div>
        </motion.div>
    )
}

export default About
