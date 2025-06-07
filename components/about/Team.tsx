"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Github, Mail } from "lucide-react"

interface SocialLinks {
  linkedin: string
  twitter: string
  github: string
  email: string
}

interface TeamMember {
  id: number
  name: string
  role: string
  description: string
  image: string
  social: SocialLinks
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Edwin Lumiti Khamasi",
    role: "Director",
    description:
      "A versatile data solutions professional with experience in data engineering, data analysis and database administration.",
    image: "/edwin.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:edwin@example.com",
    },
  },
  {
    id: 2,
    name: "Jevinarlys Shibuyanga",
    role: "Programmes Manager",
    description: "Certified Artificial Intelligence and Machine learning Expert and a seasoned software developer.",
    image: "/jevy.png",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      github: "https://github.com",
      email: "mailto:jevinarlys@example.com",
    },
  },
]

export default function TeamMembers() {
    
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)


  
    const toggleExpand = (id: number) => {
      setExpandedId(expandedId === id ? null : id)
    }
  
    const checkScroll = () => {
      if (!scrollRef.current) return
  
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
    }
  
    useEffect(() => {
      const scrollContainer = scrollRef.current
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", checkScroll)
        // Initial check
        checkScroll()
  
        return () => {
          scrollContainer.removeEventListener("scroll", checkScroll)
        }
      }
    }, [])
  
    const scroll = (direction: "left" | "right") => {
      if (!scrollRef.current) return
  
      const container = scrollRef.current
      const cardWidth = 320 // Approximate card width + gap
  
      if (direction === "left") {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" })
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" })
      }
    }
  

  return (
    <section className="w-full py-8  bg-[#FDF6F0]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block border border-[#092c3f] rounded-full px-6 py-2 text-[#092c3f] text-sm font-medium mb-6">
            OUR TEAM MEMBERS
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#092c3f] max-w-4xl">
            Our data experts and analysts 
            <br />
            are here to help turn data into decisions!</h2>
        </div>

        <div className="relative mx-auto">
          {/* Navigation arrows */}
          {teamMembers.length > 2 && (
            <>
              <button
                onClick={() => scroll("left")}
                className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-300 ${
                  canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-[#092c3f]" />
              </button>
              <button
                onClick={() => scroll("right")}
                className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity duration-300 ${
                  canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-[#092c3f]" />
              </button>
            </>
          )}

          <div
            ref={scrollRef}
            className="flex overflow-x-auto pb-0 gap-8 snap-x snap-mandatory scrollbar-hide mx-auto justify-center "
            onScroll={checkScroll}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="snap-start flex-shrink-0 w-[280px] md:w-[320px] ">
                <AnimatePresence mode="wait">
                <motion.div
                      key={`expanded-${member.id}`}
                    //   initial={{ opacity: 0, height: 200 }}
                    //   animate={{ opacity: 1, height: 320 }}
                    //   exit={{ opacity: 0, height: 200 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-xl shadow-md p-6 relative"
                      style={{ height: 320 }} // Fixed height to prevent layout shifts
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-[#092c3f]">{member.name}</h3>
                          <p className="text-[#eb566c] text-sm">{member.role}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600 text-sm leading-relaxed">{member.description}</p>

                      {/* Social icons */}
                      <div className="flex gap-3 mt-4">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#0077b5] transition-colors"
                          >
                            <Linkedin size={18} />
                            <span className="sr-only">LinkedIn</span>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
                          >
                            <Twitter size={18} />
                            <span className="sr-only">Twitter</span>
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#333] transition-colors"
                          >
                            <Github size={18} />
                            <span className="sr-only">GitHub</span>
                          </a>
                        )}
                        {member.social.email && (
                          <a
                            href={member.social.email}
                            className="text-gray-500 hover:text-[#eb566c] transition-colors"
                          >
                            <Mail size={18} />
                            <span className="sr-only">Email</span>
                          </a>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExpand(member.id)}
                        className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-[#e8ff8d] transition-colors duration-300"
                      >
                        {/* <X size={16} className="text-[#092c3f]" /> */}
                      </button>
                </motion.div>                  
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Scroll indicators/shadows */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
