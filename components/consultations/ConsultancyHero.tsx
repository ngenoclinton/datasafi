"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function ConsultancyHero() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://img.freepik.com/free-photo/side-view-businesswoman-showing-analytical-charts-her-male-coworker_1098-20620.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
          alt="Data consultancy team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#092c3f]/80"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col gap-8">            
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Data Consultancy That Powers <span className="text-[#eb566c]">Smarter</span> Decisions
              </motion.h1>

              {/* Circular explore button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-4"
              >
                <div className="relative w-36 h-36 rounded-full border-2 border-white/30 flex items-center justify-center group cursor-pointer">
                  <div className="absolute w-3 h-3 bg-[#e8ff8d] rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="text-center">
                    {/* <p className="text-white text-sm">Get Started</p> */}
                    <p className="text-white text-base flex items-center justify-center">
                    Get Started<ArrowRight className="ml-1 h-3 w-3" />
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-white"
            >
              <p className="text-base md:text-lg max-w-xl">
                Our comprehensive data management solutions go beyond precision and security — they are designed to
                empower businesses to thrive in today's data-driven world. We leverage the convenience of cloud
                computing to provide dashboards that provide a 360-degree view of businesses with the most important
                metrics in one place.
              </p>

              {/* Play button */}
              <motion.div
                className="absolute hidden md:visible right-12 md:top-32 md:right-24"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#eb566c] flex items-center justify-center cursor-pointer hover:bg-[#eb566c]/90 transition-colors">
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated chart overlay */}
      <motion.div
        className="absolute bottom-12 right-12 md:bottom-24 md:right-24 flex items-end h-[150px] w-[250px] gap-2 lg:z-10 opacity-1 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {[0.6, 0.4, 0.7, 0.5, 0.8].map((height, i) => (
          <motion.div
            key={i}
            className={`w-10 rounded-t-md ${i % 2 === 0 ? "bg-[#eb566c]" : "bg-[#e8ff8d]"}`}
            initial={{ height: 0 }}
            animate={{ height: `${height * 100}%` }}
            transition={{
              delay: 1.2 + i * 0.1,
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}
