"use client"

import Image from "next/image"
import Link from "next/link"
import { Globe, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl p-6 md:p-10">
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center mb-8 md:mb-12 gap-4">
          <div className="flex space-x-2">
            {/* <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clipRule="evenodd"
                />
              </svg>
            </div> */}
          </div>

          <h1 className="text-2xl md:text-3xl font-medium text-gray-800">
            Our Exceptional <span className="bg-[#e8ff8d] px-2 py-1 rounded">Services</span>
          </h1>

          {/* <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
            Browse Library +
          </Link> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Data Integration Card */}
          <motion.div
            className="bg-white rounded-xl shadow p-5 md:p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-gray-500" />
              <ArrowUpRight className="h-4 w-4 text-gray-400 mx-2" />
              <span className="text-gray-500 text-sm">Data Integration</span>
            </div>

            <div className="relative h-20 mb-6">
              {/* Overlapping circular images */}
              <div className="absolute left-0 top-0 w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100 z-40">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Data flow"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-10 top-0 w-16 h-16 rounded-full overflow-hidden border-2 border-green-100 z-30">
                <Image
                  src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop"
                  alt="Data integration"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-20 top-0 w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 z-20">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
                  alt="Server room"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-30 top-0 w-16 h-16 rounded-full overflow-hidden border-2 border-green-200 z-10">
                <Image
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop"
                  alt="Network"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-xl font-medium text-gray-800 mb-2">Data Integration</h2>
          </motion.div>

          {/* Quality Assurance Card */}
          <motion.div
            className="bg-white rounded-xl shadow p-5 md:p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-gray-500" />
              <ArrowUpRight className="h-4 w-4 text-gray-400 mx-2" />
              <span className="text-gray-500 text-sm">Quality Assurance</span>
            </div>

            <div className="mb-6 space-y-2">
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Data Validation
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Data Standards
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Data Transformation
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Data Cleansing
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Quality Monitoring
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  Data Profiling
                </span>
              </div>
            </div>

            <h2 className="text-xl font-medium text-gray-800 mb-2">Quality Assurance</h2>
          </motion.div>

          {/* Data Analytics Card */}
          <motion.div
            className="bg-white rounded-xl shadow p-5 md:p-6"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-gray-500" />
              <ArrowUpRight className="h-4 w-4 text-gray-400 mx-2" />
              <span className="text-gray-500 text-sm">Data Analytics</span>
            </div>

            <div className="mb-6 bg-[#f9ffdc] rounded-lg p-2 flex justify-center">
              <Image
                src="https://img.freepik.com/premium-photo/computer-screen-that-has-word-t-it_886588-9948.jpg?ga=GA1.1.1740906415.1743623674&semt=ais_hybrid&w=740"
                alt="Data Analytics Dashboard"
                width={300}
                height={150}
                className="rounded-lg w-full h-auto"
              />
            </div>

            <h2 className="text-xl font-medium text-gray-800 mb-2">Data Analytics</h2>
          </motion.div>
        </div>

        <div className="flex justify-center mt-8 md:mt-10">
          <motion.button
            className="bg-[#e8ff8d] hover:bg-[#d9f070] text-gray-800 font-medium py-2 px-6 rounded-full transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
          </motion.button>
        </div>
      </div>
    </div>
  )
}
