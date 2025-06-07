"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  BarChart2,
  PieChart,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HowWeDoIt() {
  const sectionRef = useRef(null)
  const isVisible = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div id="data-analytics-section" className="w-full bg-white max-w-6xl mx-auto" ref={sectionRef}>
      <section className="relative w-full pb-10 md:pb-16 overflow-visible">
        <div className="container mx-auto px-4">

          {/* Dotted line background SVG */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[80%] h-[60%] pointer-events-none opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none">
              <path d="M200,100 C400,50 600,350 800,300" stroke="#092c3f" strokeWidth="1.5" strokeDasharray="5,5" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center">

            {/* Left Side Image */}
            <div className="w-full md:w-1/2 relative z-10 mb-12 md:mb-0">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#e8ff8d] rounded-full opacity-50" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#dc3545]/10 rounded-full" />

                {/* Wavy lines */}
                <svg className="absolute -bottom-4 -left-4 w-[60%] h-auto opacity-20" viewBox="0 0 100 30" fill="none">
                  <path d="M0 15 Q 25 0, 50 15 Q 75 30, 100 15" stroke="#092c3f" strokeWidth="1" />
                </svg>
                <svg className="absolute top-[10%] -right-4 w-[40%] h-auto opacity-15" viewBox="0 0 100 20" fill="none">
                  <path d="M0 10 Q 20 20, 40 10 Q 60 0, 80 10 Q 100 20, 120 10" stroke="#092c3f" strokeWidth="1" />
                </svg>

                {/* Main image */}
                <motion.div
                  className="relative rounded-lg overflow-hidden border-8 border-white"
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://img.freepik.com/free-photo/business-scene-top-view-with-laptop_23-2147626519.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                    alt="Data analytics dashboard showing charts and graphs"
                    className="w-full h-auto"
                    loading="lazy"
                  />

                  {/* Floating icons */}
                  <motion.div
                    className="absolute -top-4 -left-4 bg-white p-2 rounded-full"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  >
                    <BarChart2 className="w-5 h-5 text-[#dc3545]" />
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5 }}
                  >
                    <PieChart className="w-5 h-5 text-[#092c3f]" />
                  </motion.div>
                </motion.div>

                {/* Vertical Label */}
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-[2px] bg-[#092c3f]"></div>
                    <span className="text-xs tracking-widest text-[#092c3f] font-medium">DATA ANALYTICS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 md:pl-16">
              <motion.div
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-6 text-2xl md:text-3xl font-bold mt-2 text-[#092c3f]">
                  Professional Approach and Quality Services
                </h2>

                <p className="text-gray-600 mb-8 text-base leading-relaxed">
                  Unlike standard hard-wired application reports, business intelligence reports are meant to address
                  changing and varying business requirements at different levels of an organization.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Best-in-class Visualization Service",
                    "Business Strategy & Growth",
                    "Highly Customized Models",
                    "99% Customer Satisfaction",
                  ].map((item, i) => (
                    <div className="flex items-center space-x-3" key={i}>
                      <div className="w-6 h-6 bg-[#dc3545]/10 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#dc3545]" />
                      </div>
                      <span className="text-[#092c3f] font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button className="bg-[#dc3545] hover:bg-[#dc3545]/90 text-white rounded-md flex items-center gap-2 group px-6 py-2.5">
                  MORE ABOUT US
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
