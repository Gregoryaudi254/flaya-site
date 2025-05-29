'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  ArrowRightIcon, 
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  ShoppingBagIcon,
  StarIcon,
  HeartIcon,
  PlayIcon
} from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'For Business', href: '#business' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const features = [
  {
    icon: MapPinIcon,
    name: 'Location-Based Discovery',
    description: 'Connect with people and businesses in your immediate neighborhood with precise location matching.',
    gradient: 'from-red-500 to-orange-600'
  },
  {
    icon: PhotoIcon,
    name: 'Rich Media Sharing',
    description: 'Share photos, videos, stories, and text posts with your local community in real-time.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    name: 'Real-Time Interaction',
    description: 'Like, comment, and engage with your neighbors posts instantly. Build meaningful connections.',
    gradient: 'from-red-600 to-pink-600'
  },
  {
    icon: ShoppingBagIcon,
    name: 'Local Shopping',
    description: 'Discover and shop from local businesses. Browse products, check prices, and place orders.',
    gradient: 'from-orange-600 to-red-700'
  },
]

const businessFeatures = [
  {
    title: 'Online Store Creation',
    description: 'Create your complete online store within Flaya. Showcase products with beautiful galleries.',
    image: '🏪'
  },
  {
    title: 'Product Management',
    description: 'Easily list products, set prices, manage inventory, and track orders from one dashboard.',
    image: '📦'
  },
  {
    title: 'Local Marketing',
    description: 'Reach customers in your exact location. Get discovered by people walking by your business.',
    image: '📍'
  },
  {
    title: 'Order Management',
    description: 'Receive and manage online orders. Accept pickup and delivery requests seamlessly.',
    image: '🚚'
  }
]

const testimonials = [
  {
    name: 'Cynthia',
    role: 'Community Member Ruiru',
    content: 'Flaya helped me discover amazing local businesses I never knew existed. I&apos;ve made genuine friendships with my neighbors!',
    avatar: '/testimonial-1.jpg',
    rating: 5
  },
  {
    name: 'Mike Oti',
    role: 'Local Business Owner',
    content: 'Since joining Flaya, sales in my foodoutlet&apos;s traffic increased by 40%. The online ordering feature is a game-changer!',
    avatar: '/testimonial-2.jpg',
    rating: 5
  },
  {
    name: 'Emily wanjiku',
    role: 'Regular user',
    content: 'With Flaya, I can now find the best local businesses and buy from them. It&apos;s like having a personal tour guide for my neighborhood!',
    avatar: '/testimonial-3.jpg',
    rating: 5
  }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
        {/* Navigation */}
      <header className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex">
              <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Flaya
              </span>
              </Link>
            </div>
            
            <div className="flex lg:hidden">
              <button
                type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
                onClick={() => setMobileMenuOpen(true)}
              >
              <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
            
          <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
              <a
                  key={item.name}
                  href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-red-400 transition-colors"
                >
                  {item.name}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:gap-x-4">
            <Link
              href="#download"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-red-400 transition-colors"
            >
              Download App
                </Link>
              <Link
              href="#business"
              className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-shadow"
              >
              For Business
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-800">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Flaya
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-800">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    <Link
                      href="#download"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Download App
                    </Link>
                    <Link
                      href="#business"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-400 hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      For Business
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Connect with Your{' '}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Neighborhood
                  </span>{' '}
                  Like Never Before
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                  Flaya is the location-based social network that brings communities together. 
                  Share moments, discover local businesses, and build meaningful connections with people around you.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="#download"
                    className="group rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  >
                    Download App
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#features"
                    className="text-sm font-semibold leading-6 text-gray-300 hover:text-red-400 flex items-center gap-2 transition-colors"
                  >
                    Learn more
                    <PlayIcon className="h-4 w-4" />
                  </Link>
                </div>
                </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 flex items-center gap-x-6"
              >
                <div className="flex -space-x-2">
                  {['👩🏻‍💼', '👨🏽‍🍳', '👩🏼‍🏫', '👨🏻‍💻', '👩🏽‍🎨'].map((avatar, index) => (
                    <div key={index} className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center border-2 border-gray-700 text-lg">
                      {avatar}
                    </div>
                  ))}
                </div>
                <div className="text-sm leading-6 text-gray-400">
                  <strong className="font-semibold text-white">800+</strong> neighbors already connected
              </div>
            </motion.div>
            </div>

            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <motion.div
                style={{ y: y1 }}
                className="absolute left-1/2 top-0 -ml-16 w-32 h-96 bg-gradient-to-b from-red-500 to-orange-600 rounded-full blur-3xl opacity-20"
              />
              <motion.div 
                style={{ y: y2 }}
                className="absolute right-1/4 top-20 w-24 h-64 bg-gradient-to-b from-orange-500 to-red-600 rounded-full blur-3xl opacity-20"
              />
              
              {/* Floating App Screenshot */}
              <div className="relative mx-auto max-w-xs">
                <div className="relative">
                  {/* Main Screenshot */}
                  <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative z-10"
                  >
                    <Image 
                      src="/flaya-screenshot-1.jpg" 
                      alt="Flaya App Interface"
                      width={320}
                      height={640}
                      className="w-full h-auto rounded-3xl shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                      }}
                      onError={(e) => {
                        // Hide the image if it fails to load and show fallback
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    
                    {/* Fallback Mock Interface (hidden by default) */}
                    <div className="w-full aspect-[9/16] bg-gray-900 rounded-3xl shadow-2xl hidden overflow-hidden" style={{display: 'none', filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'}}>
                      {/* Mock App Interface */}
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">Flaya Feed</h3>
                          <MapPinIcon className="h-6 w-6" />
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-6 bg-gray-800 flex-1">
                        {/* Mock Posts */}
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl">👟</div>
                          <div className="flex-1">
                            <div className="bg-gray-700 rounded-xl p-4">
                              <p className="text-white text-sm">New Balance sneakers available! 👟</p>
                            </div>
                            <div className="flex items-center mt-3 space-x-6 text-gray-400">
                              <button className="flex items-center space-x-2 text-sm">
                                <HeartIcon className="h-5 w-5" />
                                <span>6</span>
                              </button>
                              <button className="flex items-center space-x-2 text-sm">
                                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                                <span>2</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-700 rounded-xl p-4">
                          <p className="text-white font-medium mb-4">Local marketplace</p>
                          <div className="grid grid-cols-3 gap-3">
                            <div className="bg-orange-100 rounded-lg p-3 text-center">
                              <span className="text-2xl">🍟</span>
                              <p className="text-gray-800 text-xs mt-1">Food</p>
                            </div>
                            <div className="bg-red-100 rounded-lg p-3 text-center">
                              <span className="text-2xl">👔</span>
                              <p className="text-gray-800 text-xs mt-1">Fashion</p>
                            </div>
                            <div className="bg-blue-100 rounded-lg p-3 text-center">
                              <span className="text-2xl">🔧</span>
                              <p className="text-gray-800 text-xs mt-1">Services</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 via-transparent to-orange-500/10 rounded-3xl blur-xl scale-105 -z-10"></div>
                  
                  {/* Floating elements around the screenshot */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <HeartIcon className="h-8 w-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <MapPinIcon className="h-7 w-7 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ 
                      y: [0, -8, 0],
                      x: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="absolute top-1/3 -left-6 w-12 h-12 bg-gradient-to-br from-red-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg opacity-80"
                  >
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-400">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need to connect locally
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Flaya brings the power of social networking to your immediate neighborhood, 
              creating authentic connections and supporting local businesses.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
                >
                  <dt className="flex flex-col items-center gap-y-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${feature.gradient} shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-xl font-semibold leading-7 text-white">
                      {feature.name}
                      </div>
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Business Features Section */}
      <section id="business" className="bg-gradient-to-br from-gray-800 to-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-400">For Businesses</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Grow your local business with Flaya
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Create your online presence, reach nearby customers, and boost foot traffic 
              with our comprehensive business tools.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-2">
            {businessFeatures.map((feature, index) => (
                <motion.div 
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-6xl mb-6">{feature.image}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-7">{feature.description}</p>
                <div className="mt-6">
                  <Link
                    href="#contact"
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-medium"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:shadow-lg transition-all duration-300"
            >
              Start Your Business Account
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 sm:py-32 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-400">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loved by communities everywhere
            </p>
                        </div>

          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-3xl shadow-lg p-8 lg:p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-orange-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl leading-8 text-white mb-8">
                &ldquo;{testimonials[currentTestimonial].content}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                  <Image 
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to initials if image doesn't load
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg hidden">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-300">{testimonials[currentTestimonial].role}</div>
                        </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="bg-gradient-to-r from-red-500 to-orange-500 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to connect with your neighborhood?
              </h2>
            <p className="mt-6 text-lg leading-8 text-red-100">
              Download Flaya today and start building meaningful connections in your community.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              
                <Link
                  href="https://play.google.com/store/apps/details?id=com.flayasapp.flayaco&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Image 
                    src="/googleplay.svg" 
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-40 w-auto"
                  />
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black" id="contact">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Flaya
              </span>
              <p className="text-sm leading-6 text-gray-400">
                Connecting neighborhoods, one post at a time. Building stronger communities through local connections.
              </p>
              <div className="flex space-x-6">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social) => (
                  <Link key={social} href="#" className="text-gray-600 hover:text-gray-400">
                    <span className="sr-only">{social}</span>
                    <div className="h-6 w-6 bg-current rounded" />
              </Link>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="#features" className="text-sm leading-6 text-gray-400 hover:text-white">Features</Link></li>
                    <li><Link href="#download" className="text-sm leading-6 text-gray-400 hover:text-white">Download</Link></li>
                    <li><Link href="#business" className="text-sm leading-6 text-gray-400 hover:text-white">For Business</Link></li>
                    <li><Link href="#" className="text-sm leading-6 text-gray-400 hover:text-white">API</Link></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                   
                    <li><Link href="/safety" className="text-sm leading-6 text-gray-400 hover:text-white">Safety</Link></li>
                    <li><Link href="/contact" className="text-sm leading-6 text-gray-400 hover:text-white">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="/about" className="text-sm leading-6 text-gray-400 hover:text-white">About</Link></li>
                   
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="/privacy" className="text-sm leading-6 text-gray-400 hover:text-white">Privacy</Link></li>
                    <li><Link href="/terms" className="text-sm leading-6 text-gray-400 hover:text-white">Terms</Link></li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-500">
              &copy; 2024 Flaya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
