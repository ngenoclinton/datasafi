"use client"

import { motion } from "framer-motion"
import { BarChart3 } from "lucide-react"

export function WorkloadCard() {
  return (
    <div className="hidden lg:block">
      <motion.div
        className="bg-white text-[#092c3f] rounded-full shadow-lg py-2 px-4 flex items-center gap-2"
        whileHover={{
          y: -5,
          rotateZ: 2,
          transition: { duration: 0.2 },
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        data-hoverable="true"
      >
        <motion.div
          className="bg-[#f0f5f8] p-1 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <BarChart3 className="h-4 w-4" />
        </motion.div>
        <div className="text-sm font-medium">master your workload</div>
        <div className="bg-[#f0f5f8] rounded-full p-1">
          <motion.div
            className="w-4 h-4 flex items-center justify-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <div className="w-1 h-1 bg-[#092c3f] rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

