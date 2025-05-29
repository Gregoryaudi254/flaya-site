'use client'

import { useState } from 'react'
import PageLayout from '../components/shared/PageLayout'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const contactMethods = [
  {
    icon: EnvelopeIcon,
    name: 'Email',
    description: 'Get in touch via email',
    contact: 'otile992@gmail.com',
    href: 'mailto:otile992@gmail.com'
  },
  {
    icon: PhoneIcon,
    name: 'Phone',
    description: 'Call us directly',
    contact: '+254 748 504 747',
    href: 'tel:+254748504747'
  },
  {
    icon: MapPinIcon,
    name: 'Office',
    description: 'Visit our office',
    contact: 'Nairobi, Kenya',
    href: '#'
  }
]

const supportTypes = [
  {
    icon: QuestionMarkCircleIcon,
    name: 'General Support',
    description: 'Questions about using Flaya'
  },
  {
    icon: UserGroupIcon,
    name: 'Business Inquiries',
    description: 'Partnership and business opportunities'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    name: 'Feedback',
    description: 'Share your thoughts and suggestions'
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <PageLayout 
      title="Contact Us" 
      description="We'd love to hear from you. Get in touch with our team."
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the best way to reach us. We're here to help!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors group"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 shadow-lg group-hover:shadow-xl transition-shadow">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.name}</h3>
                <p className="text-gray-300 mb-3">{method.description}</p>
                <p className="text-red-400 font-medium">{method.contact}</p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Send us a message
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-500 rounded-xl p-6 text-center">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Support</option>
                    <option value="business">Business Inquiries</option>
                    <option value="feedback">Feedback</option>
                    <option value="technical">Technical Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>

          {/* Support Types */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              How can we help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Choose the type of support you need and we'll direct your message to the right team.
            </p>

            <div className="space-y-6">
              {supportTypes.map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-500 to-orange-500 mr-4">
                      <type.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{type.name}</h3>
                      <p className="text-gray-300">{type.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* FAQ Link */}
            <div className="mt-8 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl">
              <h3 className="text-lg font-semibold text-white mb-2">
                Looking for quick answers?
              </h3>
              <p className="text-gray-300 mb-4">
                Check out our FAQ section for instant solutions to common questions.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
              >
                Visit FAQ →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  )
} 