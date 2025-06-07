"use client"

import { motion } from "framer-motion"
import { BarChart3, Database, LineChart, PieChart, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Database className="h-10 w-10 text-[#ff2143]" />,
    title: "Data Management",
    description: "Comprehensive solutions for organizing, storing, and processing your business data securely.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-[#ff2143]" />,
    title: "Business Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics solutions.",
  },
  {
    icon: <Shield className="h-10 w-10 text-[#ff2143]" />,
    title: "Data Security",
    description: "Protect your valuable information with our enterprise-grade security protocols.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-[#ff2143]" />,
    title: "Predictive Analysis",
    description: "Forecast trends and make data-driven decisions with our predictive models.",
  },
  {
    icon: <PieChart className="h-10 w-10 text-[#ff2143]" />,
    title: "Data Visualization",
    description: "Present complex data in intuitive, interactive visual formats for better understanding.",
  },
  {
    icon: <Zap className="h-10 w-10 text-[#ff2143]" />,
    title: "Performance Optimization",
    description: "Enhance your data systems for maximum efficiency and minimal latency.",
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#e8ff8d]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#092c3f]/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-[#092c3f]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Data Consultancy Services
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Leverage our expertise to transform your data into your most valuable business asset
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#092c3f] to-[#ff2143] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                <CardHeader className="pb-2">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl font-bold text-[#092c3f]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button className="bg-[#092c3f] hover:bg-[#092c3f]/90 text-white px-8 py-6 text-lg">
            Explore All Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
