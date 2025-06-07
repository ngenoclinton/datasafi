"use client"

import { motion } from "framer-motion"
import { Heart, Building2, Wheat, Landmark, GraduationCap, Factory } from "lucide-react"

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Improving patient outcomes through data-driven healthcare solutions.",
  },
  {
    icon: Building2,
    title: "Finance",
    description: "Optimizing financial operations and risk management with advanced analytics.",
  },
  {
    icon: Wheat,
    title: "Agriculture",
    description: "Enhancing crop yields and sustainability through precision agriculture.",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Streamlining public services and improving citizen engagement.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Transforming learning experiences with data-informed approaches.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Optimizing production processes and supply chain management.",
  },
]

export default function ConsultationIndustries() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our expertise spans across multiple sectors, delivering tailored data solutions for diverse industry needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 rounded-full bg-[#e8ff8d] flex items-center justify-center mb-4">
                <industry.icon className="h-6 w-6 text-[#092c3f]" />
              </div>
              <h3 className="text-xl font-bold text-[#092c3f] mb-2">{industry.title}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
