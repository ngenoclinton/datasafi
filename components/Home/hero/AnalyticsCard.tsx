"use client"

import { motion } from "framer-motion"
import { LineChart } from "lucide-react"

export function AnalyticsCard() {
  // More realistic data points with fluctuations
  const dataPoints = [
    { x: 0, y: 30 },
    { x: 1, y: 42 },
    { x: 2, y: 38 },
    { x: 3, y: 55 },
    { x: 4, y: 48 },
    { x: 5, y: 60 },
    { x: 6, y: 52 },
    { x: 7, y: 65 },
    { x: 8, y: 58 },
    { x: 9, y: 70 },
  ]

  // Calculate the SVG path for the line chart
  const svgWidth = 120
  const svgHeight = 60
  const xScale = svgWidth / (dataPoints.length - 1)
  const yScale = svgHeight / 100

  // Create the SVG path
  const linePath = dataPoints
    .map((point, i) => {
      const x = point.x * xScale
      const y = svgHeight - point.y * yScale
      return `${i === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")

  // Create the area fill path
  const areaPath = `${linePath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-3 sm:p-4 w-full max-w-[12rem] sm:max-w-none sm:w-48"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <div className="text-xs sm:text-sm text-gray-500">analytics</div>
        <motion.div
          className="bg-[#f0f5f8] p-1 rounded-md"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        >
          <LineChart className="h-3 w-3 sm:h-4 sm:w-4 text-[#092c3f]" />
        </motion.div>
      </div>

      <div className="h-12 sm:h-16">
        <svg width="100%" height="100%" viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          <line x1="0" y1={svgHeight} x2={svgWidth} y2={svgHeight} stroke="#E5E7EB" strokeWidth="1" />
          <line
            x1="0"
            y1={svgHeight / 2}
            x2={svgWidth}
            y2={svgHeight / 2}
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="2,2"
          />

          {/* Area fill */}
          <motion.path
            d={areaPath}
            fill="url(#gradient)"
            opacity="0.2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
          />

          {/* Line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="#092c3f"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#092c3f" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#092c3f" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Data points with tooltips */}
          {dataPoints.map((point, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={point.x * xScale}
                cy={svgHeight - point.y * yScale}
                r="2"
                fill="#092c3f"
                initial={{ opacity: 0, r: 2 }}
                animate={{ opacity: 1, r: 2 }}
                whileHover={{ r: 4 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              />
              <motion.g initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                <rect
                  x={point.x * xScale - 15}
                  y={svgHeight - point.y * yScale - 25}
                  width="30"
                  height="18"
                  rx="4"
                  fill="#092c3f"
                />
                <text
                  x={point.x * xScale}
                  y={svgHeight - point.y * yScale - 13}
                  textAnchor="middle"
                  fill="white"
                  fontSize="8"
                  fontWeight="bold"
                >
                  {point.y}%
                </text>
              </motion.g>
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="flex justify-between text-[10px] sm:text-xs text-gray-400 mt-1">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
    </motion.div>
  )
}