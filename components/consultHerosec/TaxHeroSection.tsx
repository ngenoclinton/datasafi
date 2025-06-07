"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TaxHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-03c2Ncf9NhbKtrPDVtOWI8m2E9xcIl.png"
          alt="Happy people celebrating"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Top button */}
      <div className="relative z-10 pt-8 px-4 flex justify-center md:justify-start md:pl-16">
        <Button className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white border-none hover:from-orange-500 hover:to-orange-600">
          ABOUT OUR TAXY!
        </Button>
      </div>

      {/* Play button */}
      <div className="absolute top-8 right-8 z-10 hidden md:block">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-orange-400 text-white"
        >
          <Play className="h-6 w-6" />
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 md:items-start md:pl-16">
        <div className="max-w-2xl md:text-left text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          >
            Solve All Your Tax Problems Under One Room
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-gray-200 md:text-lg"
          >
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words look even slightly believable. If you are going to use a
            passage
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 md:mt-12"
          >
            <Link href="#services">
              <div className="group relative inline-flex h-32 w-32 cursor-pointer items-center justify-center rounded-full border-2 border-white/30 transition-all hover:border-orange-400">
                <div className="absolute left-0 top-0 h-full w-full rounded-full border border-white/10"></div>
                <div className="flex flex-col items-center text-white">
                  <span className="text-sm">Explore Our</span>
                  <span className="font-medium">Service</span>
                  <ArrowRight className="mt-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
