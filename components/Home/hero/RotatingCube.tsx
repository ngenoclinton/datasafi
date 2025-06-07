"use client"

import { motion } from "framer-motion"

export function RotatingCube({ size = 16, position = "right-20 top-20" }: { size?: number; position?: string }) {
  return (
    <motion.div
      className={`absolute ${position} w-${size} h-${size} z-10`}
      style={{
        width: size * 4,
        height: size * 4,
        perspective: "1000px",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: 360, rotateX: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {/* Cube faces */}
        <div
          className="absolute inset-0 bg-[#092c3f]/20 backdrop-blur-sm border border-white/20 rounded-md"
          style={{ transform: `rotateY(0deg) translateZ(${size}px)` }}
        ></div>
        <div
          className="absolute inset-0 bg-[#092c3f]/20 backdrop-blur-sm border border-white/20 rounded-md"
          style={{ transform: `rotateY(90deg) translateZ(${size}px)` }}
        ></div>
        <div
          className="absolute inset-0 bg-[#092c3f]/20 backdrop-blur-sm border border-white/20 rounded-md"
          style={{ transform: `rotateY(180deg) translateZ(${size}px)` }}
        ></div>
        <div
          className="absolute inset-0 bg-[#092c3f]/20 backdrop-blur-sm border border-white/20 rounded-md"
          style={{ transform: `rotateY(270deg) translateZ(${size}px)` }}
        ></div>
        <div
          className="absolute inset-0 bg-[#092c3f]/20 backdrop-blur-sm border border-white/20 rounded-md"
          style={{ transform: `rotateX(90deg) translateZ(${size}px)` }}
        ></div>
        <div
          className="absolute inset-0 bg-[#092c3f]/20 backdrop-blur-sm border border-white/20 rounded-md"
          style={{ transform: `rotateX(270deg) translateZ(${size}px)` }}
        ></div>
      </motion.div>
    </motion.div>
  )
}
