import type React from "react"
import { Building, Video, Award } from "lucide-react"

interface DeliveryOption {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export default function DeliveryOptions() {
  const options: DeliveryOption[] = [
    {
      icon: <Building className="w-12 h-12 text-[#eb566c]" />,
      title: "Onsite Training",
      description: "Hands-on training delivered at your location",
      features: [
        "Customized to your environment",
        "Interactive workshops",
        "Team-building opportunities",
        "Immediate application to your data",
      ],
    },
    {
      icon: <Video className="w-12 h-12 text-[#eb566c]" />,
      title: "Virtual Training",
      description: "Live online sessions with expert instructors",
      features: ["Flexible scheduling", "Reduced travel costs", "Recorded sessions for review", "Global accessibility"],
    },
    {
      icon: <Award className="w-12 h-12 text-[#eb566c]" />,
      title: "Certified Programs",
      description: "Industry-recognized certification courses",
      features: [
        "Validated competencies",
        "Career advancement",
        "Standardized curriculum",
        "Assessment-based learning",
      ],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {options.map((option, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
        >
          <div className="flex flex-col items-center text-center mb-6">
            <div className="mb-4">{option.icon}</div>
            <h3 className="text-xl font-bold text-[#092c3f] mb-2">{option.title}</h3>
            <p className="text-gray-600">{option.description}</p>
          </div>

          <ul className="space-y-2">
            {option.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-[#eb566c] mr-2">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
