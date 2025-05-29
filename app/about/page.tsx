'use client'

import PageLayout from '../components/shared/PageLayout'
import { motion } from 'framer-motion'
import { HeartIcon, UserGroupIcon, MapPinIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const values = [
  {
    icon: HeartIcon,
    name: 'Community First',
    description: 'We believe that strong communities are built on genuine connections and mutual support.'
  },
  {
    icon: UserGroupIcon,
    name: 'Local Focus',
    description: 'Our platform is designed to strengthen neighborhood bonds and support local businesses.'
  },
  {
    icon: MapPinIcon,
    name: 'Location-Based',
    description: 'Real connections happen in real places. We connect you with people and businesses nearby.'
  },
  {
    icon: LightBulbIcon,
    name: 'Innovation',
    description: 'We continuously improve our platform to better serve communities and local economies.'
  }
]

const team = [
  {
    name: 'Gregory Audi',
    role: 'Founder & CEO',
    bio: 'Passionate about building technology that brings communities together.',
    image: '/team-1.jpg'
  },
  
]

export default function About() {
  return (
    <PageLayout 
      title="About Flaya" 
      description="We're on a mission to strengthen communities by connecting neighbors and supporting local businesses."
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-8 text-gray-300 mb-8">
            Flaya was born from the belief that technology should bring people together, not isolate them. 
            We're building a platform that strengthens communities by connecting neighbors and empowering 
            local businesses to thrive in the digital age.
          </p>
          <p className="text-lg leading-8 text-gray-300">
            Every neighborhood has its own unique character, local heroes, and hidden gems. Our goal is to 
            help you discover and celebrate what makes your community special while building lasting 
            relationships with the people and businesses around you.
          </p>
        </motion.div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              These principles guide everything we do at Flaya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.name}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We're a passionate team of builders, dreamers, and community advocates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-700 transition-colors"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl hidden">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-red-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Building Stronger Communities
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Whether you're looking to connect with neighbors or grow your local business, 
            Flaya is here to help you thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#download"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-red-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Download App
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-red-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
} 