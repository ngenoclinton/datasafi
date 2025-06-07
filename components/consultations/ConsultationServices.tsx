"use client"

import { motion } from "framer-motion"
import { Database, LineChart, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "We build robust data pipelines and infrastructure to collect, store, and process your data efficiently.",
    points: [
      "Data pipeline development",
      "Database design & optimization",
      "ETL process implementation",
      "Data integration services",
    ],
  },
  {
    icon: LineChart,
    title: "Data Science",
    description:
      "Our data scientists develop models that uncover insights and predict outcomes to drive business value.",
    points: ["Predictive analytics", "Machine learning models", "AI implementation", "Statistical analysis"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    description:
      "Transform complex data into clear, actionable visualizations that tell the story behind your numbers.",
    points: [
      "Interactive dashboards",
      "Business intelligence audits",
      "Custom reporting solutions",
      "Data storytelling",
    ],
  },
]

export default function ConsultationServices() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Core Consulting Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our specialized services are designed to transform your data into a strategic asset that drives growth and
            innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-[#092c3f]/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-[#eb566c]" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#092c3f]">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#e8ff8d] font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
