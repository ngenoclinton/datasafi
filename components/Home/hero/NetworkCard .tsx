"use client"

import { motion } from "framer-motion"
import { PieChart } from "lucide-react"

export function NetworkCard() {
  // Data for the pie chart
  const segments = [
    { value: 45, color: "#092c3f" },
    { value: 30, color: "#2a5a70" },
    { value: 25, color: "#5d8ca3" },
  ]

  // Calculate the SVG paths for the pie chart
  const size = 80
  const center = size / 2
  const radius = center - 5
  const total = segments.reduce((sum, segment) => sum + segment.value, 0)

  let currentAngle = 0
  const paths = segments.map((segment, i) => {
    // Calculate the angles for this segment
    const angle = (segment.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + angle
    currentAngle = endAngle

    // Convert angles to radians
    const startRad = (startAngle - 90) * (Math.PI / 180)
    const endRad = (endAngle - 90) * (Math.PI / 180)

    // Calculate the SVG arc path
    const x1 = center + radius * Math.cos(startRad)
    const y1 = center + radius * Math.sin(startRad)
    const x2 = center + radius * Math.cos(endRad)
    const y2 = center + radius * Math.sin(endRad)

    const largeArcFlag = angle > 180 ? 1 : 0

    return {
      path: `M ${center} ${center} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`,
      color: segment.color,
      value: segment.value,
    }
  })

  return (
    <motion.div
      className="bg-[#092c3f] text-white rounded-xl shadow-lg p-3 sm:p-4 w-full max-w-[11rem] sm:max-w-none sm:w-44"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="text-xs sm:text-sm">network service</div>
        <motion.div
          className="bg-[#0a3b54] p-1 rounded-md"
          animate={{ rotate: [0, -5, 0, 5, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <PieChart className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
        </motion.div>
      </div>

      <div className="flex justify-center">
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} style={{ maxWidth: "80px", maxHeight: "80px" }}>
          {paths.map((segment, i) => (
            <motion.path
              key={i}
              d={segment.path}
              fill={segment.color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
            />
          ))}
          {/* Center circle for donut effect */}
          <motion.circle
            cx={center}
            cy={center}
            r={radius / 2}
            fill="#092c3f"
            animate={{
              r: [radius / 2, radius / 2.2, radius / 2],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </svg>
      </div>

      <div className="flex justify-between text-[10px] sm:text-xs mt-2">
        {segments.map((segment, i) => (
          <motion.div key={i} className="flex items-center" whileHover={{ scale: 1.1 }}>
            <div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-0.5 sm:mr-1"
              style={{ backgroundColor: segment.color }}
            ></div>
            <span>{segment.value}%</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}