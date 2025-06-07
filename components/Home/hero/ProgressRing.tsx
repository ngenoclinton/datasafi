"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface ProgressRingProps {
  percentage: number
  size: number
  strokeWidth?: number
  className?: string
}

export function ProgressRing({ percentage, size, strokeWidth = 6, className = "" }: ProgressRingProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 100)

    return () => clearTimeout(timer)
  }, [percentage])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  // Calculate the position of the dot on the circle
  const angle = (progress / 100) * 360
  const radians = (angle - 90) * (Math.PI / 180)
  const dotX = size / 2 + radius * Math.cos(radians)
  const dotY = size / 2 + radius * Math.sin(radians)

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
        style={{ maxWidth: size, maxHeight: size }}
      >
        {/* Background circle */}
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#E5E7EB" strokeWidth={strokeWidth} />

        {/* Decorative rotating ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius + 5}
          fill="none"
          stroke="#8A2BE2"
          strokeWidth={1}
          strokeDasharray="2 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#dc3545"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />

        {/* Dot that moves along the progress arc */}
        {progress > 0 && (
          <motion.circle
            cx={dotX}
            cy={dotY}
            r={strokeWidth / 1.5}
            fill="#dc3545"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              scale: [1, 1.2, 1],
            }}
            transition={{
              delay: 1.5,
              duration: 0.3,
              scale: {
                delay: 1.8,
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              },
            }}
          />
        )}

        {/* Inner decorative circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius - strokeWidth - 2}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={1}
          strokeDasharray="1 3"
          animate={{ rotate: -180 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="text-lg sm:text-2xl font-bold text-[#092c3f]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {progress}%
        </motion.div>
      </div>
    </div>
  )
}