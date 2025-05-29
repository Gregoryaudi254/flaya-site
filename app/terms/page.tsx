'use client'

import PageLayout from '../components/shared/PageLayout'
import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using Flaya, you agree to be bound by these Terms of Service',
      'If you do not agree to these terms, you may not use our services',
      'We reserve the right to modify these terms at any time with notice to users',
      'Continued use of the service constitutes acceptance of updated terms'
    ]
  },
  {
    title: 'Description of Service',
    content: [
      'Flaya is a location-based social networking platform connecting neighbors and local businesses',
      'We provide tools for sharing content, discovering local businesses, and community interaction',
      'The service includes mobile applications and web-based interfaces',
      'Features may vary by location and are subject to change without notice'
    ]
  },
  {
    title: 'User Accounts and Responsibilities',
    content: [
      'You must be at least 13 years old to create an account',
      'Provide accurate and complete information when registering',
      'You are responsible for maintaining the security of your account',
      'Notify us immediately of any unauthorized account access',
      'You are responsible for all activities that occur under your account'
    ]
  },
  {
    title: 'Content and Conduct',
    content: [
      'You retain ownership of content you post but grant us license to use it',
      'Do not post illegal, harmful, or inappropriate content',
      'Respect other users and maintain a positive community environment',
      'No spam, harassment, hate speech, or misleading information',
      'We reserve the right to remove content that violates these terms'
    ]
  },
  {
    title: 'Privacy and Location Data',
    content: [
      'Your use of location services is governed by our Privacy Policy',
      'Location data is used to provide proximity-based features',
      'You can control location sharing through your device and app settings',
      'We do not sell location data to third parties'
    ]
  },
  {
    title: 'Business Users',
    content: [
      'Business accounts must represent legitimate local businesses',
      'Provide accurate business information and comply with local regulations',
      'No fraudulent business listings or misleading claims',
      'Payment terms apply for premium business features',
      'Additional terms may apply for business-specific features'
    ]
  },
  {
    title: 'Intellectual Property',
    content: [
      'Flaya and its features are protected by intellectual property laws',
      'You may not copy, modify, or distribute our software or content',
      'Respect third-party intellectual property rights in your posts',
      'Report copyright infringement through our designated process'
    ]
  },
  {
    title: 'Limitation of Liability',
    content: [
      'Flaya is provided "as is" without warranties of any kind',
      'We are not liable for indirect, incidental, or consequential damages',
      'Our liability is limited to the maximum extent permitted by law',
      'You use the service at your own risk'
    ]
  },
  {
    title: 'Termination',
    content: [
      'You may delete your account at any time through app settings',
      'We may suspend or terminate accounts that violate these terms',
      'Upon termination, your right to use the service ceases immediately',
      'Some provisions of these terms survive termination'
    ]
  }
]

export default function Terms() {
  return (
    <PageLayout 
      title="Terms of Service" 
      description="Please read these terms carefully before using Flaya."
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="mb-12 text-center">
            <p className="text-gray-300 text-lg">
              Last updated: December 2024
            </p>
            <p className="text-gray-300 mt-4">
              These Terms of Service ("Terms") govern your use of Flaya's location-based social 
              networking platform. By using our service, you agree to these terms and our Privacy Policy.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>

          {/* Important Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-yellow-900/20 border border-yellow-500/20 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              ⚠️ Important Notice
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Dispute Resolution:</strong> Any disputes arising from your use of Flaya 
                will be resolved through binding arbitration in accordance with the laws of Kenya.
              </p>
              <p>
                <strong>Governing Law:</strong> These terms are governed by the laws of Kenya, 
                without regard to conflict of law principles.
              </p>
              <p>
                <strong>Severability:</strong> If any provision of these terms is found to be 
                unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About These Terms?
            </h2>
            <p className="text-red-100 mb-6">
              If you have any questions about these Terms of Service or need clarification 
              on any provision, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:legal@flaya.app"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-red-600 transition-colors"
              >
                Email Legal Team
              </a>
            </div>
          </motion.div>

          {/* Related Links */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Privacy Policy</h3>
              <p className="text-gray-300 text-sm mb-4">
                Learn how we collect, use, and protect your personal information.
              </p>
              <a
                href="/privacy"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
              >
                Read Privacy Policy →
              </a>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">Safety Guidelines</h3>
              <p className="text-gray-300 text-sm mb-4">
                Tips for staying safe while using our platform and meeting neighbors.
              </p>
              <a
                href="/safety"
                className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
              >
                View Safety Tips →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
} 