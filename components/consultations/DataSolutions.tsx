"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DataSolutions() {
  return (
    <section className="w-full relative overflow-hidden bg-[#f8f5f0]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#092c3f]/80 to-[#092c3f]"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-20 relative z-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-[#092c3f]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#092c3f]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Consulting Is More Than Giving Advice
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              We've been dedicated to transforming how businesses handle their
              data. We believe that effective data management is more than just
              technology—it's about empowering people with the right tools and
              knowledge to make data-driven decisions confidently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 mt-4"
            ></motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative hidden lg:block h-[400px] [#092c3f]">
              {/* Top image */}
              <div className="absolute top-0 right-0 w-64 h-48 md:w-80 md:h-60 rounded-lg overflow-hidden shadow-xl ">
                <Image
                  src="https://img.freepik.com/premium-vector/vector-isolated-illustration-achievement-financial-success-graph_574777-135.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                  alt="Data training session"
                  fill
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Bottom image */}
              <div className="absolute bottom-0 left-0 z-10 w-64 h-48 md:w-80 md:h-60 rounded-lg overflow-hidden ">
                <Image
                  src="https://img.freepik.com/premium-photo/reading-into-future-business-closeup-shot-two-unrecognisable-businesspeople-analysing-graphs-digital-tablet-office_590464-9757.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                  alt="Data analysis meeting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated chart overlay */}
      <motion.div
        className="absolute bottom-12 right-12 md:bottom-24 md:right-24 flex items-end h-[150px] w-[250px] gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {[0.6, 0.4, 0.7, 0.5, 0.8].map((height, i) => (
          <motion.div
            key={i}
            className={`w-10 rounded-t-md ${
              i % 2 === 0 ? "bg-[#20c997]" : "bg-[#ffc107]"
            }`}
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
  );
}
