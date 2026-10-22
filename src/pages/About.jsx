import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center text-center px-6 text-white"
        >
            <h2 className="mb-8 text-3xl font-bold">About me</h2>

            <div className="space-y-4 leading-relaxed text-gray-200 text-center  font-light">
                <p>
                    Hi, I'm a Full Stack Developer focused on building web applications using JavaScript, React.js, Node.js, Express.js, and MongoDB.
                    I enjoy creating practical applications, working with APIs, and learning how frontend and backend systems work together.
                    I'm passionate about solving problems, building real-world projects, and continuously improving my development skills through hands-on experience.
                </p>
            </div>
        </motion.div>
    )
}

export default About
