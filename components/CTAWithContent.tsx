"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function CTASection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Data analytics themed images - replace with actual images
  const images = [
    "https://img.freepik.com/premium-photo/coworkers-discussing-revenue-statistics-presentation-business-meeting-diverse-colleauges-collaboration-office-communication-coworking-space-boardroom-night-time-tripod-shot_482257-54806.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740", // Team analyzing data
    "https://img.freepik.com/free-photo/coworkers-use-digital-devices-office_482257-120210.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740", // Data visualization meeting
    "https://img.freepik.com/premium-photo/rear-view-people-working-city_1048944-22171043.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740", // Business intelligence dashboard
    "https://img.freepik.com/premium-photo/business-colleagues-working-office_1048944-25982103.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740", // Team collaboration on analytics
    "https://img.freepik.com/premium-photo/side-view-mother-daughter-home_1048944-24583188.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/executive-manager-explaining-management-presentation-showing-company-strategy-using-monitor-working-business-project-startup-office-diverse-team-sitting-meeting-table-brainstorming-ideas_482257-27815.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740" // Data strategy planning
    // Data strategy planning
  ]

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  // Update slider position when currentSlide changes
  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = currentSlide * (sliderRef.current.scrollWidth / images.length)
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentSlide, images.length])

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Content */}
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block mb-4">
          <p className="text-[#00856F] font-medium tracking-wide uppercase text-sm border-b-2 border-green-600 pb-1">
            LET&apos;S COLLABORATE
          </p>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#092c3f] max-w-4xl mx-auto mb-10 leading-tight">
          Transform Your Data Into Actionable Business Insights
        </h2>

        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#00856F] text-white font-mediumhover:bg-[#F9A86F]/90 transition-colors"
        >
          Get In Touch
        </Link>
      </div>

      {/* Image Slider */}
      <div className="mt-16 z-10">
        <div className="flex justify-center">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory max-w-6xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-40 mx-2 snap-center">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Data analytics collaboration ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover rounded-xs"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
