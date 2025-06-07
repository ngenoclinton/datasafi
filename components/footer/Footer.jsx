"use client"

import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, BarChart3 } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#092c3f] via-[#0a2d42] to-[#051926] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Grid Section */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
            {/* Company Logo & Description */}
            <div className="md:col-span-1">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo Icon */}
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#e94d65] to-[#eb566c] rounded-lg flex items-center justify-center shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#e94d65] rounded-full animate-pulse"></div>
                </div>

                {/* Logo Text */}
                <div className="flex flex-col">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl font-bold bg-gradient-to-r from-white via-[#e94d65] to-white bg-clip-text text-transparent tracking-tight">
                      Data
                    </span>
                    <span className="text-xl font-bold text-[#e94d65] tracking-tight">Safi</span>
                  </div>
                  <span className="text-xs font-medium text-white/70 tracking-wider uppercase -mt-1">Analysts</span>
                </div>
              </motion.div>

              <motion.p
                className="text-gray-300 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transforming complex data into strategic insights that drive business growth and competitive advantage.
              </motion.p>
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-5 w-5 text-[#e94d65]" />
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Location</h3>
              </div>
              <div className="text-gray-300 text-sm leading-6 space-y-1">
                <p>Thika Road Mall,</p>
                <p>3rd Floor,</p>
                <p>Thika Road,</p>
                <p>Nairobi, Kenya.</p>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explore</h3>
              <ul className="text-gray-300 space-y-3 text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Training", href: "/training" },
                  { name: "Contact", href: "/contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="hover:text-[#e94d65] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-0 h-0.5 bg-[#e94d65] transition-all duration-300 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <Phone className="h-5 w-5 text-[#e94d65]" />
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Contact Us</h3>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-[#e94d65]" />
                  <div>
                    <p className="text-white">
                      +254 <span className="text-[#e94d65] font-semibold">700 100700</span>
                    </p>
                    <p className="text-white">
                      +254 <span className="text-[#e94d65] font-semibold">777 770007</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-[#e94d65]" />
                  <p className="text-gray-300">datasafi@datasafidata.co.ke</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-[#092c3f] to-[#051926] px-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#e94d65] to-[#eb566c]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="py-8 flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © 2025 DataSafi Analysts. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {[
              { icon: FaTwitter, href: "#", label: "Twitter" },
              { icon: FaFacebookF, href: "#", label: "Facebook" },
              { icon: FaGlobe, href: "#", label: "Website" },
              { icon: FaInstagram, href: "#", label: "Instagram" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#e94d65] hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>

          {/* Legal Links */}
          <nav className="flex space-x-6 text-sm">
            {["Terms of Service", "Privacy Policy"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-[#e94d65] transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e94d65] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Powered by */}
        <motion.div
          className="pb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500">
            Powered by <span className="text-[#e94d65] font-semibold">ZenyT-tek</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
