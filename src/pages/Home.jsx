import { motion } from "framer-motion"
import me from "../assets/me.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 
        bg-gradient-to-b from-indigo-900 via-slate-600 to-slate-900 text-white">
            <motion.img
                src={me}
                alt="Gokul Shrestha"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl"
            />
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 max-w-2xl text-3xl md:text-5xl font-semibold leading-snug"
            >
                Hello, I'm <span className="font-bold">Gokul Shrestha</span>. I'm a{" "}
                <span className="font-bold">MERN stack developer.</span>
            </motion.h1>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="#contact" className="rounded-full bg-neutral-900 px-6 py-3 font-medium hover:bg-neutral-800">
                    Contact me →
                </a>
                <a href="/CV_Gokul.pdf" target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-6 py-3 font-medium hover:bg-white/20">
                    Download CV
                </a>
                <a
                    href="https://github.com/kailashshrestha3"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="rounded-full bg-white/10 px-4 py-3 hover:bg-white/20"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/gokul-shrestha-008169303/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="rounded-full bg-white/10 px-4 py-3 hover:bg-white/20"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}

export default Home