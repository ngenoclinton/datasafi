"use client"

import Link from "next/link"
import { Shield, BarChart3, Settings, Database, LineChart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function SolutionHighlights() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
  }

  const featureCards = [
    {
      icon: <Database className="h-5 w-5 text-gray-700" />,
      title: "Data Security and Compliance",
      description:
        "We implement robust encryption, access controls, and adhere to regulations, ensuring client data is safeguarded.",
    },
    {
      icon: <LineChart className="h-5 w-5 text-gray-700" />,
      title: "Data Quality Enhancement",
      description:
        "We offer data cleansing and quality assurance services to help organizations maintain accurate and error-free data.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-gray-700" />,
      title: "Customized Solutions",
      description:
        "We tailor data management solutions to meet the specific needs and objectives of each client.",
    },
  ]

  return (
    <main className="relative min-h-screen bg-white text-[#051926] overflow-hidden">
      {/* Faint background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://img.freepik.com/premium-photo/computer-screen-that-has-word-t-it_886588-9948.jpg?ga=GA1.1.1740906415.1743623674&semt=ais_hybrid&w=740"
          alt="Background"
          fill
          className="object-cover opacity-11"
          priority={false}
        />
      </div>

      <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <motion.div
          className="grid gap-12 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <motion.h1 className="text-4xl font-semibold md:text-4xl lg:text-5xl" variants={item}>
                Clarity in Data,
                <br />
                <motion.span
                  className="text-[#a4e052] inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  Precision
                </motion.span>{" "}
                in Insights
              </motion.h1>
              <motion.p className="max-w-md text-lg" variants={item}>
                Data Safi Analysts help business leaders overcome data challenges by converting complex information
                into strategic assets.
              </motion.p>
            </div>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={item}>
              <Link
                href="#"
                className="inline-flex items-center rounded-full bg-[#e8f7c7] px-6 py-2.5 text-sm font-medium text-gray-800 shadow-sm transition hover:bg-[#d9f0a3] focus:outline-none focus:ring-2 focus:ring-[#a4e052]"
              >
                Get Consultation
              </Link>
              <Link
                href="#"
                className="inline-flex items-center rounded-full border border-gray-300 bg-[#051926] text-white px-6 py-2.5 text-sm font-medium shadow-sm transition hover:bg-[#0d2f47] focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Explore Training
              </Link>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div className="flex flex-col space-y-4" variants={container}>
            {featureCards.map((card, index) => (
              <motion.div
                key={index}
                className={`group rounded-xl p-6 transition-all duration-300 ${
                  activeCard === index
                    ? "bg-[#e8f7c7] text-gray-800"
                    : "bg-[#092c3f] text-white"
                }`}
                variants={item}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-medium">{card.title}</h3>
                </div>
                <p className="text-base">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
