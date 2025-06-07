"use client"

import { useRef, useEffect } from "react"

export function useParallax() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const cards = ref.current.querySelectorAll(".absolute")
      const scrollY = window.scrollY

      cards.forEach((card, index) => {
        const speed = 0.05 + index * 0.01
        const yPos = -scrollY * speed

        // Apply different speeds to different elements
        card.setAttribute("style", `transform: translateY(${yPos}px) ${card.getAttribute("style") || ""}`)
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { ref }
}
