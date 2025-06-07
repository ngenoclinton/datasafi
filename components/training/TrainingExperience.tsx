import Link from "next/link"
import Image from "next/image"
import { Play, Facebook, Dribbble, MessageSquare } from "lucide-react"

export default function TrainingExperience() {
  return (
    <section className="relative w-full bg-[#e8f0f5] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#d8e6f0] to-[#e8f0f5] z-0"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 max-w-2xl">
            <div className="inline-block">
              <p className="text-[#eb566c] font-medium tracking-wide uppercase text-sm border-b border-[#eb566c] pb-1">
                TRAINING EXPERIENCE
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092c3f] leading-tight">
              Helping You Put Systems
              <br />
              in Place that Work
            </h1>

            <p className="text-gray-600 max-w-xl">
              We offer practical, hands-on training programs designed to equip professionals with the skills they need
              to thrive in today's data-centric world. Our expert-led sessions focus on real-world applications and
              immediate implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#training-categories"
                className="inline-block px-8 py-3 bg-[#eb566c] text-white font-medium rounded hover:bg-[#eb566c]/90 transition-colors"
              >
                Book a Session
              </Link>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-[#092c3f] flex items-center justify-center cursor-pointer hover:bg-[#092c3f]/90 transition-colors">
                  {/* <Play className="w-5 h-5 text-white ml-0.5" /> */}
                </div>
                {/* <span className="text-[#092c3f] text-sm font-medium">Watch our approach</span> */}
              </div>
            </div>
          </div>

          {/* Right column - Images with connecting lines */}
          <div className="relative hidden lg:block h-[400px]">
            {/* Top image */}
            <div className="absolute top-0 right-0 w-64 h-48 md:w-80 md:h-60 rounded-lg overflow-hidden shadow-xl ">
              <Image
                src="https://img.freepik.com/premium-photo/african-american-man-doing-financial-presentation-with-charts-talking-about-business-growth-colleagues-startup-office-employee-explaining-data-analysis-project-planning_482257-38829.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                alt="Data training session"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            {/* Bottom image */}
            <div className="absolute bottom-0 left-0 z-10 w-64 h-48 md:w-80 md:h-60 rounded-lg overflow-hidden ">
              <Image
                src="https://img.freepik.com/free-photo/corporate-business-people-meeting-boardroom-african-manager-brainstorming-with-colleagues-discussing-strategy-sharing-problem-solving-ideas-collaborating-conference-room-company_482257-13747.jpg?ga=GA1.1.1546325054.1744712213&semt=ais_hybrid&w=740"
                alt="Data analysis meeting"
                fill
                className="object-cover"
              />
            </div> 
            {/* Decorative dotted lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100,200 Q150,100 250,150"
                stroke="#092c3f"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.5"
              />
              <path
                d="M250,150 Q300,200 200,300"
                stroke="#092c3f"
                strokeWidth="1"
                strokeDasharray="5,5"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat item 1 */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#092c3f"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="42"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#092c3f] font-bold text-xl">
                  85%
                </div>
              </div>
              <p className="text-gray-700 text-center font-medium">Data Analytics Training</p>
            </div>

            {/* Stat item 2 */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#092c3f"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="14"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#092c3f] font-bold text-xl">
                  95%
                </div>
              </div>
              <p className="text-gray-700 text-center font-medium">Business Intelligence</p>
            </div>

            {/* Stat item 3 */}
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 mb-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#092c3f"
                    strokeWidth="8"
                    strokeDasharray="283"
                    strokeDashoffset="71"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#092c3f] font-bold text-xl">
                  75%
                </div>
              </div>
              <p className="text-gray-700 text-center font-medium">Data Visualization</p>
            </div>
          </div>
        </div>

        {/* Footer with social links and established date */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-gray-300">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#" className="text-[#092c3f] hover:text-[#eb566c] transition-colors">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-[#092c3f] hover:text-[#eb566c] transition-colors">
              <Dribbble className="w-5 h-5" />
              <span className="sr-only">Dribbble</span>
            </Link>
            <Link href="#" className="text-[#092c3f] hover:text-[#eb566c] transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="sr-only">Telegram</span>
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#092c3f] text-2xl font-light">SINCE 2018</p>
            <Link href="/contact" className="text-[#eb566c] text-sm hover:underline">
              Contact With Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
