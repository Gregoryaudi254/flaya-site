'use client'

import PageLayout from '../components/shared/PageLayout'
import { motion } from 'framer-motion'

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Personal information you provide when creating an account (name, email, phone number)',
      'Location data to connect you with nearby users and businesses',
      'Content you share on the platform (posts, comments, photos)',
      'Usage data and analytics to improve our services',
      'Device information and technical data for security and optimization'
    ]
  },
  {
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our location-based social networking services',
      'To connect you with nearby users and local businesses',
      'To personalize your experience and show relevant content',
      'To communicate with you about updates, features, and support',
      'To ensure platform safety and prevent misuse',
      'To improve our services through analytics and research'
    ]
  },
  {
    title: 'Information Sharing',
    content: [
      'We do not sell your personal information to third parties',
      'Your posts and profile information are visible to other users as per your privacy settings',
      'Location data is used to show you nearby content but exact location is never shared',
      'We may share anonymized, aggregated data for business insights',
      'Legal compliance: We may disclose information when required by law'
    ]
  },
  {
    title: 'Data Security',
    content: [
      'We use industry-standard encryption to protect your data',
      'Regular security audits and updates to our systems',
      'Limited access to personal data on a need-to-know basis',
      'Secure servers and data centers with physical and digital protection',
      'Incident response procedures for any potential security breaches'
    ]
  },
  {
    title: 'Your Rights and Choices',
    content: [
      'Access, update, or delete your personal information at any time',
      'Control your privacy settings and who can see your content',
      'Opt out of non-essential communications',
      'Request a copy of your data or account deletion',
      'Contact us with any privacy-related questions or concerns'
    ]
  },
  {
    title: 'Data Retention',
    content: [
      'We retain your data as long as your account is active',
      'Some information may be kept for legal or security purposes',
      'Deleted content is removed from active systems but may persist in backups',
      'You can request complete data deletion by contacting support'
    ]
  }
]

export default function Privacy() {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description="Your privacy is important to us. Learn how we collect, use, and protect your information."
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
              At Flaya, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your data when you use our 
              location-based social networking platform.
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

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-red-100 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:privacy@flaya.app"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-red-600 transition-colors"
              >
                Email Privacy Team
              </a>
            </div>
          </motion.div>

          {/* Legal Notice */}
          <div className="mt-12 p-6 bg-gray-800 rounded-xl border border-gray-700">
            <p className="text-sm text-gray-400 text-center">
              <strong>Legal Notice:</strong> By using Flaya, you acknowledge that you have read, 
              understood, and agree to this Privacy Policy. We reserve the right to update this 
              policy at any time, and we will notify users of significant changes through the app 
              or via email.
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
} 