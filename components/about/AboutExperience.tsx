"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function AboutExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Draw the curved dotted lines
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match its display size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    // Draw the curved lines
    ctx.strokeStyle = "#092c3f"
    ctx.lineWidth = 1
    ctx.setLineDash([4, 4])

    // Top curve
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.2, canvas.height * 0.2)
    ctx.quadraticCurveTo(canvas.width * 0.4, canvas.height * 0.05, canvas.width * 0.6, canvas.height * 0.2)
    ctx.stroke()

    // Bottom curve
    ctx.beginPath()
    ctx.moveTo(canvas.width * 0.2, canvas.height * 0.8)
    ctx.quadraticCurveTo(canvas.width * 0.4, canvas.height * 0.95, canvas.width * 0.6, canvas.height * 0.8)
    ctx.stroke()

    // Handle window resize
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height

      // Redraw curves
      ctx.strokeStyle = "#092c3f"
      ctx.lineWidth = 1
      ctx.setLineDash([4, 4])

      // Top curve
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.2)
      ctx.quadraticCurveTo(canvas.width * 0.4, canvas.height * 0.05, canvas.width * 0.6, canvas.height * 0.2)
      ctx.stroke()

      // Bottom curve
      ctx.beginPath()
      ctx.moveTo(canvas.width * 0.2, canvas.height * 0.8)
      ctx.quadraticCurveTo(canvas.width * 0.4, canvas.height * 0.95, canvas.width * 0.6, canvas.height * 0.8)
      ctx.stroke()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with images and canvas */}
          <div className="relative w-full lg:w-1/2 mb-12 lg:mb-0">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />

            {/* Top image */}
            <div className="relative z-10 w-64 h-48 md:w-80 md:h-60 rounded-lg overflow-hidden ml-auto mr-4 md:mr-12 mb-12">
              <Image
                src="https://img.freepik.com/premium-photo/side-view-young-woman-using-mobile-phone-while-sitting-home_1048944-24255946.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                alt="Data analytics team collaboration"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom image */}
            <div className="relative z-10 w-64 h-48 md:w-80 md:h-60 rounded-lg overflow-hidden ml-4 md:ml-12">
              <Image
                src="https://img.freepik.com/free-photo/close-up-smiley-people-work_23-2149097921.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                alt="Data analysis meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="inline-block mb-4">
              <p className="text-[#00856F] font-medium tracking-wide uppercase text-sm border-b-2 border-[#00856F] pb-1">
                ABOUT EXPERIENCE
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092c3f] mb-6 leading-tight">
              Helping You Put Systems in Place that Work
            </h2>

            <p className="text-gray-600 mb-12 max-w-xl">
              Our data analytics consultancy transforms complex information into actionable insights. We help businesses
              implement robust data systems that drive decision-making and create competitive advantages.
            </p>

            {/* Circular progress indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="2" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#092c3f"
                      strokeWidth="2"
                      strokeDasharray="283"
                      strokeDashoffset="42"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#092c3f">
                      85%
                    </text>
                  </svg>
                </div>
                <p className="text-[#092c3f] font-medium">Data Strategy</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="2" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#092c3f"
                      strokeWidth="2"
                      strokeDasharray="283"
                      strokeDashoffset="14"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#092c3f">
                      95%
                    </text>
                  </svg>
                </div>
                <p className="text-[#092c3f] font-medium">Business Intelligence</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="2" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#092c3f"
                      strokeWidth="2"
                      strokeDasharray="283"
                      strokeDashoffset="71"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#092c3f">
                      75%
                    </text>
                  </svg>
                </div>
                <p className="text-[#092c3f] font-medium">Predictive Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
