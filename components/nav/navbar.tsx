"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const logoFallbackRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle logo fallback
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = "none"

    // Clear any existing fallback to prevent duplication
    if (logoFallbackRef.current) {
      logoFallbackRef.current.innerHTML = ""
    }

    // Create fallback content
    const fallbackContent = `
      <div class="flex items-center space-x-2">
        <svg viewBox="0 0 24 24" class="h-6 w-6 text-[#e94d65]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8v8m-8-5v5m0-8v.01M12 4v16" />
        </svg>
        <span class="font-bold text-[#092c3f]">datasafi Data Analysts</span>
      </div>
    `

    if (logoFallbackRef.current) {
      logoFallbackRef.current.innerHTML = fallbackContent
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full mx-auto">
      {/* Bottom nav */}
      <div className="mx-auto">
        {/* Main navbar - glassy background with logo and navigation */}
        <motion.div
          className={cn(
            "backdrop-blur-md transition-all duration-300 flex justify-center items-center w-full px-4 sm:px-6 md:px-10",
            scrolled ? "bg-white/99 shadow-md" : "bg-white shadow-md",
          )}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container flex h-26 items-center justify-between">
            {/* Logo - Fixed position to stay above mobile menu */}
            <motion.div
              className="flex items-center relative z-[999]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-16 w-40">
                  {/* <Image
                    src="/logo.png"
                    alt="DataSafi Analysts"
                    fill
                    className="object-contain"
                    onError={handleLogoError}
                    priority
                  /> */}
                  <div ref={logoFallbackRef} className="absolute inset-0 flex items-center">
                    <div className="flex items-center space-x-3">
                      {/* Icon/Symbol */}
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#e94d65] to-[#092c3f] rounded-lg flex items-center justify-center shadow-lg">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M16 8v8m-8-5v5m0-8v.01M12 4v16" />
                            <circle cx="12" cy="12" r="1" fill="currentColor" />
                          </svg>
                        </div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#e94d65] rounded-full animate-pulse"></div>
                      </div>

                      {/* Text Logo */}
                      <div className="flex flex-col">
                        <div className="flex items-baseline space-x-1">
                          <span className="text-2xl font-bold bg-gradient-to-r from-[#092c3f] via-[#e94d65] to-[#092c3f] bg-clip-text text-transparent tracking-tight">
                            Data
                          </span>
                          <span className="text-2xl font-bold text-[#e94d65] tracking-tight">Safi</span>
                        </div>
                        <span className="text-xs font-medium text-[#092c3f]/70 tracking-wider uppercase -mt-1">
                          Analysts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about_datasafi" },
                { name: "Training", href: "/training" },
                { name: "Consultancy & More", href: "/consultancy" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                >
                  {item.name === "Contact" ? (
                    <Link
                      href={item.href}
                      className={`text-sm font-semibold text-white bg-[#092c3f] px-4 py-2 rounded shadow transition-all duration-300 ${
                        pathname === item.href ? "bg-[#e94d65]" : "hover:bg-[#092c3f]/90"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-all duration-300 relative group ${
                        pathname === item.href ? "text-[#e94d65]" : "text-[#092c3f] hover:text-[#e94d65]"
                      }`}
                    >
                      {item.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#e94d65] transition-all duration-300 ${
                          pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button - Fixed position to stay above mobile menu */}
            <motion.div
              className="md:hidden relative z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#092c3f] hover:text-[#e94d65] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e94d65] transition-colors duration-300"
                style={{ position: "relative", zIndex: 999 }}
              >
                <span className="sr-only">Open main menu</span>
                <div className="flex items-center gap-1">
                  {isMenuOpen ? (
                    <>
                      <X className="h-5 w-5" aria-hidden="true" />
                      <span className="text-sm font-medium">Close</span>
                    </>
                  ) : (
                    <>
                      <Menu className="h-5 w-5" aria-hidden="true" />
                      <span className="text-sm font-medium">Menu</span>
                    </>
                  )}
                </div>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Navigation Menu with Layered Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="md:hidden overflow-hidden">
              {/* Background Layer - Lowest z-index */}
              <motion.div
                className="fixed inset-0 bg-[#092c3f]/10 backdrop-blur-sm z-[40]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Menu Container - Lower z-index than logo and menu button */}
              <motion.div
                className="fixed inset-0 z-[50] bg-white/80 backdrop-blur-md border-b shadow-lg overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ pointerEvents: "auto" }}
              >
                {/* Mobile Menu Header with Logo and Close Button */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 bg-white/90">
                  {/* Logo in Mobile Menu */}
                  <Link href="/" className="flex items-center space-x-2 z-[999]">
                    <div className="relative h-12 w-48">
                      <div className="absolute inset-0 flex items-center">
                        <div className="flex items-center space-x-2">
                          {/* Mobile Icon */}
                          <div className="relative">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#e94d65] to-[#092c3f] rounded-lg flex items-center justify-center shadow-md">
                              <svg
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                              >
                                <path d="M16 8v8m-8-5v5m0-8v.01M12 4v16" />
                                <circle cx="12" cy="12" r="1" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#e94d65] rounded-full animate-pulse"></div>
                          </div>

                          {/* Mobile Text Logo */}
                          <div className="flex flex-col">
                            <div className="flex items-baseline space-x-1">
                              <span className="text-xl font-bold bg-gradient-to-r from-[#092c3f] via-[#e94d65] to-[#092c3f] bg-clip-text text-transparent tracking-tight">
                                Data
                              </span>
                              <span className="text-xl font-bold text-[#e94d65] tracking-tight">Safi</span>
                            </div>
                            <span className="text-xs font-medium text-[#092c3f]/70 tracking-wider uppercase -mt-1">
                              Analysts
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Close Button in Mobile Menu */}
                  <button
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center p-2 rounded-md text-[#092c3f] hover:text-[#e94d65] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e94d65] transition-colors duration-300 z-[999]"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                    <span className="text-sm font-medium ml-1">Close</span>
                  </button>
                </div>

                {/* Menu Items - Highest opacity, slides in last */}
                <motion.div
                  className="bg-white/95 backdrop-blur-md pt-2"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="px-4 pt-2 pb-5 space-y-2">
                    {[
                      { name: "Home", href: "/" },
                      { name: "About", href: "/about_datasafi" },
                      { name: "Training", href: "/training" },
                      { name: "Consultancy & More", href: "/consultancy" },
                      { name: "Contact", href: "/contact" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                            pathname === item.href
                              ? "text-[#e94d65] bg-gray-50"
                              : "text-[#092c3f] hover:text-[#e94d65] hover:bg-gray-50"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile Contact Info */}
                  <motion.div
                    className="px-5 py-4 border-t border-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <div className="flex items-center mb-3">
                      <Phone className="h-4 w-4 text-[#e94d65] mr-2" />
                      <span className="text-sm text-[#092c3f]">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-[#e94d65] mr-2" />
                      <span className="text-sm text-[#092c3f]">info@datasafidata.com</span>
                    </div>
                  </motion.div>

                  {/* Mobile Social Links */}
                  <motion.div
                    className="px-5 py-3 border-t border-gray-200"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    <div className="flex justify-center space-x-6">
                      <Link
                        href="https://facebook.com"
                        className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                      >
                        <Facebook className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://twitter.com"
                        className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                      >
                        <Twitter className="h-5 w-5" />
                      </Link>
                      <Link
                        href="https://linkedin.com"
                        className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href="mailto:info@example.com"
                        className="text-[#092c3f] hover:text-[#e94d65] transition-colors duration-300"
                      >
                        <Mail className="h-5 w-5" />
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Navbar
