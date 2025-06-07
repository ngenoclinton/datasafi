'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#2d58ff] text-white flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left side */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <Button className="rounded-full bg-white text-[#2d58ff] text-xs">🔍</Button>
            <span className="text-sm text-white/80">
              Master your workload with our platform
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-yellow-400">Data</span> Refined,<br />
            Insights Defined
          </h1>
        </div>

        {/* Right side */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white text-black p-6 rounded-3xl shadow-lg relative z-10"
          >
            <p className="text-sm font-semibold text-green-500">+6%</p>
            <p className="text-2xl font-bold">47%</p>
            <p className="text-sm">recent project</p>
            <div className="mt-2 text-xs text-gray-500">increase in load</div>
            <div className="mt-4">
              <Image
                src="https://img.freepik.com/premium-photo/young-african-businesswoman-presenting-data-analysis-dashboard-tv-concord_31965-124322.jpg?ga=GA1.1.1740906415.1743623674&semt=ais_hybrid&w=740"
                alt="Graph"
                width={300}
                height={100}
                className="rounded-md"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-0 right-0 -mt-12 -mr-12"
          >
            <Image
              src="/https://img.freepik.com/premium-photo/young-african-businesswoman-presenting-data-analysis-dashboard-tv-concord_31965-124322.jpg?ga=GA1.1.1740906415.1743623674&semt=ais_hybrid&w=740"
              alt="Person"
              width={200}
              height={200}
              className="rounded-full border-4 border-white"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;