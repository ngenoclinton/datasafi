"use client"

import { BarChart4, Users2, GlobeIcon, HeadphonesIcon } from "lucide-react"

export default function WhyChooseUs () {
  return (
    <section className="w-full bg-[#f8f5f0] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="flex items-center mb-3">
            <div className="w-8 h-[1px] bg-[#006655]"></div>
            <span className="text-[#006655] text-sm font-medium mx-2 uppercase tracking-wider">WHY CHOOSE US</span>
            <div className="w-8 h-[1px] bg-[#006655]"></div>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center max-w-4xl">
            We Provide High-Quality Data Analytics &
            <br className="hidden md:block" /> Insights Service
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Years Experience */}
          <div className="group bg-white p-6 md:p-8 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-[#006655] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#092c3f]">
              <BarChart4 className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Years Experience</h3>
            <p className="text-sm text-gray-600">
              With over a decade of experience in data analytics, our team has developed robust methodologies to extract
              meaningful insights from complex datasets.
            </p>
          </div>

          {/* Expert Team */}
          <div className="group bg-white p-6 md:p-8 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-[#006655] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#eb566c]">
              <Users2 className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-sm text-gray-600">
              Our team consists of data scientists, analysts, and visualization experts who collaborate to deliver
              comprehensive data solutions tailored to your needs.
            </p>
          </div>

          {/* Worldwide Client */}
          <div className="group bg-white p-6 md:p-8 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-[#006655] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#e8ff8d]">
              <GlobeIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Worldwide Client</h3>
            <p className="text-sm text-gray-600">
              We've helped organizations across various industries and regions transform their data into actionable
              intelligence for better decision-making.
            </p>
          </div>

          {/* 24/7 Full Support */}
          <div className="group bg-white p-6 md:p-8 rounded-sm shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="w-12 h-12 bg-[#006655] flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#092c3f]">
              <HeadphonesIcon className="text-white w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Full Support</h3>
            <p className="text-sm text-gray-600">
              Our dedicated support team ensures your data systems run smoothly around the clock, providing assistance
              whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
