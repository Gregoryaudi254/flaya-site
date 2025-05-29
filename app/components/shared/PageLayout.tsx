'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Features', href: '/#features' },
  { name: 'For Business', href: '/#business' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/contact' },
]

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export default function PageLayout({ children, title, description }: PageLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-red-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:gap-x-4">
            <Link
              href="/#download"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-red-400 transition-colors"
            >
              Download App
            </Link>
            <Link
              href="/#business"
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
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6 space-y-2">
                    <Link
                      href="/#download"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Download App
                    </Link>
                    <Link
                      href="/#business"
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

      {/* Main Content */}
      <main className="pt-24">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {title}
              </h1>
              {description && (
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  {description}
                </p>
              )}
            </motion.div>
          </div>
        </div>

        {/* Page Content */}
        <div className="py-16 sm:py-20">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Link href="/">
                <span className="text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Flaya
                </span>
              </Link>
              <p className="text-sm leading-6 text-gray-400">
                Connecting neighborhoods, one post at a time. Building stronger communities through local connections.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="/#features" className="text-sm leading-6 text-gray-400 hover:text-white">Features</Link></li>
                    <li><Link href="/#download" className="text-sm leading-6 text-gray-400 hover:text-white">Download</Link></li>
                    <li><Link href="/#business" className="text-sm leading-6 text-gray-400 hover:text-white">For Business</Link></li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li><Link href="/contact" className="text-sm leading-6 text-gray-400 hover:text-white">Contact Us</Link></li>
                    <li><Link href="/safety" className="text-sm leading-6 text-gray-400 hover:text-white">Safety</Link></li>
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