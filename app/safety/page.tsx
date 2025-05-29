'use client'

import PageLayout from '../components/shared/PageLayout'
import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  EyeIcon, 
  UserGroupIcon, 
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'

const safetyTips = [
  {
    icon: ShieldCheckIcon,
    title: 'Protect Your Personal Information',
    tips: [
      'Never share your full address, phone number, or financial information publicly',
      'Use Flaya\'s built-in messaging system instead of giving out personal contact details',
      'Be cautious about sharing your exact location in real-time',
      'Review your privacy settings regularly to control who can see your information'
    ]
  },
  {
    icon: EyeIcon,
    title: 'Meeting People Safely',
    tips: [
      'Meet new people in public places with good lighting and foot traffic',
      'Tell a friend or family member about your plans and when to expect you back',
      'Trust your instincts - if something feels wrong, leave immediately',
      'Consider bringing a friend along to group events or meetings'
    ]
  },
  {
    icon: UserGroupIcon,
    title: 'Community Guidelines',
    tips: [
      'Be respectful and kind to all community members',
      'Report inappropriate behavior, harassment, or suspicious activity',
      'Verify business legitimacy before making purchases or sharing payment info',
      'Keep conversations appropriate and family-friendly'
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Online Communication',
    tips: [
      'Be cautious of people who ask for money or financial assistance',
      'Don\'t click on suspicious links or download files from unknown users',
      'Report users who make you uncomfortable or violate community guidelines',
      'Block and report users who send inappropriate messages or content'
    ]
  },
  {
    icon: MapPinIcon,
    title: 'Location Safety',
    tips: [
      'Use general location areas rather than exact addresses when posting',
      'Turn off location sharing when you\'re not actively using the app',
      'Be mindful of what your posts reveal about your location and routines',
      'Don\'t post real-time location updates that could compromise your safety'
    ]
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Red Flags to Watch For',
    tips: [
      'Users who refuse to meet in public or pressure you to meet privately',
      'Requests for money, gifts, or personal financial information',
      'Inconsistent stories or information that doesn\'t add up',
      'People who seem too eager to meet or move conversations off the platform'
    ]
  }
]

const emergencyContacts = [
  {
    name: 'Police Emergency',
    number: '999',
    description: 'For immediate emergency situations'
  },
  {
    name: 'Police Non-Emergency',
    number: '0800 729 999',
    description: 'For non-urgent police matters'
  },
  {
    name: 'Flaya Safety Team',
    contact: 'safety@flaya.app',
    description: 'Report safety concerns on our platform'
  }
]

export default function Safety() {
  return (
    <PageLayout 
      title="Safety Guidelines" 
      description="Your safety is our priority. Learn how to use Flaya safely and protect yourself online and offline."
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <div className="bg-blue-900/20 border border-blue-500/20 rounded-2xl p-8 mb-12">
            <div className="text-blue-400 text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Safety First
            </h2>
            <p className="text-gray-300">
              At Flaya, we're committed to creating a safe environment for our community. 
              These guidelines will help you use our platform safely and make positive 
              connections with your neighbors and local businesses.
            </p>
          </div>
        </motion.div>

        {/* Safety Tips */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Safety Guidelines
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Follow these best practices to stay safe while using Flaya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {safetyTips.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 mr-4">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-red-400 mr-3 mt-1 text-sm">✓</span>
                      <span className="text-gray-300 text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reporting Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-red-400 mr-4" />
              How to Report Safety Concerns
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">In the App</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Tap the three dots on any post or profile</li>
                  <li>• Select "Report" from the menu</li>
                  <li>• Choose the appropriate reason</li>
                  <li>• Provide additional details if needed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Emergency Situations</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Call local emergency services immediately</li>
                  <li>• Remove yourself from the situation if safe to do so</li>
                  <li>• Report the incident to our safety team</li>
                  <li>• Block the user on the platform</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div
                key={contact.name}
                className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{contact.name}</h3>
                <p className="text-2xl font-bold text-red-400 mb-2">
                  {contact.number || contact.contact}
                </p>
                <p className="text-gray-300 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help or Have Questions?
          </h2>
          <p className="text-red-100 mb-8">
            Our safety team is here to help. Don't hesitate to reach out if you have 
            concerns about your safety or the safety of others in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Contact Safety Team
            </a>
            <a
              href="mailto:safety@flaya.app"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Email Us Directly
            </a>
          </div>
        </motion.div>

        {/* Final Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Remember: Trust your instincts. If something doesn't feel right, it probably isn't. 
            Your safety is more important than being polite.
          </p>
        </div>
      </div>
    </PageLayout>
  )
} 