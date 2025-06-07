import Link from "next/link"

interface TrainingEvent {
  id: string
  title: string
  date: string
  duration: string
  format: "Virtual" | "Onsite" | "Hybrid"
  level: "Beginner" | "Intermediate" | "Advanced"
  spots: number
}

export default function TrainingCalendar() {
  const upcomingEvents: TrainingEvent[] = [
    {
      id: "bi-101",
      title: "Power BI Fundamentals",
      date: "June 15-16, 2025",
      duration: "2 days",
      format: "Virtual",
      level: "Beginner",
      spots: 12,
    },
    {
      id: "da-202",
      title: "Advanced Data Analysis with Python",
      date: "June 22-24, 2025",
      duration: "3 days",
      format: "Hybrid",
      level: "Intermediate",
      spots: 8,
    },
    {
      id: "viz-301",
      title: "Data Visualization Masterclass",
      date: "July 5-6, 2025",
      duration: "2 days",
      format: "Onsite",
      level: "Advanced",
      spots: 15,
    },
    {
      id: "ml-202",
      title: "Predictive Analytics Essentials",
      date: "July 12-14, 2025",
      duration: "3 days",
      format: "Virtual",
      level: "Intermediate",
      spots: 20,
    },
    {
      id: "sec-101",
      title: "Data Security Fundamentals",
      date: "July 19, 2025",
      duration: "1 day",
      format: "Virtual",
      level: "Beginner",
      spots: 25,
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden">
        <thead className="bg-[#092c3f] text-white">
          <tr>
            <th className="py-3 px-4 text-left">Training Program</th>
            <th className="py-3 px-4 text-left">Date</th>
            <th className="py-3 px-4 text-left">Duration</th>
            <th className="py-3 px-4 text-left">Format</th>
            <th className="py-3 px-4 text-left">Level</th>
            <th className="py-3 px-4 text-left">Available Spots</th>
            <th className="py-3 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {upcomingEvents.map((event) => (
            <tr key={event.id} className="hover:bg-gray-50">
              <td className="py-4 px-4">{event.title}</td>
              <td className="py-4 px-4">{event.date}</td>
              <td className="py-4 px-4">{event.duration}</td>
              <td className="py-4 px-4">{event.duration}</td>
              <td className="py-4 px-4">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    event.format === "Virtual"
                      ? "bg-blue-100 text-blue-800"
                      : event.format === "Onsite"
                        ? "bg-green-100 text-green-800"
                        : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {event.format}
                </span>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    event.level === "Beginner"
                      ? "bg-gray-100 text-gray-800"
                      : event.level === "Intermediate"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {event.level}
                </span>
              </td>
              <td className="py-4 px-4">{event.spots}</td>
              <td className="py-4 px-4">
                <Link
                  href={`/training/register/${event.id}`}
                  className="inline-block px-3 py-1 bg-[#eb566c] text-white text-sm rounded hover:bg-[#eb566c]/90 transition-colors"
                >
                  Register
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 text-center">
        <Link
          href="/training/calendar"
          className="inline-block px-6 py-2 border border-[#092c3f] text-[#092c3f] font-medium rounded hover:bg-[#092c3f] hover:text-white transition-colors"
        >
          View Full Calendar
        </Link>
      </div>
    </div>
  )
}
