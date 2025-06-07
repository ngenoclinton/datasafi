import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Play } from "lucide-react";
import TeamMembers from "@/components/about/Team";
import AboutExperience from "@/components/about/AboutExperience";
import CTASection from "@/components/CTAWithContent";
import WhyPellets from "@/components/about/WhyPellets";

export default function about() {
  
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#092c3f]/80 z-10"></div>
        <Image
          src="https://img.freepik.com/premium-photo/startup-manager-showing-analytics-plan-digital-tablet-presenting-business-statistics-before-working-profit-development-team-people-examining-annual-data-reports-research-office_482257-64753.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
          alt="Data analytics team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container max-w-5xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-block px-6 py-2 mb-8 rounded-full border border-[#eb566c] text-[#eb566c] text-sm font-medium">
              ABOUT Data Safi ANALYSTS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Solve All Your Data
              <br />
              <span className="text-white">Problems With Data Safi</span>
            </h1>
            <div className="flex items-start justify-between mt-8">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full border border-white/30 flex items-center justify-center cursor-pointer">
                  <div className="absolute inset-0 rounded-full border border-[#e8ff8d] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-2 h-2 rounded-full bg-[#e8ff8d] absolute left-1/2 top-0 transform -translate-x-1/2"></div>
                  <div className="text-center">
                    <span className="text-white text-sm">Explore Our</span>
                    <br />
                    <span className="text-white text-sm">Service</span>
                    <ArrowRight className="h-4 w-4 text-white mt-1 mx-auto" />
                  </div>
                </div>
              </div>

              <p className="text-white/80 max-w-md text-sm">
                Data Safi Analysts is a data consultancy firm focused on
                helping businesses harness the full value of their data.
              </p>

              <div className="w-16 h-16 rounded-full bg-[#eb566c] flex items-center justify-center cursor-pointer hover:bg-[#eb566c]/90 transition-colors">
                {/* <Play className="h-6 w-6 text-white" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 md:py-20 bg-white mx-auto max-w-5xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="https://img.freepik.com/free-photo/diverse-business-employees-group-celebrate-successful-outcome_482257-89675.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                alt="Our team working"
                width={600}
                height={400}
                className="shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#092c3f]/10 text-[#092c3f] text-xs font-medium">
                🌍 WHO WE ARE
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#092c3f] mb-6">
                Our Story
              </h2>
              <p className="text-base text-gray-700 mb-6">
                Data Safi Analysts began with a mission: to make data
                accessible, powerful, and profitable for African businesses. We
                believe clarity is everything—and we design with that in mind.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="h-1 w-12 bg-[#eb566c]"></div>
                <span className="text-[#092c3f] font-medium">
                  Founded in 2018
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 md:py-16 bg-white mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-12 bg-[#eb566c]"></div>
                  <span className="text-[#092c3f] text-sm font-medium uppercase pb-1">
                    ABOUT COMPANY
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#092c3f] mt-4">
                  We Are The Best
                  <br />
                  Solution For Your Data
                  <br />
                  Analytics Needs
                </h2>
              </div>

              <div className="bg-[#fdf8f3] p-6 rounded-lg flex items-start gap-4">
                <div className="flex-shrink-0">
                  {/* <Image
                    src="/edwin.png"
                    alt="Ngesh Clinto"
                    width={80}
                    height={80}
                    className="rounded-full"
                  /> */}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#092c3f]">
                    Ngesh Clinto,{" "}
                    <span className="font-normal">Founder</span>
                  </h3>
                  <p className="text-gray-600 text-base mt-2">
                    With over 7 years of experience in data science and
                    analytics, Clinto founded Data Safi to bridge the gap between
                    complex data and actionable business insights.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden group h-1/4">
                <Image
                  src="https://img.freepik.com/premium-photo/portrait-smiling-business-colleagues-working-office_1048944-18952035.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                  alt="Team members collaborating"
                  width={500}
                  height={64}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#092c3f] to-transparent p-4">
                  <Link
                    href="/team"
                    className="text-white font-medium flex items-center gap-2 hover:text-[#e8ff8d] transition-colors"
                  >
                    Discover More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="overflow-hidden">
                <Image
                  src="https://img.freepik.com/premium-photo/side-view-young-woman-using-laptop-table_1048944-10213732.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                  alt="Team working together"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="space-y-4 text-base">
                <p className="text-gray-700 text-base">
                  Our team of data specialists combines technical expertise with
                  business acumen to deliver insights that drive real results.
                  We work closely with each client to understand their unique
                  challenges and opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">
                      Best Analytics Service
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">
                      Highly Dedicated Team
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">
                      Business Strategy & Growth
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#eb566c]" />
                    <span className="text-[#092c3f] font-medium">
                      98.7% Customer Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision Section */}
      <section className="pt-16 md:pt-0 pb-16 md:-mt-16 lg:-mt-40 max-w-4xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-xl shadow-md border-t-4 border-[#eb566c] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#092c3f] mb-4">
                Mission
              </h3>
              <p className="text-gray-700">
                To increase efficiency in businesses by providing timely,
                reliable intelligence to decision-makers.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="h-12 w-12 rounded-full bg-[#e8ff8d] flex items-center justify-center">
                  {/* <span className="text-[#092c3f] font-bold">01</span> */}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#e8ff8d] hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-[#092c3f] mb-4">Vision</h3>
              <p className="text-gray-700">
                To make data a strategic asset for every client we serve.
              </p>
              <div className="mt-6 flex justify-end">
                <div className="h-12 w-12 rounded-full bg-[#eb566c] flex items-center justify-center">
                  {/* <span className="text-white font-bold">02</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <TeamMembers/> */}
      
      <AboutExperience/>

      <CTASection/>
      {/* Why Pellets Section */}
      <WhyPellets/>
      
    </main>
  );
}