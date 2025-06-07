import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  image: string
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The data visualization training transformed how our team presents insights to stakeholders. We've seen immediate improvements in how our reports are received and acted upon.",
      name: "Sarah Johnson",
      title: "Data Analytics Manager",
      company: "Global Tech Solutions",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Data Safi' Business Intelligence workshop gave our team the skills to build dashboards that actually drive decisions. The hands-on approach made complex concepts accessible.",
      name: "Michael Chen",
      title: "BI Director",
      company: "Innovate Financial",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The predictive analytics training helped us implement forecasting models that have improved our inventory management by 23%. Highly recommended for any data team.",
      name: "Priya Patel",
      title: "Supply Chain Analyst",
      company: "Retail Dynamics",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
          <div className="mb-4">
            <svg className="w-8 h-8 text-[#e8ff8d]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-gray-200 mb-6 italic">{testimonial.quote}</p>

          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="text-white font-medium">{testimonial.name}</h4>
              <p className="text-gray-300 text-sm">
                {testimonial.title}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
