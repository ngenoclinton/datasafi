"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, PieChart, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-drzpevCbt10E9HXyfzBmgSZSUqOmMS.png"
          alt="Business meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-24 text-center text-white md:pt-40 md:pb-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
        >
          Consulting Is More Than Giving Advice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl"
        >
          To succeed in business today, you need to be flexible and have good planning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button className="bg-white px-6 py-6 text-black hover:bg-gray-200">
            PURCHASE NOW <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Service boxes */}
      <div className="relative z-10 mx-auto -mt-16 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3 lg:-mt-24">
        <ServiceBox
          icon={<Briefcase className="h-8 w-8" />}
          title="Audit & Evaluation"
          category="Consulting Service"
          description="Collaboratively build backward compatible relationships with reliable products and services."
        />

        <ServiceBox
          icon={<PieChart className="h-8 w-8" />}
          title="Corporate Finance"
          category="Business Service"
          description="We work with our clients and do a deep analysis of their business to provide the best solutions."
        />

        <ServiceBox
          icon={<DollarSign className="h-8 w-8" />}
          title="Taxes & Efficiency"
          category="Taxes Service"
          description="Company income subject to tax is often determined by local regulations and practices."
        />
      </div>
    </section>
  )
}

interface ServiceBoxProps {
  icon: React.ReactNode
  title: string
  category: string
  description: string
}

function ServiceBox({ icon, title, category, description }: ServiceBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col bg-white p-6 shadow-lg"
    >
      <div className="mb-4 text-gray-600">{icon}</div>
      <div className="mb-2 text-sm font-medium text-gray-500">{category}</div>
      <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <Link href="#" className="mt-auto flex items-center text-sm font-medium text-gray-900">
        read more <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </motion.div>
  )
}
