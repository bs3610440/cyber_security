import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MessageCircle, User, Send, MapPin, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [data, setData] = useState({ name: '', email: '', mobile: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const ContactData = [
    { Name: 'Name', placeHolder: 'Enter your name', type: 'text', icon: User, keyName: 'name' },
    { Name: 'Email Id', placeHolder: 'Enter your email', type: 'email', icon: Mail, keyName: 'email' },
    { Name: 'Mobile No', placeHolder: 'Enter your mobile number', type: 'tel', icon: Phone, keyName: 'mobile' },
    { Name: 'Message', placeHolder: 'Enter your message...', type: 'textarea', icon: MessageCircle, keyName: 'message' }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setData({ name: '', email: '', mobile: '', message: '' })
    }, 3000)
  }

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-16 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="space-y-10"
        >
          <motion.div variants={fadeUp}>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-lime-400 to-green-500 bg-clip-text text-transparent mb-4">
              Let’s Connect
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              Have a project or an idea in mind? Drop a message and let’s turn it into reality together.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            {[
              { icon: Mail, label: 'Email', value: 'bs@example.com' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              { icon: MapPin, label: 'Location', value: 'Haryana, India' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(0,255,100,0.05)' }}
                className="flex items-center gap-4 p-4 bg-black/50 backdrop-blur-md rounded-2xl border border-green-500/30 hover:border-green-400 transition-all duration-300 shadow-lg shadow-green-500/10"
              >
                <div className="p-3 bg-green-600/20 rounded-xl">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{item.label}</h3>
                  <p className="text-gray-400">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeUp} className="flex gap-4">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-black/70 backdrop-blur-sm rounded-xl border border-green-500/40 text-gray-400 hover:text-green-400 transition-all duration-300"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 120 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -50 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="bg-black/70 backdrop-blur-md rounded-3xl p-10 border border-green-500/50 text-center shadow-[0_0_30px_rgba(0,255,100,0.15)]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-400" />
                </motion.div>
                <h3 className="text-3xl font-bold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. I’ll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="bg-black/70 backdrop-blur-md rounded-3xl p-10 border border-green-500/30 space-y-6 shadow-[0_0_25px_rgba(0,255,100,0.15)]"
              >
                {ContactData.map((item) => (
                  <motion.div key={item.keyName} variants={fadeUp} className="space-y-2">
                    <label htmlFor={item.keyName} className="text-green-400 font-medium flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-green-400" />
                      {item.Name}
                    </label>
                    {item.type === 'textarea' ? (
                      <textarea
                        name={item.keyName}
                        value={data[item.keyName]}
                        onChange={handleChange}
                        placeholder={item.placeHolder}
                        rows="4"
                        required
                        className="w-full bg-black border border-green-500/30 rounded-xl px-4 py-3 text-green-100 placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                      />
                    ) : (
                      <input
                        type={item.type}
                        name={item.keyName}
                        value={data[item.keyName]}
                        onChange={handleChange}
                        placeholder={item.placeHolder}
                        required
                        className="w-full bg-black border border-green-500/30 rounded-xl px-4 py-3 text-green-100 placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                      />
                    )}
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-lime-500 hover:from-green-400 hover:to-lime-400 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/25"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
