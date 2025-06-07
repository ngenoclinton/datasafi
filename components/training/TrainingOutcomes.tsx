import { CheckCircle, Award, TrendingUp } from "lucide-react"

export default function TrainingOutcomes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
        <CheckCircle className="w-12 h-12 text-[#eb566c] mb-4" />
        <h3 className="text-xl font-bold text-[#092c3f] mb-4">Practical Skills</h3>
        <ul className="space-y-2 text-left w-full">
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Data collection and cleaning techniques</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Advanced analytics methodologies</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Data visualization best practices</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Predictive modeling techniques</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Real-time data processing</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
        <Award className="w-12 h-12 text-[#eb566c] mb-4" />
        <h3 className="text-xl font-bold text-[#092c3f] mb-4">Certifications</h3>
        <ul className="space-y-2 text-left w-full">
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Microsoft Power BI Certification</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Data Analytics Professional</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Tableau Desktop Specialist</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Google Data Analytics Certificate</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">AWS Data Analytics Specialty</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center">
        <TrendingUp className="w-12 h-12 text-[#eb566c] mb-4" />
        <h3 className="text-xl font-bold text-[#092c3f] mb-4">Business Impact</h3>
        <ul className="space-y-2 text-left w-full">
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Improved decision-making processes</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Enhanced operational efficiency</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Data-driven strategy development</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">Competitive market advantage</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#eb566c] mr-2">•</span>
            <span className="text-gray-700">ROI on data investments</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
