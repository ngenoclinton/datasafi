import Image from "next/image"
import Link from "next/link"
import { ArrowDown, Play, Facebook, Dribbble, MessageSquare } from "lucide-react"
import TrainingCategories from "@/components/training/TrainingCategories"
import DeliveryOptions from "@/components/training/DeliveryOptions"
import TrainingOutcomes from "@/components/training/TrainingOutcomes"
import Testimonials from "@/components/training/Testimonials"
import TrainingCalendar from "@/components/training/TrainingCalendar"
import TrainingExperience from "@/components/training/TrainingExperience"

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section 1 - Based on first image */}
      <section className="relative w-full bg-[#FDF6F0] py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-[#00856F] font-medium tracking-wide uppercase text-sm border-b-2 border-[#00856F] pb-1">
                  MORE ABOUT OUR TRAINING
                </p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#092c3f] leading-tight">
                Training That Turns Knowledge into Capability
              </h1>

              <div className="flex justify-center md:justify-start">
                <ArrowDown className="w-12 h-12 text-[#092c3f] opacity-50" />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#092c3f] mb-3">Our Training Philosophy</h3>
                <p className="text-gray-700">
                  Practical, impactful workshops that empower professionals to lead with data. Our training programs are
                  designed to bridge the gap between theoretical knowledge and practical application in the data
                  analytics field.
                </p>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/financial-advisor-expert-highlighting-important-terms-retirement-plan_482257-91506.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                alt="Data analytics training session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    <TrainingExperience/>

      {/* Training Categories Section */}
      <section id="training-categories" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Training Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive training programs cover all aspects of data analytics, from foundational skills to
              advanced techniques.
            </p>
          </div>

          <TrainingCategories />
        </div>
      </section>

      {/* Delivery Options Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Delivery Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer flexible training delivery methods to suit your team's needs and preferences.
            </p>
          </div>

          <DeliveryOptions />
        </div>
      </section>

      {/* Training Outcomes Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Training Outcomes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our training programs are designed to deliver measurable results and tangible skills.
            </p>
          </div>

          <TrainingOutcomes />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-[#092c3f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Participants Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from professionals who have transformed their data skills through our training programs.
            </p>
          </div>

          <Testimonials />
        </div>
      </section>

      {/* Training Calendar Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-4">Upcoming Training Sessions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our calendar of upcoming training sessions and secure your spot today.
            </p>
          </div>

          <TrainingCalendar />
        </div>
      </section>

      {/* CTA Section */}
      <section id="book-session" className="py-16 md:py-24 bg-[#092c3f]/2">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-6">Ready to Enhance Your Data Skills?</h2>
            <p className="text-[#092c3f] max-w-2xl mx-auto mb-8">
              Take the first step toward data mastery. Our expert trainers are ready to help you and your team develop
              the skills needed to excel in today's data-driven landscape.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#092c3f] text-white font-bold rounded-md hover:bg-[#092c3f]/90 transition-colors"
            >
              Book a Training Session
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
