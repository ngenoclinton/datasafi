import type React from "react"
import {
  Database,
  Shield,
  DollarSign,
  Zap,
  HardHat,
  HeartPulse,
  BarChart3,
  Users,
  MessageSquare,
  Leaf,
} from "lucide-react"

interface TrainingCategory {
  icon: React.ReactNode
  title: string
  description: string
}

export default function TrainingCategories() {
  const categories: TrainingCategory[] = [
    {
      icon: <Database className="w-8 h-8 text-[#eb566c]" />,
      title: "Business Intelligence",
      description: "Power BI, Excel, data modeling, dashboards",
    },
    {
      icon: <Shield className="w-8 h-8 text-[#eb566c]" />,
      title: "Information Security",
      description: "Cybersecurity essentials, risk management",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#eb566c]" />,
      title: "Financial Management",
      description: "Data-informed budgeting, cost control",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#eb566c]" />,
      title: "Energy Sector",
      description: "Data use in energy auditing and efficiency",
    },
    {
      icon: <HardHat className="w-8 h-8 text-[#eb566c]" />,
      title: "Safety & Risk Training",
      description: "Occupational Safety & Health (OSHA)",
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-[#eb566c]" />,
      title: "First Aid & Fire Safety",
      description: "Disaster Preparedness",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#eb566c]" />,
      title: "Strategic & Soft Skills",
      description: "Gender Mainstreaming",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#eb566c]" />,
      title: "Communication",
      description: "Communication & Relationship Management",
    },
    {
      icon: <Users className="w-8 h-8 text-[#eb566c]" />,
      title: "Customer Experience",
      description: "Data-driven customer insights",
    },
    {
      icon: <Leaf className="w-8 h-8 text-[#eb566c]" />,
      title: "Environmental Impact",
      description: "Environmental Impact Assessment",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center"
        >
          <div className="mb-4">{category.icon}</div>
          <h3 className="text-lg font-semibold text-[#092c3f] mb-2">{category.title}</h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </div>
      ))}
    </div>
  )
}
