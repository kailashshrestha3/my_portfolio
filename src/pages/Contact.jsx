import { useState } from 'react'
import { motion } from 'framer-motion'
import { LuSend } from 'react-icons/lu'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState({ state: 'idle', message: '' }) // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus({ state: 'sending', message: 'Sending message...' })

        try {
            // Using Web3Forms free API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    // If you have a Web3Forms access key, replace this with your key:
                    access_key: 'YOUR_ACCESS_KEY_HERE',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Portfolio Message from ${formData.name}`,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus({ state: 'success', message: 'Thank you! Your message has been sent.' })
                setFormData({ name: '', email: '', message: '' })
            } else {
                // If access key isn't set yet, provide mailto fallback
                window.location.href = `mailto:clasherkailash123@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`
                setStatus({
                    state: 'success',
                    message: 'Drafted in your email client! You can send it directly.',
                })
            }
        } catch {
            window.location.href = `mailto:clasherkailash123@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`
            setStatus({
                state: 'success',
                message: 'Opening your email client to send message...',
            })
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
        >
            <h2 className="mb-4 text-center text-3xl font-bold">Contact Me</h2>
            <p className="mb-8 text-center text-gray-300">
                Reach me directly at{' '}
                <a href="mailto:clasherkailash123@gmail.com" className="underline hover:text-blue-300">
                    clasherkailash123@gmail.com
                </a>
                , or send a message below.
            </p>

            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-xl space-y-4 rounded-2xl border border-white/10 bg-slate-800 p-6 md:p-8 shadow-xl backdrop-blur"
            >
                <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
                        Your Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-300">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello, I would like to talk about..."
                        required
                        className="w-full rounded-lg border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    />
                </div>

                {status.message && (
                    <div
                        className={`flex items-center gap-2 rounded-lg p-3 text-sm ${status.state === 'error'
                            ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            }`}
                    >
                        <span>{status.message}</span>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status.state === 'sending'}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50"
                >
                    <LuSend size={18} />
                    {status.state === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </motion.div>
    )
}

export default Contact