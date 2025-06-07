"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function IndustriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      { threshold: 0.1 },
    )

    const hiddenElements = document.querySelectorAll(".industry-card")
    hiddenElements.forEach((el) => observer.observe(el))

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const industries = [
    {
      icon: "✈️",
      title: "Aerial Transportation Consulting",
      description:
        "Optimize flight routes and fuel consumption with predictive analytics. Monitor aircraft performance data to enhance safety and maintenance scheduling.",
    },
    {
      icon: "💼",
      title: "Enterprise Pursuit Consulting",
      description:
        "Transform business strategy with comprehensive data insights. Identify growth opportunities and operational efficiencies through advanced analytics dashboards.",
    },
    {
      icon: "📊",
      title: "Merchandise Consulting",
      description:
        "Enhance inventory management and product performance tracking. Use customer behavior data to optimize merchandising strategies and boost sales.",
    },
    {
      icon: "💰",
      title: "Fiscal and Banking Consulting",
      description:
        "Implement fraud detection algorithms and risk assessment models. Leverage financial data for regulatory compliance and customer segmentation.",
    },
    {
      icon: "🏢",
      title: "Digital Estate Consulting",
      description:
        "Analyze digital asset performance and user engagement metrics. Create data-driven strategies for online property management and optimization.",
    },
    {
      icon: "📈",
      title: "Statistical Market Consulting",
      description:
        "Develop market trend forecasting models and competitive analysis tools. Turn complex market data into actionable business intelligence.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-10 px-4 md:px-8 bg-white max-w-6xl mx-auto" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="w-1/2 mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-sm font-medium tracking-wider text-[#ff2143]"
          >
            OUR INDUSTRIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold mt-2 text-[#092c3f]"
          >
            There are Many Types of Industries In Consulting
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-green-500  mt-6"
          ></motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="industry-card bg-white p-6 rounded-lg border border-gray-100 opacity-0 translate-y-4 transition-all duration-700 flex group hover:shadow-lg hover:border-green-200"
            >
              <div className="mr-4 text-3xl group-hover:scale-110 transition-transform duration-300">
                <span aria-hidden="true">{industry.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#092c3f] group-hover:text-[#ff2143] transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed opacity-[10]">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
