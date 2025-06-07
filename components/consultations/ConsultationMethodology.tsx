"use client"

import { motion } from "framer-motion"
import { Search, Database, Code, BarChart, HeadphonesIcon } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We analyze your business needs and identify key data requirements.",
  },
  {
    icon: Database,
    title: "Data Mapping",
    description: "Creating a comprehensive plan for data collection and organization.",
  },
  {
    icon: Code,
    title: "Build",
    description: "Developing custom solutions tailored to your specific requirements.",
  },
  {
    icon: BarChart,
    title: "Visualization",
    description: "Transforming complex data into clear, actionable insights.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "Ongoing maintenance and optimization of your data solutions.",
  },
]

export default function ConsultationMethodology() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Our Methodology Framework</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A proven approach that delivers consistent results and maximizes the value of your data.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 hidden md:block transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-[#092c3f] mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <motion.div
                    whileInView={{ scale: [0.8, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-[#eb566c] flex items-center justify-center z-10"
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                <div className="w-full md:w-1/2 md:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
