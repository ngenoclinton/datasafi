"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function WhatWeProvide() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      title: "Data Analysis",
      description:
        "We transform raw data into actionable insights through advanced analytical techniques and visualization.",
    },
    {
      title: "Predictive Modeling",
      description: "Our predictive models help you anticipate trends and make data-driven decisions with confidence.",
    },
    {
      title: "Strategic Planning",
      description:
        "We help you develop data-driven strategies that align with your business goals and market opportunities.",
    },
    {
      title: "Business Intelligence",
      description:
        "Our BI solutions provide real-time dashboards and reports to monitor your key performance indicators.",
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left side - Services list */}
          <div className="w-full md:w-1/2">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-t border-gray-200 py-6 cursor-pointer"
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-2xl font-semibold transition-colors duration-300 ${activeService === index ? "text-[#a4e052] " : "text-[#092c3f]"}`}
                  >
                    {service.title}
                  </h3>
                  <div
                    className={`w-10 h-10 flex items-center justify-center  transition-all duration-300 ${activeService === index ? "  bg-[#006655] " : " bg-[#a4e052] "}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`text-white transition-transform duration-300 ${activeService === index ? "rotate-0" : "-rotate-45"}`}
                    >
                      <path
                        d="M1 8H15M15 8L8 1M15 8L8 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2 pr-12">{service.description}</p>
              </div>
            ))}
            <div className="border-t border-gray-200"></div>
          </div>

          {/* Right side - Featured service */}
          <div className="w-full md:w-1/2">
            <div className="mb-4">
              <span className="inline-block border border-[#006655] text-[#006655] text-xs font-medium px-4 py-1 rounded-full uppercase">
                WHAT WE PROVIDE
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#092c3f] mb-6">
              Advanced And Experienced
              <br />
              Data Solutions
            </h2>

            <p className="text-gray-600 mb-8">
              There are many variations of data analytics services available, but our approach combines cutting-edge
              technology with industry expertise to deliver insights that drive real business outcomes and competitive
              advantage.
            </p>

            <div className="relative h-64 md:h-80 w-full mb-6">
              <Image
                src="https://img.freepik.com/free-photo/businesswoman-using-tablet-analysis-graph-company-finance-strategy-statistics-success-concept-planning-future-office-room_74952-1410.jpg?w=1380&t=st=1713488400~exp=1713489000~hmac=0e1e1c6a9c7cd2b6c7d0fb7a5c0e1f5a9f5a5f5a5f5a5f5a5f5a5f5a5f5a5f5"
                alt="Data analyst working with visualizations"
                fill
                className="object-cover rounded-md"
              />
            </div>

            <Link
              href="/services"
              className="inline-flex items-center text-[#006655] font-medium hover:text-[#eb566c] transition-colors duration-300"
            >
              Explore More Services
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
