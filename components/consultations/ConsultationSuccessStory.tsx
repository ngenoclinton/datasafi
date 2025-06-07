"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function ConsultationSuccessStory() {
  return (
    <section className="w-full py-20 bg-[#092c3f] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real results from our data-driven approach that have transformed businesses.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card className="bg-white/10 border-none overflow-hidden backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e8ff8d]"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e8ff8d]"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-[#e8ff8d]"></div>
                    <span className="text-[#e8ff8d] text-sm font-medium">CASE STUDY</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    How We Helped XTel Save $1M Using Smart Dashboards
                  </h3>

                  <p className="text-gray-300 mb-6">
                    XTel was struggling with inefficient data processes that were costing them time and money. Our team
                    implemented custom dashboards that provided real-time insights, leading to operational improvements
                    and significant cost savings.
                  </p>

                  <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#eb566c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <p className="text-gray-300">Reduced data processing time by 75%</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#eb566c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <p className="text-gray-300">Improved decision-making accuracy by 40%</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#eb566c] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white font-bold text-sm">✓</span>
                      </div>
                      <p className="text-gray-300">Achieved $1M in annual cost savings</p>
                    </div>
                  </div>

                  <button className="flex items-center text-[#e8ff8d] hover:underline group">
                    Read the full case study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center h-64 md:h-auto"></div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
